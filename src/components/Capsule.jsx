import Card from './Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Capsule = () => {
        const [datas, setDatas] = useState([]);

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try{
                const response = await axios.get("https://api.spacexdata.com/v3/capsules");
                setDatas(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        
    return (

        <div id='capsule' className='w-full p-16'>
            <h1 className='text-white text-center text-5xl font-semibold'>Capsule</h1>
            <div className='mt-6 flex sm:justify-start justify-center flex-wrap gap-4'>
                {datas.map((data) => (
                    <Card key={data.capsule_serial} name={data.type} serial={data.capsule_serial} details={data.details} landing={data.landings} status={data.status} />
                ))}
            </div>
        </div>
    )
}

export default Capsule
