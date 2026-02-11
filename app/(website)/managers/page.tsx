import Hero from '@/components/managers-page/hero'
import BranchManager from '@/components/managers-page/BranchManager'
import React from 'react'

const ManagersPage = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#FFFEF9]">
      <Hero />
      <BranchManager />
    </div>
  )
}

export default ManagersPage