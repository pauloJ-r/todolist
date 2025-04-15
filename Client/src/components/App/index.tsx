import {BrowserRouter} from 'react-router-dom'
import Routes from '../Routes'
import style from './styles.module.css'
import { Header } from '../Layout'

function App() {
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