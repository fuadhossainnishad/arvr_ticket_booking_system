import React from 'react'
import BookingTable from './BookingTable';

export default function Body() {
  return (
    <main 
    suppressHydrationWarning
    className='bg-gray-100 mt-12 p-6 pb-24'>
        <section id='bookingTable' className=''>
            <BookingTable/>
        </section>

    </main>
  )
}
