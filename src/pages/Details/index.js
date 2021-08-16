import React from 'react'
import './style.css'

class Detail extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='image-grid'>
                    <div className='small-images'></div>
                    <div className='one-big-image'></div>
                </div>

                <div className='detail-holder'>
                    <div className='att'>
                        <span className='att-title'>Location</span>
                        <span className='att-value'>Ayat Condominium</span>
                    </div>
                    <div className='att'>
                        <span className='att-title'>Bed Rooms</span>
                        <span className='att-value'>3</span>
                    </div>
                    <div className='att'>
                        <span className='att-title'>Monthly Rent</span>
                        <span className='att-value'>6000 Birr</span>
                    </div>
                    <div className='att'>
                        <span className='att-title'>Floor</span>
                        <span className='att-value'>2nd Floor</span>
                    </div>
                    <div className='att'>
                        <span className='att-title'>Phone Number</span>
                        <span className='att-value'>0985006136</span>
                    </div>
                </div>

            </div>
        );
    }

}

export default Detail