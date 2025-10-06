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
            <div className="flex flex-row h-[90vh] w-[100vw] bg-gradient-to-r from-[#9081A4] text-white to-[#E1DEE9]">
              <div className="flex flex-row w-[50vw] h-[90vh] items-center justify-center">
                <div className="flex flex-col w-[35vw]">
                  <h1 className="text-6xl text-start">
                    INDIA'S <span className="font-bold">LEADING</span> <br />
                    PCD <br />
                    PHARMA COMPANY
                  </h1>
                  <p className="mt-5">
                    We take pride in empowering healthcare across India, delivering quality medicines that people deserve.
                  </p>
                  <button className="bg-[#7A7590] text-white py-2 px-4 rounded mt-4">
                    APPLY FOR FRANCHISE
                  </button>
                </div>
              </div>
              <div className="w-[50vw]"></div>
            </div>
          </div>

          {/* Innovating Section */}
          <section className="w-[100vw] flex justify-center">
            <div className="w-[80%] h-[60vh] flex gap-10 mt-10">
              <div className="w-[50%]">
                <h2 className="font-bold text-6xl mb-4 mt-5">
                  Innovating for the world
                </h2>
                <p className="text-lg">
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
                  className="mt-[-250px]"
                />
              </div>
            </div>
          </section>

          {/* Slides Section */}
          <section className="flex w-[100vw] justify-center items-center">
            <div className="flex w-[80vw] flex-wrap justify-center gap-8 mt-10 mb-10">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative w-[350px] h-[250px] rounded-2xl shadow-lg overflow-hidden bg-black bg-opacity-50"
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
            <div className="bg-[#E1DEE9] w-[100vw] h-[80vh] flex justify-center items-center">
              <div className="w-[80vw] h-[80%]">
                <h1 className="text-3xl w-[50%]">
                  Why Choose Us For Pharma Third Party <br />
                  Manufacturing Company in India
                </h1>
                <p className="w-[50%] mt-10 mb-5">
                  At Zoic Life Sciences, we are committed to empowering pharma professionals, distributors, and entrepreneurs with profitable franchise opportunities backed by trust, quality, and innovation. With years of industry experience, we deliver everything you need to succeed in the PCD Pharma business.
                </p>
                <div className="flex flex-wrap mt-10 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-[250px] h-[300px] justify-end flex flex-col p-5 bg-white rounded-lg">
                      <div className="w-[100%] flex justify-end items-end">
                        <FaGlobe color="#A09ABC" size={30} />
                      </div>
                      <h1 className="font-bold mb-5 w-[80%]">ISO 9001:2008 Certified</h1>
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
              <div className="flex flex-row gap-10 mt-10">
                <div>
                  <h1 className="text-6xl">30</h1>
                  <p>Products</p>
                </div>
                <div className="w-px h-16 bg-gray-800"></div>
                <div>
                  <h1 className="text-6xl">300 +</h1>
                  <p>Products</p>
                </div>
                <div className="w-px h-16 bg-gray-800"></div>
                <div>
                  <h1 className="text-6xl">18</h1>
                  <p>Products</p>
                </div>
              </div>
            </div>
          </section>

          {/* Offerings Section */}
          <section className="w-[100vw] flex justify-center">
            <div className="w-[80%] min-h-[90vh] shadow-2xl rounded-2xl mt-[-100px] bg-white px-6 py-12">
              <h1 className="text-center text-5xl">What we offer</h1>
              <p className="text-center mt-5">
                Partner with us to leverage our expertise and resources.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {offerings.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-[400px]"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="object-contain"
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
