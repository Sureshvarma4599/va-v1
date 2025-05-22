"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FormData } from "@/components/health-assessment-form"

interface GAD7AssessmentProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

const gad7Questions = [
  {
    id: "nervous",
    text: "Feeling nervous, anxious or on edge",
  },
  {
    id: "worrying",
    text: "Not being able to stop or control worrying",
  },
  {
    id: "worry_different",
    text: "Worrying too much about different things",
  },
  {
    id: "trouble_relaxing",
    text: "Trouble relaxing",
  },
  {
    id: "restless",
    text: "Being so restless that is hard to sit still",
  },
  {
    id: "annoyed",
    text: "Becoming easily annoyed or irritable",
  },
  {
    id: "afraid",
    text: "Feeling afraid as if something awful might happen",
  },
]

const options = [
  { value: "not_at_all", label: "Not at all" },
  { value: "several_days", label: "Several days" },
  { value: "more_than_half", label: "More than half of the days" },
  { value: "nearly_everyday", label: "Nearly everyday" },
]

export function GAD7Assessment({ formData, updateFormData }: GAD7AssessmentProps) {
  const handleChange = (questionId: string, value: string) => {
    updateFormData("gad7Responses", {
      ...formData.gad7Responses,
      [questionId]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">GAD 7</h2>
        <p className="text-sm text-muted-foreground">
          GAD-7 is an internationally accepted self-assessment tool used to screen and measure the severity of
          Generalised Anxiety Disorder (GAD) symptoms. Based on your scores, the physician will recommend the
          appropriate action.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-3 text-left font-medium text-sm">
                Over the last 2 weeks, how often have you been bothered by the following problems?
              </th>
              {options.map((option) => (
                <th key={option.value} className="p-3 text-center font-medium text-sm w-24">
                  {option.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gad7Questions.map((question, index) => (
              <tr key={question.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                <td className="p-3 border-t">{question.text}</td>
                {options.map((option) => (
                  <td key={`${question.id}-${option.value}`} className="p-3 text-center border-t">
                    <RadioGroup
                      value={formData.gad7Responses[question.id] || ""}
                      onValueChange={(value) => handleChange(question.id, value)}
                      className="flex justify-center"
                    >
                      <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} className="h-5 w-5" />
                    </RadioGroup>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
