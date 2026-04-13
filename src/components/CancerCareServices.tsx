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
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-teal-600 mb-4 uppercase">
            Experience you can trust. Care you can feel.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Providing Cancer Care With
            <br />
            State-of-the-Art Technology
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe healing is more than medicine. That&apos;s why we combine cutting-edge equipment with genuine human support, ensuring every patient feels safe,
            understood, and cared for. Whether you are beginning your journey or seeking a second opinion, our center offers the knowledge, experience, and comfort you
            need.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col">
              {/* Image Container */}
              <div className="mb-6 rounded-lg overflow-hidden h-48 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-teal-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
