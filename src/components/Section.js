import React from 'react';

function Statistics({title, children}) {
    return (
        <>
            <h2>{title}</h2>
            {children}
        </>
    )
};

export default Statistics;