import { useEffect } from "react"
import axios from "axios";

const Repos = () =>{
    useEffect(()=>{
        axios.get('https://api.github.com/repositories')
        .then(res => console.log(res.data))
    },[])
    return (<div>
        Repos
    </div>)
}

export default Repos