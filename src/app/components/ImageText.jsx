import React from 'react';

const ImageText = ({imageUrl, altText}) => {
    return (
        <div style={{ position: 'relative' }}>
            <img
                src={imageUrl}
                alt={altText}
                style={{ display: 'block', height: '100%', margin: 'auto', width: '100%' }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '2em',
                }}
            >
                Welcome to Krantikari Library
            </div>
        </div>
    );

};

export default ImageText;