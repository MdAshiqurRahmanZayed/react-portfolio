
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import skillBackground from "../assets/img/pexels-rodolfo.jpg"
import {
     CircularProgressbar
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'



function Interest() {
       const responsive = {
            superLargeDesktop: {
                 // the naming can be any, depends on you.
                 breakpoint: {
                      max: 4000,
                      min: 3000
                 },
                 items: 5
            },
            desktop: {
                 breakpoint: {
                      max: 3000,
                      min: 1024
                 },
                 items: 3
            },
            tablet: {
                 breakpoint: {
                      max: 1024,
                      min: 464
                 },
                 items: 2
            },
            mobile: {
                 breakpoint: {
                      max: 464,
                      min: 0
                 },
                 items: 1
            }
       };
  return (
     
    <section className="interest" id="interest">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    < div className = "interest-bx wow zoomIn" >
                        <h2>Interest</h2>
                        <br />
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="container justify-content-center">

                                <h5>Web Development</h5>
                            </div>
                            
                            < div className = "container " >
                                    <h5>Competitive Programming</h5>
                            </div>
                            
                            < div className = "container " >
                                <h5>Machine Learning</h5>
                            </div>

                            < div className = "container " >
                                <h5>Django Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="skill-background" src={skillBackground} alt="Image" /> */}
    </section>
  )
}

export default Interest
