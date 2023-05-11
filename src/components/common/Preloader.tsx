import React from 'react';
import preloader from "accets/images/loading-transparent.gif";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="loading..."/>
        </div>
    );
};

