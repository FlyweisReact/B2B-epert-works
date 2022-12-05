import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./OurClients.css";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  
  
  <img
    src={require(`../../../img/OurClients/alphabet.png`)}
    onDragStart={handleDragStart}
  />,
  <img
    src={require(`../../../img/OurClients/cewaves.png`)}
    onDragStart={handleDragStart}
  />,
  <img
  width="100px" height="70px"
    src={require(`../../../img/OurClients/alameda.png`)}
    onDragStart={handleDragStart}
  />,

];

const OurClients = () => {
  return <AliceCarousel mouseTracking items={items} />;
};

export default OurClients;
