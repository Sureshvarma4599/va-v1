"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FormData } from "@/components/health-assessment-form"

interface StopBangAssessmentProps {
  formData: FormData
  updateFormData: (fieldName: string, value: any) => void
}

const stopBangQuestions = [
  {
    id: "snore",
    text: "Do you snore loudly (louder then talking or loud enough to be heard through closed doors)?",
  },
  {
    id: "tired",
    text: "Do you often feel tired, fatigued, or sleepy during the daytime?",
  },
  {
    id: "observed",
    text: "Has anyone observed you stop breathing during your sleep?",
  },
  {
    id: "pressure",
    text: "Do you have or are you being treated for high blood pressure?",
  },
  {
    id: "bmi",
    text: "BMI more than 35 kg/m2?",
  },
  {
    id: "age",
    text: "Age over 50 years old?",
  },
  {
    id: "neck",
    text: "Neck circumference greater than 40 cm?",
  },
  {
    id: "gender",
    text: "Gender male?",
  },
]

export function StopBangAssessment({ formData, updateFormData }: StopBangAssessmentProps) {
  const handleChange = (questionId: string, value: boolean) => {
    updateFormData("stopBangResponses", {
      ...formData.stopBangResponses,
      [questionId]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">STOP BANG scoring model</h2>
        <p className="text-sm text-muted-foreground">
          The STOP BANG questionnaire is an internationally accepted assessment tool to evaluate the severity of OSA.
          Obstructive sleep apnea (OSA) is a type of disorder characterized by abnormal breathing patterns during sleep.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-3 text-left font-medium text-sm">Question</th>
              <th className="p-3 text-center font-medium text-sm w-24">Yes</th>
              <th className="p-3 text-center font-medium text-sm w-24">No</th>
            </tr>
          </thead>
          <tbody>
            {stopBangQuestions.map((question, index) => (
              <tr key={question.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                <td className="p-3 border-t">{question.text}</td>
                <td className="p-3 text-center border-t">
                  <RadioGroup
                    value={
                      formData.stopBangResponses[question.id] === true
                        ? "yes"
                        : formData.stopBangResponses[question.id] === false
                          ? "no"
                          : ""
                    }
                    onValueChange={(value) => handleChange(question.id, value === "yes")}
                    className="flex justify-center"
                  >
                    <RadioGroupItem value="yes" id={`${question.id}-yes`} className="h-5 w-5" />
                  </RadioGroup>
                </td>
                <td className="p-3 text-center border-t">
                  <RadioGroup
                    value={
                      formData.stopBangResponses[question.id] === true
                        ? "yes"
                        : formData.stopBangResponses[question.id] === false
                          ? "no"
                          : ""
                    }
                    onValueChange={(value) => handleChange(question.id, value === "yes")}
                    className="flex justify-center"
                  >
                    <RadioGroupItem value="no" id={`${question.id}-no`} className="h-5 w-5" />
                  </RadioGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
