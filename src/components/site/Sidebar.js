import {
    Route,
    Link,
    Routes
} from 'react-router-dom';
import Home from './Home';
import Simple from '../pages/Simple';
import Dark from '../pages/Dark';
import Fun from '../pages/Fun';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/simple'>Simple</Link></li>
                    <li><Link to='/dark'>Dark</Link></li>
                    <li><Link to='/fun'>Fun</Link></li>
                </ul>
            </div> 
            <div className='sidebar-route'>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/simple' element={<Simple/>}/>
                    <Route exact path='/dark' element={<Dark/>} />
                    <Route exact path='/fun' element={<Fun/>} />
                </Routes>
            </div>   
        </div>
    );
};

export default SideBar;