import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import { List, ListItem, Typography } from '@mui/material'

export const App = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((res) => {
      setActivities(res.data)
    })
  }, [])

  return (
    <div className='App'>
      <Typography variant='h2'>Activities</Typography>
      <ul>
        {activities.map((activity: any) => (
          <List key={activity.id}>
            <ListItem>{activity.title}</ListItem>
          </List>
        ))}
      </ul>
    </div>
  )
}
