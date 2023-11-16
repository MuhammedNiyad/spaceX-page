import axios from "axios";
import { useEffect, useState } from "react";


const Cores = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.spacexdata.com/v3/cores");
      setDatas(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div id='cores' className='w-full p-16'>
      <h1 className='text-white text-center text-5xl font-semibold'>Cores</h1>
      <div className='mt-6 flex sm:justify-start justify-center flex-wrap gap-4'>
        {datas.map((data, index) => (
          <div key={index} className='w-[200px] h-[260px] bg-slate-400 p-4'>
            <ul className="list-none">
              <li className="text-xl font-[500]">Name: {data.missions[0].name}</li>
              <li>Serial: {data.core_serial} </li>
              <li>Details: {data.details === null ? 'No information' : data.details}</li>
              <li>Reuse count: {data.reuse_count}</li>
              <li>Status: {data.status}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cores