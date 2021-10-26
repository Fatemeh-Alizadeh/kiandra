import React from 'react'

const Tiles = () => {
    return (
        <section className='tiles-container'>
            <div className="dark-tile">
                <div className="dark-border1"></div>
                <div className="dark-border2"></div>
                <p className='tile-text'>2019/20 Annual report</p>
                <button type='button' className='tile-button'>read more</button>
            </div>
            <div className="red-tile">
                <div className="red-border1"></div>
                <div className="red-border2"></div>
                <p className='tile-text'>I am a title in a red box on two lines</p>

            </div>
        </section>
    )
}

export default Tiles
