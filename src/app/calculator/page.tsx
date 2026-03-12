'use client'

import { useState, useMemo } from 'react'

// ─── T-Amylo Prediction Model & Score ───────────────────────────────────
// Source: Arana-Achaga X, Goena-Vives C, et al. Development and Validation of
// a Prediction Model and Score for Transthyretin Cardiac Amyloidosis Diagnosis:
// T-Amylo. J Am Coll Cardiol Img. 2023;16(12):1567-1580.
// doi:10.1016/j.jcmg.2023.05.002
//
// Full Prediction Model (Table 4 — Final Multivariable Formula):
//   logit(p) = -21.941 + 3.049×CTS + 2.732×Male + 0.332×IVSd + 2.013×LowQRS + 0.168×Age
//   Probability = 1 / (1 + exp(-logit))
//   AUC = 0.92 (derivation), 0.84 (validation)
//
// Simplified Score (T-AMYLO mnemonic):
//   T = Tunnel (carpal tunnel syndrome) → 3 points
//   A = Age ≥80 years → 1 point
//   M = Male gender → 3 points
//   Y = hYpertrophy (IVSd ≥16 mm) → 2 points
//   LO = LOw QRS voltage → 2 points
//   Range: 0–11 | AUC = 0.86 (derivation), 0.82 (validation)
//
// Risk categories (simplified score):
//   0–2 = Low risk (ATTR-CA unlikely)
//   3–6 = Intermediate risk
//   7–11 = High risk (ATTR-CA very likely)

const COEFFICIENTS = {
  constant: -21.941,
  carpalTunnel: 3.049,
  male: 2.732,
  ivsd: 0.332,
  lowQrs: 2.013,
  age: 0.168,
}

function computeProbability(age: number, male: boolean, carpalTunnel: boolean, ivsd: number, lowQrs: boolean): number {
  const logit =
    COEFFICIENTS.constant +
    COEFFICIENTS.age * age +
    COEFFICIENTS.male * (male ? 1 : 0) +
    COEFFICIENTS.carpalTunnel * (carpalTunnel ? 1 : 0) +
    COEFFICIENTS.ivsd * ivsd +
    COEFFICIENTS.lowQrs * (lowQrs ? 1 : 0)
  return 1 / (1 + Math.exp(-logit))
}

function computeSimplifiedScore(age: number, male: boolean, carpalTunnel: boolean, ivsd: number, lowQrs: boolean): number {
  let score = 0
  if (carpalTunnel) score += 3
  if (age >= 80) score += 1
  if (male) score += 3
  if (ivsd >= 16) score += 2
  if (lowQrs) score += 2
  return score
}

type RiskCategory = 'low' | 'intermediate' | 'high'

function getRiskCategory(score: number): RiskCategory {
  if (score <= 2) return 'low'
  if (score <= 6) return 'intermediate'
  return 'high'
}

const riskConfig: Record<RiskCategory, { label: string; color: string; bg: string; border: string; badge: string; recommendation: string; details: string[] }> = {
  low: {
    label: 'Low Risk — ATTR-CA Unlikely',
    color: 'text-green-800',
    bg: 'bg-green-50',
    border: 'border-green-400',
    badge: 'badge-green',
    recommendation: 'Scintigraphy is not necessary. Consider AL-CA vs other diagnoses.',
    details: [
      'Sensitivity 99% (97–100%) — very unlikely to miss ATTR-CA',
      'Specificity 27% (19–35%)',
      'Negative predictive value 97%',
      'In the validation cohort, 25% of patients scored low risk; only 3% had ATTR-CA',
    ],
  },
  intermediate: {
    label: 'Intermediate Risk — Inconclusive',
    color: 'text-yellow-800',
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    badge: 'badge-yellow',
    recommendation: 'Consider other red flags and multiparametric echo score. If clinical suspicion persists, perform scintigraphy + hematologic testing.',
    details: [
      'Further workup recommended to clarify diagnosis',
      'Consider additional red flags: autonomic dysfunction, bilateral carpal tunnel, lumbar spinal stenosis, ruptured biceps tendon',
      'Multiparametric echocardiographic score may aid diagnosis',
    ],
  },
  high: {
    label: 'High Risk — ATTR-CA Very Likely',
    color: 'text-red-800',
    bg: 'bg-red-50',
    border: 'border-red-400',
    badge: 'badge-red',
    recommendation: 'Confirm with bone scintigraphy (Tc-99m PYP/DPD/HMDP) and exclude monoclonal component (sFLC + SIFE + UIFE).',
    details: [
      'Specificity 94% (88–98%) — high confidence when positive',
      'Sensitivity 47% (36–55%)',
      'Positive predictive value 87%',
      'Noninvasive diagnosis of ATTR-CA requires Grade 2–3 uptake on scintigraphy with negative monoclonal protein screen',
    ],
  },
}

