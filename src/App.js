import React from "react";
import styled from "styled-components";
import Education from "./components/Education.jsx";

//Dichiarazione Styled Components:

const H1 = styled.h1`
  color: rgb(29, 29, 29);
  margin: auto;
  text-align: left;
  font-size: 70px;
  font: Futura;
`;
const Header = styled.header`
  background-color: rgb(29, 29, 29);
  height: 85px;
  color: white;
`;

const Img = styled.img`
  height: 250px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = () => {
  return (
    <div>
      <Header></Header>
      <Div>
        <H1>
          <b>Marco Melis</b>
        </H1>
        <Img src="https://cdn.pixabay.com/photo/2017/10/06/23/21/tree-2824979_960_720.png" />
      </Div>
      <Education />
    </div>
  );
};

export default App;
