"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"

interface StressLevelsHomeProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function StressLevelsHome({ formData, updateFormData }: StressLevelsHomeProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Describe your overall Stress levels at Home</h2>
      <RadioGroup
        value={formData.stressHome || ""}
        onValueChange={(value) => updateFormData("stressHome", value)}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="stress-home-no" />
          <Label htmlFor="stress-home-no" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              A
            </span>
            No
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Mild" id="stress-home-mild" />
          <Label htmlFor="stress-home-mild" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              B
            </span>
            Mild
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Moderate" id="stress-home-moderate" />
          <Label htmlFor="stress-home-moderate" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              C
            </span>
            Moderate
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Severe" id="stress-home-severe" />
          <Label htmlFor="stress-home-severe" className="flex items-center">
            <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              D
            </span>
            Severe
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Extremely severe" id="stress-home-extremely-severe" />
          <Label htmlFor="stress-home-extremely-severe" className="flex items-center">
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
