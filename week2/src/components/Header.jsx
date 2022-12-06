import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderBox>
        <div>My Todo List</div>
        <div>React</div>
      </HeaderBox>
    </>
  );
}

export default Header;

const HeaderBox = styled.div`
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 24px;
`;
