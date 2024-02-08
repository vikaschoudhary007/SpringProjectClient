import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material';
import React from 'react';
import {useParams} from 'react-router-dom'
import PostCard from '../../components/Posts/PostCard';
import UserReelCard from '../../components/Reels/UserReelCard';

const tabs = [
  {value:"post", name:"Post"},
  {value:"reels", name:"Reels"},
  {value:"saved", name:"Saved"},
  {value:"repost", name:"Repost"}
]

const posts = [1,2,3,4];
const reels = [1,2,3,4];
const savedPosts = [1,1,1,1];
const rePosts = [1,1,1,1];

const Profile = () => {

  const {id} = useParams();

  const [value, setValue] = React.useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className='my-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[15rem]'>
          <img 
            className='w-full h-full rounded-t-md'
            src='https://cdn.pixabay.com/photo/2023/04/22/07/33/sky-7943218_1280.jpg'
            alt=''
          />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar 
            className='transform -translate-y-24'
            sx={{width:"10rem", height: "10rem"}}
            src='https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'
          />
          {
            true ? <Button sx={{borderRadius:"20px"}} variant='outlined'>Edit Profile</Button> :
            <Button variant='outlined'>Follow</Button>
          }
        </div>
        <div className='p-5'>
          <div>
            <h1 className='py-1 font-bold text-xl'>User Name</h1>
            <p className=''>@username</p>
          </div>
          <div className='flex gap-5 items-center py-3'>
            <span>31 Posts</span>
            <span>45 Followers</span>
            <span>20 Following</span>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <section>
        <Box sx={{ width: '100%', borderBottom:1, borderColor:"divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
          >
            {
              tabs.map((item) => <Tab value={item.value} label={item.name} wrapped/>)
            }
            
          </Tabs>
        </Box>

        <div className='flex justify-center'>
            {
              value === "post" ? (<div className='space-y-5 w-[70%] my-10'>
                {posts.map((post) => <div className='border border-slate-100'><PostCard /></div>)}
              </div>) : value === "reels" ? (
                <div className='flex flex-wrap gap-2 my-10 justify-center'>
                  {reels.map((reel) => <div><UserReelCard /></div>)}
                </div>
              ) : value === "saved" ? (
                <div className='space-y-5 w-[70%] my-10'>
                {savedPosts.map((post) => <div className='border border-slate-100'><PostCard /></div>)}
              </div>
              ) : (<div>
                Reposts
              </div>)
            }
        </div>
        </section>

      </div>
    </Card>
  )
}

export default Profile