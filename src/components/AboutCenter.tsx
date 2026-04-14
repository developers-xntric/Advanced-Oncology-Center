'use client'

export default function AboutCenter() {
  return (
    <section id="about" className="w-full bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] w-[90%]">
        {/* Text Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Heading */}
          <div className="space-y-3 w-full lg:w-[40%]">
            <p className="text-center md:text-left mb-5 md:mb-7 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#009788] sm">
              About Advanced Oncology Center
            </p>

            <h2 className="-mb-2 md:mb-3 text-center md:text-left text-[24px] sm:text-[28px] md:text-4xl xl:text-[40px] font-medium bg-gradient-to-b from-[#005f56] to-[#009788] bg-clip-text text-transparent leading-tight md:leading-none ">
              Dedicated to Comprehensive Cancer Care
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="text-center md:text-left text-sm xl:text-base text-[#333] 2xl:text-lg w-full lg:w-[60%] space-y-3 md:space-y-2">
            <p>
              We are devoted exclusively to cancer diagnosis and treatment. Our mission is to provide patients and their families with clarity, trust, and comfort at every stage of the journey.
            </p>
            <p>
              Our patient-centered approach is hard-to-beat to provide accurate diagnosis, personalized treatment plans, and continuous medical support. We understand that cancer care is not only about advanced medicine. It is about guiding patients with compassion, understanding, and unwavering reassurance.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full mt-6">
          <img
            src="/about-new.png"
            alt="Advanced Oncology Center building"
            className="w-full h-56 md:h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}