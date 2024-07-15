import { useState, useEffect } from "react";
const UseFetch = (url) => {
  //Declare a state variable 'data' and a function 'setData' to update it
  const[data,setData]=useState();
  // Use the useEffect hook to perform a side effect (fetch data)
  useEffect(()=>{
    fetch(url).then((res)=>res.json())
    .then((data)=>setData(data))
},[])
return [data]   
};

export default UseFetch;
