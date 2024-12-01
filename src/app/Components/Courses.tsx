import React from 'react'
import Image from 'next/image'

function Courses() {
  return (
    <main className='bg-[#FFFFFF] h-full mx-auto py-20 px-14'>
    <div>
    <div className='text-center mb-12'>
      <header className='text-center'>
        <h1 className='text-4xl font-bold px-2 py-2'>Courses</h1>
        <p className='text-[18px] font-[400px] px-2 py-2'>Your Ultimate Guide to learning </p>
      </header>
{/* Buttons */}

<div className='felx justify-center mb-4'>
<button className='px-4 py-4 rounded-full mx-2'>Popular</button>
<button className='px-4 py-4 rounded-full mx-2'>Recommended</button>
<button  className='px-4 py-4 rounded-full mx-2'>Best Price</button>
</div>


<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
<Image src="/card 1.png" alt="Card 1" width={416} height={534} style={{width: 'auto', height: 'auto'}} className='cover'/>
      <Image src="/card 2.png" alt="Card 2" width={416} height={534} style={{width: 'auto', height: 'auto'}} className='cover'/>
      <Image src="/card 3.png" alt="Card 3" width={416}height={534} style={{width: 'auto', height: 'auto'}} className='cover'/>
      <Image src="/card 4.png" alt="Card 4" width={416}height={534} style={{width: 'auto', height: 'auto'}} className='cover'/>
      <Image src="/card 5.png" alt="Card 5" width={416}height={534} style={{width: 'auto', height: 'auto'}} className='cover'/>
      <Image src="/card 6.png" alt="Card 6" width={416}height={534} style={{width: 'auto', height: 'auto'}} className='cover'/>

</div>

<button className='items-center px-6 py-3 border-2 shadow-md hover:lg rounded transition'>View All Courses</button>
    </div>
    </div>
    </main>
  )
}

export default Courses


























// import React from 'react'

// function Courses() {
//   return (
//     <main className='bg-[#FFFFFF] flex justify-center w-[1280px] h-[1742px] top-[3326] left-[100px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[60px]'>
//         <div className='container mx-auto p-4'>
//             <h1 className='w-[768px] h-[67px] font-[700] text-size-[56px] leading-[67px] text-center gap-[16px] mb-8'> Courses </h1>
//             <p className=''>Your Ultimate Guide to learning</p>
//         </div>
//     </main>
//   )
// }

// export default Courses
