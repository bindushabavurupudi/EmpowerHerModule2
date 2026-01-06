import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3",
]

function ImageSlideshow() {
  const [index, setIndex] = useState(0)

  function nextImage() {
    setIndex((index + 1) % images.length)
  }

  function prevImage() {
    setIndex((index - 1 + images.length) % images.length)
  }

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="space-y-4 text-center">
        <img src={images[index]} alt="slideshow" className="rounded-md" />

        <div className="flex justify-between">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ImageSlideshow
