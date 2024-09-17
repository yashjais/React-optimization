import { memo } from "react";

import Ticket from "./Ticket";

const Column = memo(({ column, handlefn }) => {
  console.log('rendering column');
  // const [column, setColumn] = useState(cl);

  // const handlefn = () => {
  //   setColumn(prevState => ({
  //     ...prevState,
  //     collapsed: !prevState.collapsed,
  //   }))
  // }

  return (
    <div style={{ border: '2px solid black', flexGrow: 1 }}>
      <div>
        <button onClick={() => handlefn(column.id)}>Toggle</button>
      </div>
      <p>Collapsed - {column.collapsed ? 'Yes' : 'No' }</p>
      <div>
        {
          column.tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))
        }
      </div>
    </div>
  )
});

export default Column;
