import {BrowserRouter} from 'react-router-dom'
import { getTags } from '../../services/TasksServices'
import {  useEffect } from 'react'
import Routes from '../Routes'
import style from './styles.module.css'
import { Header } from '../Layout'

function App() {
    useEffect(() => {
        getTags()
    })
    return (
        <BrowserRouter>
        <div className={style.wrapper}>
            <Header />
            <Routes />
        </div>
        </BrowserRouter>
    )
}

export default App