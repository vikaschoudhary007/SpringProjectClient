import { Avatar, Card, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from '../Posts/PostCard';

const MiddlePart = () => {

  const story = [1,1,1,1];
  const posts = [1,1,1,1];

  const handleOpenCreatePostModel = () => {

  }

  return (
    <div className='px-20'> 
      <section className='flex items-center p-5 rounded-b-md'>
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar 
            sx={{width:"5rem", height:"5rem"}}
            // src="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg" 
            >
              <AddIcon sx={{fontSize:"3rem"}}/>
          </Avatar>
          <p>New</p>
        </div>
        {story.map(item => <StoryCircle />)}
      </section>

      <Card className="p-5 mt-5">
        <div className='flex justify-between'>
          <Avatar />
          <input 
            className='outline-none w-[90%]  
            rounded-full 
            px-5 
            bg-transparent 
            border-[#3b4054]
            border'
            readOnly
            placeholder='Create new post...'
          />
        </div>
        <div className='flex justify-center space-x-9 mt-5'>
          <div className='flex items-center'>
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>
            <span>Media</span>
          </div>

          <div className='flex items-center'>
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideoCameraBackIcon />
            </IconButton>
            <span>Video</span>
          </div>

          <div className='flex items-center'>
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>
            <span>Write Article</span>
          </div>

        </div>
      </Card>

      <div className='mt-5 space-y-5'>
        {
          posts.map((post) => <PostCard />)
        }
      </div>
    </div>
  )
}

export default MiddlePart