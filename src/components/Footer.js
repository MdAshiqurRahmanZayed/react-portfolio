import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from '../assets/img/github.svg';
import logo from '../assets/img/mdz.png';


export const Footer = () => {
  return (
    <footer className="footer ">
      < Container  >
        <div className=" social-icon d-flex justify-content-center">
              <div className="mt-2">

              <a  href="https://www.linkedin.com/in/md-ashiqur-rahman-zayed-141b741a9/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/mdashiqurrahman.zayed"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://www.facebook.com/mdashiqurrahman.zayed"><img src={github} alt="" /></a>
              </div>
              
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
        </div>
        <div className="d-flex justify-content-center">

            <p>Copyright 2022. All Rights Reserved</p>
        </div>

      </Container>
    </footer>
  )
}
