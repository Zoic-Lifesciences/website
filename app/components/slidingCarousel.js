"use client";

export default function SlidingCarousel({ verticals }) {
  return (
    <section className="p-4 flex flex-col gap-8 bg-sky-700 pt-24 pb-24 text-white">
      <div>
        <h2 className="font-bold text-2xl mb-2">Our Business Verticals</h2>
        <p>
          We operate across multiple business verticals to deliver comprehensive solutions.
        </p>
      </div>
      <div className="flex flex-row gap-4 overflow-x-scroll scrollbar-hide">
        {verticals.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[300px] h-54 bg-white p-6 rounded shadow"
          >
            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