export default function CalculatorPage() {
  const [age, setAge] = useState('')
  const [male, setMale] = useState<boolean | null>(null)
  const [carpalTunnel, setCarpalTunnel] = useState<boolean | null>(null)
  const [ivsd, setIvsd] = useState('')
  const [lowQrs, setLowQrs] = useState<boolean | null>(null)
  const [showModel, setShowModel] = useState(false)

  const isComplete = age !== '' && male !== null && carpalTunnel !== null && ivsd !== '' && lowQrs !== null
  const ageNum = parseFloat(age) || 0
  const ivsdNum = parseFloat(ivsd) || 0

  const results = useMemo(() => {
    if (!isComplete) return null
    const probability = computeProbability(ageNum, male!, carpalTunnel!, ivsdNum, lowQrs!)
    const score = computeSimplifiedScore(ageNum, male!, carpalTunnel!, ivsdNum, lowQrs!)
    const risk = getRiskCategory(score)
    return { probability, score, risk }
  }, [isComplete, ageNum, male, carpalTunnel, ivsdNum, lowQrs])

  const handleReset = () => {
    setAge('')
    setMale(null)
    setCarpalTunnel(null)
    setIvsd('')
    setLowQrs(null)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          T-Amylo Calculator
        </h1>
        <p className="text-gray-600 mt-2">
          Prediction model and simplified score for transthyretin cardiac amyloidosis (ATTR-CA) diagnosis
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Arana-Achaga X, Goena-Vives C, et al. J Am Coll Cardiol Img. 2023;16(12):1567-1580
        </p>
      </div>

      {/* Applicability */}
      <div className="card mb-6 border-l-4 border-blue-400">
        <h2 className="card-header text-base">When to Use</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use in patients with <strong>suspected cardiac amyloidosis</strong>: IVSd &ge;12 mm plus &ge;1 clinical red flag (HFpEF, aortic stenosis, hypertensive cardiomyopathy, or other red flags for CA).
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="badge-blue">HFpEF</span>
          <span className="badge-blue">Severe Aortic Stenosis</span>
          <span className="badge-blue">Hypertensive Cardiomyopathy</span>
          <span className="badge-blue">IVSd &ge;12 mm + Red Flags</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          <strong>Not valid for:</strong> AL-CA diagnosis, patients without left ventricular hypertrophy, or IVSd &lt;12 mm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="card-header mb-0">Patient Parameters</h2>
            <button onClick={handleReset} className="text-xs text-gray-500 hover:text-primary transition-colors">
              Clear all
            </button>
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Age <span className="text-gray-400 font-normal">(years)</span>
            </label>
            <input
              type="number"
              min="18"
              max="110"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 75"
              className="input-field"
            />
            {age !== '' && ageNum >= 80 && (
              <p className="text-xs text-amber-600 mt-1">Age &ge;80 → +1 point (simplified score)</p>
            )}
          </div>

          {/* Gender */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
            <div className="flex gap-3">
              <button
                onClick={() => setMale(true)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border-2 transition-all ${
                  male === true
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                Male
                {male === true && <span className="ml-1 text-xs text-primary/70">(+3 pts)</span>}
              </button>
              <button
                onClick={() => setMale(false)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border-2 transition-all ${
                  male === false
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Carpal Tunnel */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Carpal Tunnel Syndrome
            </label>
            <p className="text-xs text-gray-500 mb-2">History of carpal tunnel syndrome (unilateral or bilateral)</p>
            <div className="flex gap-3">
              <button
                onClick={() => setCarpalTunnel(true)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border-2 transition-all ${
                  carpalTunnel === true
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                Yes
                {carpalTunnel === true && <span className="ml-1 text-xs text-primary/70">(+3 pts)</span>}
              </button>
              <button
                onClick={() => setCarpalTunnel(false)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border-2 transition-all ${
                  carpalTunnel === false
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* IVSd */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              IVSd <span className="text-gray-400 font-normal">(mm)</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">Interventricular septum thickness in diastole</p>
            <input
              type="number"
              min="6"
              max="35"
              step="0.1"
              value={ivsd}
              onChange={(e) => setIvsd(e.target.value)}
              placeholder="e.g. 16"
              className="input-field"
            />
            {ivsd !== '' && ivsdNum >= 16 && (
              <p className="text-xs text-amber-600 mt-1">IVSd &ge;16 mm (severe hypertrophy) → +2 points</p>
            )}
            {ivsd !== '' && ivsdNum < 12 && (
              <p className="text-xs text-red-600 mt-1">IVSd &lt;12 mm — T-Amylo score was not validated for this population</p>
            )}
          </div>

          {/* Low QRS voltage */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Low QRS Voltage on ECG
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Peak-to-peak QRS &lt;5 mm in all limb leads and/or &lt;10 mm in all precordial leads
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setLowQrs(true)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border-2 transition-all ${
                  lowQrs === true
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                Yes
                {lowQrs === true && <span className="ml-1 text-xs text-primary/70">(+2 pts)</span>}
              </button>
              <button
                onClick={() => setLowQrs(false)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border-2 transition-all ${
                  lowQrs === false
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                No
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          {results ? (
            <div className="space-y-4">
              {/* Simplified Score */}
              <div className={`card border-l-4 ${riskConfig[results.risk].border}`}>
                <h2 className="card-header text-base">T-Amylo Simplified Score</h2>
                <div className="flex items-center gap-4 mb-3">
                  <div className={`text-4xl font-bold ${riskConfig[results.risk].color}`}>
                    {results.score}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">out of 11 points</div>
                    <div className={`text-sm font-semibold ${riskConfig[results.risk].color}`}>
                      {riskConfig[results.risk].label}
                    </div>
                  </div>
                </div>

                {/* Score breakdown */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <div className="text-xs font-semibold text-gray-500 mb-2">SCORE BREAKDOWN (T-A-M-Y-LO)</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span><strong>T</strong>unnel (Carpal tunnel)</span>
                      <span className="font-mono">{carpalTunnel ? '+3' : ' 0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>A</strong>ge &ge;80 years</span>
                      <span className="font-mono">{ageNum >= 80 ? '+1' : ' 0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>M</strong>ale gender</span>
                      <span className="font-mono">{male ? '+3' : ' 0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>h<strong>Y</strong>pertrophy (IVSd &ge;16 mm)</span>
                      <span className="font-mono">{ivsdNum >= 16 ? '+2' : ' 0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>LO</strong>w QRS voltage</span>
                      <span className="font-mono">{lowQrs ? '+2' : ' 0'}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-1 font-bold">
                      <span>Total</span>
                      <span className="font-mono">{results.score}</span>
                    </div>
                  </div>
                </div>

                {/* Risk gauge */}
                <div className="mb-3">
                  <div className="flex rounded-full overflow-hidden h-3 bg-gray-200">
                    <div className="bg-green-400 flex-[3]" title="Low risk: 0-2" />
                    <div className="bg-yellow-400 flex-[4]" title="Intermediate: 3-6" />
                    <div className="bg-red-400 flex-[5]" title="High risk: 7-11" />
                  </div>
                  <div className="relative h-4 mt-0.5">
                    <div
                      className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-gray-800 transition-all duration-500"
                      style={{ left: `${(results.score / 11) * 100}%`, transform: 'translateX(-6px)' }}
                    />
                  </div>
                  <div className="flex text-[10px] text-gray-500 mt-0.5">
                    <div className="flex-[3] text-center">Low (0–2)</div>
                    <div className="flex-[4] text-center">Intermediate (3–6)</div>
                    <div className="flex-[5] text-center">High (7–11)</div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className={`${riskConfig[results.risk].bg} rounded-lg p-3`}>
                  <div className={`text-sm font-semibold ${riskConfig[results.risk].color} mb-1`}>Clinical Recommendation</div>
                  <p className="text-sm text-gray-700">{riskConfig[results.risk].recommendation}</p>
                </div>
              </div>

              {/* Prediction Model */}
              <div className="card">
                <button
                  onClick={() => setShowModel(!showModel)}
                  className="flex items-center justify-between w-full"
                >
                  <h2 className="card-header text-base mb-0">Full Prediction Model</h2>
                  <span className="text-gray-400 text-lg">{showModel ? '▲' : '▼'}</span>
                </button>
                {showModel && (
                  <div className="mt-3">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-3xl font-bold text-primary">
                        {(results.probability * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">
                        Predicted probability of ATTR-CA
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-4 mb-3 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${Math.max(2, results.probability * 100)}%`,
                          backgroundColor: results.probability < 0.3 ? '#22c55e' : results.probability < 0.6 ? '#eab308' : '#ef4444',
                        }}
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 text-xs">
                      <div className="font-semibold text-gray-500 mb-1">LOGISTIC REGRESSION FORMULA</div>
                      <div className="font-mono text-gray-700 break-all">
                        logit = {COEFFICIENTS.constant} + {COEFFICIENTS.age} × {ageNum} + {COEFFICIENTS.male} × {male ? '1' : '0'} + {COEFFICIENTS.carpalTunnel} × {carpalTunnel ? '1' : '0'} + {COEFFICIENTS.ivsd} × {ivsdNum} + {COEFFICIENTS.lowQrs} × {lowQrs ? '1' : '0'}
                      </div>
                      <div className="font-mono text-gray-700 mt-1">
                        logit = {(
                          COEFFICIENTS.constant +
                          COEFFICIENTS.age * ageNum +
                          COEFFICIENTS.male * (male ? 1 : 0) +
                          COEFFICIENTS.carpalTunnel * (carpalTunnel ? 1 : 0) +
                          COEFFICIENTS.ivsd * ivsdNum +
                          COEFFICIENTS.lowQrs * (lowQrs ? 1 : 0)
                        ).toFixed(4)}
                      </div>
                      <div className="font-mono text-gray-700 mt-1">
                        P(ATTR-CA) = 1 / (1 + e<sup>−logit</sup>) = {(results.probability * 100).toFixed(2)}%
                      </div>
                      <p className="text-gray-500 mt-2">AUC = 0.92 (derivation, n=227), 0.84 (validation, n=895)</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Performance Details */}
              <div className="card">
                <h2 className="card-header text-base">Performance at This Risk Level</h2>
                <ul className="space-y-1.5">
                  {riskConfig[results.risk].details.map((d, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="card border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-3">🧮</div>
                <p className="text-sm font-medium">Complete all fields to see results</p>
                <p className="text-xs mt-1">Both the simplified score and full prediction model will be computed</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Score Reference Table */}
      <div className="card mt-6">
        <h2 className="card-header">T-Amylo Score Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-2 pr-4 font-semibold text-primary">Variable</th>
                <th className="text-center py-2 px-2 font-semibold text-primary">Points</th>
                <th className="text-left py-2 pl-4 font-semibold text-primary">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium"><strong>T</strong>unnel</td>
                <td className="py-2.5 px-2 text-center font-bold text-primary">3</td>
                <td className="py-2.5 pl-4 text-gray-600">History of carpal tunnel syndrome</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium"><strong>A</strong>ge</td>
                <td className="py-2.5 px-2 text-center font-bold text-primary">1</td>
                <td className="py-2.5 pl-4 text-gray-600">&ge;80 years</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium"><strong>M</strong>ale</td>
                <td className="py-2.5 px-2 text-center font-bold text-primary">3</td>
                <td className="py-2.5 pl-4 text-gray-600">Male gender</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">h<strong>Y</strong>pertrophy</td>
                <td className="py-2.5 px-2 text-center font-bold text-primary">2</td>
                <td className="py-2.5 pl-4 text-gray-600">IVSd &ge;16 mm (severe hypertrophy)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium"><strong>LO</strong>w voltage</td>
                <td className="py-2.5 px-2 text-center font-bold text-primary">2</td>
                <td className="py-2.5 pl-4 text-gray-600">QRS &lt;5 mm limb leads and/or &lt;10 mm precordial leads</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-primary/20">
                <td className="py-2 pr-4 font-bold">Total range</td>
                <td className="py-2 px-2 text-center font-bold">0–11</td>
                <td className="py-2 pl-4 text-gray-600">AUC 0.86 (derivation), 0.82 (validation)</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="text-sm font-bold text-green-800 mb-1">0–2 Points: Low Risk</div>
            <p className="text-xs text-green-700">ATTR-CA unlikely. Scintigraphy not necessary. Consider AL-CA vs other diagnoses.</p>
            <p className="text-xs text-green-600 mt-1">Se 99% | NPV 97%</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="text-sm font-bold text-yellow-800 mb-1">3–6 Points: Intermediate</div>
            <p className="text-xs text-yellow-700">Inconclusive. Evaluate additional red flags. If suspicion persists, proceed with scintigraphy + hematologic testing.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="text-sm font-bold text-red-800 mb-1">7–11 Points: High Risk</div>
            <p className="text-xs text-red-700">ATTR-CA very likely. Confirm with scintigraphy and exclude monoclonal component.</p>
            <p className="text-xs text-red-600 mt-1">Sp 94% | PPV 87%</p>
          </div>
        </div>
      </div>

      {/* Source Transparency */}
      <div className="card mt-6">
        <h2 className="card-header text-base">Source Transparency</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <div className="font-semibold text-primary mb-1">Algorithm Source</div>
            <p>
              All coefficients, scoring weights, and cutoffs are reproduced directly from <strong>Table 4</strong> and the{' '}
              <strong>Central Illustration</strong> of:
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Arana-Achaga X, Goena-Vives C, et al. &ldquo;Development and Validation of a Prediction Model and Score for Transthyretin Cardiac Amyloidosis Diagnosis: T-Amylo.&rdquo;{' '}
              <em>J Am Coll Cardiol Img.</em> 2023;16(12):1567-1580. doi:10.1016/j.jcmg.2023.05.002
            </p>
          </div>
          <div>
            <div className="font-semibold text-primary mb-1">Full Prediction Model Coefficients (Table 4)</div>
            <div className="bg-gray-50 rounded p-2 font-mono text-xs overflow-x-auto">
              <div>Constant: {COEFFICIENTS.constant}</div>
              <div>Carpal tunnel syndrome: {COEFFICIENTS.carpalTunnel} (OR 21.087)</div>
              <div>Male: {COEFFICIENTS.male} (OR 15.371)</div>
              <div>IVSd (per 1 mm): {COEFFICIENTS.ivsd} (OR 1.394)</div>
              <div>Low QRS voltage: {COEFFICIENTS.lowQrs} (OR 3.487)</div>
              <div>Age (per 1 year): {COEFFICIENTS.age} (OR 1.183)</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-primary mb-1">Validation</div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Derivation cohort: n=227 from 2 centers (AUC 0.92 model, 0.86 score)</li>
              <li>• External validation cohort: n=895 from 11 centers (AUC 0.84 model, 0.82 score)</li>
              <li>• Tested in 3 clinical scenarios: hypertensive cardiomyopathy (AUC 0.86–0.89), severe AS (AUC 0.85–0.88), HFpEF (AUC 0.84–0.86)</li>
              <li>• Online calculator available at www.t-amylo.com</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-primary mb-1">Limitations</div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Developed and validated in a predominantly Caucasian population</li>
              <li>• Requires IVSd &ge;12 mm — not validated for patients without LV hypertrophy</li>
              <li>• Not valid for diagnosing AL-CA (light-chain cardiac amyloidosis)</li>
              <li>• Does not include strain parameters, CMR features, or biomarker thresholds (by design — to maximize accessibility)</li>
              <li>• Obesity may reduce specificity (association with low voltages and carpal tunnel syndrome)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-800">
        <strong>Disclaimer:</strong> This calculator is for educational and clinical reference purposes only.
        It implements the published T-Amylo score faithfully from the peer-reviewed source article.
        It does not replace clinical judgment. Always verify findings with appropriate diagnostic testing
        and consider the full clinical picture. Not for direct patient care decisions without physician oversight.
      </div>
    </div>
  )
}
