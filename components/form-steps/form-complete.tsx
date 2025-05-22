"use client"

import { CheckCircle } from "lucide-react"
import type { FormData } from "@/components/health-assessment-form"

interface FormCompleteProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function FormComplete({ formData }: FormCompleteProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="rounded-full bg-green-100 p-3 mb-4">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-center">Assessment Complete</h2>
      <p className="text-center text-muted-foreground mt-2 max-w-md">
        Thank you for completing the health assessment. Your responses have been recorded.
      </p>
    </div>
  )
}
