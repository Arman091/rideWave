// data/testimonials.ts
export const testimonials = [
  {
    image: "/images/testimonials/user1.jpg",
    name: "Amit Sharma",
    description:
      "RideWave made my daily deliveries smoother and faster. I can track everything in one place.",
    companyName: "Delivery Driver",
  },
  {
    image: "/images/testimonials/user2.jpg",
    name: "Priya Verma",
    description:
      "Booking a ride is super quick, and the fares are transparent. Love the service!",
    companyName: "Passenger",
  },
  {
    image: "/images/testimonials/user3.jpg",
    name: "Rakesh Patel",
    description:
      "Managing my shop’s logistics has never been this easy. Highly recommend RideWave.",
    companyName: "Shop Owner",
  },
];


export default function TestimonialsSection() {
  return (
    <section className="bg-gray-primary-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl secondaryBoldWeight text-text-secondary mb-12">
          What Our Users Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
            >
              <p className="text-text-primary mb-4">{item.description}</p>
              <div className="flex items-center mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-text-secondary">{item.name}</p>
                  <p className="text-sm text-text-tertairy">
                    {item.companyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
