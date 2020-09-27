import React from "react";
import styled from "styled-components";
import Logo_image from "../logo.svg";
const Logo = styled.div`
  position: relative;
  img {
    width: 80vw;
    max-width: 526px;
    margin: 50px auto 25px auto;
    display: block;
  }
  p {
    max-width: 526px;
    margin: 10px auto;
    text-align: center;
    font-size: 25px;
    color: white;
    text-shadow: 2px 2px #000000;
  }
  #abhinav {
    color: #c23232;
  }
  #snehil {
    color: #9563ff;
  }
  #heart {
    color: red;
  }
  #abhinav:hover,
  #snehil:hover {
    font-size: 30px;
    text-shadow: 4px 4px #000000;
  }
  a {
    text-decoration: none;
  }
`;

function EnterA() {
  document.getElementById("abhinav").innerHTML = "अभिनव";
}
function LeaveA() {
  document.getElementById("abhinav").innerHTML = "Abhinav";
}
function EnterS() {
  document.getElementById("snehil").innerHTML = "स्नेहिल";
}
function LeaveS() {
  document.getElementById("snehil").innerHTML = "Snehil";
}

export default class Header extends React.Component {
  render() {
    return (
      <Logo>
        <img src={Logo_image} alt="logo"></img>
        <p>
          Made with <span id="heart">❤</span> by{" "}
          <a href="https://github.com/01Abhinav" target="blank">
            <span id="abhinav" onMouseEnter={EnterA} onMouseLeave={LeaveA}>
              Abhinav
            </span>
          </a>{" "}
          and{" "}
          <a href="https://github.com/SneakySensei" target="blank">
            <span id="snehil" onMouseEnter={EnterS} onMouseLeave={LeaveS}>
              Snehil
            </span>
          </a>{" "}
        </p>
      </Logo>
    );
  }
}
