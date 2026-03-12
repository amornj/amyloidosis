'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'genetics', label: 'Genetics' },
  { id: 'neurology', label: 'Neurology' },
  { id: 'gi', label: 'GI' },
  { id: 'hematology', label: 'Hematology' },
  { id: 'nephrology', label: 'Nephrology' },
  { id: 'palliative', label: 'Palliative Care' },
]

export default function SpecialistsPage() {
  const { specialistsTab, setSpecialistsTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1">Specialist Collaboration</h1>
      <p className="text-sm text-gray-500 mb-4">ECDP Step 2 &mdash; Multidisciplinary Extracardiac Care (Section 7)</p>

      <div className="flex flex-wrap gap-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSpecialistsTab(tab.id)}
            className={`tab-btn ${specialistsTab === tab.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {specialistsTab === 'genetics' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Genetic Testing in ATTR Amyloidosis (Figures 5 & 6)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Genetic testing (TTR gene sequencing) is essential for all ATTR-CM patients to distinguish ATTRv from ATTRwt, guide treatment, and enable cascade family screening.
            </p>

            <h3 className="font-bold text-sm text-primary mb-2">Indications for Genetic Testing</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <ul className="text-sm space-y-1 text-gray-700">
                <li>All patients with confirmed ATTR-CM (regardless of age at presentation)</li>
                <li>Individuals with a TTR-related phenotype and clinical evidence to support genetic basis</li>
                <li>First-degree relatives of patients with identified pathogenic/likely pathogenic TTR variants</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Choosing the Gene Panel</h3>
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <ul className="text-sm space-y-1 text-gray-700">
                <li>Ensure TTR is included on the testing panel</li>
                <li>CM gene panels (hypertrophic, restrictive, dilated) often include TTR</li>
                <li>Avoid overly broad panels that may uncover clinically irrelevant variants</li>
                <li>If a TTR variant is found in a patient with &quot;idiopathic dilated CM&quot; &mdash; further testing needed (may be coincidental)</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Genetic Testing Pitfalls</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <ul className="text-sm space-y-1 text-gray-700">
                <li>Incomplete penetrance: a normal TTR genotype does NOT exclude ATTR amyloidosis (ATTRwt)</li>
                <li>Variable expressivity: same variant can manifest as CM, neuropathy, or mixed phenotype</li>
                <li>Age alone is not a valid discriminator of ATTRwt vs ATTRv</li>
                <li>Men have more penetrant TTR-associated disease (reasons unknown)</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Cascade Testing & Asymptomatic Carriers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2">Cascade Testing</h4>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>Indicated only for P/LP variants (not VUS)</li>
                  <li>Most useful for at-risk siblings vs offspring (age-dependent penetrance)</li>
                  <li>Counsel on incomplete penetrance, GINA protections, and life/disability insurance gaps</li>
                  <li>Engage genetic counselor if possible</li>
                </ul>
              </div>
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2">Monitoring Asymptomatic Carriers (Figure 6)</h4>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>Start clinical assessment 10 years before age of onset of proband</li>
                  <li>ECG, NT-proBNP, troponin, echocardiogram with strain</li>
                  <li>Cardiac scintigraphy if abnormal screening results</li>
                  <li>Neurologic consultation if neuropathy symptoms</li>
                  <li>Repeat every 3&ndash;5 years (sooner if symptoms arise)</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-sm text-primary mb-2">Essential Genetic Counseling Components (Table 4)</h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>3-generation family history for the phenotype of interest</li>
                <li>Assess pedigree for inheritance patterns</li>
                <li>Pretest counseling including GINA and life/disability insurance implications</li>
                <li>Select appropriate testing panel based on phenotype</li>
                <li>Discuss results (P, LP, VUS) and implications for at-risk family members</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {specialistsTab === 'neurology' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Neurologic Manifestations (Figure 7)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Polyneuropathy occurs in 17&ndash;35% of AL amyloidosis and variably in ATTRv (depends on variant; e.g., &gt;80% with Val30Met).
              Amyloid neuropathy is rapidly progressive (15&ndash;20x faster than diabetic neuropathy).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="border-2 border-blue-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-blue-800 mb-2">Sensory Symptoms</h3>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>Numbness/pain in feet</li>
                  <li>Inability to sense pain/temperature</li>
                  <li>Impaired balance/falls</li>
                  <li>Starts symmetrically in toes/feet</li>
                </ul>
              </div>
              <div className="border-2 border-orange-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-orange-800 mb-2">Motor Loss</h3>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>Tripping, foot drop</li>
                  <li>Difficulty with stairs</li>
                  <li>Usually after sensory symptoms</li>
                  <li>Distal weakness progresses to gait dysfunction</li>
                </ul>
              </div>
              <div className="border-2 border-purple-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-purple-800 mb-2">Autonomic Dysfunction</h3>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>Orthostatic hypotension</li>
                  <li>Diarrhea/constipation alternating</li>
                  <li>Urinary retention</li>
                  <li>Erectile dysfunction</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <h4 className="font-bold text-sm text-yellow-800">Distinct from Polyneuropathy</h4>
              <p className="text-xs text-gray-700">Carpal tunnel syndrome, lumbar spinal stenosis, and lumbosacral radiculopathy are musculoskeletal manifestations <em>distinct</em> from polyneuropathy, though they may coexist. Conventional nerve conduction studies will not detect small-fiber neuropathy.</p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Management of Amyloid Neuropathy (Figure 8)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Disease-Directed (ATTRv Only)</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li><strong>TTR silencers:</strong> Patisiran, inotersen, vutrisiran</li>
                    <li>FDA-approved for ATTRv polyneuropathy only</li>
                    <li>Tafamidis: not FDA-approved for neuropathy</li>
                    <li>Vitamin A supplementation (3,000 IU/d) required with silencers</li>
                    <li>No evidence silencers benefit ATTRwt polyneuropathy</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Symptomatic Management</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded p-2">
                    <h4 className="font-semibold text-xs">Neuropathic Pain</h4>
                    <p className="text-xs text-gray-600">Pregabalin, gabapentin, duloxetine. TCAs may worsen orthostatic hypotension.</p>
                  </div>
                  <div className="bg-gray-50 rounded p-2">
                    <h4 className="font-semibold text-xs">Orthostatic Hypotension</h4>
                    <p className="text-xs text-gray-600">Compression stockings, salt tablets, midodrine, droxidopa, pyridostigmine. Most poorly tolerated in patients with cardiac involvement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
              <h4 className="font-bold text-sm text-red-800">Neurologic Contraindications to Heart Transplant</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>Severe peripheral neuropathy resulting in inability to ambulate (FAP stage 3)</li>
                <li>Severe autonomic dysfunction requiring midodrine/droxidopa that cannot be weaned</li>
                <li>Malnutrition with modified BMI &lt;600 kg/m&sup2;&middot;g/L</li>
                <li>Urinary retention requiring catheterization</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {specialistsTab === 'gi' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">GI Manifestations of Amyloidosis (Figure 9)</h2>
            <p className="text-sm text-gray-600 mb-4">
              GI symptoms affect up to 60% of AL patients and 63% of ATTRv patients. Mechanisms include mucosal deposition, neuropathic dysmotility, and vascular involvement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="border-2 border-blue-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-blue-800">Mucosal</h3>
                <p className="text-xs text-gray-600 mt-1">Malabsorption, bloating, nausea, vomiting, diarrhea</p>
              </div>
              <div className="border-2 border-orange-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-orange-800">Neuropathic</h3>
                <p className="text-xs text-gray-600 mt-1">GI dysmotility: bloating, nausea, vomiting, diarrhea, constipation</p>
              </div>
              <div className="border-2 border-red-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-red-800">Vascular</h3>
                <p className="text-xs text-gray-600 mt-1">GI bleeding, ischemia</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-700">
                <strong>Diagnostic challenge:</strong> GI symptoms may result from cardiac involvement (volume overload, hepatic congestion) or medication side effects rather than direct GI amyloid infiltration.
                Endoscopy with random biopsies using Congo red staining is the gold standard but only detects mucosal involvement.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">GI Management (Figure 10)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Dietary Modifications</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li><strong>Reflux/nausea:</strong> Small evening meals, longer interval before lying down</li>
                  <li><strong>Malnutrition:</strong> Calorie-dense supplements and shakes</li>
                  <li><strong>Cramping/bloating:</strong> Low FODMAP diet</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Medications</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li><strong>Nausea:</strong> Ondansetron, promethazine, metoclopramide, prucalopride</li>
                  <li><strong>Diarrhea:</strong> Loperamide, rifaximin (for SIBO), bile acid sequestrants, octreotide</li>
                  <li><strong>Constipation:</strong> PEG, magnesium-based laxatives, senna, linaclotide</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-sm text-primary mt-4 mb-2">When to Refer to Gastroenterology (Table 8)</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Symptoms not responding to dietary adjustments or OTC medications</li>
              <li>Significant malnutrition or unexplained weight loss</li>
              <li>Unusual or unexplained GI symptoms</li>
              <li>Need for endoscopy/colonoscopy to assess amyloid deposition</li>
              <li>Assess GI contraindications to heart transplantation</li>
            </ul>
          </div>
        </div>
      )}

      {specialistsTab === 'hematology' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Hematologic Collaboration in AL Amyloidosis</h2>
            <p className="text-sm text-gray-600 mb-4">
              AL amyloidosis is a protein misfolding disorder with an associated plasma cell or B-cell lymphoproliferative disorder.
              Collaboration with hematology is essential for diagnosis, treatment, and monitoring.
            </p>

            <h3 className="font-bold text-sm text-primary mb-2">When to Involve a Hematologist</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <ul className="text-sm space-y-1 text-gray-700">
                <li>Interpretation/evaluation of abnormal monoclonal protein screens</li>
                <li>Monitoring for cardiotoxicity of AL therapies</li>
                <li>Assessment of cardiovascular fitness for HDM/SCT</li>
                <li>Identification of candidacy for heart transplant + post-transplant management</li>
                <li>Distinguishing spurious findings: MGUS, AL amyloidosis, or multiple myeloma</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">MGUS vs AL Amyloidosis</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <ul className="text-sm space-y-1 text-gray-700">
                <li>MGUS prevalence increases with age: ~5% of patients &gt;70 years</li>
                <li>10&ndash;40% of ATTR-CM patients have a concurrent plasma cell dyscrasia (MGUS-like)</li>
                <li>Abnormal monoclonal screen in ATTR-CM may be spurious (CKD-related, age-related MGUS)</li>
                <li>Hematologist helps determine: true MGUS, AL amyloidosis, or multiple myeloma</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Therapies and Cardiac Toxicities (Table 9)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Agent</th>
                    <th className="text-left py-2 px-3">Cardiac Toxicity</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3 font-medium">Bortezomib</td><td className="py-2 px-3">Grade 3 HF in 6.4%, &gt;10% LVEF decrease in 23%</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Carfilzomib</td><td className="py-2 px-3">Dyspnea, LVEF reduction, pulmonary hypertension (36%)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Lenalidomide</td><td className="py-2 px-3">Paradoxical BNP increase (86%), kidney dysfunction (66%)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Cyclophosphamide</td><td className="py-2 px-3">Myocarditis, pericarditis, AF, VT (risk higher with high doses, older age)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Daratumumab</td><td className="py-2 px-3">Cardiac failure 12% (grade 3&ndash;4: 6%), arrhythmia 8%, AF 6%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {specialistsTab === 'nephrology' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Kidney Involvement in Cardiac Amyloidosis (Figure 13)</h2>
            <p className="text-sm text-gray-600 mb-4">
              The kidney is one of the most common sites of amyloid deposition in AL amyloidosis (~70% involvement). ATTR kidney involvement is usually subclinical but can occur.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="border-2 border-blue-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-blue-800">Amyloid Nephropathy</h3>
                <p className="text-xs text-gray-600">Proteinuria, reduced GFR, anasarca. Nephrotic syndrome common in AL, rare in ATTR.</p>
              </div>
              <div className="border-2 border-red-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-red-800">Amyloid Cardiomyopathy</h3>
                <p className="text-xs text-gray-600">Decreased cardiac output, venous hypertension, RAAS activation &rarr; low GFR, sodium/water retention.</p>
              </div>
              <div className="border-2 border-purple-300 rounded-lg p-3">
                <h3 className="font-bold text-sm text-purple-800">Autonomic Neuropathy</h3>
                <p className="text-xs text-gray-600">Orthostatic hypotension, diarrhea &rarr; altered heart rate variability, volume depletion.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-yellow-800">
                <strong>GFR pitfall:</strong> Serum creatinine may overestimate GFR due to muscle wasting. Cystatin C&ndash;based eGFR or 24-hour creatinine clearance may be more accurate.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Role of Nephrologists (Table 11)</h2>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>Managing nephrotic syndrome and chronic kidney disease</li>
              <li>Interpreting serum free light chains and cardiac biomarkers in renal impairment</li>
              <li>Addressing nephrotoxic effects of plasma-cell therapies</li>
              <li>Drug dosing based on kidney function</li>
              <li>Kidney biopsy interpretation</li>
              <li>Dialysis initiation and modality selection</li>
              <li>Assessing suitability for kidney transplantation</li>
            </ul>

            <h3 className="font-bold text-sm text-primary mt-4 mb-2">Kidney Replacement Therapy (Figure 14)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm">Hemodialysis</h4>
                <p className="text-xs text-gray-600">Thrice-weekly may be poorly tolerated. Short daily or nocturnal HD are alternatives.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm">Peritoneal Dialysis</h4>
                <p className="text-xs text-gray-600">Well-tolerated if hemodynamically stable. Continuous modality at home.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm">Kidney Transplant</h4>
                <p className="text-xs text-gray-600">AL: after CR/VGPR; ATTR-CM: combined heart-kidney at select centers.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialistsTab === 'palliative' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Palliative Care in Cardiac Amyloidosis (Figure 16)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Palliative care should be considered at any stage of disease for symptom relief and goals-of-care discussions.
              Cardiac amyloidosis will inevitably progress, with increased symptom burden and complex care needs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {[
                { title: 'Symptom Management', desc: 'Early in the course of illness' },
                { title: 'Goals & Preferences', desc: 'Assessment of values and priorities' },
                { title: 'Pain & Distress Relief', desc: 'Physical and emotional symptoms' },
                { title: 'Family Support', desc: 'Bereavement and coping systems' },
                { title: 'Team Approach', desc: 'Live as actively as possible' },
                { title: 'Geriatrics', desc: 'Polypharmacy, cognitive impairment, frailty' },
              ].map((item) => (
                <div key={item.title} className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-purple-800">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">When to Refer</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Intractable HF symptoms despite optimization</li>
              <li>Severe neuropathy or orthostatic hypotension</li>
              <li>Significant GI distress affecting nutrition</li>
              <li>Emotional or spiritual distress</li>
              <li>Any stage of disease when symptoms interfere with quality of life</li>
            </ul>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Key point:</strong> Palliative care is complementary to active treatment &mdash; it does not mean &quot;giving up.&quot;
                Patients may receive disease-directed therapy (tafamidis, Dara-CyBorD) concurrently with palliative care.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
