"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"

interface StressLevelsWorkProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function StressLevelsWork({ formData, updateFormData }: StressLevelsWorkProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Describe your overall Stress levels at Work</h2>
      <RadioGroup
        value={formData.stressWork || ""}
        onValueChange={(value) => updateFormData("stressWork", value)}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="stress-work-no" />
          <Label htmlFor="stress-work-no" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              A
            </span>
            No
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Mild" id="stress-work-mild" />
          <Label htmlFor="stress-work-mild" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              B
            </span>
            Mild
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Moderate" id="stress-work-moderate" />
          <Label htmlFor="stress-work-moderate" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              C
            </span>
            Moderate
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Severe" id="stress-work-severe" />
          <Label htmlFor="stress-work-severe" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              D
            </span>
            Severe
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Extremely severe" id="stress-work-extremely-severe" />
          <Label htmlFor="stress-work-extremely-severe" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              E
            </span>
            Extremely severe
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
