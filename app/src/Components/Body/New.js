import React,{useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
function New() {

  let [data,setData] = useState([]);

  let userData=[];

  const getData = async()=>{
    let res=await axios.get("http://localhost:4000/updates");

    userData=res.data;
    console.log(userData);
    setData(userData);
  }
  useEffect(()=>{
    getData();
  },[]);

  console.log(data);

const reverseData =[];
var k =0;
 for(var i=data.length-1;i>=0;i--){
      reverseData[k++]=data[i]
 }
  console.log(reverseData)


  return (
    <div >
      <h1 className='text-center text-warning'>New Updates</h1>
    <div>
    
    {
        reverseData.map((ele)=><p  className='bg-info text-dark'>{ele.text}</p>)

    }
    <br/>
  </div>
  </div>
  )
}

export default New