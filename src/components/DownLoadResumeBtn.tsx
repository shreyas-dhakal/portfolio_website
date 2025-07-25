import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
    <a href='https://drive.google.com/file/d/1Uk5FlIqfXIDe-ZLro0s3dZHtTwnj_1J8/view?usp=sharing'><HackerBtn label='View Resume'/></a>
  </div>
  )
}

export default DownLoadResumeBtn
