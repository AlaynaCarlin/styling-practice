import {
    Route,
    Link,
    Routes
} from 'react-router-dom';
import Home from './Home';
import Simple from '../pages/Simple';
import Dark from '../pages/Dark';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/simple'>Simple</Link></li>
                    <li><Link to='/dark'>Dark</Link></li>
                    <li><Link to='/dark'>Dark</Link></li>
                    <li><Link to='/dark'>Dark</Link></li>
                    <li><Link to='/dark'>Dark</Link></li>
                    <li><Link to='/dark'>Dark</Link></li>
                </ul>
            </div> 
            <div className='sidebar-route'>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/simple' element={<Simple/>}/>
                    <Route exact path='/dark' element={<Dark/>} />
                </Routes>
            </div>   
        </div>
    );
};

export default SideBar;