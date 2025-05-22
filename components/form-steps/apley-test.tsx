"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ReferenceImage } from "@/components/reference-image"

interface ApleyTestProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function ApleyTest({ formData, updateFormData }: ApleyTestProps) {
  const handleInputChange = (field: string, value: any) => {
    updateFormData("apleyTestData", {
      ...formData.apleyTestData,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Apley Scratch Test</h2>
        <p className="text-sm text-muted-foreground">Measure the gap between the tips of the middle fingers</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="apley-unable"
                checked={formData.apleyTestData?.unable === true}
                onCheckedChange={(checked) => handleInputChange("unable", checked === true)}
              />
              <Label htmlFor="apley-unable">Unable to do</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="apley-touches"
                checked={formData.apleyTestData?.touches === true}
                onCheckedChange={(checked) => handleInputChange("touches", checked === true)}
              />
              <Label htmlFor="apley-touches">Touches or overlap</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apley-score">Score</Label>
            <div className="flex items-center gap-2">
              <Input
                id="apley-score"
                type="number"
                placeholder="Number"
                className="w-24"
                value={formData.apleyTestData?.score || ""}
                onChange={(e) => handleInputChange("score", e.target.value)}
              />
              <div className="flex gap-1">
                <RadioGroup
                  value={formData.apleyTestData?.unit || "cm"}
                  onValueChange={(value) => handleInputChange("unit", value)}
                  className="flex"
                >
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="cm" id="apley-cm" />
                    <Label htmlFor="apley-cm">Cm</Label>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <RadioGroupItem value="inches" id="apley-inches" />
                    <Label htmlFor="apley-inches">Inches</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apley-comments">Comments</Label>
            <Textarea
              id="apley-comments"
              placeholder="Comments"
              value={formData.apleyTestData?.comments || ""}
              onChange={(e) => handleInputChange("comments", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Reference Image</Label>
          <ReferenceImage
            imageUrl="/apleyScratch.jpeg"
            imageAlt="Apley scratch test reference image"
          />
        </div>
      </div>
    </div>
  )
}
