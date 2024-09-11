import React from 'react'
import { useParams } from 'react-router-dom'
import Database from '../Database/db.json';
import '../style/ServiceImg.css'
import { Container } from '@mui/material';

const ServiceDetails = () => {
    const {id}= useParams ();

    const cardImages = Database.Cardsimg.flatMap(card => card.images || []);
    const FilterData = cardImages.filter(val => val.id == id)
  return (
    <Container>
      <div className='service-body'>
      {FilterData?.map((val,index)=>(
        <>
        <div className='div-img'><img className='service-img' src={`${process.env.PUBLIC_URL}/${val.url}`}/></div>
        
        <p className='service-title' >{val.title}</p>
        <p className='service-description'>{val.description}</p>
        </>
      ))}
      </div>
    </Container>
  )
}

export default ServiceDetails
