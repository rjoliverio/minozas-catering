'use client'

import Image from 'next/image'
import TrayIcon from '../Icon/TrayIcon'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useCallback, useRef } from 'react'
import { menuCategory } from '@/lib/App/Utils/Json'

export default function MenuCategory() {
  const sliderRef = useRef<SwiperRef | null>(null)
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current?.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current?.swiper.slideNext()
  }, [])
  return (
    <>
      <div className="relative m-auto mt-7 hidden w-full flex-row items-center justify-center lg:flex">
        <div className="absolute -left-2" onClick={handlePrev}>
          <ChevronLeftIcon className="h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-700" />
        </div>
        <div className="absolute -right-2" onClick={handleNext}>
          <ChevronRightIcon className="h-7 w-7 cursor-pointer  text-gray-400 hover:text-gray-700" />
        </div>
        <div className="flex w-[400px] flex-row items-center justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            style={{ paddingTop: '10px', paddingBottom: '10px' }}
            ref={sliderRef}
            modules={[Navigation]}
          >
            {menuCategory.map((item, i) => (
              <SwiperSlide
                key={i}
                className="flex shrink-0 flex-col items-center space-y-4 rounded-full px-4 py-5 shadow-md odd:bg-[#423C3C] even:bg-amber-400 dark:odd:bg-gray-200"
              >
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    alt={item.name}
                    className="rounded-full border-4 border-white bg-cover dark:border-gray-700"
                    height={65}
                    width={65}
                    src={item.imageSrc}
                  />
                  <p
                    className={`text-xs font-semibold  ${
                      i % 2 === 0 ? 'text-amber-400 dark:text-gray-700' : 'text-gray-900'
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <TrayIcon
                    className={`h-5 w-5 ${i % 2 === 0 ? 'fill-amber-400' : 'fill-gray-900'}`}
                  />
                  <p
                    className={`text-xs ${
                      i % 2 === 0 ? 'text-white dark:text-gray-700' : 'text-gray-900'
                    }`}
                  >
                    {item.total}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative m-auto mt-7 flex flex-row items-center justify-center lg:hidden">
        <div className="flex w-[350px] flex-row items-center justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            style={{ paddingTop: '10px', paddingBottom: '10px' }}
            modules={[Navigation]}
          >
            {menuCategory.map((item, i) => (
              <SwiperSlide
                key={i}
                className="flex shrink-0 flex-col items-center space-y-4 rounded-full px-4 py-5 shadow-md odd:bg-[#423C3C] even:bg-amber-400 dark:odd:bg-gray-200"
              >
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    alt={item.name}
                    className="rounded-full border-4 border-white bg-cover dark:border-gray-700"
                    height={65}
                    width={65}
                    src={item.imageSrc}
                  />
                  <p
                    className={`line-clamp-1 text-xs font-semibold  ${
                      i % 2 === 0 ? 'text-amber-400 dark:text-gray-700' : 'text-gray-900'
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <TrayIcon
                    className={`h-5 w-5 ${i % 2 === 0 ? 'fill-amber-400' : 'fill-gray-900'}`}
                  />
                  <p
                    className={`text-xs ${
                      i % 2 === 0 ? 'text-white dark:text-gray-700' : 'text-gray-900'
                    }`}
                  >
                    {item.total}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
