import React from 'react'

const UserReelCard = () => {
  return (
    <div className='w-[15rem] px-2'>
      <video 
        className='w-full h-full'
        src="https://player.vimeo.com/external/425440187.sd.mp4?s=45335553c4f4eb6992b78839d2619649f6a81850&profile_id=165&oauth2_token_id=57447761"
        controls
      />
    </div>
  )
}

export default UserReelCard