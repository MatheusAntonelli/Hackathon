import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <section id='features'>
      
        <div className='cards'>
      <h1>De uma olhada nessas otimas oportunidades.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/job.jpg'
              text='Desenvolvedor Django'
              label='Desenvolvimento'
              path='/jobs'
            />
            <CardItem
              src='images/job.jpg'
              text='Engenheiro Mecanico Junior'
              label='Engenharia'
              path='/jobs'
            />
            <CardItem
              src='images/job.jpg'
              text='Engenheiro Mecanico Junior'
              label='Engenharia'
              path='/jobs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/job.jpg'
              text='Diarista'
              label='Casa / Escritorio'
              path='/jobs'
            />
            <CardItem
              src='images/job.jpg'
              text='Analista de redes'
              label='Redes / Tecnologia'
              path='/jobs'
            />
            <CardItem
              src='images/job.jpg'
              text='Desenvolvedor Back-end'
              label='Tecnologia'
              path='/jobs'
            />
          </ul>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Cards;