import Image from "next/image";

export default function CancerTreatmentSection() {
  const leftColumnCancers = [
    "Esophageal Cancer",
    "Bone Cancer",
    "Ovarian Cancer",
    "Male Breast Cancer",
    "Thyroid Cancer",
    "Kidney Cancer",
    "Lung Cancer",
    "Cancer Genes",
    "Liver Cancer",
    "Colon Cancer",
    "Multiple Myeloma",
    "Bladder Cancer",
  ];

  const rightColumnCancers = [
    "Skin Cancer",
    "Leukemia",
    "Breast Cancer",
    "Stomach Cancer",
    "Testicular Cancer",
    "Lymphoma",
    "Cervical Cancer",
    "Endometrial Cancer",
    "Pancreatic Cancer",
    "Brain Cancer",
    "Oral Cancer",
    "Prostate Cancer",
  ];

  return (
    <section className="w-full bg-white py-8 md:py-14">
      <div className="mx-auto px-4 md:px-8 max-w-[1350px] w-full">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#009788]">
            Informed Care
          </p>
          <h2 className="mb-3 text-2xl sm:text-3xl font-medium bg-gradient-to-b from-[#005f56] to-[#009788] bg-clip-text text-transparent md:text-4xl lg:text-5xl leading-tight">
            Cancer Treatment Options
          </h2>
          <p className="text-sm sm:text-base text-[#333]">
            Advanced Care Oncology Center can help with any cancer treatment
          </p>
        </div>

        {/* Content Grid - Stack on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {leftColumnCancers.map((cancer) => (
              <div
                key={cancer}
                className="rounded-[16px] sm:rounded-[20px] border border-[#009788]/30 bg-white px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-center text-xs sm:text-sm font-medium text-[#333] shadow-sm transition-all duration-200 hover:border-teal-400 hover:shadow-md"
              >
                {cancer}
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-full min-h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/cancer-treatment-nurse.png"
              alt="Nurse caring for elderly patient"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {rightColumnCancers.map((cancer) => (
              <div
                key={cancer}
                className="rounded-[16px] sm:rounded-[20px] border border-[#009788]/30 bg-white px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-center text-xs sm:text-sm font-medium text-[#333] shadow-sm transition-all duration-200 hover:border-teal-400 hover:shadow-md"
              >
                {cancer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
