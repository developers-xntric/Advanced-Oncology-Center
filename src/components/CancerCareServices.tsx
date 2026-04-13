export default function CancerCareServices() {
  const services = [
    {
      id: 1,
      title: "PET / CT Scan",
      image: "/cancer1.png",
      description:
        "High-precision imaging technology for accurate cancer detection, staging, and treatment",
    },
    {
      id: 2,
      title: "Chemotherapy",
      image: "/cancer2.png",
      description:
        "Personalized chemotherapy programs designed according to each patient's condition and medical history",
    },
    {
      id: 3,
      title: "Radiotherapy",
      image: "/cancer3.png",
      description:
        "One of the art radiation therapy solutions targeting cancer cells while preserving healthy tissue.",
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-14">
      <div className="mx-auto px-4 md:px-8 max-w-[1350px] w-full">
        {/* Header */}
        <div className="text-center mb-7">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#009788]">
            Experience you can trust. Care you can feel.
          </p>
          <h2 className="mb-3 text-2xl sm:text-3xl font-medium bg-gradient-to-b from-[#005f56] to-[#009788] bg-clip-text text-transparent md:text-4xl lg:text-5xl leading-tight">
            Providing Cancer Care With
            <br />
            State-of-the-Art Technology
          </h2>
          <p className="text-sm sm:text-base text-[#333] leading-relaxed">
            We believe healing is more than medicine. That&apos;s why we combine cutting-edge equipment with genuine human support, ensuring every patient feels safe,
            understood, and cared for. Whether you are beginning your journey or seeking a second opinion, our center offers the knowledge, experience, and comfort you
            need.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col border border-[#009788]/30 rounded-lg p-4 md:p-5 bg-white shadow-sm transition-all duration-200 hover:border-teal-400 hover:shadow-md">
              {/* Image Container */}
              <div className="mb-3 rounded-lg overflow-hidden h-40 sm:h-48 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl sm:text-[26px] font-medium text-[#004C3F] mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-[#787878] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
