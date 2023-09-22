'use client'

import { Menu } from '@/lib/Domain/Entity'
import { Lightbox } from 'yet-another-react-lightbox'
import SlideImage from './SlideImage'
import Captions from 'yet-another-react-lightbox/plugins/captions'

type Props = {
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setOpen: (val: boolean) => void
  menu: Menu
}
export default function MenuSlide(props: Props) {
  const { isOpen, menu, setOpen } = props
  return (
    <Lightbox
      open={isOpen}
      close={() => setOpen(false)}
      slides={[{ src: menu.image, title: menu.name, description: menu.description }]}
      render={{ slide: SlideImage, buttonPrev: () => null, buttonNext: () => null }}
      controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
      plugins={[Captions]}
    />
  )
}
