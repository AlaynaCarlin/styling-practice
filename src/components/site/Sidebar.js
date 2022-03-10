import {
    Route,
    Link,
    Routes
} from 'react-router-dom';
import Home from './Home';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/home'>Home</Link></li>
                    {/* <li><Link to='/page1'>page1</Link></li>
                    <li><Link to='/page2'>page2</Link></li> */}
                </ul>
            </div> 
            <div className='sidebar-route'>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    {/* <Route exact path='/'><Home /></Route> */}
                </Routes>
            </div>   
        </div>
    );
};

export default SideBar;