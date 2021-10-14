import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from './Form';


function Cadastro() {
    return (
        <section className='main-login'>
        <div className='center'>
            <h1>Cadastro</h1>
            <Form fullName='Nome Completo' type='CPF'/>
            </div>
            
        </section>
    )
}

export default Cadastro;
