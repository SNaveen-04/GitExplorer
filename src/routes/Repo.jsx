/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";


const Repo = ({repo,setRepo}) => {
  const navigate = useNavigate();
  const [temp,setTemp] = useState({});
  const [isLoading,setisLoading] = useState(true);
  
  useEffect(()=>{
    if(repo == null){
      navigate('/')
    }else{
      setTemp(repo)
      setRepo(null)
      setisLoading(false)
    }
  },[])
  return (
    <div className="flex-1 bg-slate-100 flex flex-col items-center justify-center px-2">
      {isLoading ? "Loading" :
        <div className=" flex flex-col bg-white border border-zinc-300 shadow items-center justify-center  rounded max-w-full">
          <div className="p-4">
            <img src={temp.owner.avatar_url} height={200} width={200} className="rounded "/>
          </div>
          <div className="p-3">
            <table className="text-xs md:text-lg" cellPadding={5}>
            <tbody className="text-zinc-800">
                <tr>
                  <th className="text-right">Repository Name</th>
                  <td className="text-left break-all">{temp.name}</td>
                </tr>
                <tr>
                  <th className="text-right">Owner Name</th>
                  <td className="text-left break-all">{temp.owner.login}</td>
                </tr>
                <tr>
                  <th className="text-right">Description</th>
                  <td className="text-left break-all">{temp.description}</td>
                </tr>
                <tr>
                  <th className="text-right">Repository</th>
                  <td className="text-left break-all">
                    <a href={temp.html_url} rel="noreferrer" target="_blank">
                    {temp.html_url}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-right">Github Link</th>
                  <td className="text-left">
                    <a href={temp.owner.html_url} rel="noreferrer" target="_blank">{temp.owner.html_url}</a>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Link className="text-blue-400">Click here</Link> to know more about {temp.owner.login}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  )
}

export default Repo