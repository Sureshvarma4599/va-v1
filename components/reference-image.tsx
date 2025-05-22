"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"
import { ImageModal } from "@/components/image-modal"

interface ReferenceImageProps {
  imageUrl: string
  imageAlt: string
}

export function ReferenceImage({ imageUrl, imageAlt }: ReferenceImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="border rounded-lg p-4 flex justify-center relative">
        <div className="relative w-full h-64">
          <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-2 right-2 opacity-80 hover:opacity-100"
          onClick={() => setIsModalOpen(true)}
        >
          <Maximize2 className="h-4 w-4 mr-1" />
          Max View
        </Button>
      </div>

      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageUrl={imageUrl} imageAlt={imageAlt} />
    </>
  )
}
