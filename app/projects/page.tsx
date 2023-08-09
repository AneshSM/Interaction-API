import Link from 'next/link'
import React from 'react'

const ProjectPage = () => {
  return (
    <div>ProjectPage
      <br />
        <Link href='/projects/new'>new project</Link>
        <br />
        <Link href='/projects/1'>sub project</Link>
    </div>
  )
}

export default ProjectPage