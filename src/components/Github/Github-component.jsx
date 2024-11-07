import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GithubComponent(){
    const [Data,setData] = useState([])
  let num = 1;
    const {username} = useParams();
    useEffect(()=> {
        fetch(`https://api.github.com/users/${username}`).then((res )=> res.json()).then((res) => {
setData(res);
num++;
console.log("Number of Api Call :" ,num)
        })
    },[])
    return (
        <>
        <div className="bg-red-600 text-white w-96  flex flex-row justify-center text-3xl items-centers text-center">
        <div  className="w-32 h-36 bg-fixed bg-no-repeat">
            <img style={{alignContent:"center"}} src={Data.avatar_url} alt="" />
</div>
           <div>
           <h1>User Name : {Data.name}</h1>
            <br />
            <h1> User Followers : {Data.followers}</h1>
           </div>
        </div>
       
        </>
        
    );
}

// export default function GithubInfo({username}){
//     fetch(`https://api.github.com/users/${username}`).then((res )=> {
//        return res.json()})
    
// }