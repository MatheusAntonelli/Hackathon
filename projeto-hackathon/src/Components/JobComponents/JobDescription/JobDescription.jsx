import React from 'react'
import './JobDescription.css'
function JobDescription(props) {
  return (
    <>
        <div className="title">
            <h1>{props.title}</h1>
        </div>
        <section className="job-description">
            <div className="job-info">
                <p>{props.info}</p>
            </div>
        </section>
        <div className="buttons">
            <button type="submit">Candidatar a vaga</button>
            <button type="submit">Lembrar da Vaga</button>
        </div>
    </>
  )
}

export default JobDescription