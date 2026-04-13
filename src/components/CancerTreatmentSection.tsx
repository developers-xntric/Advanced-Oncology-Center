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
    <section id="informed" className="w-full bg-white py-16 md:py-20 ">
      <div className="mx-auto max-w-[1440px] w-[90%]">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#009788]">
            Informed Care
          </p>
          <h2 className="mb-3 text-3xl font-medium bg-gradient-to-b  from-[#005f56] to-[#009788] bg-clip-text text-transparent md:text-4xl lg:text-5xl">
            Cancer Treatment Options
          </h2>
          <p className="text-[14px] md:text-base text-[#333] 2xl:text-lg">
            Advanced Care Oncology Center can help with any cancer treatment
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 md:gap-4  xl:gap-4 2xl:gap-0">
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-1">
            {leftColumnCancers.map((cancer) => (
              <div
                key={cancer}
                className="rounded-[20px] border border-[#009788]/30 bg-white px-4 py-3 text-center text-sm font-medium text-[#333] shadow-sm transition-all duration-200 hover:border-teal-400 hover:shadow-md xl:px-5 xl:py-6 xl:text-base"
              >
                {cancer}
              </div>
            ))}   
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-2 lg:order-3">
            {rightColumnCancers.map((cancer) => (
              <div
                key={cancer}
                className="rounded-[20px] border border-[#009788]/30 bg-white px-4 py-3 text-center text-sm font-medium text-[#333] shadow-sm transition-all duration-200 hover:border-teal-400 hover:shadow-md xl:px-5 xl:py-6 xl:text-base"
              >
                {cancer}
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative mx-auto mt-5 md:mt-0 h-[400px] md:h-80 w-full max-w-sm overflow-hidden rounded-xl order-3 lg:order-2 lg:h-auto">
            <Image
              src="/cancer-treatment-nurse.png"
              alt="Nurse caring for elderly patient"
              fill
              className="md:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}