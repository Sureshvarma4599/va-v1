"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"
import { ReferenceImage } from "@/components/reference-image"

interface SitToStandTestProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function SitToStandTest({ formData, updateFormData }: SitToStandTestProps) {
  const handleInputChange = (field: string, value: any) => {
    updateFormData("sitToStandTestData", {
      ...formData.sitToStandTestData,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Sit to Stand Test</h2>
        <p className="text-sm text-muted-foreground">
          (Recommended above 60 yrs. or if unable to do squat test) Count the total number of correct stands
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sit-stand-unable"
                checked={formData.sitToStandTestData?.unable === true}
                onCheckedChange={(checked) => handleInputChange("unable", checked === true)}
              />
              <Label htmlFor="sit-stand-unable">Unable to do</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sit-stand-score">Score</Label>
            <div className="flex items-center gap-2">
              <Input
                id="sit-stand-score"
                type="number"
                placeholder="Number"
                className="w-24"
                value={formData.sitToStandTestData?.score || ""}
                onChange={(e) => handleInputChange("score", e.target.value)}
              />
              <span>Reps</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sit-stand-comments">Comments</Label>
            <Textarea
              id="sit-stand-comments"
              placeholder="Comments"
              value={formData.sitToStandTestData?.comments || ""}
              onChange={(e) => handleInputChange("comments", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Reference Image</Label>
          <ReferenceImage
            imageUrl="/sitToStand.jpeg"
            imageAlt="Sit to stand test reference image"
          />
        </div>
      </div>
    </div>
  )
}
