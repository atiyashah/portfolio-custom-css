"use client"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import ClientReview from "./ClientReview";

const ReviweSlider = () => {
  
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
 return <Carousel 

 additionalTransfrom={0}
 arrows={true}
 autoPlay={true}
 autoPlaySpeed={50000}
 centerMode={false}
 infinite
 responsive={responsive}
 itemClass='item'

 >
  <ClientReview  image="/images/picture2.jpg" name="uamama Shah" role="Web Developer" />
  <ClientReview  image="/images/picture1.jpg" name="Sana Khan" role="Web Developer" />
  <ClientReview  image="/images/picture3.jpg" name="Aliza Awan" role="Web Developer" />
   
 </Carousel>
}

export default ReviweSlider
