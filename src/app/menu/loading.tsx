'use client'

export default function MenuLoading() {
  return (
    <div className="m-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-5 py-6">
      <div className="flex w-full animate-pulse flex-col items-center justify-center space-y-5 ">
        <div className="h-7 w-full max-w-md rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-4 w-full max-w-lg rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex w-full items-center justify-center space-x-2">
          <label htmlFor="search" className="relative block w-full max-w-xl ">
            <div className="h-10 w-full rounded-lg bg-gray-300 dark:bg-gray-700"></div>
          </label>
          <div className="h-10 w-full max-w-[6rem] rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="my-8 w-full animate-pulse bg-gray-300 p-[0.5px]"></div>
      <div className="grid w-full animate-pulse grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="h-60 w-full rounded-lg bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex w-full flex-col items-center justify-center space-y-2">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <div className="flex items-center space-x-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-700"
                      ></div>
                    ))}
                  </div>
                  <div className="h-4 w-full rounded-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <div className="rounded-full bg-gray-300 px-7 py-2 dark:bg-gray-700"></div>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-2 w-full rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
