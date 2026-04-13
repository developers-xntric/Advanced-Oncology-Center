'use client'

export default function AboutCenter() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Heading */}
          <div className="space-y-3">
            <p className="text-teal-600 text-sm font-semibold tracking-wide uppercase">
              About Advanced Oncology Center
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight">
              Dedicated to<br />
              Comprehensive<br />
              Cancer Care
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We are devoted exclusively to cancer diagnosis and treatment. Our mission is to provide patients and their families with clarity, trust, and comfort at every stage of the journey.
            </p>
            <p>
              Our patient-centered approach is hard-to-beat to provide accurate diagnosis, personalized treatment plans, and continuous medical support. We understand that cancer care is not only about advanced medicine. It is about guiding patients with compassion, understanding, and unwavering reassurance.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="/about.png"
            alt="Advanced Oncology Center building"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
