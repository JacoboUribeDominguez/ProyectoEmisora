import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'

import logoPideCancion from '../../img/logoPideCancion.png';
import logoListaCanciones from '../../img/logoListaCanciones.png';
import logoTop from '../../img/logoTop.png';

import Header from '../../components/header'
import ButtonBody from '../../components/buttonBody'

export default function AppBody() {

    const history = useHistory();

    const changePedir = e => {
        history.push("/pedirCancion");
    }

    const changeList = e => {
        history.push("/listaCanciones");
    }

    const changeTop = e => {
        history.push("/topCanciones");
    }

    return (
        <div className="container">
            <Link to="/">
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-left"
                    fill="currentColor"
                    style={{ color: 'white', position: 'absolute', top: '25px' }}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </Link>
            <Header />
            <Form >
                <ButtonBody imagen={logoPideCancion} onClick={changePedir} letra="Pide Una Canción" />
                <ButtonBody imagen={logoListaCanciones} onClick={changeList} letra="Lista de Canciones" />
                <ButtonBody imagen={logoTop} onClick={changeTop} letra="Top de Canciones" />
            </Form>
        </div>
    );
}