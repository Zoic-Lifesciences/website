import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FaGlobe } from "react-icons/fa";
import Testimonial from "./components/testimonial";

export default function Home() {
  const testimonials = [
    {
      title: "Incredible Experience",
      feedback:
        "I've been feeling really confident without makeup lately. Wholy Dose changed my life. My hair has grown back after falling out, skin is clearing, and I can’t stop getting compliments of my glowing skin!",
      name: "Martha Smith",
      location: "California",
      image: "/person.png",
    },
    {
      title: "Genius Products",
      feedback:
        "I've tried so many things for my skin, from everything topical to oral. But after one month with Wholy Dose, my skin is so much smoother and complexion has become clear and bright.",
      name: "Alley Holzer",
      location: "New York",
      image: "/person.png",
    },
    {
      title: "hey",
      feedback:
        "I've been feeling really confident without makeup lately. Wholy Dose changed my life. My hair has grown back after falling out, skin is clearing, and I can’t stop getting compliments of my glowing skin!",
      name: "Martha Smith",
      location: "California",
      image: "/person.png",
    },
    {
      title: "world",
      feedback:
        "I've tried so many things for my skin, from everything topical to oral. But after one month with Wholy Dose, my skin is so much smoother and complexion has become clear and bright.",
      name: "Alley Holzer",
      location: "New York",
      image: "/person.png",
    },
  ];

  const slides = [
    {
      image: "/ointment.png",
      title: "Our Mission",
      type: "Our Mission",
      text: "We at Zoic Life Sciences believes that complete customer satisfaction is the key to expand business everywhere.",
      link: "#",
    },
    {
      image: "/ointment.png",
      title: "Our Mission",
      type: "Our Mission",
      text: "We at Zoic Life Sciences believes that complete customer satisfaction is the key to expand business everywhere.",
      link: "#",
    },
    {
      image: "/ointment.png",
      title: "Our Mission",
      type: "Our Mission",
      text: "We at Zoic Life Sciences believes that complete customer satisfaction is the key to expand business everywhere.",
      link: "#",
    },
    {
      image: "/ointment.png",
      title: "Our Mission",
      type: "Our Mission",
      text: "We at Zoic Life Sciences believes that complete customer satisfaction is the key to expand business everywhere.",
      link: "#",
    },
    {
      image: "/oil.png",
      title: "Our Vision",
      type: "Our Vision",
      text: "To uphold our social responsibilities of delivering highest standard healthcare services.",
      link: "#",
    },
    {
      image: "/eyedrop.png",
      title: "Our Values",
      type: "Our Values",
      text: "Our Business Values with clients are as simple as LIFELONG Business Relations",
      link: "#",
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

          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[90vh] w-full bg-gradient-to-r from-[#9081A4] to-[#E1DEE9] text-white">
              <div className="flex flex-col lg:flex-row w-full lg:w-[50vw] h-auto lg:h-[90vh] items-center justify-center p-6 text-center lg:text-left">
                <div className="flex flex-col w-full lg:w-[35vw]">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl">
                    INDIA'S <span className="font-bold">LEADING</span> <br />
                    PCD <br />
                    PHARMA COMPANY
                  </h1>
                  <p className="mt-5 text-sm sm:text-base">
                    We take pride in empowering healthcare across India, delivering quality medicines that people deserve.
                  </p>
                  <button className="bg-[#7A7590] text-white py-2 px-4 rounded mt-4">
                    APPLY FOR FRANCHISE
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-[50vw] h-[40vh] lg:h-auto"></div>
            </div>
          </div>

          {/* Innovating Section */}
          <section className="w-full flex justify-center">
            <div className="w-[90%] lg:w-[80%] min-h-[60vh] flex flex-col lg:flex-row gap-10 mt-10 items-center text-center lg:text-left">
              <div className="w-full lg:w-[50%]">
                <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 mt-5">
                  Innovating for the world
                </h2>
                <p className="text-base sm:text-lg">
                  The obsession with innovative healthcare solutions has made us the most prescribed pharma company in India.
                  We are architects of the future, setting new benchmarks in pharmaceutical excellence with drug discovery, advanced formulations, generic APIs, and biotechnology.
                </p>
                <button className="bg-[#A09ABC] text-white py-2 px-4 rounded mt-4">
                  Download Product List
                </button>
              </div>
              <div>
                <Image
                  src="/medicine.webp"
                  alt="Healthcare Illustration"
                  width={700}
                  height={700}
                  className="mt-6 lg:mt-[-250px]"
                />
              </div>
            </div>
          </section>

          {/* Slides Section */}
          <section className="flex w-full justify-center items-center">
            <div className="flex w-[90vw] lg:w-[80vw] flex-wrap justify-center gap-6 sm:gap-8 mt-10 mb-10">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative w-[90%] sm:w-[300px] md:w-[350px] h-[220px] sm:h-[250px] rounded-2xl shadow-lg overflow-hidden bg-black bg-opacity-50"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute bottom-0 left-0 text-white px-3 py-1 rounded-tr-lg text-lg font-medium">
                    {slide.image.split("/")[1].split(".")[0]}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section>
            <div className="bg-[#E1DEE9] w-full h-auto lg:h-[80vh] flex justify-center items-center py-10">
              <div className="w-[90vw] lg:w-[80vw]">
                <h1 className="text-2xl sm:text-3xl lg:text-3xl w-full lg:w-[50%] text-center lg:text-left">
                  Why Choose Us For Pharma Third Party <br />
                  Manufacturing Company in India
                </h1>
                <p className="w-full lg:w-[50%] mt-6 sm:mt-10 mb-5 text-center lg:text-left">
                  At Zoic Life Sciences, we are committed to empowering pharma professionals, distributors, and entrepreneurs with profitable franchise opportunities backed by trust, quality, and innovation.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start mt-10 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-[90%] sm:w-[250px] h-auto min-h-[300px] flex flex-col justify-end p-5 bg-white rounded-lg text-center lg:text-left">
                      <div className="w-full flex justify-center lg:justify-end items-end mb-4">
                        <FaGlobe color="#A09ABC" size={30} />
                      </div>
                      <h1 className="font-bold mb-5">ISO 9001:2008 Certified</h1>
                      <p>
                        Zoic Life Sciences is an ISO certified Pharma company, committed to high quality products. We have also earned the right amount of trust, respect in the market.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="p-4 pb-[200px] flex flex-col gap-4 bg-[#A09ABC] text-white">
            <div className="flex justify-center flex-col items-center">
              <h2 className="font-bold text-2xl text-center mt-12">
                We seek out, and solve, tough challenges.
              </h2>
              <p className="text-center mt-5">
                Zoic Life Sciences is an ISO certified Pharma company, committed to high quality products.
              </p>
              <div className="flex flex-col sm:flex-row gap-10 mt-10 items-center justify-center">
                <div className="text-center">
                  <h1 className="text-5xl sm:text-6xl">30</h1>
                  <p>Products</p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-gray-800"></div>
                <div className="text-center">
                  <h1 className="text-5xl sm:text-6xl">300 +</h1>
                  <p>Products</p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-gray-800"></div>
                <div className="text-center">
                  <h1 className="text-5xl sm:text-6xl">18</h1>
                  <p>Products</p>
                </div>
              </div>
            </div>
          </section>

          {/* Offerings Section */}
<section className="w-full flex justify-center">
  <div className="w-[90%] lg:w-[80%] min-h-[90vh] shadow-2xl rounded-2xl mt-[-100px] bg-white px-4 sm:px-6 py-12">
    <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl">What we offer</h1>
    <p className="text-center mt-5 text-sm sm:text-base">
      Partner with us to leverage our expertise and resources.
    </p>

    {/* Scrollable on small screens */}
    <div className="mt-12 flex overflow-x-auto lg:overflow-visible space-x-6 space-y-6 sm:space-x-8 px-2 sm:px-0 no-scrollbar lg:flex-wrap lg:justify-center">
      {offerings.map((item, idx) => (
        <div
          key={idx}
          className="flex-none lg:flex-initial flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
        >
          <Image
  src={item.img}
  alt={item.title}
  width={0}
  height={0}
  sizes="100vw"
  className="object-contain w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]"
/>

          <h1 className="font-bold text-xl mt-4 text-center">{item.title}</h1>
          <h2 className="text-gray-700 mt-2 text-center">{item.text}</h2>
        </div>
      ))}
    </div>
  </div>
</section>


          {/* Testimonials Section */}
          <section className="mt-12">
            <Testimonial testimonials={testimonials} />
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
