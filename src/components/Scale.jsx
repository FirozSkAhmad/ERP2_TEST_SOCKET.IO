import React from 'react'
import './scale.css'

const Scale = ({selectedButton}) => {
  return (
        <div className='scale'>
            <div className='scale-sec'>
                <div className='scale_Data'>
                    <div className='scale_Items'>
                        <p className='item-heading one'>Available</p>
                        <div className='item-count'>
                            <span>190</span>
                            <span>{selectedButton}</span>
                        </div>
                    </div>
                    <div className='scale_Items'>
                        <p className='item-heading two'>Token</p>
                        <div className='item-count'>
                            <span>190</span>
                            <span>{selectedButton}</span>
                        </div>
                    </div>
                    <div className='scale_Items'>
                        <p className='item-heading three'>Advance</p>
                        <div className='item-count'>
                            <span>190</span>
                            <span>{selectedButton}</span>
                        </div>
                    </div>
                    <div className='scale_Items'>
                        <p className='item-heading four'>Part-Payment</p>
                        <div className='item-count'>
                            <span>90</span>
                            <span>{selectedButton}</span>
                        </div>
                    </div>
                    <div className='scale_Items'>
                        <p className='item-heading five'>Block</p>
                        <div className='item-count'>
                            <span>90</span>
                            <span>{selectedButton}</span>
                        </div>
                    </div>
                    <div className='scale_Items'>
                        <p className='item-heading six'>Sold</p>
                        <div className='item-count'>
                            <span>90</span>
                            <span>{selectedButton}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Scale