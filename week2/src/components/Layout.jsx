import React from "react";
import Header from "./Header";
import Form from "./Form";
import TodoListContainer from "./TodoListContainer";
import styled from "styled-components";

function Layout() {
  return (
    <StBox>
      <Header />
      <Form />
      <TodoListContainer />
    </StBox>
  );
}

export default Layout;

const StBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
