"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  imageAlt: string
}

export function ImageModal({ isOpen, onClose, imageUrl, imageAlt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogHeader>
  <DialogTitle>
  </DialogTitle>
</DialogHeader>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <div className="relative w-full h-[80vh]">
          <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
