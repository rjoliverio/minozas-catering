import ContactDetails from '@/lib/Presentation/Component/ContactDetails'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'

export default function ContactUs() {
  return (
    <main className="flex h-full w-full flex-1 flex-col items-center justify-center px-5">
      <div className="my-5 flex h-full w-full max-w-lg flex-col items-center justify-center space-y-7 text-black dark:text-white">
        <div className="flex w-full flex-col items-center justify-center space-y-5">
          <h1 className="text-4xl font-bold">Get in touch! 👋</h1>
          <p className="px-3 text-center text-sm font-medium md:px-10">
            Contact us for a quote, reservation and further information about the food packages.{' '}
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-5">
          <ContactDetails />
          <div className="flex w-full flex-col items-center space-y-5 rounded-lg bg-white p-5 text-black shadow-lg">
            <div className="flex w-full flex-col space-y-2">
              <label htmlFor="name" className="text-xs font-bold">
                Name <span className="text-red-500">*</span>
              </label>
              <input type="text" className=" rounded-md" name="name" />
            </div>
            <div className="flex w-full flex-col space-y-2">
              <label htmlFor="email" className="text-xs font-bold">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" className="rounded-md" name="email" />
            </div>
            <div className="flex w-full flex-col space-y-2">
              <label htmlFor="message" className="text-xs font-bold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea name="message" className="rounded-md" rows={4}></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center space-x-2 rounded-md bg-[#87A14B] p-2 text-xs text-white"
            >
              <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
