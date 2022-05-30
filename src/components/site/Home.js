import {Link} from 'react-router-dom';
import SideBar from './Sidebar';
// import {
//     BrowserRouter as Router 
//   } from 'react-router-dom';

const Home = () => {

    return (
        <div className='main'>
            <div className='mainDiv' >
                <h1>Welcome to my Styling Practice page!</h1>
                <p>Simply put, this app is a place for me to store my styling ideas, practice styling with different themes, play with different layouts, etc.
                    This app will utilize the <Link to='https://api.nasa.gov/'>Nasa Api</Link> and <Link to='https://developers.giphy.com/'>GIPHY Api</Link> to pull data to style.
                </p>
            </div>
        </div>
    )

}

export default Home;


