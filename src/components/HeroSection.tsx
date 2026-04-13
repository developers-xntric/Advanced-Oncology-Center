import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative 2xl:min-h-[800px] min-h-[900px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Doctor holding patient's  hand with compassion"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center 2xl:min-h-screen min-h-[900px]  w-[90%] 2xl:max-w-[1440px] mx-auto">
        <div className="w-[60%] 2xl:w-[50%] ">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-md bg-white/10 px-4 py-2 text-[9px] md:text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm border border-[#009788]/30">
              Welcome to Advanced Oncology Center
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-[30px] font-bold lg:leading-16.25 leading-10 tracking-tight text-white md:text-5xl lg:text-6xl">
            Advanced Cancer Care. Compassionate Support at Every Step
          </h1>

          {/* Subtitle */}
          <p className="mb-3 text-[14px] md:text-base font-semibold text-white">
            Because healing is more than medicine
          </p>

          {/* Description */}
          <p className="mb-8 text-sm leading-relaxed text-white">
            We dedicate ourselves exclusively to cancer diagnosis and treatment. Our mission has
            been to combine world-class medical expertise with state-of-the-art technology,
            ensuring every patient feels safe, supported, and cared for. Whether you are a patient
            or a loved one, you are never alone on this journey.
          </p>

          {/* CTA Button */}
          <button className="group flex items-center gap-3 rounded-md border border-white text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-gray-900 px-1 py-1 cursor-pointer">
            Get in Touch
            <span className="flex h-10 w-10 items-center justify-center rounded bg-white transition-colors duration-200 group-hover:bg-gray-100">
              <svg
                className="h-3 w-3 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <div className=" mt-10 hidden">
            <div className="animate-bounce">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

    </section>
  );
}
