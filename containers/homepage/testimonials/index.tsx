// data/testimonials.ts
import Image from "next/image";
import {TESTIMONY_1,TESTIMONY_2} from "@/lib/config"
export const testimonials = [
  {
    image: TESTIMONY_1,
    name: "peter",
    description:
      "RideWave made my daily deliveries smoother and faster. I can track everything in one place.",
    companyName: "Delivery Driver",
  },
  {
    image: TESTIMONY_2,
    name: "john",
    description:
      "Booking a ride is super quick, and the fares are transparent. Love the service!",
    companyName: "Passenger",
  },
  {
    image: TESTIMONY_1,
    name: "matthew",
    description:
      "Managing my shop’s logistics has never been this easy. Highly recommend RideWave.",
    companyName: "Shop Owner",
  },
];


export default function TestimonialsSection() {
  return (
    <section className="bg-background-secondary py-16 ">
      <div className="container px-6 w-full sm:w-[80%] mx-auto">
        <h2 className="text-center text-h1 secondaryBoldWeight text-text-secondary mb-12">
          What Our Users Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 text-center"
            >
              {/* Avatar / Image */}
              <Image
                src={item.image}
                width={120}
                height={200}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              {/* Name */}
              <h3 className="primaryFontBold capitalize text-text-secondary text-lg mb-2 tracking-wider">
                {item.name}
              </h3>

              {/* Company */}
              <p className="text-sm text-custom-text-gray mb-4">({item.companyName})</p>

              {/* Testimonial text */}
              <p className="primaryFontNormal text-text-primary leading-relaxed">
                {item.description}
              </p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
