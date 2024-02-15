import { Link } from "react-router-dom";

import WelcomeImage2 from "/welcomeImage.jpg";

const WelcomeHome = () => {
  return (
    <>
      <div className="welcome h-3/4 flex items-center">
        <div className="text p-12">
          <h1 className="text-5xl mb-4">Join Us To Get Help From Anywhere</h1>
          <p className="leading-8 text-left">
            Welcome to Connect, your premier destination for accessible and
            reliable telemedicine services. Our platform connects you with
            experienced healthcare professionals remotely, ensuring convenient
            consultations from the comfort of your home. Experience quality
            healthcare at your fingertips with Connect.
          </p>
          <div className="buttons mt-8">
            <Link
              to="/"
              className="p-4 rounded bg-sky-800 text-white mr-4 hover:bg-white hover:text-sky-800 border border-black/50"
            >
              Book Appointment
            </Link>
            <Link
              to="/"
              className="p-4 rounded bg-sky-800 text-white mr-4 hover:bg-white hover:text-sky-800 border border-black/50"
            >
              More About us
            </Link>
          </div>
        </div>
        <div className="image w-full">
          <img src={WelcomeImage2} alt="Welcome Image" className="h-1/2" />
        </div>
      </div>
    </>
  );
};

export default WelcomeHome;