import React from 'react';

import logoEmisora from '../img/logo.png';

export default class header extends React.Component {
    render(){
        return(
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div style={{ width: '150px' }} className="mt-3">
                    <img src={logoEmisora} style={{ width: '100%', height: 'auto' }} alt="logo" />
                </div>
                <div className="text-center">
                    <h2 style={{ color: 'white' }}>Emisora Inem</h2>
                    <p className="text-muted" style={{ fontSize: '13px' }}>
                        !tus canciones favoritas para disfrutar del descanso!
                    </p>
                </div>
            </div>
        );
    }
}