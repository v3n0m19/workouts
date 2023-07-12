import React from 'react'
import {useEffect,useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
  const [workouts,setWorkouts]=useState(null)

  useEffect(()=>{
    const fetchWorkouts = async()=>{
      console.log("abc")
      const response = await fetch('http://localhost:4000/api/workouts')
      console.log(response)
      const json = await response.json()
      console.log(json)
      
      if(response.ok){
        setWorkouts(json)
      }
    }
    fetchWorkouts()
    
  },[])

  return (
    <div className='Home'>
        <div className='workouts'>
          {workouts&&workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout}/>
          ))}
        </div>
    </div>
  )
}
export default Home