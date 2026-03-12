'use client'

import { useState, useMemo } from 'react'

// ─── KCCQ-12 (Kansas City Cardiomyopathy Questionnaire – 12 items) ──────────
// Source: Spertus JA, Jones PG. Development and Validation of a Short Version
// of the Kansas City Cardiomyopathy Questionnaire. Circ Cardiovasc Qual Outcomes.
// 2015;8:469-476. doi:10.1161/CIRCOUTCOMES.115.001958
//
// 4 Domains → Overall Summary Score (OSS), all 0–100 (higher = better)
//   PL = Physical Limitation (Q1a, Q1b, Q1c) — response 6 = missing
//   SF = Symptom Frequency (Q2, Q3, Q4, Q5)
//   QL = Quality of Life (Q6, Q7)
//   SL = Social Limitation (Q8a, Q8b, Q8c) — response 6 = missing
//
// Interpretation: 0–24 Poor | 25–49 Fair | 50–74 Good | 75–100 Excellent
// MCID: ≥5 points = clinically meaningful change

// ─── Question definitions ────────────────────────────────────────────────────

interface Option {
  value: number
  label: string
}

interface Question {
  id: string
  stem: string
  options: Option[]
  domain: 'PL' | 'SF' | 'QL' | 'SL'
  /** Max valid value for scoring. Values above this are treated as missing (e.g. "did not do for other reasons"). */
  maxValid: number
  /** Number of response levels for rescaling (only used by SF domain items) */
  levels?: number
}

