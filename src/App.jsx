import {Routes,Route} from 'react-router-dom'
import Root from './routes/Root'
import Notfoundpage from './routes/Notfoundpage'
import Repos from './routes/Repos/Repos'
import Repo from './routes/Repo'
import { useState } from 'react'

const App = () => {
  const [repo,setRepo] = useState(null);
  return (
    <div className='bg-slate-100'>
      <Routes>
        <Route path='/' element={<Root/>}>
            <Route path='/' element={<Repos setRepo={setRepo}/>}/>
            <Route path='/repos' element={<Repos setRepo={setRepo}/>}/>
            <Route path='/repo/:reponame' element={<Repo repo={repo} setRepo={setRepo}/>}/>
            <Route path='/users' element={<h1>Users</h1>}/>
            <Route path='/user/:username' element={<h1>User</h1>}/>
          </Route>
        <Route path='*' element={<Notfoundpage/>}/>
      </Routes>
    </div>
  )
}

export default App