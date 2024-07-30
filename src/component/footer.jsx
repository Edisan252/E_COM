import React from "react"
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { FaPhoneAlt , FaFacebook, FaWhatsapp } from "react-icons/fa";
  import { SiGmail } from "react-icons/si";
  import { HiLocationMarker } from "react-icons/hi";
  import { FaSquareInstagram,FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
    return (     
        <div className="bg-dark">
            <div className='container-fluid'>
                <div className="row py-5 text-white">
               <div className="col-3">
                <h2 className="text-info" >A TO Z MARKET</h2>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, libero.</h2>
               </div>

               
               <div className="col-3 f1">
                <h2 className="text-info">PRODUCTS</h2>
                <ul>
                    <li>Furniture</li>
                    <li>Mobiles</li>
                    <li>Men and Women wears</li>
                    <li>Shoes</li>
                </ul>   
               </div>


               <div className="col-3 f2">
                <h2 className="text-info">LINKS</h2>
              <ul>
                <li>FAQ</li>
                <li>Classes</li>
                <li>Pricing</li>
                <li>Safety</li>
              </ul>  


               </div>
               <div className="col-3 f3">
                <h2 className="text-info">CONTACT</h2>
                <ul>
                 <li><FaPhoneAlt className="me-2" />+91 xxxxxx5874</li>  <br></br>
                 <li><SiGmail  className="me-2"/>xxxxx@gmail.com</li><br></br>
                 <li><HiLocationMarker  className="me-2"/>21 Karumandavam streetTrichy, Tamilnadu </li> <br></br>
                </ul>
          
        
  
    </div><hr></hr>
    <div className="f4"><br/>
        <ul>
            <li><FaFacebook /></li>
            <li><FaSquareInstagram /></li>
            <li><FaSquareXTwitter /></li>
            <li><FaWhatsapp /></li>
        </ul>
        </div>  
       
       </div>
         </div> <br/>
            </div>
                    
    );
}
 
export default Footer;