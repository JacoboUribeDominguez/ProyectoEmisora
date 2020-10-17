import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import logoEmisora from '../../img/logo.png';

import "./styles.css"

export default class Login extends Component {
    render(){
        return(
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center" style={{marginTop:'100px'}}>
                        <div style={{width:'250px', padding:'0px'}}>
                            <img src={logoEmisora} style={{width:'100%', height:'auto'}} alt="logo"/>
                        </div>
                        <div>
                            <h3 style={{color:'white'}}>Emisora INEM</h3>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center mb-4" style={{marginTop:'150px', width:'80%'}}>
                        <div className="d-flex flex-column align-items-center" style={{width:'100%'}}>
                            <Link to="/loginForm" style={{width:'100%'}}>
                                <Button style={{background:'white', border:'1px solid white', color:'#373737', width:'100%'}}>
                                    <strong>
                                        Iniciar Sesión
                                    </strong>
                                </Button>
                            </Link>
                            <Link to="/registerForm" style={{width:'100%'}}>
                                <Button className="mt-3 mb-4" style={{background:'white', border:'1px solid white', color:'#373737', width:'100%'}}>
                                    <strong>
                                        Registrarse
                                    </strong>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}