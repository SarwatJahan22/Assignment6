import React from 'react'
import Image from 'next/image'

function Customer() {
  return (
    <div className='mx-w-[1280px] mx-auto h-[803px] bg-[#F7F7F7] px-12 py-12'>
      <div className='mx-auto container px-4 mb-8'>
        <h2 className='font-bold text-4xl px-4 py-4 mb-8'>Customer testimonials</h2>
        <p className='px-4 py-2 font-[400px] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div className='grid grid-cols-3 px-4 py-4'>
    <Image src='/content 1.png' alt='James Nuduku' width={416} height={295} style={{width:'auto', height:'auto'}} className=''/>
    <Image src='/content 2.png' alt='Erick Kipkemboi' width={416} height={295} style={{width:'auto', height:'auto'}} className=''/>
    <Image src='/content 3.png' alt='Stephen Kerubo' width={416} height={295} style={{width:'auto', height:'auto'}} className=''/>

</div>



      </div>
    </div>
  )
}

export default Customer
