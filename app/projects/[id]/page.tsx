import Link from 'next/link'
import React from 'react'

const SubPage = ({params}:{params:{id:string}}) => {
  return (
<>
<div>SubPage i.e, {params.id}</div>
    <Link href='/projects'> Projects</Link>
</>
  )
}

export default SubPage