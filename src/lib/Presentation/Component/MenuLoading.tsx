'use client'

export default function MenuLoading() {
  return (
    <>
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
    </>
  )
}
