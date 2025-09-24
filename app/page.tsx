import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Image
          src="/file.svg"
          alt="Description of the image"
          width={250}
          height={250}
        />
      </main>
      
    </>
  );
}
