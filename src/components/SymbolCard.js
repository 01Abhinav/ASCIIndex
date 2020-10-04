import React from "react";
import styled from "styled-components";

import Colors from "../assets/colors.json";

const Card = styled.div`
  color: ${Colors.text};
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & .container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  & .button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    background-color: ${Colors.secondary};
    border-color: #00000000;
    transition: background-color 150ms ease-out, border-color 150ms ease-out;
    box-shadow: 0 1.5px 8px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  & .button:hover {
    border-color: ${Colors.primary};
    border-width: 0.125rem;
    border-style: solid;
  }

  & .button:active {
    background-color: ${Colors.primary};
  }

  & .symbol {
    color: #fff;
    font-size: 2.25rem;
    font-family: "Segoe UI Symbol";
  }

  & .name {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: flex-end;
    line-height: 1.375;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const SymbolCard = (props) => {
  return (
    <Card>
      <div className="container">
        <div className="button">
          <div className="symbol">{props.symbol}</div>
          <div className="name">{props.name}</div>
          {/* <div>{props.altcode}</div> */}
        </div>
      </div>
    </Card>
  );
};

export default SymbolCard;
