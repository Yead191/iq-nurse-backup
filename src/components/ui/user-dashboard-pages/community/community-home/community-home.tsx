import React from 'react'
import { LuMessagesSquare } from 'react-icons/lu'
import TrendingCommunityPosts from './tranding-posts'
import StudyGroups from './studyGroups'
import TrendingPosts from '../../user-home-page/TrendingPosts'

export default function CommunityHome() {
  return (
    <div className='md:!ml-10 !ml-0 pb-7 pt-4 px-4'>
      <div className=' flex items-center gap-2 md:text-3xl text-2xl font-bold !mb-5'>
        <LuMessagesSquare />
        <h1>Community</h1>
      </div>
      <div className='max-w-5xl'>
        <TrendingPosts/>
      </div>
      <StudyGroups/>
    </div>
  )
}
