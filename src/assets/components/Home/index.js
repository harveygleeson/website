import { Link } from 'react-router-dom';
import LogoTitle from '../../images/H.png';
import './index.scss';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br />I'm 
                <img src={LogoTitle} alt='developer' />
                arvey,
                <br />
                web developer.
                </h1>
                <h2>Programmer / CS Masters Student</h2>
                <Link to='/contact' className='flat-button'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Home