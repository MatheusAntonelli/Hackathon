import React from 'react'
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

function EmailConfirmation() {
    return (
        <section className='main-login'>
            <div className='center'>
                <h1>Contra criada
                <p>
                        Confirme o email cadastrado para ativar sua conta usando o link de ativação
                    </p>
                </h1>
                <div class="signup_link">
                    <Link
                    to='/login'
                    className=''
                    >
                <Button className="btn"
                buttonSize='btn-large'
                buttonStyle='btn-primary'
                >
                    Fazer Login
                </Button>
                        
                    </Link>
                </div>      
            </div>
        </section>

    )
}

export default EmailConfirmation
