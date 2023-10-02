import Facebook from "../images/Facebook.png";
import Whatsapp from "../images/Whatsapp.png";
import Telegram from "../images/Telegram.png";
import Copy from "../images/copy.png";
import Edit from "../images/edit.png";
import PlayVideo from "../images/video-ready.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Video = () => {
  return (
    <div className="pt-4">
      <NavBar />
      <div className="pl-24 pt-16 grid grid-cols-5 gap-20 h-[730px]">
        <div className="col-span-2">
          <h1 className="font-sora text-5xl text-section font-bold">Your video is ready!</h1>
          <div className="mt-10 flex flex-col gap-16">
            <div className="font-sora">
              <label className="text-sm text-[#727272] font-medium mb-2">Name</label>
              <div className="flex items-center gap-3">
                <input className="font-semibold text-2xl" type="text" placeholder="Untitled_Video_20232509 " />
                <span><img src={Edit} alt="" /></span>
              </div>
            </div>
            <div className="flex">
              <input className="bg-gray-100 px-4 w-full rounded-xl" type="text" placeholder="enter email of receiver" />
              <span className="px-4 py-4 bg-[#605C84] text-white rounded-lg">Send</span>
            </div>
            <div>
              <h4 className="font-semibold text-xl font-sora">Video Url</h4>
              <div className="flex">
                <input className="bg-gray-100 px-4 w-full" type="text" placeholder="https://www.helpmeout/Untitled_Video_20232509" />
                <span className="px-6 py-5 flex items-center border border-[#605C84] text-[#605C84] rounded-lg"><span className="mr-2"><img className="w-8" src={Copy} alt="" /></span>Copy</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-4 flex items-center rounded-md border border-[#0A0628] max-w-[141px]">
                <span className=""><img className="mr-2" src={Facebook} alt="" /></span>
                Facebook
              </div>
              <div className="p-4 flex items-center rounded-md border border-[#0A0628] max-w-[141px]">
                <span className=""><img className="mr-2" src={Whatsapp} alt="" /></span>
                Whatsapp
              </div>
              <div className="p-4 flex items-center rounded-md border border-[#0A0628] max-w-[141px]">
                <span className=""><img className="mr-2" src={Telegram} alt="" /></span>
                Telegram
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 border-l-2 border-gray-300 px-10">
          <div className="">
            <img className="pl-10 pr-24" src={PlayVideo} alt="" />
          </div>
          <h1 className="text-2xl mt-20">Transcript</h1>
        </div>
      </div>
      <div className="bg-gray-100 mt-12 py-16">
        <div className="flex flex-col items-center gap-12 mx-auto max-w-[747px]">
          <p className="text-section text-2xl text-center font-semibold">To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
          <span className="bg-primary-500 px-8 py-3 text-white max-w-[150px]">Save Video</span>
          <p className="font-semibold font-sora text-2xl text-gray-300">Don’t have an account? <span className="text-primary-500">Create account</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Video;
