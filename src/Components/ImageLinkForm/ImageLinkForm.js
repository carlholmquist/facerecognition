import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain Will Detect Faces in your pictures'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 form center'>
                    <input 
                        onChange={onInputChange} 
                        className='f4 pa2 w-70 center' type='text' 
                    />
                    <button 
                        onClick={onButtonSubmit} 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;