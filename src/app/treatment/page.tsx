'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'attr-cm', label: 'ATTR-CM Therapy' },
  { id: 'al-cm', label: 'AL-CM Therapy' },
  { id: 'hf-management', label: 'HF Management' },
  { id: 'af-arrhythmia', label: 'AF & Arrhythmias' },
  { id: 'advanced-hf', label: 'Advanced HF' },
  { id: 'clinical-trials', label: 'Clinical Trials' },
]

export default function TreatmentPage() {
  const { treatmentTab, setTreatmentTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1">Treatment</h1>
      <p className="text-sm text-gray-500 mb-4">ECDP Sections 6.2, 7.4.5, 7.6 &mdash; Management of Cardiac Amyloidosis</p>

      <div className="flex flex-wrap gap-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTreatmentTab(tab.id)}
            className={`tab-btn ${treatmentTab === tab.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {treatmentTab === 'attr-cm' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">ATTR-CM Disease-Modifying Therapy</h2>

            {/* Tafamidis */}
            <div className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4 mb-4">
              <h3 className="font-bold text-green-800">Tafamidis (TTR Stabilizer)</h3>
              <span className="badge-green">FDA-Approved for ATTR-CM</span>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Key Facts</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Only FDA-approved medication for ATTR-CM (as of 2023)</li>
                    <li>Stabilizes TTR tetramer, slowing dissociation and fibril formation</li>
                    <li>Dosing: tafamidis 61 mg or tafamidis meglumine 80 mg daily</li>
                    <li>Delays progression but does NOT reverse disease</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">ATTR-ACT Trial Results</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Reduced all-cause mortality and CV hospitalizations vs placebo</li>
                    <li>Benefit seen across ATTRwt and ATTRv subgroups</li>
                    <li>Benefit across NYHA class I&ndash;III</li>
                    <li>Mortality benefit evident up to 58 months with long-term extension</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                <strong>Prescribing Pitfalls:</strong> Avoid in patients who are too well (preclinical) or too sick (NYHA class IV). High cost (~$225,000/year) is a major barrier. Copayment assistance programs exist but are complex to navigate.
              </div>
            </div>

            {/* Diflunisal */}
            <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4 mb-4">
              <h3 className="font-bold text-blue-800">Diflunisal (Off-Label TTR Stabilizer)</h3>
              <span className="badge-yellow">Off-Label</span>
              <div className="mt-2 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li>NSAID that also stabilizes TTR tetramer</li>
                  <li>Cost: ~$25&ndash;$50/month (vs $225,000/year for tafamidis)</li>
                  <li>Reasonable alternative for patients who cannot afford tafamidis</li>
                  <li>Avoid with eGFR &lt;45, history of GI bleeding, or on high-dose diuretics</li>
                  <li>Limited retrospective data for ATTR-CM specifically</li>
                </ul>
              </div>
            </div>

            {/* TTR Silencers */}
            <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
              <h3 className="font-bold text-purple-800">TTR Silencers</h3>
              <span className="badge-purple">FDA-Approved for ATTRv Polyneuropathy</span>
              <p className="text-sm text-gray-600 mt-2 mb-3">Block TTR protein production at the RNA level. Currently approved only for ATTRv polyneuropathy; cardiac trials ongoing.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-purple-800 text-white">
                      <th className="text-left py-2 px-3">Agent</th>
                      <th className="text-left py-2 px-3">Type</th>
                      <th className="text-left py-2 px-3">Dosing</th>
                      <th className="text-left py-2 px-3">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white">
                    <tr>
                      <td className="py-2 px-3 font-medium">Patisiran</td>
                      <td className="py-2 px-3">Small interfering RNA</td>
                      <td className="py-2 px-3">0.3 mg/kg IV q3wk</td>
                      <td className="py-2 px-3">Requires premedication; vitamin A 3,000 IU daily</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium">Vutrisiran</td>
                      <td className="py-2 px-3">Small interfering RNA</td>
                      <td className="py-2 px-3">25 mg SC q3mo</td>
                      <td className="py-2 px-3">Vitamin A 3,000 IU daily; more convenient dosing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium">Inotersen</td>
                      <td className="py-2 px-3">Antisense oligonucleotide</td>
                      <td className="py-2 px-3">284 mg SC weekly</td>
                      <td className="py-2 px-3">Monitor platelets weekly, creatinine, UPCR q2wk; risk of thrombocytopenia and glomerulonephritis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Emerging Therapies</h2>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li><strong>CRISPR-Cas9 gene editing:</strong> Phase 1 data in 6 patients with ATTRv showed durable 87% knockdown of TTR after a single infusion, with no major adverse events at short-term follow-up</li>
                <li><strong>Anti-fibril antibodies:</strong> Designed to trigger immune system&ndash;mediated amyloid resorption; clinical trials have not yet met study endpoints</li>
                <li><strong>Combination therapy:</strong> TTR stabilizer + silencer is theoretically synergistic but data are lacking</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {treatmentTab === 'al-cm' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">AL-CM: Plasma-Cell-Directed Therapy (Figure 12)</h2>
            <p className="text-sm text-gray-600 mb-4">
              The goal is to eradicate the pathological plasma cells and eliminate the amyloidogenic light chain from circulation. Treatment is derived from anti&ndash;plasma-cell multiple myeloma therapies.
            </p>

            {/* First-line */}
            <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4 mb-4">
              <h3 className="font-bold text-red-800">First-Line: Daratumumab-CyBorD (Dara-CyBorD)</h3>
              <span className="badge-green">Standard of Care (ANDROMEDA Trial)</span>
              <div className="mt-2 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li><strong>Daratumumab:</strong> Anti-CD38 monoclonal antibody (only agent FDA-approved for AL amyloidosis)</li>
                  <li><strong>CyBorD:</strong> Cyclophosphamide + Bortezomib + Dexamethasone</li>
                  <li>ANDROMEDA trial: 78.5% VGPR or better with Dara-CyBorD vs 49.2% with CyBorD alone</li>
                  <li>Deep hematologic responses are critical for organ improvement</li>
                </ul>
              </div>
            </div>

            {/* SCT pathway */}
            <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4 mb-4">
              <h3 className="font-bold text-blue-800">High-Dose Melphalan + Autologous SCT (HDM/SCT)</h3>
              <div className="mt-2 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li>For highly selected patients; treatment-related mortality ~3% at experienced centers</li>
                  <li>~70% achieve VGPR or better; median survival &gt;15 years in responders</li>
                  <li>Only ~25% of newly diagnosed AL patients are eligible</li>
                  <li>EF &lt;40% generally a contraindication</li>
                  <li>May be supplanted by Dara-CyBorD as first-line therapy</li>
                </ul>
              </div>
            </div>

            {/* Non-SCT */}
            <div className="border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg p-4 mb-4">
              <h3 className="font-bold text-yellow-800">For Patients Not Eligible for SCT</h3>
              <div className="mt-2 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li><strong>Dara-CyBorD</strong> (preferred first-line)</li>
                  <li><strong>CyBorD</strong> (cyclophosphamide, bortezomib, dexamethasone)</li>
                  <li><strong>BMD</strong> (bortezomib-melphalan-dexamethasone)</li>
                  <li>Advanced cardiac involvement (NT-proBNP &gt;8,500): single-agent daratumumab + minimal dexamethasone</li>
                </ul>
              </div>
            </div>

            {/* Response criteria */}
            <h3 className="font-bold text-sm text-primary mb-2">Treatment Response Criteria (Table 10)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Response</th>
                    <th className="text-left py-2 px-3">Hematologic Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-green-50"><td className="py-2 px-3 font-medium">Complete (CR)</td><td className="py-2 px-3">Negative SIFE/UIFE + normal FLC ratio</td></tr>
                  <tr className="bg-green-50"><td className="py-2 px-3 font-medium">VGPR</td><td className="py-2 px-3">dFLC &lt;40 mg/L</td></tr>
                  <tr className="bg-yellow-50"><td className="py-2 px-3 font-medium">Partial (PR)</td><td className="py-2 px-3">dFLC decrease &ge;50%</td></tr>
                  <tr className="bg-red-50"><td className="py-2 px-3 font-medium">No Response (NR)</td><td className="py-2 px-3">dFLC decrease &lt;50%</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-sm text-primary mt-4 mb-2">Organ Response</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Organ</th>
                    <th className="text-left py-2 px-3">Response Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3 font-medium">Cardiac</td><td className="py-2 px-3">NT-proBNP decrease &gt;30% and &lt;300 ng/L (if baseline &gt;650)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Renal</td><td className="py-2 px-3">&ge;30% decrease in proteinuria or drop below 0.5 g/24h without &gt;25% eGFR decrease</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Hepatic</td><td className="py-2 px-3">50% decrease in abnormal ALP or liver size decrease &ge;2 cm</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {treatmentTab === 'hf-management' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Heart Failure Management in Cardiac Amyloidosis (Figure 4)</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-red-800 font-semibold">
                Standard HF GDMT is less well tolerated in cardiac amyloidosis due to restrictive physiology, narrow euvolemic window, and dependence on heart rate for cardiac output.
              </p>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Volume Management (Mainstay of Therapy)</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <ul className="text-sm space-y-2 text-gray-700">
                <li><strong>Loop diuretics</strong> are the cornerstone; many patients present with predominantly right-sided HF symptoms</li>
                <li><strong>Sequential nephron blockade:</strong> Loop + thiazide (e.g., metolazone) may be needed</li>
                <li><strong>MRA (spironolactone):</strong> May be considered; recent TOPCAT subanalysis showed benefit in an amyloid-enriched cohort</li>
                <li><strong>Narrow euvolemic window:</strong> Risk of overdiuresis leading to hyponatremia, hypokalemia, kidney dysfunction</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Standard GDMT: Use With Caution</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Drug Class</th>
                    <th className="text-left py-2 px-3">Concern in Amyloidosis</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-3 font-medium">Beta-blockers</td>
                    <td className="py-2 px-3">Poorly tolerated; patients are HR-dependent for cardiac output. Even low doses can worsen symptoms. Discontinuation may improve outcomes.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">ARNI / ACEi / ARB</td>
                    <td className="py-2 px-3">May be poorly tolerated due to vasodilation + autonomic neuropathy &rarr; orthostatic hypotension. Limited amyloid-specific data.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">SGLT2 inhibitors</td>
                    <td className="py-2 px-3">Theoretical benefit for HFpEF; insufficient evidence for efficacy or harm in amyloidosis specifically.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Digoxin</td>
                    <td className="py-2 px-3">Historically contraindicated (binds to amyloid fibrils in vitro); recent data suggests possible use for AF rate control with close monitoring.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {treatmentTab === 'af-arrhythmia' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Atrial Fibrillation Management</h2>
            <p className="text-sm text-gray-600 mb-3">
              AF prevalence: up to 56% in AL and 70% in ATTR-CM. High risk of thromboembolic events (intracardiac thrombus up to 33% even on anticoagulation).
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-red-800 text-sm mb-2">Anticoagulation: Always Indicated in AF</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Anticoagulate <strong>regardless of CHA2DS2-VASc score</strong></li>
                <li>DOACs have been widely used as first-line, though no RCT data exists specifically for amyloidosis</li>
                <li>TEE to evaluate for LAA thrombus before cardioversion, regardless of anticoagulation duration</li>
                <li>Left atrial appendage closure: data is lacking</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Rate and Rhythm Control</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2">Rate Control</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>Ventricular response rates tend not to be elevated in AF</li>
                  <li>Low-dose beta-blockade may be effective if tolerated without hypotension</li>
                  <li>AV junctional ablation + PPM may be reasonable for refractory AF</li>
                  <li>Digoxin: may be used cautiously with close monitoring</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2">Rhythm Control</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>Consider if patient remains symptomatic despite rate control</li>
                  <li>Amiodarone: generally well tolerated as first-line antiarrhythmic</li>
                  <li>Catheter ablation: higher success rates in earlier-stage disease</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Conduction Disease & Ventricular Arrhythmias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Conduction Disease</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>Prevalent in both AL-CM and ATTR-CM (His-Purkinje involvement)</li>
                  <li>Close monitoring for permanent pacemaker need</li>
                  <li>CRT may be considered if high degree of anticipated pacing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary mb-2">Ventricular Arrhythmias</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>NSVT is common but unclear if it predicts SCD</li>
                  <li>No convincing data that ICD improves survival</li>
                  <li>Insufficient data for ICD as primary prevention beyond standard indications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {treatmentTab === 'advanced-hf' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Advanced Heart Failure in Cardiac Amyloidosis (Figure 15)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Cardiac involvement is the single most important prognostic indicator. Identification of advanced HF and timely triage to appropriate therapies is essential.
            </p>

            <h3 className="font-bold text-sm text-primary mb-2">Markers of Stage D / Advanced HF (Table 13)</h3>
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <ul className="text-sm space-y-1 text-gray-700">
                <li>Repeated HF hospitalizations or ED visits in past 12 months</li>
                <li>Persistent NYHA class III&ndash;IV despite therapy</li>
                <li>Peak VO2 &lt;14 mL/kg/min or 6MWD &lt;300 m</li>
                <li>Escalating diuretic doses (furosemide &gt;160 mg/d or metolazone needed)</li>
                <li>Refractory congestion, worsening kidney/hepatic function</li>
                <li>SBP &le;90 mmHg, cardiac cachexia, persistent hyponatremia (&lt;134 mEq/L)</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Advanced HF Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-sm text-blue-800 mb-2">Heart Transplantation</h4>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>Option for select ATTR-CM and AL-CM with advanced HF</li>
                  <li>Status 4 priority due to lack of durable MCS</li>
                  <li>Median post-transplant survival: 10.2 years in current era</li>
                  <li>Requires evaluation of extracardiac contraindications</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-sm text-orange-800 mb-2">Mechanical Circulatory Support</h4>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>LVADs poorly tolerated: small LV cavity, biventricular involvement</li>
                  <li>Higher risk of suction events with small cavities</li>
                  <li>Temporary MCS (IABP, Impella) may bridge to transplant</li>
                  <li>INTERMACS data: worse survival vs non-amyloid restrictive CM</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-sm text-purple-800 mb-2">Palliative Care</h4>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>Appropriate at any stage for symptom relief</li>
                  <li>Referral for intractable HF, neuropathy, GI distress, emotional/spiritual distress</li>
                  <li>Geriatrics collaboration for polypharmacy, frailty</li>
                  <li>Goals of care discussion throughout disease course</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-sm text-primary mt-4 mb-2">Extracardiac Contraindications to Heart Transplantation (Table 14)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">System</th>
                    <th className="text-left py-2 px-3">Contraindication</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3 font-medium">Frailty</td><td className="py-2 px-3">Fried frailty phenotype &ge;3 criteria (weakness, slowness, exhaustion, low activity, weight loss)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Autonomic neuropathy</td><td className="py-2 px-3">Severe orthostatic hypotension requiring midodrine/droxidopa that cannot be weaned</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Peripheral neuropathy</td><td className="py-2 px-3">Severe enough to limit ambulation (FAP stage 3)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">GI tract</td><td className="py-2 px-3">Modified BMI &lt;600 kg/m&sup2;&middot;g/L; malabsorption</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Pulmonary</td><td className="py-2 px-3">Symptomatic pleural involvement</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Kidney</td><td className="py-2 px-3">Proteinuria &ge;500 mg/d</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Hematologic (AL)</td><td className="py-2 px-3">Light chains not responsive to therapy; high-risk cytogenetics; multiple myeloma</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {treatmentTab === 'clinical-trials' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Phase 3 Clinical Trials in ATTR-CM (Table 2)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Access to clinical trials is an important reason to refer to a cardiac amyloid specialist, particularly for ATTR-CM where tafamidis is the only approved agent.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Trial</th>
                    <th className="text-left py-2 px-3">Agent</th>
                    <th className="text-left py-2 px-3">Type</th>
                    <th className="text-left py-2 px-3">Endpoints</th>
                    <th className="text-left py-2 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-3 font-medium">ATTRIBUTE-CM</td>
                    <td className="py-2 px-3">Acoramidis</td>
                    <td className="py-2 px-3">TTR stabilizer</td>
                    <td className="py-2 px-3">All-cause mortality, CV hospitalization, 6MWD</td>
                    <td className="py-2 px-3">Completed 2020</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">CARDIO-TTRansform</td>
                    <td className="py-2 px-3">Eplontersen</td>
                    <td className="py-2 px-3">Antisense oligonucleotide</td>
                    <td className="py-2 px-3">CV mortality + recurrent CV events to week 140</td>
                    <td className="py-2 px-3">Completed mid-2022</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">HELIOS-B</td>
                    <td className="py-2 px-3">Vutrisiran</td>
                    <td className="py-2 px-3">Small interfering RNA</td>
                    <td className="py-2 px-3">All-cause mortality, recurrent CV events at 30&ndash;36 mo</td>
                    <td className="py-2 px-3">Completed Aug 2021</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">APOLLO-B</td>
                    <td className="py-2 px-3">Patisiran</td>
                    <td className="py-2 px-3">Small interfering RNA</td>
                    <td className="py-2 px-3">6MWD at 12 months</td>
                    <td className="py-2 px-3">Met 12-mo primary endpoint (6MWD improvement)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