const questions: Question[] = [
  // ── Physical Limitation ──
  {
    id: 'q1a',
    stem: 'Showering/bathing',
    domain: 'PL',
    maxValid: 5,
    options: [
      { value: 1, label: 'Extremely limited' },
      { value: 2, label: 'Quite a bit limited' },
      { value: 3, label: 'Moderately limited' },
      { value: 4, label: 'Slightly limited' },
      { value: 5, label: 'Not at all limited' },
      { value: 6, label: 'Limited for other reasons or did not do' },
    ],
  },
  {
    id: 'q1b',
    stem: 'Walking 1 block on level ground',
    domain: 'PL',
    maxValid: 5,
    options: [
      { value: 1, label: 'Extremely limited' },
      { value: 2, label: 'Quite a bit limited' },
      { value: 3, label: 'Moderately limited' },
      { value: 4, label: 'Slightly limited' },
      { value: 5, label: 'Not at all limited' },
      { value: 6, label: 'Limited for other reasons or did not do' },
    ],
  },
  {
    id: 'q1c',
    stem: 'Hurrying or jogging (as if to catch a bus)',
    domain: 'PL',
    maxValid: 5,
    options: [
      { value: 1, label: 'Extremely limited' },
      { value: 2, label: 'Quite a bit limited' },
      { value: 3, label: 'Moderately limited' },
      { value: 4, label: 'Slightly limited' },
      { value: 5, label: 'Not at all limited' },
      { value: 6, label: 'Limited for other reasons or did not do' },
    ],
  },
  // ── Symptom Frequency ──
  {
    id: 'q2',
    stem: 'Over the past 2 weeks, how many times did you have swelling in your feet, ankles, or legs when you woke up in the morning?',
    domain: 'SF',
    maxValid: 5,
    levels: 5,
    options: [
      { value: 1, label: 'Every morning' },
      { value: 2, label: '3+ times/week but not every day' },
      { value: 3, label: '1–2 times per week' },
      { value: 4, label: 'Less than once a week' },
      { value: 5, label: 'Never over the past 2 weeks' },
    ],
  },
  {
    id: 'q3',
    stem: 'Over the past 2 weeks, on average, how many times has fatigue limited your ability to do what you wanted?',
    domain: 'SF',
    maxValid: 7,
    levels: 7,
    options: [
      { value: 1, label: 'All of the time' },
      { value: 2, label: 'Several times per day' },
      { value: 3, label: 'At least once a day' },
      { value: 4, label: '3+ times/week but not every day' },
      { value: 5, label: '1–2 times per week' },
      { value: 6, label: 'Less than once a week' },
      { value: 7, label: 'Never over the past 2 weeks' },
    ],
  },
  {
    id: 'q4',
    stem: 'Over the past 2 weeks, on average, how many times has shortness of breath limited your ability to do what you wanted?',
    domain: 'SF',
    maxValid: 7,
    levels: 7,
    options: [
      { value: 1, label: 'All of the time' },
      { value: 2, label: 'Several times per day' },
      { value: 3, label: 'At least once a day' },
      { value: 4, label: '3+ times/week but not every day' },
      { value: 5, label: '1–2 times per week' },
      { value: 6, label: 'Less than once a week' },
      { value: 7, label: 'Never over the past 2 weeks' },
    ],
  },
  {
    id: 'q5',
    stem: 'Over the past 2 weeks, on average, how many times have you been forced to sleep sitting up in a chair or with at least 3 pillows to prop you up because of shortness of breath?',
    domain: 'SF',
    maxValid: 5,
    levels: 5,
    options: [
      { value: 1, label: 'Every night' },
      { value: 2, label: '3+ times/week but not every day' },
      { value: 3, label: '1–2 times per week' },
      { value: 4, label: 'Less than once a week' },
      { value: 5, label: 'Never over the past 2 weeks' },
    ],
  },
  // ── Quality of Life ──
  {
    id: 'q6',
    stem: 'Over the past 2 weeks, how much has your heart failure limited your enjoyment of life?',
    domain: 'QL',
    maxValid: 5,
    options: [
      { value: 1, label: 'It has extremely limited my enjoyment of life' },
      { value: 2, label: 'It has limited my enjoyment of life quite a bit' },
      { value: 3, label: 'It has moderately limited my enjoyment of life' },
      { value: 4, label: 'It has slightly limited my enjoyment of life' },
      { value: 5, label: 'It has not limited my enjoyment of life at all' },
    ],
  },
  {
    id: 'q7',
    stem: 'If you had to spend the rest of your life with your heart failure the way it is right now, how would you feel about this?',
    domain: 'QL',
    maxValid: 5,
    options: [
      { value: 1, label: 'Not at all satisfied' },
      { value: 2, label: 'Mostly dissatisfied' },
      { value: 3, label: 'Somewhat satisfied' },
      { value: 4, label: 'Mostly satisfied' },
      { value: 5, label: 'Completely satisfied' },
    ],
  },
  // ── Social Limitation ──
  {
    id: 'q8a',
    stem: 'Hobbies, recreational activities',
    domain: 'SL',
    maxValid: 5,
    options: [
      { value: 1, label: 'Severely limited' },
      { value: 2, label: 'Limited quite a bit' },
      { value: 3, label: 'Moderately limited' },
      { value: 4, label: 'Slightly limited' },
      { value: 5, label: 'Did not limit at all' },
      { value: 6, label: 'Does not apply or did not do for other reasons' },
    ],
  },
  {
    id: 'q8b',
    stem: 'Working or doing household chores',
    domain: 'SL',
    maxValid: 5,
    options: [
      { value: 1, label: 'Severely limited' },
      { value: 2, label: 'Limited quite a bit' },
      { value: 3, label: 'Moderately limited' },
      { value: 4, label: 'Slightly limited' },
      { value: 5, label: 'Did not limit at all' },
      { value: 6, label: 'Does not apply or did not do for other reasons' },
    ],
  },
  {
    id: 'q8c',
    stem: 'Visiting family or friends out of your home',
    domain: 'SL',
    maxValid: 5,
    options: [
      { value: 1, label: 'Severely limited' },
      { value: 2, label: 'Limited quite a bit' },
      { value: 3, label: 'Moderately limited' },
      { value: 4, label: 'Slightly limited' },
      { value: 5, label: 'Did not limit at all' },
      { value: 6, label: 'Does not apply or did not do for other reasons' },
    ],
  },
]

// ─── Scoring ─────────────────────────────────────────────────────────────────

interface DomainResult {
  score: number | null
  label: string
  abbr: string
}

interface KCCQ12Results {
  pl: DomainResult
  sf: DomainResult
  ql: DomainResult
  sl: DomainResult
  oss: number | null
}

