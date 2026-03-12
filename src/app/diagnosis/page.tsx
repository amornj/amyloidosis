'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'red-flags', label: 'Red Flags' },
  { id: 'algorithm', label: 'Diagnostic Algorithm' },
  { id: 'monoclonal', label: 'Monoclonal Protein' },
  { id: 'scintigraphy', label: 'Bone Scintigraphy' },
  { id: 'imaging', label: 'Echo & CMR' },
  { id: 'biopsy', label: 'Biopsy' },
]

export default function DiagnosisPage() {
  const { diagnosisTab, setDiagnosisTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1">Diagnosis</h1>
      <p className="text-sm text-gray-500 mb-4">ECDP Section 6.1 &mdash; Suspecting and Diagnosing Cardiac Amyloidosis</p>

      <div className="flex flex-wrap gap-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setDiagnosisTab(tab.id)}
            className={`tab-btn ${diagnosisTab === tab.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {diagnosisTab === 'red-flags' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-red-500">
            <h2 className="card-header text-red-700">Clinical Clues Suggesting Cardiac Amyloidosis</h2>
            <p className="text-sm text-gray-600 mb-4">
              Diagnosis requires a <strong>high index of suspicion</strong>. Many patients see &gt;5 physicians before correct diagnosis.
              The majority of ATTR-CM patients do not receive a timely diagnosis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Cardiac Manifestations</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Clinical</h4>
                    <ul className="text-sm space-y-1">
                      <li>Fatigue</li>
                      <li>Heart failure symptoms</li>
                      <li>Family history of heart failure</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Electrical</h4>
                    <ul className="text-sm space-y-1">
                      <li>Conduction system disease / pacemaker</li>
                      <li>Atrial fibrillation</li>
                      <li>Pseudoinfarct pattern on ECG</li>
                      <li>Discordant QRS voltage for degree of LV wall thickness</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Imaging</h4>
                    <ul className="text-sm space-y-1">
                      <li>Increased LV wall thickness</li>
                      <li>Grade 2 or worse diastolic function</li>
                      <li>Abnormal longitudinal strain with apical sparing</li>
                      <li>Diffuse subendocardial or transmural late gadolinium enhancement on CMR</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Laboratories</h4>
                    <ul className="text-sm space-y-1">
                      <li>Persistent low-level troponin elevation</li>
                      <li>Elevated BNP or NT-proBNP</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Extracardiac Manifestations</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Musculoskeletal</h4>
                    <ul className="text-sm space-y-1">
                      <li>Bilateral carpal tunnel syndrome</li>
                      <li>Lumbar/cervical spinal stenosis</li>
                      <li>Spontaneous biceps tendon rupture</li>
                      <li>Hip or knee replacement</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Neurologic</h4>
                    <ul className="text-sm space-y-1">
                      <li>Peripheral neuropathy</li>
                      <li>Family history of neuropathy</li>
                      <li>Autonomic dysfunction</li>
                      <li>Intolerance to vasodilating antihypertensives</li>
                      <li>Orthostatic hypotension</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Gastrointestinal</h4>
                    <ul className="text-sm space-y-1">
                      <li>Gastroparesis</li>
                      <li>Urinary incontinence</li>
                      <li>Erectile dysfunction</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-semibold text-xs text-gray-500 uppercase mb-1">Renal</h4>
                    <ul className="text-sm space-y-1">
                      <li>Nephrotic syndrome</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Common Diagnostic Mimics</h2>
            <p className="text-sm text-gray-600 mb-3">These conditions are frequently diagnosed before amyloidosis is considered:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Hypertensive Heart Disease', note: 'Increased wall thickness misattributed to hypertension' },
                { label: 'HFpEF', note: '13% of HFpEF patients may have concomitant amyloidosis' },
                { label: 'Aortic Stenosis', note: '16% of AS patients undergoing valve replacement have ATTR-CM' },
                { label: 'Hypertrophic CM', note: 'Infiltrative CM can mimic HCM on imaging' },
              ].map((m) => (
                <div key={m.label} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-yellow-800">{m.label}</h4>
                  <p className="text-xs text-gray-600 mt-1">{m.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'algorithm' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Diagnostic Algorithm for Cardiac Amyloidosis (Figure 3)</h2>
            <p className="text-sm text-gray-600 mb-4">
              The diagnostic pathway begins with clinical suspicion and always starts with a monoclonal protein screen.
            </p>

            {/* Step 1 */}
            <div className="pathway-box border-blue-300 bg-blue-50 mb-3">
              <h3 className="font-bold text-blue-800 text-sm">Step 1: Clinical Suspicion</h3>
              <p className="text-sm text-gray-700">Clues from history, ECG, echocardiogram, CMR (see Red Flags tab)</p>
            </div>
            <div className="pathway-arrow">&darr;</div>

            {/* Step 2 */}
            <div className="pathway-box border-purple-300 bg-purple-50 mb-3">
              <h3 className="font-bold text-purple-800 text-sm">Step 2: Monoclonal Protein Screen</h3>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li><strong>Serum kappa/lambda free light chain</strong> (abnormal if ratio &lt;0.26 or &gt;1.65)</li>
                <li><strong>Serum/urine IFE</strong> (abnormal if monoclonal protein detected)</li>
              </ul>
              <div className="mt-2 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                <strong>Pitfall:</strong> SPEP/UPEP is not as sensitive as IFE. Normal K/L ratio in severe kidney disease: 0.54&ndash;3.30
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Monoclonal protein YES */}
              <div>
                <div className="pathway-box border-red-300 bg-red-50">
                  <h3 className="font-bold text-red-800 text-sm">Monoclonal Protein PRESENT</h3>
                  <div className="pathway-arrow">&darr;</div>
                  <div className="bg-white rounded p-3 border">
                    <h4 className="font-semibold text-sm">Consultation with Hematologist + Biopsy</h4>
                    <ul className="text-xs text-gray-600 mt-1 space-y-0.5">
                      <li>Biopsy of affected organ or surrogate site</li>
                      <li>Positive Congo red staining</li>
                      <li>Tissue typing by mass spectrometry (LC-MS/MS)</li>
                    </ul>
                  </div>
                  <div className="pathway-arrow">&darr;</div>
                  <div className="text-center">
                    <span className="badge-red text-sm px-3 py-1">AL-CM</span>
                  </div>
                </div>
              </div>

              {/* Monoclonal protein NO */}
              <div>
                <div className="pathway-box border-green-300 bg-green-50">
                  <h3 className="font-bold text-green-800 text-sm">Monoclonal Protein ABSENT</h3>
                  <div className="pathway-arrow">&darr;</div>
                  <div className="bg-white rounded p-3 border">
                    <h4 className="font-semibold text-sm">Tc-99m-PYP Scintigraphy</h4>
                    <p className="text-xs text-gray-600 mt-1">Grade 2 or 3 uptake</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Uptake: No</p>
                      <span className="badge-yellow text-xs">Amyloidosis Unlikely</span>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Uptake: Yes</p>
                      <span className="badge-blue text-xs">ATTR-CM</span>
                    </div>
                  </div>
                  <div className="pathway-arrow">&darr;</div>
                  <div className="bg-white rounded p-3 border">
                    <h4 className="font-semibold text-sm">Genetic Testing (TTR)</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-center">
                      <span className="badge-purple text-xs py-1">ATTRv-CM (variant)</span>
                      <span className="badge-teal text-xs py-1">ATTRwt-CM (wild-type)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-bold text-sm text-red-800">Critical Diagnostic Pitfalls</h4>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li><strong>Never</strong> interpret a Tc-PYP scan without a concurrent negative monoclonal protein screen</li>
                <li>Cardiac scintigraphy uptake (grade 2/3) can occur in &gt;10% of AL-CM patients</li>
                <li>Scintigraphy alone cannot distinguish ATTR-CM from AL-CM</li>
                <li>SPECT imaging is required to exclude blood pool uptake (planar alone is insufficient)</li>
                <li>Fat pad biopsy sensitivity: 84% for AL-CM, 45% for ATTRv-CM, 15% for ATTRwt-CM</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'monoclonal' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Monoclonal Protein Screen</h2>
            <p className="text-sm text-gray-600 mb-4">
              The monoclonal protein screen is the obligate first step in the diagnostic algorithm. It assesses for the presence of a plasma cell disorder and therefore supportive evidence for AL-CM.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Test</th>
                    <th className="text-left py-2 px-3">What It Detects</th>
                    <th className="text-left py-2 px-3">Key Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-3 font-medium">Serum Free Light Chains (sFLC)</td>
                    <td className="py-2 px-3">Kappa/lambda ratio abnormality</td>
                    <td className="py-2 px-3">Use ratio (not absolute levels). Normal: 0.26&ndash;1.65. Adjusted for CKD (see below).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Serum IFE (SIFE)</td>
                    <td className="py-2 px-3">Monoclonal protein in serum</td>
                    <td className="py-2 px-3">More sensitive than SPEP. Must be ordered.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Urine IFE (UIFE)</td>
                    <td className="py-2 px-3">Monoclonal protein in urine</td>
                    <td className="py-2 px-3">More sensitive than UPEP. Complete the triad.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-bold text-sm text-blue-800">Combined Sensitivity</h4>
              <p className="text-sm text-gray-700">sFLC + SIFE + UIFE together have <strong>&gt;99% sensitivity</strong> for AL amyloidosis. If all 3 are negative with a normal sFLC ratio, AL can be excluded with ~99% negative predictive value.</p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Light Chain Interpretation by Kidney Function</h2>
            <p className="text-sm text-gray-600 mb-3">The K/L ratio varies with GFR because kidneys preferentially clear kappa.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">eGFR (mL/min/1.73 m&sup2;)</th>
                    <th className="text-left py-2 px-3">Normal K/L Ratio Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3">Normal (&ge;60)</td><td className="py-2 px-3">0.26&ndash;1.65</td></tr>
                  <tr><td className="py-2 px-3">45&ndash;59</td><td className="py-2 px-3">0.46&ndash;2.62</td></tr>
                  <tr><td className="py-2 px-3">30&ndash;44</td><td className="py-2 px-3">0.48&ndash;3.38</td></tr>
                  <tr><td className="py-2 px-3">&lt;30</td><td className="py-2 px-3">0.54&ndash;3.30</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
              <strong>Key:</strong> A low K/L ratio is <em>never</em> normal and always indicates a lambda monoclonal process requiring further investigation.
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'scintigraphy' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Tc-99m Bone Scintigraphy (Tc-PYP / Tc-HMDP / Tc-DPD)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Technetium-based bone-avid radiotracers have emerged as a key noninvasive tool for diagnosing ATTR-CM.
              Tc-PYP is the predominantly used tracer in the United States.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-green-800 text-sm mb-2">Noninvasive ATTR-CM Diagnosis (No Biopsy Needed)</h3>
              <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                <span className="badge-green">Negative Monoclonal Protein Screen</span>
                <span className="text-gray-400 font-bold">+</span>
                <span className="badge-blue">Grade 2 or 3 Uptake on Tc-PYP</span>
                <span className="text-gray-400 font-bold">=</span>
                <span className="badge-purple font-bold">ATTR-CM Confirmed</span>
              </div>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Grading System</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Grade</th>
                    <th className="text-left py-2 px-3">Description</th>
                    <th className="text-left py-2 px-3">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3 font-medium">0</td><td className="py-2 px-3">No cardiac uptake</td><td className="py-2 px-3">ATTR-CM unlikely</td></tr>
                  <tr><td className="py-2 px-3 font-medium">1</td><td className="py-2 px-3">Mild uptake, less than bone</td><td className="py-2 px-3">Equivocal &mdash; consider biopsy if high suspicion</td></tr>
                  <tr><td className="py-2 px-3 font-medium">2</td><td className="py-2 px-3">Moderate uptake, equal to bone</td><td className="py-2 px-3 font-semibold text-green-700">Diagnostic for ATTR-CM (if monoclonal screen negative)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">3</td><td className="py-2 px-3">Strong uptake, greater than bone</td><td className="py-2 px-3 font-semibold text-green-700">Diagnostic for ATTR-CM (if monoclonal screen negative)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-bold text-sm text-red-800">Scintigraphy Pitfalls</h4>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>Grade 2/3 uptake can occur in &gt;10% of AL-CM &mdash; <strong>always</strong> get monoclonal protein screen first</li>
                <li>SPECT imaging is essential to distinguish myocardial uptake from blood pool</li>
                <li>Planar imaging alone risks false positives from blood pool radiotracer</li>
                <li>False-negative Tc-PYP scans can occur &mdash; if clinical suspicion is high, consider biopsy</li>
                <li>Tc-99m-MDP (methyl diphosphonate) is <strong>not</strong> an acceptable tracer for ATTR-CM diagnosis</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-sm text-primary mb-2">False-Negative Scintigraphy: Variant-Specific Pitfalls</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Ser77Tyr, Tyr114Cys, Phe64Leu</strong> variants can present with disproportionately low or absent myocardial radiotracer uptake despite HF symptoms and characteristic imaging on echo/CMR</li>
                  <li>These patients do NOT fulfill the nonbiopsy diagnostic criteria</li>
                  <li>If strong clinical suspicion remains despite no/mild uptake: sequence TTR gene + CMR &rarr; biopsy if needed</li>
                  <li><strong>Grade 1 uptake in ATTRwt:</strong> May represent early disease, preceding structural and functional cardiac abnormalities &mdash; warrants close follow-up</li>
                </ul>
              </div>

              <h3 className="font-bold text-sm text-primary mb-2">Quantitative Scintigraphy &amp; Emerging Nuclear Methods</h3>
              <div className="bg-gray-50 rounded-lg p-3">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Heart-to-contralateral (HCL) ratio:</strong> Quantitative measure from planar imaging for Tc-PYP; HCL &gt;1.6 correlates with higher-grade uptake</li>
                  <li><strong>SPECT/CT:</strong> Preferred over planar alone; enables absolute quantification of uptake and differentiates blood pool from true myocardial signal</li>
                  <li>In the United States, Tc-PYP is most commonly used; in Europe, Tc-DPD and Tc-HMDP are standard</li>
                  <li><strong>Emerging:</strong> SUV-based quantification and cardiac amyloid activity (CAA) scores from SPECT/CT are under investigation for tracking disease progression</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'imaging' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Echocardiographic Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Suggestive Findings</h3>
                <ul className="text-sm space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#9679;</span>Increased LV wall thickness (&ge;1.2 cm, above sex-specific upper limit of normal)</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#9679;</span>Atrioventricular valve / RV free wall / interatrial septum thickening</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#9679;</span>Diastolic dysfunction (grade 2 or worse)</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#9679;</span>Decreased mitral annular systolic velocity (s&apos;)</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#9679;</span>Biatrial enlargement</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#9679;</span>Pericardial effusion</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#9679;</span>Decreased global longitudinal strain with relative <strong>apical sparing</strong> (&quot;cherry on top&quot; pattern)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">ECG-Echo Discordance</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Low QRS voltage</strong> on ECG despite <strong>increased wall thickness</strong> on echo is a classic clue.
                    However, low voltage by commonly applied criteria is only present in ~30% of patients. Its absence does <em>not</em> exclude amyloidosis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Cardiac Magnetic Resonance (CMR)</h2>
            <p className="text-sm text-gray-600 mb-3">CMR provides detailed tissue characterization and helps differentiate amyloidosis from other causes of increased wall thickness.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-bold text-sm text-primary mb-2">Characteristic CMR Features</h3>
                <ul className="text-sm space-y-1">
                  <li>Increased extracellular volume (ECV)</li>
                  <li>Abnormal gadolinium contrast kinetics</li>
                  <li>Diffuse late gadolinium enhancement (LGE) &mdash; subendocardial or transmural</li>
                  <li>Elevated native T1 mapping values</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-bold text-sm text-primary mb-2">CMR Limitations</h3>
                <ul className="text-sm space-y-1">
                  <li>Cannot reliably distinguish AL from ATTR amyloidosis</li>
                  <li>Neither necessary nor sufficient for definitive diagnosis alone</li>
                  <li>Very useful to <strong>exclude</strong> amyloidosis in suspected cases</li>
                  <li>Helpful for identifying other diagnoses (sarcoidosis, hemochromatosis, Fabry)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Advanced CMR: Multiparametric Tissue Characterization</h2>
            <p className="text-sm text-gray-600 mb-3">CMR mapping techniques have dramatically advanced understanding of cardiac amyloidosis pathophysiology and enable noninvasive quantification of amyloid burden. (Fontana et al. JACC Cardiovasc Imaging 2025)</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Technique</th>
                    <th className="text-left py-2 px-3">What It Measures</th>
                    <th className="text-left py-2 px-3">Clinical Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-3 font-medium">ECV (extracellular volume)</td>
                    <td className="py-2 px-3">Direct measure of myocardial extracellular expansion</td>
                    <td className="py-2 px-3">Best surrogate of amyloid burden; independently prognostic even after adjusting for biomarker stage; tracks treatment response</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Native T1</td>
                    <td className="py-2 px-3">Composite signal from intracellular + extracellular space</td>
                    <td className="py-2 px-3">Elevated in CA; prognostic marker; influenced by edema and amyloid &mdash; less specific than ECV as standalone measure</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">T2 mapping</td>
                    <td className="py-2 px-3">Myocardial edema (water content)</td>
                    <td className="py-2 px-3">Elevated in AL-CM (direct light-chain cytotoxicity causes edema) but NOT typically in ATTR-CM &mdash; may help distinguish types</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Stress perfusion</td>
                    <td className="py-2 px-3">Myocardial blood flow under stress</td>
                    <td className="py-2 px-3">Severely reduced in CA (similar to triple-vessel CAD); correlates with amyloid infiltration of arterioles</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm text-blue-800 mb-1">CMR Can Now Define 5 Disease Processes</h4>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-4">
                  <li>Amyloid burden (ECV)</li>
                  <li>Edema (T2)</li>
                  <li>Ischemia (stress perfusion mapping)</li>
                  <li>Myocyte response (LV mass &times; [1&minus;ECV])</li>
                  <li>Disease severity (combination of LGE + ECV)</li>
                </ol>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm text-green-800 mb-1">Atrial Assessment</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Left atrial strain: progressive loss of atrial function from amyloid infiltration</li>
                  <li>Atrial electromechanical dissociation: loss of atrial contraction even in sinus rhythm</li>
                  <li>Direct atrial amyloid infiltration contributes to blood stasis and thrombi, independent of rhythm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'biopsy' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Role of Biopsy in Diagnosis</h2>
            <p className="text-sm text-gray-600 mb-4">
              Biopsy is required when AL amyloidosis is suspected (monoclonal protein present) or when noninvasive ATTR-CM criteria are not met.
            </p>

            <h3 className="font-bold text-sm text-primary mb-2">Biopsy Approaches</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Surrogate Site Biopsy</h4>
                <p className="text-xs text-gray-500 mb-2">Less invasive, office-based</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Fat pad aspiration</strong> &mdash; most common surrogate</li>
                  <li>Sensitivity: 84% AL-CM, 45% ATTRv-CM, 15% ATTRwt-CM</li>
                  <li>Positive result is helpful; negative does NOT exclude amyloidosis</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Organ Biopsy</h4>
                <p className="text-xs text-gray-500 mb-2">More invasive, higher sensitivity</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Endomyocardial biopsy</strong> &mdash; gold standard for cardiac involvement</li>
                  <li>Indicated when surrogate biopsy is negative but suspicion remains high</li>
                  <li>Also useful when cardiac scintigraphy is unavailable</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Tissue Typing</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>Mass spectrometry (LC-MS/MS)</strong> of the biopsy is the gold standard for tissue diagnosis
                (sensitivity 88%, specificity 96%). Congo red staining alone is insufficient to determine the type of amyloid.
                Over 10% of patients with MGUS context can have ATTR deposits in bone marrow &mdash; typing is essential.
              </p>
            </div>

            <h3 className="font-bold text-sm text-primary mt-4 mb-2">When Endomyocardial Biopsy Is Indicated</h3>
            <ol className="text-sm space-y-1 list-decimal ml-4">
              <li>High clinical suspicion + monoclonal protein by IFE and/or abnormal sFLC above upper range &mdash; other biopsy not diagnostic</li>
              <li>High clinical suspicion despite negative or equivocal Tc-PYP imaging</li>
              <li>Cardiac scintigraphy is unavailable</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}
