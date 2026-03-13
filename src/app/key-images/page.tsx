'use client'

import Image from 'next/image'

const images = [
  {
    src: '/images/echo-clinical-red-flags.png',
    alt: 'Echocardiographic and clinical red flags in cardiac amyloidosis',
    title: 'Echo & Clinical Red Flags',
    description:
      'Overview of echocardiographic findings (sparkling texture, RV/LV wall thickening, atrial enlargement, pericardial effusion), Doppler red flags (Rule of 5), strain analysis with apical sparing pattern, and clinical red flags for suspected cardiac amyloidosis.',
  },
  {
    src: '/images/pyp-scintigraphy-grading.png',
    alt: '99mTc-PYP scintigraphy visual scoring grades 0–3 with planar and SPECT images',
    title: '⁹⁹ᵐTc-PYP Scintigraphy Grading',
    description:
      'Semiquantitative and quantitative interpretation of ⁹⁹ᵐTc-pyrophosphate scintigraphy. Top: planar 3-hour images with visual grading (Grade 0–3). Middle: heart-to-contralateral lung (H/CL) ratios. Bottom: gray-scale and color SPECT images confirming myocardial uptake.',
  },
  {
    src: '/images/cmr-lge-progression.jpg',
    alt: 'CMR late gadolinium enhancement progression: No LGE to subendocardial LGE to transmural LGE over time',
    title: 'CMR Late Gadolinium Enhancement Progression',
    description:
      'Cardiac MRI short-axis views demonstrating the temporal progression of late gadolinium enhancement (LGE) in cardiac amyloidosis. Left: normal myocardium with no LGE. Center: subendocardial LGE pattern (arrows) indicating early amyloid infiltration. Right: transmural LGE reflecting advanced disease with diffuse amyloid deposition throughout the myocardial wall. This progression from no enhancement → subendocardial → transmural correlates with increasing amyloid burden and worsening prognosis.',
  },
]

export default function KeyImagesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Key Images</h1>
        <p className="text-gray-600">
          Reference images for diagnosis and evaluation of cardiac amyloidosis.
        </p>
      </div>

      <div className="space-y-10">
        {images.map((img) => (
          <div key={img.src} className="card">
            <div className="card-header">
              <h2 className="text-xl font-semibold">{img.title}</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
