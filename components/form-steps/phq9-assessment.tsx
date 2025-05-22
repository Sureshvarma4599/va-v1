"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FormData } from "@/components/health-assessment-form"

interface PHQ9AssessmentProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

const phq9Questions = [
  {
    id: "little_interest",
    text: "Little interest or pleasure in doing things",
  },
  {
    id: "feeling_down",
    text: "Feeling down, depressed, or hopeless",
  },
  {
    id: "trouble_sleeping",
    text: "Trouble falling or staying asleep, or sleeping too much",
  },
  {
    id: "feeling_tired",
    text: "Feeling tired or having little energy",
  },
  {
    id: "poor_appetite",
    text: "Poor appetite or overeating",
  },
  {
    id: "feeling_bad",
    text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  },
  {
    id: "trouble_concentrating",
    text: "Trouble concentrating on things, such as reading the newspaper or watching television",
  },
  {
    id: "moving_slowly",
    text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  },
  {
    id: "thoughts_of_death",
    text: "Thoughts that you would be better off dead or of hurting yourself in some way",
  },
]

const options = [
  { value: "not_at_all", label: "Not at all" },
  { value: "several_days", label: "Several days" },
  { value: "more_than_half", label: "More than half of the days" },
  { value: "nearly_everyday", label: "Nearly everyday" },
]

export function PHQ9Assessment({ formData, updateFormData }: PHQ9AssessmentProps) {
  const handleChange = (questionId: string, value: string) => {
    updateFormData("phq9Responses", {
      ...formData.phq9Responses,
      [questionId]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">PHQ 9</h2>
        <p className="text-sm text-muted-foreground">
          PHQ-9 is an internationally accepted self-assessment tool used to screen and measure the severity of
          depression symptoms. Based on your scores, the physician will recommend the appropriate action.
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
            {phq9Questions.map((question, index) => (
              <tr key={question.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                <td className="p-3 border-t">{question.text}</td>
                {options.map((option) => (
                  <td key={`${question.id}-${option.value}`} className="p-3 text-center border-t">
                    <RadioGroup
                      value={formData.phq9Responses[question.id] || ""}
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
