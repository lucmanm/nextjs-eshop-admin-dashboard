import { NoResult } from '@/components/no-result'
import React from 'react'

const Page = () => {
  return (
    <React.Fragment>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg ">
         <NoResult />
      </div>
    </React.Fragment>
  )
}

export default Page