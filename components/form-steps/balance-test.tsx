"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/components/health-assessment-form"
import { ReferenceImage } from "@/components/reference-image"

interface BalanceTestProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

export function BalanceTest({ formData, updateFormData }: BalanceTestProps) {
  const handleInputChange = (field: string, value: any) => {
    updateFormData("balanceTestData", {
      ...formData.balanceTestData,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Balance Test</h2>
        <p className="text-sm text-muted-foreground">Measure the time in the position</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="balance-unable"
                checked={formData.balanceTestData?.unable === true}
                onCheckedChange={(checked) => handleInputChange("unable", checked === true)}
              />
              <Label htmlFor="balance-unable">Unable to do</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="balance-score">Score</Label>
            <div className="flex items-center gap-2">
              <Input
                id="balance-score"
                type="number"
                placeholder="Number"
                className="w-24"
                value={formData.balanceTestData?.score || ""}
                onChange={(e) => handleInputChange("score", e.target.value)}
              />
              <span>Secs</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="balance-comments">Comments</Label>
            <Textarea
              id="balance-comments"
              placeholder="Comments"
              value={formData.balanceTestData?.comments || ""}
              onChange={(e) => handleInputChange("comments", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Reference Image</Label>
          <ReferenceImage imageUrl="/balance.jpeg" imageAlt="Balance test reference image" />
        </div>
      </div>
    </div>
  )
}
