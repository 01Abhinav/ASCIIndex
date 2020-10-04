import React from "react";
import SymbolCard from "./SymbolCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 0.75rem;
  gap: 0.75rem;
  padding: 1.5rem;
`;

const CardsContainer = () => {
  return (
    <Grid>
      <SymbolCard symbol="♥" name="Heart" />
      <SymbolCard symbol="♦" name="Diamond" />
      <SymbolCard symbol="♣" name="Clubs" />
      <SymbolCard symbol="♠" name="Spade" />
      <SymbolCard symbol="☻" name="Smily-Solid" />
      <SymbolCard symbol="☺" name="Smily-Outline" />
      <SymbolCard symbol="♂" name="Male" />
      <SymbolCard symbol="♀" name="Female" />
      <SymbolCard symbol="♪" name="Note" />
      <SymbolCard symbol="♫" name="Music" />
      <SymbolCard symbol="☼" name="Sun" />
      <SymbolCard symbol="►" name="Right Triangle" />
      <SymbolCard symbol="◄" name="Left Triangle" />
      <SymbolCard symbol="↕" name="Vertical" />
      <SymbolCard symbol="‼" name="Exclamation" />
      <SymbolCard symbol="¶" name="Bass Clef" />
      <SymbolCard symbol="§" name="Treble Clef" />
      <SymbolCard symbol="▬" name="Bar" />
      <SymbolCard symbol="↨" name="Vertical-Alt" />
      <SymbolCard symbol="↑" name="Up Arrow" />
      <SymbolCard symbol="↓" name="Down Arrow" />
      <SymbolCard symbol="→" name="Left Arrow" />
      <SymbolCard symbol="←" name="Right Arrow" />
      <SymbolCard symbol="∟" name="Right Angle" />
      <SymbolCard symbol="↔" name="Horizontal" />
      <SymbolCard symbol="▲" name="Up Triangle" />
      <SymbolCard symbol="▼" name="Down Triangle" />
      <SymbolCard symbol="Ω" name="Omega" />
      <SymbolCard symbol="♥" name="Heart" />
      <SymbolCard symbol="♦" name="Diamond" />
      <SymbolCard symbol="♣" name="Clubs" />
      <SymbolCard symbol="♠" name="Spade" />
      <SymbolCard symbol="☻" name="Smily-Solid" />
      <SymbolCard symbol="☺" name="Smily-Outline" />
      <SymbolCard symbol="♂" name="Male" />
      <SymbolCard symbol="♀" name="Female" />
      <SymbolCard symbol="♪" name="Note" />
      <SymbolCard symbol="♫" name="Music" />
      <SymbolCard symbol="☼" name="Sun" />
      <SymbolCard symbol="►" name="Right Triangle" />
    </Grid>
  );
};

export default CardsContainer;
