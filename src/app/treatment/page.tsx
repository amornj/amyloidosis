'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'attr-cm', label: 'ATTR-CM Therapy' },
  { id: 'al-cm', label: 'AL-CM Therapy' },
  { id: 'hf-management', label: 'HF Management' },
  { id: 'af-arrhythmia', label: 'AF & Arrhythmias' },
  { id: 'advanced-hf', label: 'Advanced HF' },
  { id: 'clinical-trials', label: 'Clinical Trials' },
  { id: 'monitoring', label: 'Monitoring Response' },
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
            <h2 className="card-header">Acoramidis (Next-Generation TTR Stabilizer)</h2>
            <div className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4 mb-4">
              <span className="badge-green">ATTRibute-CM Trial &mdash; Positive Results</span>
              <div className="mt-2 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li><strong>Mechanism:</strong> Binds and stabilizes TTR tetramer (more potent stabilization than tafamidis in vitro)</li>
                  <li><strong>Dosing:</strong> 800 mg orally twice daily</li>
                  <li><strong>ATTRibute-CM trial:</strong> Favorable win ratio for hierarchical composite of all-cause mortality, CV hospitalizations, NT-proBNP change, and 6MWD change</li>
                  <li>Also showed reduced rates of 6MWD and KCCQ decline vs placebo</li>
                  <li>FDA review pending; may provide an additional approved option for ATTR-CM</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Eplontersen (Antisense Oligonucleotide)</h3>
            <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4 mb-4">
              <span className="badge-blue">Approved for ATTRv Polyneuropathy</span>
              <div className="mt-2 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li><strong>Dosing:</strong> 45 mg SC monthly (convenient self-injection)</li>
                  <li>NEURO-TTRansform: efficacy in ATTRv polyneuropathy</li>
                  <li>Post hoc analysis: improvements in LV end-diastolic volume, stroke volume, and E/e&apos;</li>
                  <li>CARDIO-TTRansform: Phase 3 trial assessing CV mortality + recurrent CV events in ATTR-CM (n &gt;1,400)</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Gene Editing (NTLA-2001 / CRISPR-Cas9)</h3>
            <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4 mb-4">
              <span className="badge-yellow">Phase 3 &mdash; MAGNITUDE Trial</span>
              <div className="mt-2 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li>CRISPR-Cas9 technology permanently edits TTR gene &mdash; single IV infusion</li>
                  <li>Phase 1: sustained 87% mean TTR knockdown at day 28; safe and well-tolerated</li>
                  <li>MAGNITUDE trial (NCT06128629): Phase 3 assessing CV mortality + CV events in ATTR-CM</li>
                  <li>Serial CMR scans used to track changes in cardiac structure, function, and ECV</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Anti-Amyloid Therapies (Fibril Removal)</h3>
            <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4">
              <span className="badge-red">Investigational</span>
              <p className="text-sm text-gray-600 mt-2 mb-2">A new class of agents designed to actively remove amyloid fibrils already deposited in the myocardium &mdash; addressing a critical unmet need, especially in advanced disease.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-red-800 text-white">
                      <th className="text-left py-2 px-2">Agent</th>
                      <th className="text-left py-2 px-2">Mechanism</th>
                      <th className="text-left py-2 px-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white">
                    <tr>
                      <td className="py-2 px-2 font-medium">NI006 (ALXN2220)</td>
                      <td className="py-2 px-2">Anti-ATTR monoclonal IgG1 antibody; promotes macrophage-mediated fibril clearance</td>
                      <td className="py-2 px-2">Phase 1: safe; higher doses reduced NT-proBNP, troponin, and myocardial ECV. Phase 3 planned for ATTR-CM.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 font-medium">PRX004 (Coramitug)</td>
                      <td className="py-2 px-2">Humanized IgG4 antibody binding ATTR amyloid</td>
                      <td className="py-2 px-2">Phase 1: safe in 21 patients; echocardiographic GLS improvement noted. Phase 3 planned.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 font-medium">AT-02</td>
                      <td className="py-2 px-2">Pan-amyloid fusion protein; stimulates immunologic amyloid removal (all amyloid types)</td>
                      <td className="py-2 px-2">Phase 1 ongoing (NCT05951049) using serial CMR with ECV mapping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-2 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                <strong>Clinical Pearl:</strong> Spontaneous antibody-mediated amyloid removal with reversion to near-normal cardiac structure/function has been documented (confirmed by CMR regression of LGE and ECV), providing proof of concept for this therapeutic approach.
              </div>
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
            <h2 className="card-header">ATTR-CM Disease-Modifying Therapy Pipeline</h2>
            <p className="text-sm text-gray-600 mb-4">
              Refer to cardiac amyloid specialist for clinical trial access. Landscape has expanded dramatically since 2023.
            </p>

            <h3 className="font-bold text-sm text-primary mb-2">TTR Stabilizers</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-2">Drug</th>
                    <th className="text-left py-2 px-2">Route / Dose</th>
                    <th className="text-left py-2 px-2">Approval</th>
                    <th className="text-left py-2 px-2">Key Trial</th>
                    <th className="text-left py-2 px-2">Outcomes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-2 font-medium">Diflunisal</td>
                    <td className="py-2 px-2">Oral 250 mg BID</td>
                    <td className="py-2 px-2">Off-label (NSAID)</td>
                    <td className="py-2 px-2">Retrospective studies</td>
                    <td className="py-2 px-2">Association with reduced mortality; stabilizes GLS. Avoid eGFR &lt;45.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 px-2 font-medium">Tafamidis</td>
                    <td className="py-2 px-2">Oral 61 mg or 80 mg daily</td>
                    <td className="py-2 px-2 font-semibold">FDA-approved (ATTR-CM + ATTR-PN)</td>
                    <td className="py-2 px-2">ATTR-ACT</td>
                    <td className="py-2 px-2">Reduced all-cause mortality + CV hospitalizations. Mortality benefit to 58 months.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 px-2 font-medium">Acoramidis</td>
                    <td className="py-2 px-2">Oral 800 mg BID</td>
                    <td className="py-2 px-2 font-semibold">FDA review pending</td>
                    <td className="py-2 px-2">ATTRibute-CM</td>
                    <td className="py-2 px-2">Favorable hierarchical composite; reduced mortality, CV hospitalization, NT-proBNP, 6MWD decline.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Gene Silencers &amp; Gene Editing</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-2">Drug</th>
                    <th className="text-left py-2 px-2">Type / Route</th>
                    <th className="text-left py-2 px-2">Approval</th>
                    <th className="text-left py-2 px-2">Cardiac Trial</th>
                    <th className="text-left py-2 px-2">Cardiac Outcomes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-2 font-medium">Patisiran</td>
                    <td className="py-2 px-2">siRNA; IV q3wk</td>
                    <td className="py-2 px-2">ATTR-PN only</td>
                    <td className="py-2 px-2">APOLLO-B</td>
                    <td className="py-2 px-2">Met 12-mo primary (6MWD). FDA declined ATTR-CM approval (small effect size). Post hoc: reduced LV mass and wall thickness.</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-2 px-2 font-medium">Vutrisiran</td>
                    <td className="py-2 px-2">siRNA; 25 mg SC q3mo</td>
                    <td className="py-2 px-2">ATTR-PN only</td>
                    <td className="py-2 px-2">HELIOS-B</td>
                    <td className="py-2 px-2 font-semibold">Reduced composite of all-cause mortality + recurrent CV events in overall and monotherapy populations.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium">Eplontersen</td>
                    <td className="py-2 px-2">ASO; 45 mg SC monthly</td>
                    <td className="py-2 px-2">ATTR-PN only</td>
                    <td className="py-2 px-2">CARDIO-TTRansform</td>
                    <td className="py-2 px-2">Phase 3 (n &gt;1,400); CV mortality + recurrent CV events. Post hoc: improved stroke volume and EF.</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="py-2 px-2 font-medium">NTLA-2001</td>
                    <td className="py-2 px-2">CRISPR gene edit; single IV</td>
                    <td className="py-2 px-2">Investigational</td>
                    <td className="py-2 px-2">MAGNITUDE</td>
                    <td className="py-2 px-2">Phase 3: CV mortality + CV events. Single infusion permanently edits TTR gene. 87% TTR knockdown.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">Anti-Amyloid Antibodies (Fibril Removal)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-2">Drug</th>
                    <th className="text-left py-2 px-2">Mechanism</th>
                    <th className="text-left py-2 px-2">Stage</th>
                    <th className="text-left py-2 px-2">Key Findings</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-2 font-medium">NI006</td>
                    <td className="py-2 px-2">Anti-ATTR IgG1 antibody</td>
                    <td className="py-2 px-2">Phase 1 &rarr; Phase 3 planned</td>
                    <td className="py-2 px-2">Safe; higher doses reduced NT-proBNP, troponin, myocardial ECV</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium">PRX004</td>
                    <td className="py-2 px-2">Anti-ATTR IgG4 antibody</td>
                    <td className="py-2 px-2">Phase 1 &rarr; Phase 3 planned</td>
                    <td className="py-2 px-2">Safe; improved GLS in evaluable patients</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium">AT-02</td>
                    <td className="py-2 px-2">Pan-amyloid fusion protein</td>
                    <td className="py-2 px-2">Phase 1 ongoing</td>
                    <td className="py-2 px-2">Stimulates immunologic removal of all amyloid types</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {treatmentTab === 'monitoring' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Monitoring Disease Progression &amp; Treatment Response</h2>
            <p className="text-sm text-gray-600 mb-4">
              Imaging-based markers that more accurately reflect amyloid burden are refining prognostic stratification beyond biomarkers alone. (Fontana et al. JACC Cardiovasc Imaging. 2025;18:478&ndash;499)
            </p>

            <h3 className="font-bold text-sm text-primary mb-2">ATTR-CM: Markers of Disease Progression</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Marker</th>
                    <th className="text-left py-2 px-3">Progression Defined As</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3 font-medium">NT-proBNP</td><td className="py-2 px-3">Increase of &gt;700 ng/L and &gt;30% from baseline</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Loop diuretic dose</td><td className="py-2 px-3">Outpatient diuretic intensification (initiation or dose increase)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">6-minute walk distance</td><td className="py-2 px-3">Absolute decrease &gt;35 m or relative decrease &gt;5%</td></tr>
                  <tr><td className="py-2 px-3 font-medium">KCCQ</td><td className="py-2 px-3">Worsening of Kansas City Cardiomyopathy Questionnaire score</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Mitral / tricuspid regurgitation</td><td className="py-2 px-3">Worsening of regurgitation grade</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Stroke volume</td><td className="py-2 px-3">Reduction in stroke volume (independently prognostic)</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-sm text-primary mb-2">AL-CM: Treatment Response Markers</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-2 px-3">Marker</th>
                    <th className="text-left py-2 px-3">Response Defined As</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3 font-medium">NT-proBNP</td><td className="py-2 px-3">Decrease of &gt;300 ng/L and &gt;30% from baseline</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Longitudinal strain (GLS)</td><td className="py-2 px-3">Improvement &ge;2% (independently associated with reduced mortality)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Native T1 (CMR)</td><td className="py-2 px-3">Reduction &ge;50 ms (reflects amyloid burden + edema changes)</td></tr>
                  <tr><td className="py-2 px-3 font-medium">Extracellular volume (CMR)</td><td className="py-2 px-3">Reduction &ge;5% (direct surrogate of amyloid burden; independently prognostic)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Advanced Imaging for Disease Tracking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-sm text-blue-800 mb-2">CMR Multiparametric Mapping</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li><strong>ECV:</strong> Direct measure of myocardial extracellular expansion; best surrogate of amyloid burden</li>
                  <li><strong>Native T1:</strong> Composite signal (amyloid + edema); independently prognostic but less specific than ECV</li>
                  <li><strong>T2 mapping:</strong> Surrogate for myocardial edema; elevated in AL-CM (cytotoxic light chains) but not ATTR-CM</li>
                  <li><strong>LGE transmurality:</strong> Transmural LGE associated with 4-fold higher mortality risk</li>
                  <li>CMR can now define: amyloid burden (ECV), edema (T2), ischemia (perfusion mapping), myocyte response (LV mass &times; [1&minus;ECV])</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-bold text-sm text-purple-800 mb-2">Emerging: Cardiac PET Tracers</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li><strong>&sup1;&sup8;F-florbetapir:</strong> Detects both AL-CA and ATTR-CA; higher/persistent uptake in AL vs ATTR; can detect RV and extracardiac infiltration</li>
                  <li><strong>&sup1;&sup2;&sup4;I-evuzamitide:</strong> Pan-amyloid tracer; may be superior for ATTR-CA; detects hepatic and renal amyloid</li>
                  <li><strong>Status:</strong> Investigational &mdash; not FDA-approved or reimbursed for cardiac imaging</li>
                  <li><strong>Promise:</strong> May enable early detection before structural/functional changes and track treatment response</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
              <strong>Clinical Pearl:</strong> In AL-CM, patients who achieve complete hematologic response and GLS improvement &ge;2% have independently reduced mortality. CMR ECV changes remain prognostic even after adjusting for NT-proBNP and hematologic response.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
