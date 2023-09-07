'use client'

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-toastify'

export default function ContactDetails() {
  const details = {
    address: 'Miñoza St., Cogon, Compostela, Cebu',
    phone: '+63 945 425 0787',
    email: 'minozascatering@gmail.com',
  }
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Copied to clipboard.')
    })
  }
  return (
    <div className="flex w-full flex-grow flex-row items-stretch justify-between space-x-3">
      <div
        onClick={() => handleCopyToClipboard(details.address)}
        className="flex w-full max-w-[10rem] cursor-pointer flex-col items-center justify-center space-y-2 break-all rounded-lg bg-[#423C3C] p-2 text-center text-amber-400 dark:bg-gray-200 dark:text-black"
      >
        <MapPinIcon className="h-5 w-5" />
        <p className="text-xs">{details.address}</p>
      </div>
      <div
        onClick={() => handleCopyToClipboard(details.phone)}
        className="flex w-full max-w-[10rem] cursor-pointer flex-col items-center justify-center space-y-2 break-all rounded-lg bg-amber-400 p-2 text-center text-black"
      >
        <PhoneIcon className="h-5 w-5" />
        <p className="text-xs">{details.phone}</p>
      </div>
      <div
        onClick={() => handleCopyToClipboard(details.email)}
        className="flex w-full max-w-[10rem] cursor-pointer flex-col items-center justify-center space-y-2 break-all rounded-lg bg-[#423C3C] p-2 text-center text-amber-400 dark:bg-gray-200 dark:text-black"
      >
        <EnvelopeIcon className="h-5 w-5" />
        <p className="text-xs">{details.email}</p>
      </div>
    </div>
  )
}
