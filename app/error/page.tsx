import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <section className='text-center'>
        <div className='text-5xl'>Access denied</div>
        <div>Go back to <Link className='text-cyan-600 underline text-2xl' href={'/'}>Home</Link></div>
    </section>
    )
}

export default ErrorPage