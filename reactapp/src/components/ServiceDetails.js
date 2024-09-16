import React from "react";
import { useParams } from "react-router-dom";
import Database from "../Database/db.json";
import "../style/ServiceImg.css";
import { Container } from "@mui/material";

const ServiceDetails = () => {
  const { id } = useParams();
console.log(id);

  const cardImages = Database.Cardsimg.flatMap((card) => card.images || []);
  const FilterData = cardImages.filter((val) => val.id == id);
  console.log(FilterData);
  const filterSyllabus = Database?.Cardsimg?.images?.filter((val)=>val.id == id)
  console.log(filterSyllabus)
  return (
    <Container>
      <div className="service-body">
        {FilterData?.map((val, index) => (
          <>
            <div className="div-img">
              <img
                className="service-img"
                src={`${process.env.PUBLIC_URL}/${val.url}`}
              />
            </div>
            <p className='service-title' >{val.title}</p>

            <p className="service-description1">{val.description1}</p>
            <p className="service-description2">{val.description2}</p>

            {/* 
        <p className='service-description1'>{val.description1}</p>
        <p className='service-description2'>{val.description2}</p>
        <p className='service-keypoint1'>{val.keypoint1}</p>
        <p className='service-keypoint2'>{val.keypoint2}</p>
        <p className='service-keypoint3'>{val.keypoint3}</p>
        <p className='service-keypoint4'>{val.keypoint4}</p>
        <p className='service-description3'>{val.description3}</p> */}
          
           {val?.syllabus?.map((val, index) => (
            <>
              {val?.contents?.map((val, index) => (
                <>
              <ul>
                <li className="content-li"><span className="content-title">{val.title} : </span> {val.description}</li> 
              </ul>    
              </>
              ))}
            </>
          ))}
          <p className="service-description3">{val.description3}</p> 
          </>
        ))}

      </div>
    </Container>
  );
};

export default ServiceDetails;
