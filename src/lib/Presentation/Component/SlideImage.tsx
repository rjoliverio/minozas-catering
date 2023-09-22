'use client'
import Image from 'next/image'
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  SlideImage,
  RenderSlideProps,
} from 'yet-another-react-lightbox'

function isNextJsImage(slide: SlideImage) {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number'
}
export default function SlideImage(props: RenderSlideProps<SlideImage>) {
  const { slide, rect } = props
  const { imageFit } = useLightboxProps().carousel
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  if (!isNextJsImage(slide)) return undefined

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / (slide.height as number)) * (slide.width as number))
      )
    : rect.width

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / (slide.width as number)) * (slide.height as number))
      )
    : rect.height

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        placeholder="blur"
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  )
}
