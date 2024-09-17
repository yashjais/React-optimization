const Ticket = ({ ticket }) => {
  console.log('rendering ticket');
  return (
    <div>
      {
        <p key={ticket.id}>{ticket.name}</p>
      }
    </div>
  )
};

export default Ticket;