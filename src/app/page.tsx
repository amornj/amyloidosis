'use client'

import Link from 'next/link'

const sections = [
  {
    href: '/diagnosis',
    title: 'Diagnosis',
    desc: 'Red flags, diagnostic algorithm, monoclonal protein screen, bone scintigraphy, biopsy, CMR',
    icon: '🔍',
    color: 'border-emerald-500',
  },
  {
    href: '/classification',
    title: 'Classification',
    desc: 'AL-CM vs ATTR-CM, wild-type vs variant, TTR variants, staging systems',
    icon: '🧬',
    color: 'border-purple-500',
  },
  {
    href: '/treatment',
    title: 'Treatment',
    desc: 'Tafamidis, acoramidis, gene silencers, gene editing, anti-amyloid antibodies, AL-CM therapy, HF, monitoring',
    icon: '💊',
    color: 'border-red-500',
  },
  {
    href: '/specialists',
    title: 'Specialist Collaboration',
    desc: 'Genetics, neurology, GI, hematology, nephrology, advanced HF, palliative care',
    icon: '👥',
    color: 'border-blue-500',
  },
  {
    href: '/calculator',
    title: 'Calculators',
    desc: 'T-Amylo ATTR-CA risk prediction, KCCQ-12 heart failure health status assessment',
    icon: '🧮',
    color: 'border-amber-500',
  },
  {
    href: '/ask',
    title: 'Ask NotebookLM',
    desc: 'AI-powered Q&A on the 2023 ACC Cardiac Amyloidosis ECDP',
    icon: '🤖',
    color: 'border-pink-500',
  },
]

const top10 = [
  'Cardiac amyloidosis is caused by 2 main proteins: monoclonal immunoglobulin light chains (AL-CM) or transthyretin (ATTR-CM). >90% of cases are one of these two.',
  'ATTR-CM is considerably more common than previously assumed. The Val122Ile variant is carried by 3.5% of self-identified Black Americans (~1.5 million carriers).',
  'Diagnosis requires a high index of suspicion. Many patients see >5 physicians before correct diagnosis. Increased LV wall thickness + HF symptoms should trigger evaluation.',
  'The diagnostic algorithm always starts with a monoclonal protein screen (sFLC + SIFE + UIFE) to assess for AL-CM. Never interpret a Tc-PYP scan without this screen.',
  'Negative monoclonal protein screen + Grade 2/3 uptake on Tc-PYP scintigraphy = noninvasive diagnosis of ATTR-CM (no biopsy needed).',
  'Tafamidis is the only FDA-approved ATTR-CM treatment, but acoramidis (ATTRibute-CM trial), gene silencers (HELIOS-B), gene editing (NTLA-2001), and anti-amyloid antibodies are expanding the pipeline.',
  'AL-CM treatment is plasma-cell-directed: daratumumab-CyBorD (Dara-CyBorD) has emerged as the standard first-line regimen, with 78.5% deep hematologic responses.',
  'Standard HF therapies (ARNI, BB, SGLT2i) are less well tolerated in cardiac amyloidosis due to restrictive physiology. Volume management with loop diuretics is the mainstay.',
  'Anticoagulation is indicated in AF regardless of CHA2DS2-VASc score due to high thromboembolic risk (intracardiac thrombus up to 33%).',
  'Multidisciplinary care is essential: genetics, hematology, neurology, GI, nephrology, and palliative care all play critical roles in managing extracardiac manifestations.',
]

