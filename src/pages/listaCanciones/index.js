import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Video from '../../components/video';

export default function listaCanciones () {
    return(
        <div className="container">
            <Link to="/appBody">
                <svg 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 16 16" 
                    className="bi bi-arrow-left" 
                    fill="currentColor" 
                    style={{color:'white', position:'absolute', top:'25px'}}
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </Link>
            <Header />
            <div className="d-flex flex-column align-items-center pt-3">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    );
}