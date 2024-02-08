import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar 
            sx={{width:"5rem", height:"5rem"}}
            src="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg" 
            />
          <p>User Name</p>
        </div>
    </div>
  )
}

export default StoryCircle