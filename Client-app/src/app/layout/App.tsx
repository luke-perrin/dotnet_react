import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, List, ListItem, Typography } from '@mui/material'
import { IActivity } from './models/activity'
import { NavBar } from './NavBar'
import { ActivityDashboard } from '../../features/dashboard/ActivityDashboard'



export const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([])

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then((res) => {
      setActivities(res.data)
    })
  }, [])

  return (
    <div className='App'>
      <NavBar />
      <Container>
        <ActivityDashboard activities={activities} />
      </Container>
    </div>
  )
}
