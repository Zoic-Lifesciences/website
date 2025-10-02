import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ThreeCube from "./components/threeCube";
import SlidingCarousel from "./components/slidingCarousel";
import SlidingComponent from "./components/slidingComponent";

export default function Home() {
  const verticals = [
    {
      title: "Formulations",
      text: "High-quality pharmaceutical formulations for various therapeutic areas.",
    },
    {
      title: "APIs",
      text: "Active Pharmaceutical Ingredients manufactured with global standards.",
    },
    {
      title: "Biotech",
      text: "Innovative biotech research and development for future healthcare.",
    },
  ];
  const offerings = [
    {
      img: "/monopoly-icon.png",
      title: "Monopoly PCD Franchise Rights",
      text: "Unlock the potential of your business with our franchise model.",
    },
    {
      img: "/product-icon.png",
      title: "Extensive Product Portfolio",
      text: "Explore over 500+ DCGI-approved formulations across various therapeutic segments including general, derma, pediatric, ayurvedic, cardiac-diabetic, and more.",
    },
    {
      img: "/who-gmp.png",
      title: "WHO-GMP Certified Manufacturing",
      text: "Our products are manufactured in world-class facilities adhering to strict quality standards, ensuring safety, stability, and efficacy.",
    },
    {
      img: "/marketing-icon.png",
      title: "Complete Promotional Support",
      text: "Boost your market presence with free promotional materials like MR bags, visual aids, catch covers, samples, and reminder cards.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col">

          <div className="flex flex-col items-center justify-center gap-12">
            <div
              className="flex flex-col lg:flex-row items-center justify-center h-[90vh] w-[100vw]"
              style={{
                backgroundImage: "url('/gif.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col gap-2">
                <div className="w-[90%] mt-5">
                  <h1 className="text-6xl p-4 mb-5">
                    INDIA'S <span className="font-bold">LEADING</span> <br />
                    PCD <br />
                    PHARMA COMPANY
                  </h1>
                </div>
              </div>
              <div className="w-[90vw] lg:w-[70vw]"></div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 mx-5">
              <p className="text-gray-900">
                We take pride in empowering healthcare across India, delivering quality medicines that people deserve.
              </p>
              <button className="bg-sky-900 text-white py-2 px-4 rounded mt-4">
                APPLY FOR FRANCHISE
              </button>
            </div>
          </div>

          <section className="w-screen">
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-4 text-center mt-5">
                Innovating for the world
              </h2>
              <p className="text-center">
                The obsession with innovative healthcare solutions has made us the most prescribed pharma company in India.
                We are architects of the future, setting new benchmarks in pharmaceutical excellence with drug discovery, advanced formulations, generic APIs, and biotechnology.
              </p>
              <Image
                src="/book.png"
                alt="Healthcare Illustration"
                width={300}
                height={300}
                className="mt-10"
              />
            </div>
          </section>

          <SlidingCarousel verticals={verticals} />

          <section className="p-4 flex flex-col gap-4 bg-gray-200">
            <div>
              <h2 className="font-bold text-2xl">
                We seek out, and solve, tough challenges.
              </h2>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-gray-200 w-[50%] h-56 p-2 text-black">
                <span className="font-bold text-6xl">20+</span>
                <h3 className="text-3xl">Clients</h3>
              </div>
              <div className="bg-blue-400 w-[50%] h-56 p-2">
                <h2 className="font-bold text-6xl">20+</h2>
                <h3 className="text-2xl">Years in Business</h3>
              </div>
            </div>
          </section>

          <SlidingComponent offerings={offerings}/>

        </div>
      </main>

      <Footer />
    </>
  );
}
