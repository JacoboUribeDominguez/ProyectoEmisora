import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Header from '../../components/header';
import Video from '../../components/video';

export default function CancionPedida() {

    return (
        <div className="container d-flex flex-column align-items-center">
            <Header />
            <div className="mt-5 mb-2">
                <h4 style={{ color: 'white' }}>CANCION:</h4>
            </div>
            <Video />
            <div className="mt-3 text-center">
                <h6 style={{ color: 'white' }}>SE HA REGISTRADO CORRECTAMENTE</h6>
            </div>
            <div style={{ width: '90%', marginTop: '80px' }}>
                <Link to="/appBody" style={{ width: '100%' }}>
                    <Button className="mt-3 mb-4" style={{ background: 'white', border: '1px solid white', color: '#373737', width: '100%' }}>
                        Volver al menú
                    </Button>
                </Link>
            </div>
        </div>
    );
}