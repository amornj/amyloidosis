import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  diagnosisTab: string
  setDiagnosisTab: (tab: string) => void

  classificationTab: string
  setClassificationTab: (tab: string) => void

  treatmentTab: string
  setTreatmentTab: (tab: string) => void

  specialistsTab: string
  setSpecialistsTab: (tab: string) => void

  resetAll: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      diagnosisTab: 'red-flags',
      setDiagnosisTab: (tab) => set({ diagnosisTab: tab }),

      classificationTab: 'overview',
      setClassificationTab: (tab) => set({ classificationTab: tab }),

      treatmentTab: 'attr-cm',
      setTreatmentTab: (tab) => set({ treatmentTab: tab }),

      specialistsTab: 'genetics',
      setSpecialistsTab: (tab) => set({ specialistsTab: tab }),

      resetAll: () => set({
        diagnosisTab: 'red-flags',
        classificationTab: 'overview',
        treatmentTab: 'attr-cm',
        specialistsTab: 'genetics',
      }),
    }),
    { name: 'amyloidosis-app' }
  )
)
