import React from 'react';
import BoundingBox from './../BoundingBox/BoundingBox';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' />
                {
                    box.map((boundingbox,i) => {
                        return <BoundingBox key={i} box={boundingbox}/>
                    })
                }
            </div>
        </div>
    )
}

export default FaceRecognition;