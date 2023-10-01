import Logo from '../images/Logo-white.png';

const Footer = () => {
  return (
    <div className="px-32 py-24 text-white bg-primary-500 flex justify-between">
      <div className='flex items-center gap-2'>
          <img src={Logo} alt="Logo" />
          <span className='font-inter font-bold'>HelpMeOut</span>
      </div>
      <ul className='font-work-sans text-base flex flex-col gap-5'>
          <li className='font-sora font-bold'>Menu</li>
          <li>Home</li>
          <li>Converter</li>
          <li>How it Works</li>
        </ul>
        <ul className='font-work-sans text-base flex flex-col gap-5'>
          <li className='font-sora font-bold'>About us</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className='font-work-sans text-base flex flex-col gap-5'>
          <li className='font-sora font-bold'>Screen Record</li>
          <li>Browser Window</li>
          <li>Desktop</li>
          <li>Application</li>
        </ul>
    </div>
  )
}

export default Footer;