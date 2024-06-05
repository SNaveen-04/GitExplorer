import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const links = "m-2 md:my-0 p-1 md:py-0 text-md"

  const [isOpen,setIsOpen] = useState(false);
  const [top,setTop] = useState('max-md:-top-full');

  useEffect(()=>{
    setTop(()=>{
      return isOpen?`max-md:top-14`:`max-md:-top-full`
    })
  },[isOpen])

  const handleOnClick = () =>{
    setIsOpen( prev => !prev);
  }
  return (
    <nav className="flex items-center justify-between h-14 bg-slate-100 text-zinc-800 font-roboto">
      <div className="flex items-center justify-between max-md:w-full p-6">
        <Link to='/' className="text-xl p-2">Git-Explorer</Link>
        <span className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={17}/>
        </span>
      </div>
      <ul onClick={handleOnClick} className={`max-md:absolute max-md:w-full ${top} bg-slate-100 flex flex-col md:flex-row items-center justify-center p-4`}>
        <Link to='/repos'>
          <li className={links}>Repos</li>
        </Link>
        <Link to='/users'>
          <li className={links}>Users</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar