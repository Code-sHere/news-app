import React, { Children } from 'react'

function Wrapper({children}) {
  return (
    <div className='max-w-[70rem] m-auto'>
      {children}
    </div>
  )
}

export default Wrapper
