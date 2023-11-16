
const Card = ({ name, serial, details, landing, status}) => {
  return (
    <div className='w-[200px] h-[260px] bg-slate-400 p-4'>
        <ul className="list-none">
           <li className="text-xl font-[500]">Name: {name}</li>
           <li>Serial: {serial}</li>
           <li>Details: {details}</li>
           <li>landings: {landing}</li>
           <li>Status: {status}</li>
        </ul>
    </div>
  )
}

export default Card