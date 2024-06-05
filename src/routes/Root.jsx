import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
const Root = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root