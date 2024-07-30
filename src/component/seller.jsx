import React from 'react'
import {Card, CardBody, CardFooter} from "@nextui-org/react";
function Seller() {
    const list = [
        {
          title: "Miss Cloth",
          img: "d1.webp",
          price: "499",
        },
        {
          title: "BrucharmZ",
          img: "z1.webp",
          price: "1,002",
        },
        {
          title: "Flipzon",
          img: "f1.webp",
          price: "1,049",
        },
        {
          title: "Maanaka",
          img: "d8.webp",
          price: "495",
        },
        {
          title: "Hemoviya",
          img: "f4.webp",
          price: "849",
        },
        {
          title: "Bakooney",
          img: "z5.webp",
          price: "678",
        },
        {
          title: "Wood 2 Door",
          img: "f7.webp",
          price: "7,699",
        },
        {
          title: "Murli",
          img: "d3.webp",
          price: "459",
        },
      ];
  return (
    <>
    <div className='home'><br/>
    <h1 style={{marginRight:'1950px'}}>Best Seller</h1><br />
    <div className="shopping-cart1">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => alert("item pressed")}>
          <CardBody className="item1">
          <img src={require(`../assets/${item.img}`)} alt={item.name} className="item-image1" />
          </CardBody>
          <CardFooter className="item-name">
            <b>{item.title}</b>
            <p className="item-price">₹{item.price}</p>
          </CardFooter><br />
        </Card>
      ))}<br/>
    </div>
    </div>
    </>
  )
}
export default Seller