import React from "react";
import styled from 'styled-components'

const Header = styled.header`
background: red;
text-align: center;
`
const Img = styled.img`
margin: 5% auto;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
    </section>
  );
}
