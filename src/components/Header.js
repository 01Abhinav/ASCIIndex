import React from 'react';
import styled from 'styled-components';
import Logo_image from '../logo.svg';

const Logo =styled.div`


position: relative;
img {
    width: 80vw;
    max-width:526px;
    margin: 0 auto;
    display:block;
}
`;



export default class Header extends React.Component{
    render(){
        return(
            <Logo>
                <img src={Logo_image} alt="logo"></img>
            </Logo>

        );

    }
       
    

}