function computeKCCQ12(answers: Record<string, number | null>): KCCQ12Results {
  // Physical Limitation: mean of valid Q1a–Q1c (exclude value 6), rescale 1–5 → 0–100
  const plItems = ['q1a', 'q1b', 'q1c']
    .map(id => answers[id])
    .filter((v): v is number => v !== null && v <= 5)
  const pl = plItems.length > 0
    ? Math.round(100 * (plItems.reduce((a, b) => a + b, 0) / plItems.length - 1) / 4 * 100) / 100
    : null

  // Symptom Frequency: individually rescale each item, then average
  const sfQuestions = questions.filter(q => q.domain === 'SF')
  const sfRescaled: number[] = []
  for (const q of sfQuestions) {
    const v = answers[q.id]
    if (v !== null && v !== undefined) {
      sfRescaled.push(100 * (v - 1) / (q.levels! - 1))
    }
  }
  const sf = sfRescaled.length > 0
    ? Math.round(sfRescaled.reduce((a, b) => a + b, 0) / sfRescaled.length * 100) / 100
    : null

  // Quality of Life: mean of Q6, Q7, rescale 1–5 → 0–100
  const qlItems = ['q6', 'q7']
    .map(id => answers[id])
    .filter((v): v is number => v !== null)
  const ql = qlItems.length > 0
    ? Math.round(100 * (qlItems.reduce((a, b) => a + b, 0) / qlItems.length - 1) / 4 * 100) / 100
    : null

  // Social Limitation: mean of valid Q8a–Q8c (exclude value 6), rescale 1–5 → 0–100
  const slItems = ['q8a', 'q8b', 'q8c']
    .map(id => answers[id])
    .filter((v): v is number => v !== null && v <= 5)
  const sl = slItems.length > 0
    ? Math.round(100 * (slItems.reduce((a, b) => a + b, 0) / slItems.length - 1) / 4 * 100) / 100
    : null

  // Overall Summary Score: mean of available domain scores
  const domains = [pl, sf, ql, sl].filter((v): v is number => v !== null)
  const oss = domains.length > 0
    ? Math.round(domains.reduce((a, b) => a + b, 0) / domains.length * 100) / 100
    : null

  return {
    pl: { score: pl, label: 'Physical Limitation', abbr: 'PL' },
    sf: { score: sf, label: 'Symptom Frequency', abbr: 'SF' },
    ql: { score: ql, label: 'Quality of Life', abbr: 'QL' },
    sl: { score: sl, label: 'Social Limitation', abbr: 'SL' },
    oss,
  }
}

function getHealthCategory(score: number): { label: string; color: string; bg: string; border: string } {
  if (score < 25) return { label: 'Poor', color: 'text-red-800', bg: 'bg-red-50', border: 'border-red-400' }
  if (score < 50) return { label: 'Fair', color: 'text-yellow-800', bg: 'bg-yellow-50', border: 'border-yellow-400' }
  if (score < 75) return { label: 'Good', color: 'text-blue-800', bg: 'bg-blue-50', border: 'border-blue-400' }
  return { label: 'Excellent', color: 'text-green-800', bg: 'bg-green-50', border: 'border-green-400' }
}

// ─── Domain grouping for rendering ───────────────────────────────────────────

