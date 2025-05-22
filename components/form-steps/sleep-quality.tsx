"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"

interface SleepQualityProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function SleepQuality({ formData, updateFormData }: SleepQualityProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">How well do you sleep?</h2>
      <RadioGroup
        value={formData.sleepQuality || ""}
        onValueChange={(value) => updateFormData("sleepQuality", value)}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Good" id="sleep-good" />
          <Label htmlFor="sleep-good" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              A
            </span>
            Good
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Disturbed" id="sleep-disturbed" />
          <Label htmlFor="sleep-disturbed" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              B
            </span>
            Disturbed
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Inadequate" id="sleep-inadequate" />
          <Label htmlFor="sleep-inadequate" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              C
            </span>
            Inadequate
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Unable to initiate sleep" id="sleep-unable-initiate" />
          <Label htmlFor="sleep-unable-initiate" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              D
            </span>
            Unable to initiate sleep
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Not able to sleep" id="sleep-not-able" />
          <Label htmlFor="sleep-not-able" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              E
            </span>
            Not able to sleep
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
