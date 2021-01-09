import React from 'react';
import Carditem from './Carditem';
import './Card.css'

export default function Card() {
    return (
    <div className='cards'>
      <h1>Check out these Gaming Rooms!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <Carditem
              src='/images/img-1.jpg'
              text='Gaming is a passion'
              label='Luxary'
              path='/services'
            />
            <Carditem
              src='/images/img-2.jpg'
              text='Gaming is a passion'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards_items'>
            <Carditem
              src='/images/img-3.jpg'
              text='Gaming is a passion'
              label='Room 1'
              path='/services'
            />
            <Carditem
              src='/images/img-4.jpg'
              text='Gaming is a passion'
              label='Room 2'
              path='/services'
            />
            <Carditem
              src='/images/img-6.jpg'
              text='Gaming is a passion'
              label='Room 3'
              path='/gameroom'
            />
          </ul>
        </div>
      </div>
    </div>
    )
}
