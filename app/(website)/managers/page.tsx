import Hero, { BranchManagerData } from '@/components/managers-page/hero'
import BranchManager from '@/components/managers-page/BranchManager'
import React from 'react'

async function getBranchManagers(): Promise<BranchManagerData[]> {
  try {
    const res = await fetch('https://api.kanma.in/website-branch-managers', {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (!res.ok) {
      return [];
    }
    
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Failed to fetch branch managers:", error);
    return [];
  }
}

const ManagersPage = async () => {
  const managers = await getBranchManagers();

  return (
    <div className="flex flex-col gap-10 bg-[#FFFEF9]">
      <Hero managers={managers} />
      <BranchManager />
    </div>
  )
}

export default ManagersPage