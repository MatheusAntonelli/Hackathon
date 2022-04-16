import React from 'react'
import './Login.css';
import { Form } from './Form';
import {Button} from '../Button/Button'

class Cadastro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isPessoaFisica: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isPessoaFisica: !prevState.isPessoaFisica
        }));
    
      }
      render(){
        return (
            <section className='main-login'>
            <div className='center'>
                <h1>Cadastro</h1>
                <div className="button-area">
        <Button variant="" onClick={this.handleClick}>Clique em mim para mudar para pessoa juridica ou voltar para pessoa fisica</Button>
            </div>  
                <Form fullName='Nome Completo' type={this.state.isPessoaFisica ? 'CPF' : 'CNPJ'} />
                </div>
                
            </section>
        )
      
      }
        
    
}

export default Cadastro

