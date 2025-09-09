// components/HeroSection.tsx

import Image from "next/image";
import { HERO_SECTION } from "@/lib/config"; // adjust import path as needed
import { Button } from "@/components/button";
export default function HeroSection() {
  return (
    <section className="relative bg-custom-yellow-100 py-20">
      <div className="container w-full sm:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2  items-center px-6">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl secondaryBoldWeight font-bold text-text-primary tracking-wide">
            Welcome to <span className="text-custom-button-primary-bg">RideWave</span> 🚀
          </h1>
          <h2 className="text-2xl font-semibold text-text-primary secondaryBoldWeight tracking-wide">
            The #1 Logistics & Ride Sharing Tool
          </h2>
          <p className="text-lg text-text-tertiary primaryFontNormal">
            At <span className="font-semibold">RideWave</span>, we provide a
            powerful and reliable platform designed to simplify logistics and
            ride booking. Whether you are a customer, driver, or vehicle owner,
            our app makes booking rides, carrying loads, and managing services
            seamless and efficient.
          </p>
          <div className="flex gap-4">
            <Button
             variant="default"
             size="lg"
             className="py-6 px-12"
             >
               Get Started
            </Button>
            <Button
             variant="outline"
             size="lg"
             className="py-6 px-12 hover:bg-teal-50"
             >
             Learn More
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={HERO_SECTION}
            alt="RideWave Hero Section"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
