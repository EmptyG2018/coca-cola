import React, { useEffect } from "react";
import { useRequest } from "ahooks";
import { getArticles } from "../../services/article";

const Demo: React.FC = () => {

  // let { data } = useRequest(getArticles, {
    
  // });
  
  // const records = data?.data.records.toString();

  console.log('res');

  // const handleChange = () => {
  //   console.log('data', data);
  //   if (data){
  //     data.data.records = [];
  //   }
  // }

  return (
    <div>
      <button>111</button>
      {/* <button onClick={handleChange}>{records}</button> */}
    </div>
  )
}

export default Demo;