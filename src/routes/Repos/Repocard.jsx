import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Repo = ({repo,setRepo}) => {
  const navigate = useNavigate();
  const handleClick = () =>{
    setRepo(repo);
    navigate(`/repo/${repo.name}`)

  }
  return (
    <div className="w-fit h-fit bg-white border border-zinc-300 font-roboto px-1 hover:shadow-xl shadow-zinc-500 rounded">
        <div className="h-fit w-fit m-2">
            <img src={repo.owner.avatar_url} height={160} width={160} className="rounded"/>
        </div>    
        <div className="m-2">
            <h1 className="w-40 text-zinc-900 font-semibold">{repo.name}
            </h1>
            <h4 className="w-fit py-px text-zinc-700 font-normal">{repo.private ? 'private' : 'public'}</h4>
            <button onClick={handleClick}  className="text-xs cursor-pointer hover:shadow px-1 py-px bg-slate-400 rounded text-white">
                visit here
            </button>
        </div>
    </div>
  )
}

export default Repo