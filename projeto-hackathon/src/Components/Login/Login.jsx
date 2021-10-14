import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
    return (
        <section className='main-login'>
        <div className='center'>
            <h1 className='login_title'>Login</h1>
            <form method='post'>
                <div className='text'>
                    <input type="text" required/>
                    <span></span>
                    <label >Email</label>
                </div>
                <div className='text'>
                    <input type="password" required/>
                    <span></span>
                    <label >Senha</label>
                </div>   
                <div class="pass">Esqueceu sua senha?</div>
                    <input type="submit" value="Login"/>
                    <div class="signup_link">
                    <Link
                    to='/cadastro'
                    className=''
                    >
                        Cadastrar
                    </Link>
                </div>     
                <div class="signup_link">
                    <Link
                    to='/'
                    className=''
                    >
                        Voltar a pagina principal
                    </Link>
                </div>           
            </form>
            </div>
            
        </section>
    )
}

export default Login
