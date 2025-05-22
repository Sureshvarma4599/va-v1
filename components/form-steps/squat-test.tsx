"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"
import { ReferenceImage } from "@/components/reference-image"

interface SquatTestProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function SquatTest({ formData, updateFormData }: SquatTestProps) {
  const handleInputChange = (field: string, value: any) => {
    updateFormData("squatTestData", {
      ...formData.squatTestData,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Squat Test</h2>
        <p className="text-sm text-muted-foreground">(Recommended below 60 yrs) Count the number of squats</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="squat-unable"
                checked={formData.squatTestData?.unable === true}
                onCheckedChange={(checked) => handleInputChange("unable", checked === true)}
              />
              <Label htmlFor="squat-unable">Unable to do</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="squat-score">Score</Label>
            <div className="flex items-center gap-2">
              <Input
                id="squat-score"
                type="number"
                placeholder="Number"
                className="w-24"
                value={formData.squatTestData?.score || ""}
                onChange={(e) => handleInputChange("score", e.target.value)}
              />
              <span>Reps</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="squat-comments">Comments</Label>
            <Textarea
              id="squat-comments"
              placeholder="Comments"
              value={formData.squatTestData?.comments || ""}
              onChange={(e) => handleInputChange("comments", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Reference Image</Label>
          <ReferenceImage imageUrl="/squat.jpeg" imageAlt="Squat test reference image" />
        </div>
      </div>
    </div>
  )
}
