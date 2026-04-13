export default function ImagingServicesSection() {
  const services = [
    "Nuclear Medicine",
    "Ultrasound",
    "CT Scans",
    "MRI SCAN",
    "Bone Scans",
    "Cancer Screening Program",
    "Complete Health Screening",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/imaging-services-bg.jpg"
          alt="Medical imaging services"
          className="h-full w-full object-cover opacity-20"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Small heading */}
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-white/80">
              Advanced Imaging Services
            </p>

            {/* Main heading */}
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Precision Diagnostics. Clearer Insights. Better Care.
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Imaging is more than technology. It's the foundation of accurate diagnosis and
              personalised treatment. From PET/CT scans to MRI and ultrasound, our advanced systems
              provide clear, reliable results that guide every step of your care journey.
            </p>
          </div>

          {/* Right Content - Services */}
          <div className="flex flex-col justify-center">
            {/* Section title */}
            <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">
              Imaging Services
            </h3>

            {/* Services grid */}
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
