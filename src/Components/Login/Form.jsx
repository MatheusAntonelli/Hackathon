import React from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Form = ({
    type,
    fullName,
    onClick,
    children,
}) => {
   
    return(
        <div>
            
             <form method='post'>
                <div className='text'>
                     <input type="text" required/>
                     <span></span>
                     <label >{fullName}</label>
                 </div>
                 <div className='text'>
                     <input type="text" required/>
                     <span></span>
                     <label >Email</label>
                 </div>
                 <div className='text'>
                     <input type="text" required/>
                     <span></span>
                     <label >{type}</label>
                 </div>
                 <div className='text'>
                     <input type="password" required/>
                     <span></span>
                     <label >Senha</label>
                 </div>
                 <div className='text'>
                     <input type="password" required/>
                     <span></span>
                     <label >Confirmar senha</label>
                 </div> 
                 <div class="pass">Esqueceu sua senha?</div>
                     <Link to='/confirm-email'>
                     <input type="submit" value="Criar conta"/>
                     </Link>
                     <div class="signup_link">
                     <Link
                     to='/login'
                     className=''
                     >
                         Login
                     </Link>
                     <div class="return_link">
                     <Link
                     to='/'
                     className=''
                     >
                         Voltar a pagina principal
                     </Link>
                 </div>     
                 </div>             
            </form>
        </div>
       
    )
}



