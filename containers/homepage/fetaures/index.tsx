import { FaCar, FaUsers, FaMapMarkedAlt, FaMoneyBillWave, FaClock, FaShieldAlt } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaCar className="text-white text-3xl" />,
      title: "Easy Ride Booking",
      desc: "Book rides instantly with just a few taps, whether for personal or business needs.",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Driver & Rider Match",
      desc: "Smart matching system connects riders with nearby drivers for quick service.",
    },
    {
      icon: <FaMapMarkedAlt className="text-white text-3xl" />,
      title: "Live Tracking",
      desc: "Track your ride in real-time with accurate GPS and route updates.",
    },
    {
      icon: <FaMoneyBillWave className="text-white text-3xl" />,
      title: "Flexible Payments",
      desc: "Pay securely using cash, wallet, or online payments – your choice, your way.",
    },
    {
      icon: <FaClock className="text-white text-3xl" />,
      title: "On-Time Service",
      desc: "Reliable scheduling ensures you reach your destination on time, every time.",
    },
    {
      icon: <FaShieldAlt className="text-white text-3xl" />,
      title: "Safe & Secure",
      desc: "Verified drivers, emergency assistance, and safety features keep you protected.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 ">
      <div className="max-w-[80%] mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-[60px] font-bold secondaryBoldWeight tracking-wide text-gray-900 mb-4">
          Powerful Tools. Dynamic Results.
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Our platform makes rides and logistics simple, safe, and reliable. Here are some of our core features:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-custom-button-primary-bg p-5 rounded-full shadow-md mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
