'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'overview', label: 'AL vs ATTR' },
  { id: 'ttr-variants', label: 'TTR Variants' },
  { id: 'staging', label: 'Staging Systems' },
  { id: 'rare', label: 'Rare Forms' },
]

export default function ClassificationPage() {
  const { classificationTab, setClassificationTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1">Classification</h1>
      <p className="text-sm text-gray-500 mb-4">Typing Cardiac Amyloidosis &mdash; ECDP Sections 3.2, 6.1, 7.1, 7.4</p>

      <div className="flex flex-wrap gap-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setClassificationTab(tab.id)}
            className={`tab-btn ${classificationTab === tab.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {classificationTab === 'overview' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">AL-CM vs ATTR-CM: Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Feature</th>
                    <th className="text-left py-2 px-3"><span className="badge-red bg-red-200 text-red-900">AL-CM</span></th>
                    <th className="text-left py-2 px-3"><span className="badge-blue bg-blue-200 text-blue-900">ATTR-CM</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-3 font-medium">Protein</td>
                    <td className="py-2 px-3">Monoclonal immunoglobulin light chains (kappa or lambda)</td>
                    <td className="py-2 px-3">Transthyretin (TTR / prealbumin)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Source</td>
                    <td className="py-2 px-3">Clonal plasma cells / B-cell lymphoproliferative disorder</td>
                    <td className="py-2 px-3">Liver (TTR is a transport protein for thyroxine and retinol)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Mechanism</td>
                    <td className="py-2 px-3">Amyloid deposition + direct cytotoxicity of light chains</td>
                    <td className="py-2 px-3">TTR tetramer dissociation &rarr; misfolding &rarr; amyloid fibril deposition</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Subtypes</td>
                    <td className="py-2 px-3">&mdash;</td>
                    <td className="py-2 px-3">ATTRwt-CM (wild-type, age-related) and ATTRv-CM (variant, hereditary)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Age of Onset</td>
                    <td className="py-2 px-3">Median ~65 years</td>
                    <td className="py-2 px-3">ATTRwt: typically &gt;70 years; ATTRv: depends on variant (30s&ndash;80s)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Cardiac Involvement</td>
                    <td className="py-2 px-3">~75% of patients</td>
                    <td className="py-2 px-3">Nearly universal (defines ATTR-CM)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Key Extracardiac</td>
                    <td className="py-2 px-3">Nephrotic syndrome, macroglossia, periorbital purpura, acquired factor X deficiency</td>
                    <td className="py-2 px-3">Carpal tunnel, spinal stenosis, biceps tendon rupture (ATTR); polyneuropathy (ATTRv)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Diagnosis</td>
                    <td className="py-2 px-3">Tissue biopsy + monoclonal protein screen + bone marrow biopsy</td>
                    <td className="py-2 px-3">Noninvasive if negative monoclonal screen + Tc-PYP grade 2/3; then TTR genetic testing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Treatment</td>
                    <td className="py-2 px-3">Plasma-cell-directed: Dara-CyBorD, HDM/SCT, BMD</td>
                    <td className="py-2 px-3">TTR stabilizers (tafamidis); TTR silencers (patisiran, vutrisiran, inotersen) for ATTRv neuropathy</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Prognosis (Untreated)</td>
                    <td className="py-2 px-3">Median 0.3&ndash;2.2 years (by cardiac stage)</td>
                    <td className="py-2 px-3">ATTRwt: 3.6&ndash;4.8 years; ATTRv: 2.6&ndash;5.8 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">ATTRwt-CM vs ATTRv-CM</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Feature</th>
                    <th className="text-left py-2 px-3"><span className="badge-teal bg-teal-200 text-teal-900">ATTRwt-CM</span></th>
                    <th className="text-left py-2 px-3"><span className="badge-purple bg-purple-200 text-purple-900">ATTRv-CM</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-3 font-medium">Genetics</td>
                    <td className="py-2 px-3">Normal (wild-type) TTR gene</td>
                    <td className="py-2 px-3">Pathogenic TTR variant (autosomal dominant)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Also Known As</td>
                    <td className="py-2 px-3">&quot;Senile&quot; or &quot;age-related&quot; cardiac amyloidosis</td>
                    <td className="py-2 px-3">&quot;Familial&quot; ATTR amyloidosis</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Typical Age</td>
                    <td className="py-2 px-3">&gt;70 years, predominantly male</td>
                    <td className="py-2 px-3">Variant-dependent (30s&ndash;80s)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Neuropathy</td>
                    <td className="py-2 px-3">~30% may have polyneuropathy (usually milder)</td>
                    <td className="py-2 px-3">Prominent with many variants (especially Val30Met)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Family Screening</td>
                    <td className="py-2 px-3">Not indicated</td>
                    <td className="py-2 px-3">Cascade genetic testing of first-degree relatives</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">TTR Silencers</td>
                    <td className="py-2 px-3">Not currently indicated</td>
                    <td className="py-2 px-3">FDA-approved for ATTRv polyneuropathy (patisiran, inotersen, vutrisiran)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
              <strong>Important:</strong> All patients with ATTR-CM should undergo genetic testing regardless of age of presentation. Age alone is not a valid discriminator of ATTRwt vs ATTRv.
            </div>
          </div>
        </div>
      )}

      {classificationTab === 'ttr-variants' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Common TTR Variants (Table 3)</h2>
            <p className="text-sm text-gray-600 mb-3">Over 130 known TTR variants. Inheritance is autosomal dominant (one copy sufficient to cause disease). Penetrance is age-dependent and variable.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-2">Variant</th>
                    <th className="text-left py-2 px-2">Frequency</th>
                    <th className="text-left py-2 px-2">Penetrance</th>
                    <th className="text-left py-2 px-2">Onset (y)</th>
                    <th className="text-left py-2 px-2">Cardiac</th>
                    <th className="text-left py-2 px-2">Neuro</th>
                    <th className="text-left py-2 px-2">Population</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-red-50">
                    <td className="py-2 px-2 font-bold">Val122Ile</td>
                    <td className="py-2 px-2">3.5% in Black Americans</td>
                    <td className="py-2 px-2">37.4% by age 75</td>
                    <td className="py-2 px-2">Late 60s</td>
                    <td className="py-2 px-2">+++</td>
                    <td className="py-2 px-2">+</td>
                    <td className="py-2 px-2">Black/Caribbean/West African ancestry</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold">Val30Met (early)</td>
                    <td className="py-2 px-2">Most common worldwide</td>
                    <td className="py-2 px-2">&gt;90%</td>
                    <td className="py-2 px-2">&lt;40</td>
                    <td className="py-2 px-2">+</td>
                    <td className="py-2 px-2">+++</td>
                    <td className="py-2 px-2">Portuguese, Japanese, Swedish</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold">Val30Met (late)</td>
                    <td className="py-2 px-2">1 per million in Japan</td>
                    <td className="py-2 px-2">&gt;60%</td>
                    <td className="py-2 px-2">&gt;50</td>
                    <td className="py-2 px-2">++</td>
                    <td className="py-2 px-2">++</td>
                    <td className="py-2 px-2">Worldwide</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold">Thr60Ala</td>
                    <td className="py-2 px-2">1% in County Donegal, Ireland</td>
                    <td className="py-2 px-2">&gt;90%</td>
                    <td className="py-2 px-2">&gt;50</td>
                    <td className="py-2 px-2">+++</td>
                    <td className="py-2 px-2">++</td>
                    <td className="py-2 px-2">Irish</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold">Leu111Met</td>
                    <td className="py-2 px-2">&lt;1%</td>
                    <td className="py-2 px-2">&gt;90%</td>
                    <td className="py-2 px-2">30&ndash;40</td>
                    <td className="py-2 px-2">+++</td>
                    <td className="py-2 px-2">+</td>
                    <td className="py-2 px-2">Danish</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold">Ile68Leu</td>
                    <td className="py-2 px-2">&lt;1%</td>
                    <td className="py-2 px-2">&gt;90%</td>
                    <td className="py-2 px-2">55</td>
                    <td className="py-2 px-2">+++</td>
                    <td className="py-2 px-2">+</td>
                    <td className="py-2 px-2">Italian, German</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-bold">Phe64Leu</td>
                    <td className="py-2 px-2">&lt;1%</td>
                    <td className="py-2 px-2">Unknown</td>
                    <td className="py-2 px-2">&gt;50</td>
                    <td className="py-2 px-2">++</td>
                    <td className="py-2 px-2">+++</td>
                    <td className="py-2 px-2">Italian</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">+ = less common; ++ = common; +++ = more common. Note: Phe64Leu variant may cause false-negative Tc-DPD scans.</p>
          </div>

          <div className="card">
            <h2 className="card-header">Val122Ile: Critical Health Equity Consideration</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <ul className="text-sm space-y-2 text-gray-700">
                <li><strong>Prevalence:</strong> 3.5% of self-identified Black Americans (~1.5 million allele carriers in the US)</li>
                <li><strong>Ancestry:</strong> Predominantly West African; also Black or African American, Caribbean, Central/South American</li>
                <li><strong>Penetrance:</strong> Echocardiographic features in ~8%; pathologic penetrance at autopsy may be 100% over age 60</li>
                <li><strong>Phenotype:</strong> Predominantly cardiomyopathy; polyneuropathy prevalence ~10%</li>
                <li><strong>Association:</strong> Increased risk of HF even beyond clinically-evident amyloid CM</li>
                <li><strong>Implication:</strong> Consider amyloidosis in Black patients with HFpEF or unexplained LV wall thickness</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {classificationTab === 'staging' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Staging Systems for Cardiac Amyloidosis (Table 12)</h2>
            <p className="text-sm text-gray-600 mb-4">
              For both AL-CM and ATTR-CM, troponin and NT-proBNP are powerful indicators of disease burden and prognosis. Multiple staging systems rely predominantly on these biomarkers.
            </p>

            <h3 className="font-bold text-sm text-primary mb-2">ATTRwt-CM: Mayo Staging System</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Parameter</th>
                    <th className="text-left py-2 px-3">Threshold</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3">Troponin T</td><td className="py-2 px-3">&ge;0.05 ng/mL</td></tr>
                  <tr><td className="py-2 px-3">NT-proBNP</td><td className="py-2 px-3">&ge;3,000 pg/mL</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Stage</th>
                    <th className="text-left py-2 px-3">Criteria</th>
                    <th className="text-left py-2 px-3">Median Survival</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-green-50"><td className="py-2 px-3 font-medium">I</td><td className="py-2 px-3">No parameters above threshold</td><td className="py-2 px-3">66 months</td></tr>
                  <tr className="bg-yellow-50"><td className="py-2 px-3 font-medium">II</td><td className="py-2 px-3">1 parameter above threshold</td><td className="py-2 px-3">40 months</td></tr>
                  <tr className="bg-red-50"><td className="py-2 px-3 font-medium">III</td><td className="py-2 px-3">Both parameters above threshold</td><td className="py-2 px-3">20 months</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">ATTRv-CM: UK Staging System</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Parameter</th>
                    <th className="text-left py-2 px-3">Threshold</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3">NT-proBNP</td><td className="py-2 px-3">&ge;3,000 pg/mL</td></tr>
                  <tr><td className="py-2 px-3">eGFR</td><td className="py-2 px-3">&ge;45 mL/min</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Stage</th>
                    <th className="text-left py-2 px-3">Criteria</th>
                    <th className="text-left py-2 px-3">Median Survival</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-green-50"><td className="py-2 px-3 font-medium">I</td><td className="py-2 px-3">NT-proBNP &lt;3,000 and eGFR &ge;45</td><td className="py-2 px-3">69.2 months</td></tr>
                  <tr className="bg-yellow-50"><td className="py-2 px-3 font-medium">II</td><td className="py-2 px-3">One abnormal</td><td className="py-2 px-3">46.7 months</td></tr>
                  <tr className="bg-red-50"><td className="py-2 px-3 font-medium">III</td><td className="py-2 px-3">Both abnormal</td><td className="py-2 px-3">24.1 months</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">AL-CM: Mayo 2004 Staging</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Parameter</th>
                    <th className="text-left py-2 px-3">Threshold</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3">Troponin T</td><td className="py-2 px-3">&ge;0.035 mcg/L (or TnI &ge;0.1 mcg/L, or hs-TnT &ge;50 ng/L)</td></tr>
                  <tr><td className="py-2 px-3">NT-proBNP</td><td className="py-2 px-3">&ge;332 ng/L</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Stage</th>
                    <th className="text-left py-2 px-3">Criteria</th>
                    <th className="text-left py-2 px-3">Median Survival</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-green-50"><td className="py-2 px-3 font-medium">I</td><td className="py-2 px-3">Neither above threshold</td><td className="py-2 px-3">26.4&ndash;27.2 months</td></tr>
                  <tr className="bg-yellow-50"><td className="py-2 px-3 font-medium">II</td><td className="py-2 px-3">One above threshold</td><td className="py-2 px-3">10.5&ndash;11.1 months</td></tr>
                  <tr className="bg-red-50"><td className="py-2 px-3 font-medium">III</td><td className="py-2 px-3">Both above threshold</td><td className="py-2 px-3">3.5&ndash;4.1 months</td></tr>
                  <tr className="bg-red-100"><td className="py-2 px-3 font-medium">IIIb</td><td className="py-2 px-3">Stage III + NT-proBNP &ge;8,500 pg/mL</td><td className="py-2 px-3">5 months</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-bold text-sm text-yellow-800">Staging Limitations</h4>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>Developed before current effective therapies (daratumumab for AL, tafamidis for ATTR)</li>
                <li>Staging alone may identify patients who are either too well or too sick for advanced HF therapies</li>
                <li>Additional biomarkers: dFLC (for AL-CM) and kidney function (for ATTR-CM) add prognostic value</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {classificationTab === 'rare' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Rare Forms of Cardiac Amyloidosis</h2>
            <p className="text-sm text-gray-600 mb-4">
              While AL and ATTR account for &gt;90% of cardiac amyloidosis cases, rare forms exist and should be considered in specific clinical contexts.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Type</th>
                    <th className="text-left py-2 px-3">Protein</th>
                    <th className="text-left py-2 px-3">Clinical Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-3 font-medium">AA Amyloidosis</td>
                    <td className="py-2 px-3">Serum amyloid A</td>
                    <td className="py-2 px-3">Chronic inflammatory diseases: RA, spondyloarthritis, IBD, chronic infections, familial Mediterranean fever</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">AApoAI</td>
                    <td className="py-2 px-3">Apolipoprotein A-1</td>
                    <td className="py-2 px-3">Rare hereditary form; may have positive Tc-DPD</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">AApoAIV</td>
                    <td className="py-2 px-3">Apolipoprotein A-4</td>
                    <td className="py-2 px-3">Rare; may have positive Tc-DPD</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Heavy-chain</td>
                    <td className="py-2 px-3">Immunoglobulin heavy chains</td>
                    <td className="py-2 px-3">Clinically similar to AL amyloidosis; diagnosed by immunofluorescence with anti-heavy-chain antibodies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
              <strong>Key:</strong> Histologic assessment via biopsy is required for these rare forms. Positive Tc-DPD uptake can occur with AA and apolipoprotein amyloidosis &mdash; false-negative scans can occur with the Phe64Leu TTR variant.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
