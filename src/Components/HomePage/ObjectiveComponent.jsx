import React from 'react';
import SingleParagraphSection from './SingleParagraphSection';
import imageSrc from '../../assets/image2.jpg'; // Adjust the path to your image

const ObjectiveComponent = () => (
  <div>
    <SingleParagraphSection
      title="Objectives"
      content={
        <div style={{  display: "flex", justifyContent: "space-evenly" ,height:"50vh"}}>
          <ul style={{  display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "100%" }}>
            <li>To catalyze research among the institutions of Madhya Pradesh</li>
            <li>To organize expert talks by top experts promoting cutting-edge research in advancing technologies</li>
            <li>To promote industry interaction and catalyze industry-oriented research</li>
            <li>To enable networking and promote collaborations among the academic and industrial units to solve Madhya Pradesh-specific problems</li>
          </ul>
        </div>
      }
      imageSrc={imageSrc}
    />
  </div>
);

export default ObjectiveComponent;
