import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-3 px-24 text-base bg-white">
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="Logo" />
          <span className='font-inter text-primary-600 font-bold'>HelpMeOut</span>
        </div>
        <div className='flex items-center gap-10 px-5 font-sans font-medium text-black'>
          <p>Features</p>
          <p>How It Works</p>
        </div>
        <div className='font-semibold text-lg text-primary-500 font-sora'>
          <Link to={`/get-started`}><p>Get Started</p></Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar;