import { Avatar, Button, Card, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/node/colors';


const PopularUserCard = () => {
  return (
    <div>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="post">
              V
            </Avatar>
          }
          action={
            <Button size='small'>
              follow
            </Button>
          }
          title="USER NAME"
          subheader="@username"
        />
    </div>
  )
}

export default PopularUserCard