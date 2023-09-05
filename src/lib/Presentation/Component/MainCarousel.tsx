'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowUpRightIcon, StarIcon } from '@heroicons/react/20/solid'
import { Pagination, Autoplay } from 'swiper/modules'

export default function MainCarousel() {
  return (
    <>
      <div className="relative m-auto hidden w-full items-center justify-center rounded-xl lg:flex ">
        <div className="absolute bottom-0 z-20 flex w-full flex-col p-8 text-2xl font-semibold">
          <p>Savor Healthy Eats - Keep it</p>
          <p>Casual and Easy-going!</p>
        </div>
        <div className="absolute top-0 z-20 flex w-full items-center space-x-2 p-8">
          <div className="rounded-full bg-black p-2.5">
            <StarIcon className="h-5 w-5 text-amber-400" />
          </div>
          <div className="flex items-center space-x-2 rounded-full bg-white/40 p-2.5 text-xs text-black backdrop-blur-md">
            <p>Show Top-Rated Foods</p>
            <div className="rounded-full bg-black p-1 text-white">
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="absolute z-10 h-full w-full rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop
          style={{ borderRadius: '0.75rem', height: '350px', width: '550px' }}
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide
            key={1}
            className="flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692014358/static/wduaq6qm4naxtrp57j5r.jpg')] bg-cover"
          />
          <SwiperSlide
            key={2}
            className="flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692014362/static/jpx761zswj0tjpdt25tf.jpg')] bg-cover"
          />
          <SwiperSlide
            key={3}
            className="flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692014363/static/cyftbrjogq9pzipp2sxi.jpg')] bg-cover"
          />
        </Swiper>
      </div>
      <div className="relative m-auto flex items-center justify-center rounded-xl lg:hidden ">
        <div className="absolute bottom-0 z-20 flex w-full flex-col p-8  text-xl font-semibold">
          <p>Savor Healthy Eats - Keep it</p>
          <p>Casual and Easy-going!</p>
        </div>
        <div className="absolute top-0 z-20 flex w-full items-center space-x-2 p-8">
          <div className="rounded-full bg-black p-2">
            <StarIcon className="h-4 w-4 text-amber-400" />
          </div>
          <div className="flex items-center space-x-2 rounded-full bg-white/40 p-2 text-xs text-black backdrop-blur-md">
            <p>Show Top-Rated Foods</p>
            <div className="rounded-full bg-black p-1 text-white">
              <ArrowUpRightIcon className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div className="absolute z-10 h-full w-full rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop
          style={{ borderRadius: '0.75rem', height: '300px', width: '350px' }}
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide
            key={1}
            className="flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692014358/static/wduaq6qm4naxtrp57j5r.jpg')] bg-cover"
          />
          <SwiperSlide
            key={2}
            className="flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692014362/static/jpx761zswj0tjpdt25tf.jpg')] bg-cover"
          />
          <SwiperSlide
            key={3}
            className="flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692014363/static/cyftbrjogq9pzipp2sxi.jpg')] bg-cover"
          />
        </Swiper>
      </div>
    </>
  )
}
