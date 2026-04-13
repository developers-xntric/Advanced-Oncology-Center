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
    <section className="w-full bg-white py-8 md:pt-14 md:pb-8">
      <div className="mx-auto max-w-[1350px] w-[90%] md:w-[80%]">
        {/* Header */}
        <div className="text-center mb-6 md:mb-7">
          <p className="mb-2 md:mb-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#009788]">
            Experience you can trust. Care you can feel.
          </p>

          <h2 className="mb-3 text-[24px] sm:text-[28px] md:text-4xl lg:text-5xl font-medium bg-gradient-to-b from-[#005f56] to-[#009788] bg-clip-text text-transparent leading-tight md:leading-[1.1]">
            Providing Cancer Care With
            <br className="hidden sm:block" />
            State-of-the-Art Technology
          </h2>

          <p className="text-sm sm:text-base text-[#333] 2xl:text-lg">
            We believe healing is more than medicine. That&apos;s why we combine cutting-edge equipment with genuine human support, ensuring every patient feels safe,
            understood, and cared for. Whether you are beginning your journey or seeking a second opinion, our center offers the knowledge, experience, and comfort you
            need.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col border border-[#009788]/30 rounded-lg p-4 md:p-5 bg-white shadow-sm transition-all duration-200 hover:border-teal-400 hover:shadow-md"
            >
              {/* Image Container */}
              <div className="mb-3 rounded-lg overflow-hidden h-44 sm:h-48 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[26px] font-medium text-[#004C3F] mb-1">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#787878] leading-relaxed">
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