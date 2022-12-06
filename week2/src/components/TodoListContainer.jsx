import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Todo";
import styled from "styled-components";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state);
  const todoListWorking = todos.filter((e) => !e.isDone);
  const todoListDone = todos.filter((e) => e.isDone);

  return (
    <StlistBox>
      <h1>Working... 🔥</h1>
      <SmallBox>
        {todoListWorking.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </SmallBox>
      <h2>Done..! 🎉</h2>
      <SmallBox>
        {todoListDone.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </SmallBox>
    </StlistBox>
  );
};

export default TodoListContainer;

const StlistBox = styled.div`
  padding: 0px 24px;
`;

const SmallBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
