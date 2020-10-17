import React from 'react'
import { Row } from 'react-bootstrap';

import trevolDaniel from '../img/videoPrueba1.jpg'

export default class video extends React.Component {
    render() {
        return (
            <div className="mt-1 d-flex justify-content-center" style={{ width: '90%' }}>
                <Row className=" d-flex justify-content-center" style={{ height: '60px', width: '100%', margin: '0' }}>
                    <div style={{ width: '35%' }}>
                        <div className="d-flex align-items-end justify-content-end " style={{ height: '60px', backgroundImage: `url(${trevolDaniel})` }}>
                            <div
                                style={{
                                    zIndex: '2',
                                    color: 'white',
                                    background: 'black',
                                    padding: '0 5px',
                                    borderRadius: '2px',
                                    opacity: '0.6',
                                    fontSize: '8px',
                                    margin: '2px'
                                }}>
                                3:40
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '65%' }}>
                        <div style={{ background: '#181818', width: '100%', height: '100%', padding: '5px' }}>
                            <h1 className="mb-1" style={{ color: 'white', fontSize: '7px' }}>Trevol Daniel - falling (Official Music Video)</h1>
                            <h4 style={{ color: '#7d7d7d', fontSize: '5px' }}>
                                Trevol Daniel {" "}
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-music-note" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                                    <path fillRule="evenodd" d="M9 3v10H8V3h1z" />
                                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                                </svg>
                                158 M visualizaciones • hace 9 meses
                            </h4>
                            <p style={{ color: '#7d7d7d', fontSize: '5px', margin: '0' }}>
                                Stream Falling: https://smarturl.it/TDFalling Follow Trevor Daniel: ▻Instagram: https://www.instagram.com/iamtrevordaniel/ ...
                            </p>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}
