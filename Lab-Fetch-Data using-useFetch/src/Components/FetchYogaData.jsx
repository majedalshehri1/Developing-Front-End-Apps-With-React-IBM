// Practice Exercise (With different API)
import UseFetch from './UseFetch';
import './FetchData.css'

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data)
    return(
        <>
        <ul className='list_data_main'>
    {data && data.map(e=>(
        <>
        <li className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits6}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
            </li>
        </>
    ))}
   </ul>
        </>
    )
}
export default FetchYogaData