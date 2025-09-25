import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col">

          {/* For Courosel */}
          <Image
            src="/Zoic-cover-img.jpg"
            alt="Description of the image"
            width={1920}
            height={250}
            className="w-screen"
          />

          {/* Welcome Message */}
          <div className="flex flex-col items-center justify-center gap-12 pt-8 p-4">
            <div className="flex flex-row gap-2">
              <h1 className="w-[50%] font-bold text-xl">Zoic Lifesciences, where every stride is a step towards better science and a healthier, resilient Bharat.</h1>
              <Image src="/pcd-banner.jpg" alt="Welcome Image" width={150} height={50} className="w-[50%] mx-auto"/>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              APPLY FOR FRANCHISE
            </button>
          </div>

          {/* Innovation for world Section */}
          <section className="w-screen ">
            {/* Info */}
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-4 text-center">
                Innovating for the world
              </h2>
              <p className="text-center">
                The obsession with innovative healthcare solutions has 
                made us the most prescribed pharma company in India.
                We are achitects pf the future, setting new benchmarks in pharmaceutical
                excellence with drug discovery, advanced formulations, genric APIs and biotechnology.
              </p>
            </div>

            {/* Video Part */}
            <div className="bg-green-200">
              <video className="w-full" controls autoPlay muted loop>
                <source src="/sample-video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          {/* MISSION, VISION, VALUES SECTION */}
          <section className="w-screen flex flex-col gap-8 mt-4 pt-12 pb-12">
            {/* MISSION */}
            <div className="p-4 flex flex-row gap-8">
              <div>
                <Image src="/mission.png" alt="Our Mission" width={300} height={200} />
              </div>
              <div>
                <h2 className="font-bold text-2xl mb-2">Our Mission</h2>
                <p className="">
                  We at Zoic Life Sciences believes that complete customer satisfaction is the key to expand
                  business everywhere.
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className="p-4 flex flex-row gap-8"> 
              <div>
                <h2 className="font-bold text-2xl mb-2">Our Vision</h2>
                <p className="">
                  To uphold our social responsibilities of delivering highest standard healthcare services.
                </p>
              </div>
              <div>
                <Image src="/vision.png" alt="Our Mission" width={250} height={50} />
              </div>
            </div>

            {/* VALUES */}
            <div className="p-4 flex flex-row gap-8">
              <div>
                <Image src="/values.png" alt="Our Mission" width={200} height={50} />
              </div>
              <div>
                <h2 className="font-bold text-2xl mb-2">Our Values</h2>
                <p className="">
                  Our Business Values with clients are as simple as LIFELONG Business Relations
                </p>
              </div>
            </div>
          </section>

          {/* 20+clients, 20+in business Section */}
          <section className="p-4 flex flex-col gap-4">
            <div>
              <h2 className="font-bold text-2xl">
                We seek out, and solve, tough challenges.
              </h2>
            </div>
            <div className="flex flex-row gap-4">
              <div className=" bg-gray-200 w-[50%] h-56 p-2 text-black">
                <span className="font-bold text-6xl">20+</span> 
                <h3 className="text-3xl">Clients</h3>
              </div>
              <div className="bg-blue-400 w-[50%] h-56 p-2">
                <h2 className="font-bold text-6xl">20+</h2> 
                <h3 className="text-2xl">Years in Business</h3>
              </div>
            </div>
          </section>

          {/* Our Business Verticals */}
          <section className="p-4 flex flex-col gap-8 bg-red-100 pt-24 pb-24">
            <div>
              <h2 className="font-bold text-2xl mb-2">Our Business Verticals</h2>
              <p>
                We operate across multiple business verticals to deliver comprehensive solutions.
              </p>
            </div>
            <div className="flex flex-row gap-4 overflow-x-scroll">
              <div className="min-w-[300px] h-54 bg-white p-6 rounded">
                <h2>Formulations</h2>
              </div>
              <div className="min-w-[300px] h-54 bg-white p-6 rounded">
                <h2>APIs</h2>
              </div>
              <div className="min-w-[300px] h-54 bg-white p-6 rounded">
                <h2>Biotech</h2>
              </div>
            </div>
          </section>

          {/* Partner With us */}
          <section className="p-4 pt-12">
            <div className="text-center">
              <h2 className="font-bold">What We Offer</h2>
              <p>Partner with us to leverage our expertise and resources.</p>
            </div>
            <div className="mt-12 flex flex-col items-center text-center">
              <Image src="/monopoly-icon.png" alt="Partner with us" width={150} height={150} className=""/>
              <h1 className="font-bold">Monopoly PCD Franchise Rights</h1>
              <h2 className="w-[90%]">Unlock the potential of your business with our franchise model.</h2>
            </div>
            <div className="mt-12 flex flex-col items-center text-center">
              <Image src="/product-icon.png" alt="Partner with us" width={150} height={150} className=""/>
              <h1 className="font-bold">Extensive Product Portfolio</h1>
              <h2 className="w-[90%]">Explore over 500+ DCGI-approved formulations
              across various therapeutic segments including general, derma, pediatric, ayurvedic, cardiac- diabetic and more.
              </h2>
            </div>
            <div className="mt-12 flex flex-col items-center text-center">
              <Image src="/who-gmp.png" alt="Partner with us" width={150} height={150} className=""/>
              <h1 className="font-bold">WHO-GMP Certified Manufacturing</h1>
              <h2 className="w-[90%]">
                Our products are manufactured in world class facilities adhering to strict quality standards,
                ensuring safety, stability and efficacy.
              </h2>
            </div>
            <div className="mt-12 flex flex-col items-center text-center">
              <Image src="/marketing-icon.png" alt="Partner with us" width={150} height={150} className=""/>
              <h1 className="font-bold">Complete Promotional Support</h1>
              <h2 className="w-[90%]">
                Boost your market presence with free promotional materials like 
                MR bags, visual aids, catch covers, samples and reminder cards.
              </h2>
            </div>
          </section>

        </div>
      </main>

      <Footer/>
      
    </>
  );
}
