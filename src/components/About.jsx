import Card from "../images/About-card.png";



const About = () => {
  return (
    <div className="px-[100px] py-24 bg-white mt-12">
      <h1 className="text-center font-sora text-5xl font-bold text-section">How it works</h1>
      <div className="grid grid-cols-3 gap-20 mt-14">
        <div className="flex flex-col items-center">
          <span className="py-4 px-6 bg-primary-500 text-white font-bold font-inter text-3xl w-16 rounded-full">1</span>
          <div className="mt-8 mb-7 text-center">
            <h3 className="text-home text-2xl font-inter font-semibold">Record Screen</h3>
            <p className="mt-4 text-grey text-xl font-work-sans">Click the &quot;Start Recording&quot; button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
          </div>
          <img src={Card} alt="details" />
        </div>
        <div className="flex flex-col items-center">
          <span className="py-4 px-6 bg-primary-500 text-white font-bold font-inter text-3xl w-16 rounded-full">2</span>
          <div className="mt-8 mb-7 text-center">
            <h3 className="text-home text-2xl font-inter font-semibold">Share Your Recording</h3>
            <p className="mt-4 text-grey text-xl font-work-sans">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
          </div>
          <img src={Card} alt="details" />
        </div>
        <div className="flex flex-col items-center">
          <span className="py-4 px-6 bg-primary-500 text-white font-bold font-inter text-3xl w-16 rounded-full">3</span>
          <div className="mt-8 mb-7 text-center">
            <h3 className="text-home text-2xl font-inter font-semibold">Learn Effortlessly</h3>
            <p className="mt-4 text-grey text-xl font-work-sans">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
          </div>
          <img src={Card} alt="details" />
        </div>
      </div>
    </div>
  )
}

export default About;