import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-200 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Doctor holding patient's hand with compassion"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen  w-[90%] 2xl:max-w-360 mx-auto">
        <div className=" md:w-[50%] ">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-md bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm border border-[#009788]/30">
              Welcome to Advanced Oncology Center
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-4xl font-bold leading-16.25 tracking-tight text-white md:text-5xl lg:text-6xl">
            Advanced Cancer Care. Compassionate Support at Every Step
          </h1>

          {/* Subtitle */}
          <p className="mb-3 text-base font-semibold text-white">
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
          <div className=" mt-20">
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
