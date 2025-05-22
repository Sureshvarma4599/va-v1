"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StressLevelsHome } from "@/components/form-steps/stress-levels-home"
import { StressLevelsWork } from "@/components/form-steps/stress-levels-work"
import { SleepQuality } from "@/components/form-steps/sleep-quality"
import { GAD7Assessment } from "@/components/form-steps/gad7-assessment"
import { PHQ9Assessment } from "@/components/form-steps/phq9-assessment"
import { StopBangAssessment } from "@/components/form-steps/stop-bang-assessment"
import { BalanceTest } from "@/components/form-steps/balance-test"
import { SquatTest } from "@/components/form-steps/squat-test"
import { SitToStandTest } from "@/components/form-steps/sit-to-stand-test"
import { ApleyTest } from "@/components/form-steps/apley-test"
import { ChairSitAndReachTest } from "@/components/form-steps/chair-sit-and-reach-test"
import { FormComplete } from "@/components/form-steps/form-complete"

export type FormData = {
  stressHome: string | null
  stressWork: string | null
  sleepQuality: string | null
  gad7Responses: Record<string, string>
  phq9Responses: Record<string, string>
  stopBangResponses: Record<string, boolean>
  balanceTestData: Record<string, any>
  squatTestData: Record<string, any>
  sitToStandTestData: Record<string, any>
  apleyTestData: Record<string, any>
  chairSitAndReachTestData: Record<string, any>
}

export function HealthAssessmentForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    stressHome: null,
    stressWork: null,
    sleepQuality: null,
    gad7Responses: {},
    phq9Responses: {},
    stopBangResponses: {},
    balanceTestData: {},
    squatTestData: {},
    sitToStandTestData: {},
    apleyTestData: {},
    chairSitAndReachTestData: {},
  })

  // Determine which steps to show based on previous answers
  const shouldShowGAD7PHQ9 =
    formData.stressHome === "Moderate" ||
    formData.stressHome === "Severe" ||
    formData.stressHome === "Extremely severe" ||
    formData.stressWork === "Moderate" ||
    formData.stressWork === "Severe" ||
    formData.stressWork === "Extremely severe"

  const shouldShowStopBang =
    formData.sleepQuality === "Inadequate" ||
    formData.sleepQuality === "Unable to initiate sleep" ||
    formData.sleepQuality === "Not able to sleep"

  // Define all possible steps
  const allSteps = [
    { id: "stressHome", component: StressLevelsHome },
    { id: "stressWork", component: StressLevelsWork },
    { id: "sleepQuality", component: SleepQuality },
    ...(shouldShowGAD7PHQ9
      ? [
          { id: "gad7", component: GAD7Assessment },
          { id: "phq9", component: PHQ9Assessment },
        ]
      : []),
    ...(shouldShowStopBang ? [{ id: "stopBang", component: StopBangAssessment }] : []),
    { id: "balanceTest", component: BalanceTest },
    { id: "squatTest", component: SquatTest },
    { id: "sitToStandTest", component: SitToStandTest },
    { id: "apleyTest", component: ApleyTest },
    { id: "chairSitAndReachTest", component: ChairSitAndReachTest },
    { id: "complete", component: FormComplete },
  ]

  // Get current step component
  const CurrentStepComponent = allSteps[currentStep]?.component

  // Calculate progress percentage
  const progress = Math.round((currentStep / (allSteps.length - 1)) * 100)

  const handleNext = () => {
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const updateFormData = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="border-b">
        <CardTitle className="text-xl font-semibold">Health Assessment</CardTitle>
        <div className="flex items-center gap-2 mt-2">
          <Progress value={progress} className="h-2" />
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {currentStep + 1} of {allSteps.length}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {CurrentStepComponent && <CurrentStepComponent formData={formData} updateFormData={updateFormData} />}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentStep === allSteps.length - 1}>
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
