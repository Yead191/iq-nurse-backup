import React from 'react'
import NoteTab from '../../study-notes-page/surgical-details-page/NoteTab'
import DocFooter from './DocFooter'

export default function DocumentSection() {
    const [isDesabled, setIsDesabled] = React.useState(false);
  return (
    <div className='lg:p-6 md:p-4 p-2'>
      <div>
        <NoteTab isDesabled={isDesabled}/>
      </div>
      <DocFooter setIsDesabled={setIsDesabled} />
    </div>
  )
}
