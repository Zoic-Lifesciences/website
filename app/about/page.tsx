import Image from "next/image";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel"

export default function About() {
  const awardImages = [
    "/dice.png",
    "/person.png",
    "/logo.png",
    "/mission.png",
  ];
    return (
      <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-800 w-full">
        <Navbar/>
        <div className="w-[90%] flex flex-col lg:flex-row text-center mt-10 px-6">
          <Image src="/person.png" alt="Welcome Image" width={250} height={150} className="w-[90%] lg:h-[40%] mx-auto"/>
          <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Our Director Has to Say!</h2>
          <p className="text-lg leading-relaxed">
          The pharmaceutical arena can be seen as one of the most vital area affecting health of a nation and thus the strength in this sector can define a country’s growth and can affect it both adversely and favorably. Through quality, diligence, and, hard-work, zoic lifesciences is dedicated to provide the best pharmaceutical care.<br></br>We aim to keep our customers satisfied to grow and in future seek to become a name of global reckoning. We have in place a highly qualified and experienced management team who drives the Company’s strategy, policies, and monitors progress towards meeting our objectives.<br></br>These seasoned and experienced professionals have come together from the fields of sales, marketing, finance, R&D and other operational areas. Inspired by our core values of vision, responsibility, teamwork, and, devotion<br></br>we will continue to fulfill our mission of producing high quality products to meet the health needs of people around the world.<br></br>The encouraging support of our team members, associates, business partners and most importantly, our valued customers, has been the core of our strength. And we are passionately exploring every possibility to build long-term value for individuals, as well as the society in its entirety
          </p>
          </div>

          <div className="">
            <h2 className="text-2xl font-semibold mt-8 mb-4"> AWARDS</h2>
            <p>Mankind Pharma is proud to be recognized with multiple awards for advancements in research and development, excellence in manufacturing, dedication to quality, and fostering a supportive working environment.</p>
            <div className="w-[80%] h-[60%] flex justify-center items-center">
            <Carousel images={awardImages} interval={1000}/>
            </div>
            
          </div>

        </div>
      </div>
    );
  }
  