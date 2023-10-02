import Google from "../images/Google.png";
import Facebook from "../images/Facebook.png";
import Logo from "../assets/Logo.png";
import Or from "../images/Or.png";

const Signup = () => {
  return (
    <div className="px-28 py-20">
      <div className='flex items-center gap-2'>
        <img src={Logo} alt="Logo" />
        <span className='font-inter text-primary-600 font-bold'>HelpMeOut</span>
      </div>

      <div className="w-[475px] mt-12 flex flex-col justify-center gap-8 mx-auto font-inter">
        <div className="flex flex-col text-center gap-2 max-w-[321px] mx-auto">
          <h1 className="text-4xl font-bold text-section">Log in or Sign up</h1>
          <p className="text-[#434343] text-sm font-sen">Join millions of others in sharing successful moves on HelpMeOut.</p>
        </div>
        <div className="w-full">
          <div className="border border-section rounded-xl py-2 w-full">
            <button className="flex items-center mx-auto font-medium text-base">
              <span><img className="mr-4" src={Google} alt="" /></span>
              Continue with Google
            </button>
          </div>
          <div className="border border-section rounded-xl mt-6 py-2 w-full">
            <button className="flex items-center mx-auto font-medium text-base">
              <span><img className="mr-4" src={Facebook} alt="" /></span>
              Continue with Facebook
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <img src={Or} alt="" />
        </div>
        <div className="font-work-sans">
          <div className="font-bold">
            <label className="text-sm block">Email</label>
            <input className="p-3 border border-[#B6B3C6] rounded-xl w-full" type="email" name="email" placeholder="Enter your email address"/>
          </div>
          <div className="font-bold mt-4">
            <label className="text-sm block">Password</label>
            <input className="p-3 border border-[#B6B3C6] rounded-xl w-full" type="password" name="password" placeholder="Enter your Password"/>
          </div>
        </div>
        <button className="p-4 bg-primary-500 text-white rounded-xl">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
