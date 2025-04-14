import {BrowserRouter} from 'react-router-dom'
import { getTags } from '../../services/TasksServices'
import {  useEffect } from 'react'

function App() {
    useEffect(() => {
        getTags()
    })
    return (
        <BrowserRouter>
        <div>
           <div>
            <h1>Tags</h1>
           </div>
        </div>
        </BrowserRouter>
    )
}

export default App