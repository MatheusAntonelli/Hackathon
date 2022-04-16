import React from 'react'
import './ProfileFooter.css'
function ProfileFooter() {
  return (
    <>
        <section className='profile-footer'>
            <div className="main-info container flex">
                <div className='logo'>
                    <img src="images/job.svg" alt="" />
                </div>
                <div className="team item flex-item-1">
                    <h1>Jobber</h1>
                </div>
                <div className="text item flex-item-1 grow2">
                    <p className='rigths'>Todos os direitos reservados®  Equipe Hackeando Oportunidades </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProfileFooter