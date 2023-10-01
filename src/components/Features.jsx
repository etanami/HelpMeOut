
import Record from "../images/record-icon.png";
import Share from "../images/share-icon.png";
import Revisit from "../images/revisit-icon.png";
import Preview from "../images/features-preview.png";


const Features = () => {
  return (
    <div className="px-[100px] py-20 bg-white mt-12">
      <div className="text-center flex flex-col gap-2">
        <h1 className="font-sora text-5xl font-bold text-section">Features</h1>
        <p className="font-work-sans text-grey text-xl">Key Highlights of Our Extension</p>
      </div>

      <div className="grid grid-cols-7 gap-14 mt-16">
        <div className="col-span-3 flex flex-col gap-12 justify-center">
          <div className="flex gap-4">
            <img className="w-12 h-12" src={Record} alt="record-icon" />
            <div className="flex flex-col gap-2">
              <h1 className="text-home font-inter text-3xl font-semibold">Simple Screen Recording</h1>
              <p className="text-grey text-xl font-work-sans">Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>       
          </div>
          <div className="flex gap-4">
            <img className="w-12 h-12" src={Share} alt="share-icon" />
            <div className="flex flex-col gap-2">
              <h1 className="text-home font-inter text-3xl font-semibold">Easy-to-Share URL</h1>
              <p className="text-grey text-xl font-work-sans">Share your recordings instantly with a single link. No attachments, no downloads.</p>
            </div>       
          </div>
          <div className="flex gap-4">
            <img className="w-12 h-12" src={Revisit} alt="revisit-icon" />
            <div className="flex flex-col gap-2">
              <h1 className="text-home font-inter text-3xl font-semibold">Revisit Recordings</h1>
              <p className="text-grey text-xl font-work-sans">Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
            </div>       
          </div>
        </div>

        <div className="col-span-4">
          <img className="w-full" src={Preview} alt="Preview" />
        </div>
      </div>
    </div>
  )
}

export default Features;