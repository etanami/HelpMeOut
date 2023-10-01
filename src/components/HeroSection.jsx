import ArrowR from '../assets/arrow-right.png';
import Hero1 from "../images/hero-1.png";
import Hero2 from "../images/hero-2.png";
import Hero3 from "../images/hero-3.png";


const HeroSection = () => {
  return (
    <div className="grid grid-cols-7 gap-8 items-center h-screen px-[100px] bg-white">
        <div className="col-span-3 flex flex-col gap-12">
          <div>
            <h1 className="font-sora text-6xl font-bold text-section max-w-md">Show Them Don’t Just Tell</h1>
            <p className="mt-5 font-inter text-xl">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
          </div>
          <button className="flex items-center justify-center gap-3 text-white bg-primary-500 p-6 rounded-lg max-w-[240px]">
            <span>Install HelpMeOut</span>
            <img src={ArrowR} alt="right arrow" />
          </button>
        </div>

        <div className=" col-span-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img className="w-full rounded-lg" src={Hero1} alt="woman with laptop" />
            <img className="w-full rounded-lg" src={Hero2} alt="father and son with laptop" />
          </div>
          <img className="w-full rounded-lg" src={Hero3} alt="woman with phone" />
        </div>
      </div>
  )
}

export default HeroSection;