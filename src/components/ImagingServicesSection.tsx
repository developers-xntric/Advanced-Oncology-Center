import Image from "next/image";

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
    <section id="imaging" className="relative w-full overflow-hidden py-16 md:py-20 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          fill
          src="/imaging-services-bg.png"
          alt="Medical imaging services"
          className="h-full w-full object-cover"
        />

      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto 2xl:max-w-[1580px]  w-[90%] md:w-[95%]">
        <div className="flex  lg:flex-row flex-col items-center justify-between lg:gap-28 gap-10">
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:w-[50%]">
            {/* Small heading */}
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
              Advanced Imaging Services
            </p>

            {/* Main heading */}
            <h2 className="mb-4 text-[28px] md:text-3xl font-medium leading-tight text-white md:text-4xl 2xl:text-5xl">
              Precision Diagnostics. Clearer Insights. Better Care.
            </h2>

            {/* Description */}
            <p className=" text-[14px] md:text-base leading-relaxed text-white 2xl:text-lg">
              Imaging is more than technology. It's the foundation of accurate diagnosis and
              personalised treatment. From PET/CT scans to MRI and ultrasound, our advanced systems
              provide clear, reliable results that guide every step of your care journey.
            </p>
          </div>

          {/* Right Content - Services */}
          <div className="flex flex-col justify-center lg:w-[50%]">
            {/* Section title */}
            <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">
              Imaging Services
            </h3>

            {/* Services grid */}
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-lg bg-white/10 border border-[#009788]/30 px-5 py-2.5 text-sm font-light text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
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