const domainGroups = [
  {
    title: 'Physical Limitation',
    description: 'How much does your heart failure limit you in these activities over the past 2 weeks?',
    ids: ['q1a', 'q1b', 'q1c'],
  },
  {
    title: 'Symptom Frequency',
    description: 'Over the past 2 weeks:',
    ids: ['q2', 'q3', 'q4', 'q5'],
  },
  {
    title: 'Quality of Life',
    description: 'Over the past 2 weeks:',
    ids: ['q6', 'q7'],
  },
  {
    title: 'Social Limitation',
    description: 'How has your heart failure limited your participation in these activities over the past 2 weeks?',
    ids: ['q8a', 'q8b', 'q8c'],
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function KCCQ12Calculator() {
  const [answers, setAnswers] = useState<Record<string, number | null>>(
    Object.fromEntries(questions.map(q => [q.id, null]))
  )

  const setAnswer = (id: string, value: number) => {
    setAnswers(prev => ({ ...prev, [id]: value }))
  }

  const answeredCount = Object.values(answers).filter(v => v !== null).length
  const allAnswered = answeredCount === 12

  const results = useMemo(() => computeKCCQ12(answers), [answers])

  const hasAnyDomain = results.pl.score !== null || results.sf.score !== null ||
    results.ql.score !== null || results.sl.score !== null

  const handleReset = () => {
    setAnswers(Object.fromEntries(questions.map(q => [q.id, null])))
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          KCCQ-12
        </h1>
        <p className="text-gray-600 mt-2">
          Kansas City Cardiomyopathy Questionnaire — 12-item short form for heart failure health status assessment
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Spertus JA, Jones PG. Circ Cardiovasc Qual Outcomes. 2015;8:469-476
        </p>
      </div>

      {/* Key concept callout */}
      <div className="card mb-6 border-l-4 border-blue-400">
        <h2 className="card-header text-base">About KCCQ-12</h2>
        <p className="text-sm text-gray-700 mb-2">
          A <strong>patient-reported</strong> measure of heart failure health status. Scores range <strong>0–100</strong> where{' '}
          <strong>higher scores = better health status</strong>. Validated in all heart failure phenotypes including cardiac amyloidosis
          (used as a key endpoint in ATTR-ACT, APOLLO-B trials).
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="badge-green">100 = Best</span>
          <span className="badge-red">0 = Worst</span>
          <span className="badge-blue">&ge;5 pt change = clinically meaningful</span>
          <span className="badge-purple">~2–4 min to complete</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Questionnaire — left/main column */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {answeredCount}/12 questions answered
            </div>
            <button onClick={handleReset} className="text-xs text-gray-500 hover:text-primary transition-colors">
              Clear all
            </button>
          </div>

          {domainGroups.map((group) => (
            <div key={group.title} className="card">
              <h2 className="card-header text-base">{group.title}</h2>
              <p className="text-xs text-gray-500 mb-4">{group.description}</p>

              <div className="space-y-5">
                {group.ids.map((qId) => {
                  const q = questions.find(qu => qu.id === qId)!
                  return (
                    <div key={q.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {q.stem}
                      </label>
                      <div className="space-y-1.5">
                        {q.options.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setAnswer(q.id, opt.value)}
                            className={`w-full text-left py-2 px-3 rounded-lg text-sm border-2 transition-all ${
                              answers[q.id] === opt.value
                                ? 'border-primary bg-primary/10 text-primary font-medium'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Results — right/sidebar column */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-4 space-y-4">
            {hasAnyDomain ? (
              <>
                {/* Overall Summary Score */}
                <div className={`card border-l-4 ${results.oss !== null ? getHealthCategory(results.oss).border : 'border-gray-300'}`}>
                  <h2 className="card-header text-base">Overall Summary Score</h2>
                  {results.oss !== null ? (
                    <>
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`text-4xl font-bold ${getHealthCategory(results.oss).color}`}>
                          {results.oss.toFixed(1)}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">out of 100</div>
                          <div className={`text-sm font-semibold ${getHealthCategory(results.oss).color}`}>
                            {getHealthCategory(results.oss).label} Health Status
                          </div>
                        </div>
                      </div>

                      {/* Score gauge */}
                      <div className="mb-3">
                        <div className="flex rounded-full overflow-hidden h-3 bg-gray-200">
                          <div className="bg-red-400 flex-1" />
                          <div className="bg-yellow-400 flex-1" />
                          <div className="bg-blue-400 flex-1" />
                          <div className="bg-green-400 flex-1" />
                        </div>
                        <div className="relative h-4 mt-0.5">
                          <div
                            className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-gray-800 transition-all duration-500"
                            style={{ left: `${results.oss}%`, transform: 'translateX(-6px)' }}
                          />
                        </div>
                        <div className="flex text-[10px] text-gray-500 mt-0.5">
                          <div className="flex-1 text-center">Poor<br/>0–24</div>
                          <div className="flex-1 text-center">Fair<br/>25–49</div>
                          <div className="flex-1 text-center">Good<br/>50–74</div>
                          <div className="flex-1 text-center">Excellent<br/>75–100</div>
                        </div>
                      </div>

                      {!allAnswered && (
                        <p className="text-xs text-amber-600">
                          Partial score — {12 - answeredCount} question{12 - answeredCount !== 1 ? 's' : ''} unanswered
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-gray-400">Answer at least one question in any domain</p>
                  )}
                </div>

                {/* Domain Scores */}
                <div className="card">
                  <h2 className="card-header text-base">Domain Scores</h2>
                  <div className="space-y-3">
                    {[results.pl, results.sf, results.ql, results.sl].map((d) => (
                      <div key={d.abbr}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">{d.label} ({d.abbr})</span>
                          <span className={`font-bold ${d.score !== null ? getHealthCategory(d.score).color : 'text-gray-400'}`}>
                            {d.score !== null ? d.score.toFixed(1) : '—'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          {d.score !== null && (
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${Math.max(2, d.score)}%`,
                                backgroundColor: d.score < 25 ? '#ef4444' : d.score < 50 ? '#eab308' : d.score < 75 ? '#3b82f6' : '#22c55e',
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Interpretation */}
                <div className="card">
                  <h2 className="card-header text-base">Clinical Interpretation</h2>
                  <div className="space-y-2 text-sm text-gray-700">
                    {results.oss !== null && results.oss < 25 && (
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="font-semibold text-red-800 mb-1">Poor Health Status</div>
                        <p className="text-xs text-red-700">
                          Severe symptom burden and functional limitation. Consider escalating heart failure therapy,
                          evaluating for advanced therapies, and involving palliative care.
                        </p>
                      </div>
                    )}
                    {results.oss !== null && results.oss >= 25 && results.oss < 50 && (
                      <div className="bg-yellow-50 rounded-lg p-3">
                        <div className="font-semibold text-yellow-800 mb-1">Fair Health Status</div>
                        <p className="text-xs text-yellow-700">
                          Moderate symptom burden. Review GDMT optimization, address volume status,
                          and identify modifiable contributors to symptoms.
                        </p>
                      </div>
                    )}
                    {results.oss !== null && results.oss >= 50 && results.oss < 75 && (
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="font-semibold text-blue-800 mb-1">Good Health Status</div>
                        <p className="text-xs text-blue-700">
                          Relatively preserved function with some limitations. Continue current therapy,
                          optimize modifiable risk factors, and monitor for changes.
                        </p>
                      </div>
                    )}
                    {results.oss !== null && results.oss >= 75 && (
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="font-semibold text-green-800 mb-1">Excellent Health Status</div>
                        <p className="text-xs text-green-700">
                          Minimal symptom burden and functional limitation. Maintain current management
                          and continue routine surveillance.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="card border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-3">📋</div>
                  <p className="text-sm font-medium">Answer questions to see scores</p>
                  <p className="text-xs mt-1">Scores update as each domain is completed</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Longitudinal Use & Change Interpretation */}
      <div className="card mt-6">
        <h2 className="card-header">Tracking Change Over Time</h2>
        <p className="text-sm text-gray-700 mb-3">
          The KCCQ-12 is designed to be administered repeatedly (e.g., at each clinic visit) to track a patient&apos;s
          heart failure trajectory. Changes in the Overall Summary Score have well-validated clinical significance:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="text-sm font-bold text-blue-800 mb-1">&ge;5 point change</div>
            <p className="text-xs text-blue-700">Small but clinically meaningful. Detectable by patients; associated with changes in functional status and prognosis.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="text-sm font-bold text-blue-800 mb-1">&ge;10 point change</div>
            <p className="text-xs text-blue-700">Moderate to large clinical change. Consistent with meaningful improvement or deterioration in daily function.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="text-sm font-bold text-blue-800 mb-1">&ge;20 point change</div>
            <p className="text-xs text-blue-700">Large to very large change. Reflects substantial shift in health status; warrants clinical attention if declining.</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          These thresholds apply equally for improvement and deterioration. A decline of &ge;5 points should prompt
          clinical reassessment. Record scores longitudinally to identify trends.
        </p>
      </div>

      {/* Interpretation Reference Table */}
      <div className="card mt-6">
        <h2 className="card-header">Score Interpretation Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-2 pr-4 font-semibold text-primary">Score Range</th>
                <th className="text-left py-2 px-2 font-semibold text-primary">Health Status</th>
                <th className="text-left py-2 pl-4 font-semibold text-primary">Clinical Implication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-mono font-bold text-red-700">0–24</td>
                <td className="py-2.5 px-2"><span className="badge-red">Poor</span></td>
                <td className="py-2.5 pl-4 text-gray-600">Severe limitations; consider therapy escalation, advanced HF evaluation, palliative care referral</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono font-bold text-yellow-700">25–49</td>
                <td className="py-2.5 px-2"><span className="badge-yellow">Fair</span></td>
                <td className="py-2.5 pl-4 text-gray-600">Moderate limitations; optimize GDMT, address volume status and comorbidities</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono font-bold text-blue-700">50–74</td>
                <td className="py-2.5 px-2"><span className="badge-blue">Good</span></td>
                <td className="py-2.5 pl-4 text-gray-600">Some limitations; continue therapy, optimize risk factors, monitor for change</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono font-bold text-green-700">75–100</td>
                <td className="py-2.5 px-2"><span className="badge-green">Excellent</span></td>
                <td className="py-2.5 pl-4 text-gray-600">Minimal limitations; maintain current management, routine surveillance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-gray-50 rounded-lg p-3">
          <div className="text-xs font-semibold text-gray-500 mb-1">PROGNOSTIC VALUE</div>
          <p className="text-xs text-gray-600">
            Lower KCCQ scores independently predict higher rates of cardiovascular death and heart failure hospitalization.
            In ATTR-CM specifically, KCCQ-12 has been used as a primary endpoint in trials evaluating tafamidis (ATTR-ACT)
            and patisiran (APOLLO-B), demonstrating that stabilization of KCCQ scores represents treatment benefit.
          </p>
        </div>
      </div>

      {/* Source Transparency */}
      <div className="card mt-6">
        <h2 className="card-header text-base">Source Transparency</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <div className="font-semibold text-primary mb-1">Instrument Source</div>
            <p className="text-xs text-gray-500">
              Spertus JA, Jones PG. &ldquo;Development and Validation of a Short Version of the Kansas City
              Cardiomyopathy Questionnaire.&rdquo; <em>Circ Cardiovasc Qual Outcomes.</em> 2015;8:469-476.
              doi:10.1161/CIRCOUTCOMES.115.001958
            </p>
          </div>
          <div>
            <div className="font-semibold text-primary mb-1">Scoring Algorithm</div>
            <p className="text-xs text-gray-600">
              Scoring follows the standard KCCQ-12 algorithm: domain scores are computed by rescaling raw responses
              to 0–100, then the Overall Summary Score is the mean of available domain scores. Symptom frequency
              items (which have different numbers of response options) are individually rescaled before averaging.
              Response option 6 (&ldquo;limited for other reasons&rdquo;) on physical and social limitation items is
              treated as missing data per the official scoring rules.
            </p>
          </div>
          <div>
            <div className="font-semibold text-primary mb-1">Interpretation References</div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>&bull; Spertus JA, et al. &ldquo;Interpreting the Kansas City Cardiomyopathy Questionnaire in Clinical Trials and Clinical Care: JACC State-of-the-Art Review.&rdquo; J Am Coll Cardiol. 2020;76(20):2379-2390</li>
              <li>&bull; MCID thresholds validated across multiple HF trials (DAPA-HF, EMPEROR-Reduced, ATTR-ACT)</li>
              <li>&bull; Scoring logic verified against the Awell Health validated implementation</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-primary mb-1">Licensing Note</div>
            <p className="text-xs text-gray-600">
              The KCCQ is copyrighted by John Spertus, MD, MPH. The question text presented here is paraphrased
              for educational purposes. For official clinical or research use, obtain the licensed instrument from
              the copyright holder or CV Outcomes, Inc.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-800">
        <strong>Disclaimer:</strong> This calculator is for educational and clinical reference purposes only.
        It implements the standard KCCQ-12 scoring algorithm from the peer-reviewed validation study.
        For official clinical use or research, use the licensed KCCQ-12 instrument obtained from the copyright holder.
        Not for direct patient care decisions without physician oversight.
      </div>
    </div>
  )
}