export default function HomePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Cardiac Amyloidosis Clinical Guide
        </h1>
        <p className="text-gray-600 mt-2">
          Based on the 2023 ACC Expert Consensus Decision Pathway and advances from the last decade in cardiac amyloidosis imaging, diagnosis, and treatment
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Kittleson MM, et al. J Am Coll Cardiol. 2023;81:1076-1126 &bull; Fontana M, et al. JACC Cardiovasc Imaging. 2025;18:478-499
        </p>
      </div>

      {/* What Is Cardiac Amyloidosis */}
      <div className="card mb-6 border-l-4 border-primary">
        <h2 className="card-header">What Is Cardiac Amyloidosis?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-2 pr-4 font-semibold text-primary">Feature</th>
                <th className="text-left py-2 font-semibold text-primary">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2 pr-4 font-medium">Definition</td>
                <td className="py-2">Restrictive cardiomyopathy caused by extracellular deposition of amyloid fibrils in the myocardial interstitium</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Two Main Types</td>
                <td className="py-2">
                  <span className="badge-red mr-2">AL-CM</span> Light chain amyloidosis (monoclonal immunoglobulin light chains)
                  <br className="my-1" />
                  <span className="badge-blue mr-2">ATTR-CM</span> Transthyretin amyloidosis (misfolded TTR protein)
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">ATTR-CM Subtypes</td>
                <td className="py-2">
                  <strong>ATTRwt-CM</strong> (wild-type / &quot;senile&quot;) &mdash; age-related TTR misfolding
                  <br />
                  <strong>ATTRv-CM</strong> (variant / &quot;familial&quot;) &mdash; caused by TTR gene mutations
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">AL-CM Incidence</td>
                <td className="py-2">~1 in 75,000&ndash;100,000 annually; 75% of AL patients have cardiac involvement</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">ATTR-CM Prevalence</td>
                <td className="py-2">Increasingly recognized as more common than previously thought; 25% of patients &gt;80 years have TTR amyloid deposits at autopsy</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Prognosis (Untreated)</td>
                <td className="py-2">
                  AL-CM: median survival 0.3&ndash;2.2 years (depending on cardiac involvement)
                  <br />
                  ATTRwt-CM: 3.6&ndash;4.8 years; ATTRv-CM: 2.6&ndash;5.8 years (variant-dependent)
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Why It Matters</td>
                <td className="py-2">Early diagnosis enables treatment that improves survival, physical function, and quality of life. Misdiagnosis as HFpEF, hypertensive heart disease, or HCM is common.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Top 10 Take-Home Messages */}
      <div className="card mb-6">
        <h2 className="card-header">Top 10 Take-Home Messages</h2>
        <ol className="space-y-2">
          {top10.map((msg, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <span className="text-gray-700">{msg}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 3-Step Pathway Summary */}
      <div className="card mb-6">
        <h2 className="card-header">Multidisciplinary Care Pathway (3 Steps)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</span>
              <h3 className="font-bold text-blue-800">Cardiac Collaboration</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-2">
              <li>Recognize clinical red flags</li>
              <li>Execute diagnostic algorithm</li>
              <li>Implement treatment strategy</li>
              <li>Advanced HF, imaging, genetics, palliative care</li>
            </ul>
          </div>
          <div className="border-2 border-teal-300 rounded-lg p-4 bg-teal-50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">2</span>
              <h3 className="font-bold text-teal-800">Extracardiac Collaboration</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-2">
              <li>Gastroenterology</li>
              <li>Hematology</li>
              <li>Nephrology</li>
              <li>Neurology</li>
              <li>Rehabilitation medicine</li>
            </ul>
          </div>
          <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">3</span>
              <h3 className="font-bold text-orange-800">Equitable Care</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-2">
              <li>Awareness in at-risk populations</li>
              <li>Navigate high drug costs</li>
              <li>Telehealth for specialist access</li>
              <li>Encourage clinical trial access</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link key={s.href} href={s.href}>
            <div className={`card border-l-4 ${s.color} hover:shadow-lg transition-shadow cursor-pointer h-full`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-primary">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-800">
        <strong>Disclaimer:</strong> This tool is for educational and clinical reference purposes only.
        It does not replace clinical judgment. Always verify recommendations against the full guideline
        and local protocols. Not for direct patient care decisions without physician oversight.
      </div>
    </div>
  )
}
