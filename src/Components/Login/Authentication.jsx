import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';




function Cadastro(props) {
    return (
        <section className='main-login'>
        <div className='center'>
            <h1>Cadastro</h1>
            <form method='post'>
            <div className='text'>
                    <input type="text" required/>
                    <span></span>
                    <label >Nome Completo</label>
                </div>
                <div className='text'>
                    <input type="text" required/>
                    <span></span>
                    <label >Email</label>
                </div>
                <div className='text'>
                    <input type="text" required/>
                    <span></span>
                    <label >CPF</label>
                </div>
                <div className='text'>
                    <input type="password" required/>
                    <span></span>
                    <label >Senha</label>
                </div>   
                <div class="pass">Esqueceu sua senha?</div>
                    <input type="submit" value="Criar conta"/>
                    <div class="signup_link">
                    <Link
                    to='/login'
                    className=''
                    onClick={props.onClick}
                    >
                        Login
                    </Link>
                </div>             
            </form>
            </div>
            
        </section>
    )
}

function Login(props) {
    return (
        <section className='main-login'>
            <div className='center'>
                <h1>Login</h1>
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
                        onClick={props.onclick}
                        >
                            Cadastrar
                        </Link>
                    </div>             
                </form>
                </div>
            
        </section>
    )
}

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);      
        this.handleCadastroClick = this.handleLogoutClick.bind(this);
        this.state = {isDoingLogin: false};
    }
        handleLoginClick() {
            this.setState({isDoingLogin: true});
        }
        handleCadastroClick() {
            this.setState({isDoingLogin: false});
        }
        render() {
            const isDoingLogin = this.state.isDoingLogin;
            let button;
            if(isDoingLogin) {
                button = <Login onClick={this.handleCadastroClick}/>
            } else{
                button = <Cadastro onclick={this.handleLoginClick}/>
            }

            return(
                <>
                {button}
                </>
            ) 

        }
}

export default Authentication
