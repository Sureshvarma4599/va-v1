"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ReferenceImage } from "@/components/reference-image"

interface ChairSitAndReachTestProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function ChairSitAndReachTest({ formData, updateFormData }: ChairSitAndReachTestProps) {
  const handleInputChange = (field: string, value: any) => {
    updateFormData("chairSitAndReachTestData", {
      ...formData.chairSitAndReachTestData,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Chair Sit and Reach Test</h2>
        <p className="text-sm text-muted-foreground">Measure the distance between the finger and the toe tip</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="chair-unable"
                checked={formData.chairSitAndReachTestData?.unable === true}
                onCheckedChange={(checked) => handleInputChange("unable", checked === true)}
              />
              <Label htmlFor="chair-unable">Unable to do</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="chair-touches"
                checked={formData.chairSitAndReachTestData?.touches === true}
                onCheckedChange={(checked) => handleInputChange("touches", checked === true)}
              />
              <Label htmlFor="chair-touches">Touches or overlap</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="chair-score">Score</Label>
            <div className="flex items-center gap-2">
              <Input
                id="chair-score"
                type="number"
                placeholder="Number"
                className="w-24"
                value={formData.chairSitAndReachTestData?.score || ""}
                onChange={(e) => handleInputChange("score", e.target.value)}
              />
              <div className="flex gap-1">
                <RadioGroup
                  value={formData.chairSitAndReachTestData?.unit || "cm"}
                  onValueChange={(value) => handleInputChange("unit", value)}
                  className="flex"
                >
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="cm" id="chair-cm" />
                    <Label htmlFor="chair-cm">Cm</Label>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <RadioGroupItem value="inches" id="chair-inches" />
                    <Label htmlFor="chair-inches">Inches</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="chair-comments">Comments</Label>
            <Textarea
              id="chair-comments"
              placeholder="Comments"
              value={formData.chairSitAndReachTestData?.comments || ""}
              onChange={(e) => handleInputChange("comments", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Reference Image</Label>
          <ReferenceImage
            imageUrl="/chairSitAndReach.jpeg"
            imageAlt="Chair sit and reach test reference image"
          />
        </div>
      </div>
    </div>
  )
}
