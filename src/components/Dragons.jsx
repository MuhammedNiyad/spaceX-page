import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Dragons = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.spacexdata.com/v3/dragons");
      setDatas(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div id='dragons' className='w-full p-16'>
      <h1 className='text-white text-center text-5xl font-semibold'>Dragons</h1>
      <div className='mt-6 flex sm:justify-center justify-center flex-wrap gap-4'>
        {datas.map((data, index) => (
          <div key={data.id} className='w-auto bg-slate-400 p-4 flex flex-col'>
            <img src={data.flickr_images[1]
            } alt={data.flickr_images[0]} className='md:w-[500px] md:h-[500px]' />
            <ul className="list-none">
              <li className="text-xl font-[500]">Name: {data.name}</li>
              <li><span className='font-[500]'>First flight:</span> {data.first_flight}</li>
              <li><span className='font-[500]'>Active:</span> {data.active === true ? "active" : "not active"}</li>
              <li className='max-w-[300px]'><span className='font-[500]'>Discription:</span>  {data.description
              }</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dragons