import Image from "next/image";

export default function SecondOpinionSection() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] w-[90%]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
          {/* Left Content Card */}
          <div className="rounded-[20px] bg-[#F4F4F4] border border-[#009788]/30 px-5 py-6 shadow-sm md:px-8 md:py-20 ">

            <h2 className="mb-3 text-[28px] md:text-3xl font-medium bg-gradient-to-b  from-[#005f56] to-[#009788] bg-clip-text text-transparent md:text-4xl lg:text-5xl">
              Second Opinion
            </h2>
            {/* Paragraph 1 */}
            <p className="mb-5 text-[14px] md:text-base leading-relaxed text-[#333]">
              We understand that a cancer diagnosis can bring uncertainty, questions, and
              difficult decisions. At Advanced Care Oncology Center, we believe every patient
              deserves clarity and confidence before moving forward. That's why we provide
              comprehensive second opinions—carefully reviewing your medical records, imaging,
              pathology, and treatment recommendations.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[14px] md:text-base leading-relaxed text-[#333]">
              Our experienced oncology specialists ensure accuracy and explore the most
              appropriate options for your condition. Whether you are newly diagnosed or
              considering a change in treatment plan, we are here to guide you with
              evidence-based expertise and genuine reassurance. With us, you can make
              informed decisions knowing you are supported by a team that puts your
              well-being first.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-80 w-full overflow-hidden rounded-[20px] lg:h-auto">
            <Image
              src="/opinion-doctor.png"
              alt="Doctor consulting with patient"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
