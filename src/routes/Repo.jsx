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
    <div className="flex-1 h-screen bg-slate-100 flex flex-col items-center justify-center  px-2">
      {isLoading ? "Loading" :
        <div className=" flex flex-col bg-white border border-zinc-300 shadow items-center justify-center rounded">
          <div className="p-4">
            <img src={temp.owner.avatar_url} height={200} width={200} className="rounded "/>
          </div>
          <div className="p-3">
            <table className="text-sm md:text-lg" cellPadding={5}>
            <tbody className="text-left text-zinc-800">
                <tr>
                  <th>Repository Name</th>
                  <td>{temp.name}</td>
                </tr>
                <tr>
                  <th>Owner Name</th>
                  <td>{temp.owner.login}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{temp.description}</td>
                </tr>
                <tr>
                  <th>Repository</th>
                  <td>
                    <a href={temp.html_url} rel="noreferrer" target="_blank">
                    {temp.html_url}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Github Link</th>
                  <td>
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