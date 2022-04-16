import React from 'react'
import  AnchorLink from  'react-anchor-link-smooth-scroll';
import '../../App.css';
import {Button} from '../Button/Button';

function MainSection() {
    return (
        <div className="main-section">
            <h1>Achar um emprego nunca foi tão facil!</h1>
            <h1>Procure entre as milhares de vagas disponiveis</h1>
            <div className="main-btn">
                <AnchorLink href='#feature'>
                <Button className="btn"
                buttonSize='btn-large'
                buttonStyle='btn-primary'
                >
                    DESCUBRA AS OPORTUNIDADES
                </Button>
                </AnchorLink>

            </div>
        </div>
    )
}

export default MainSection
