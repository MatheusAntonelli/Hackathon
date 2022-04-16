import React from 'react'
import JobDescription from '../JobComponents/JobDescription/JobDescription'
import './JobCard.css'

const lorem = "Lorem Ipsum has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ."

function JobCard() {
  return (
    <> 
        <h1>Job Card to be done</h1>
        <br />
        <h1> Tasks to made</h1>
        <br />
        <h2>- Create a search Bar w/ Cargos and location and a search button</h2>
        <h2>- Create a card component</h2>
        <h2>- Create a job Description with a remember button  and candidate button</h2>
        <h2>Reutilize Footer from main page</h2>
        <JobDescription
          title="Engenheiro Agricola"
          info={lorem}
        />
    
    </>
  )
}

export default JobCard