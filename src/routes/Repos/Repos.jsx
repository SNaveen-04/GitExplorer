/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import axios from "axios"
import { useEffect,useState } from "react"
import Repocard from "./Repocard";

const Repos = ({setRepo}) => {
    const [repos,setRepos] = useState([])
    const [loading,setLoading] = useState(true)

    const getRepos = () =>{
        axios.get('https://api.github.com/repositories')
        .then(res => {
            setRepos(res.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        setLoading(true)
        getRepos();
        setLoading(false)
    },[])
  return (
    <>
        {
            loading ? <div className="bg-slate-100 flex justify-center items-center flex-1">
                Loading...

            </div>:
            <div className="bg-slate-100">
                <div className="grid grid-cols-1 lm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-stretch gap-2">
                    {repos.map((repo,index)=>{
                        return <Repocard repo={repo} setRepo={setRepo} key={index}/>
                    })}
                </div>
            </div>
        }
    </>
  )
}

export default Repos