import Image from "next/image";

export default function HealingSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          fill
          src="/healing-bg.png"
          alt="Family enjoying nature"
          className="h-full w-full object-cover"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1440px] w-[90%] justify-start">
        {/* White Card */}
        <div className="max-w-xl rounded-xl bg-white/90 px-5 py-6 shadow-lg md:px-8 md:py-10 ">
          {/* Heading */}
          <h2 className="mb-3 text-[28px] md:text-3xl font-medium bg-gradient-to-r leading-[35px] lg:leading-[60px] from-[#005f56] to-[#009788] bg-clip-text text-transparent md:text-[30px] xl:text-5xl">
            Healing is more than just medicine.
          </h2>

          {/* Paragraph 1 */}
          <p className="mb-5 text-[14px] md:text-base leading-relaxed text-[#333]">
            Our well-being is our highest priority. Our physicians, oncology nurses, imaging
            specialists, and dedicated support team work together to deliver comprehensive,
            patient-centered cancer care.
          </p>

          {/* Paragraph 2 */}
          <p className="mb-5 text-[14px] md:text-base leading-relaxed text-[#333]">
            We combine advanced diagnostic and treatment technologies including PET/CT imaging,
            chemotherapy, and radiotherapy with personalized treatment planning and continuous
            monitoring. This integrated approach ensures accuracy, clarity, and confidence throughout
            your journey.
          </p>

          {/* Paragraph 3 */}
          <p className="text-[14px] md:text-base leading-relaxed text-[#333]">
            But beyond technology, we focus on restoring hope, providing reassurance, and supporting
            every patient with dignity. Here, you are not just receiving treatment; you are
            surrounded by care, understanding, and a team committed to walking beside you.
          </p>
        </div>
      </div>
    </section>
  );
}
