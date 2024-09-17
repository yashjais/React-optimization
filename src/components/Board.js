import { useState, useCallback } from 'react';

import Column from './Column';

const data = [
  { id: 1, collapsed: true, tickets: [{ id: 11, name: 'ticket 1' }]},
  { id: 2, collapsed: false, tickets: [{ id: 12, name: 'ticket 3'}, { id: 13, name: 'ticket 4' }]},
]

/**
 * 
 * If we want to optimize the following React code,
 * we would have to add memo to the Column Component to not re-render it on every column toggle
 * but the issue is on every render of Board, new reference to handlefn will be created
 * and then the child will render anyway cuz of it.
 * To rectify this, we would wrap handlefn in the useCallback to not create a ref on every board re-render
 * 
 * useCallback to memoize the toggle function
 * useMemo to memoize the array of Column components
 * Careful prop passing to ensure we're not creating new object references unnecessarily
 */

const Board = () => {
  const [columns, setColumns] = useState(data);

  const handlefn = useCallback((id) => {
    console.log('clicked id', id)
    setColumns((prvState) => {
      return prvState.map((column) => {
        if (column.id === id) {
          return {
            ...column,
            collapsed: !column.collapsed,
          }
        }

        return column;
      })
    })
  }, []);

  return (
    <div style={{ width: '500px', height: '500px', background: 'grey', display: 'flex' }}>
      {
        columns.map((column) => (
          <Column key={column.id} column={column} handlefn={handlefn} />
        ))
      }
    </div>
  )
};

export default Board;