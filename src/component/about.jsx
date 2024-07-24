import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
const About = () =>{
    return(
        <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, quibusdam rerum nihil sed, voluptas excepturi maiores sequi neque aliquam hic consequuntur, perferendis et unde? Tempora laborum praesentium asperiores voluptatem modi!
        Alias reprehenderit, quae non inventore ullam error neque quod et. Dicta est ut blanditiis architecto perspiciatis tenetur saepe fuga ullam similique? Ipsum provident dolorem sit. Sapiente magni animi laudantium iure?
        Fuga laborum velit quaerat laboriosam obcaecati, rem dolore expedita libero, ex nesciunt, quo autem nulla distinctio exercitationem consectetur et? Obcaecati ratione tempora quidem, laudantium nam culpa maiores sequi architecto esse.
        Sunt tempore nam eveniet esse laudantium? Cum quos quae laudantium eaque deleniti architecto facilis beatae perferendis non veniam adipisci fuga officiis, ipsum dolor accusamus ratione? Expedita, est distinctio? Repellendus, totam.
        Iusto neque maiores ut iure illum ea, id eum distinctio quo adipisci assumenda sint vero quam eveniet excepturi, fugit optio saepe quaerat! Rerum, animi cupiditate architecto accusamus quisquam voluptatibus praesentium.</p>
        <Carousel>
      <Carousel.Item interval={500}>
        <img src={require('../assets/logo1.png')} alt="" height={100} width={250} />
      </Carousel.Item>
      <Carousel.Item interval={300}>
     <img src={require('../assets/logo1.png')} alt="" height={100} width={250} />
      </Carousel.Item>
      <Carousel.Item interval={300}>
     <img src={require('../assets/logo1.png')} alt="" height={100} width={250} />
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default About
