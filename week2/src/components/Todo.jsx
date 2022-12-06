import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delete_todo } from "../redux/modules/todos";
import { isDone_toggle } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemove = (id) => {
    dispatch(delete_todo(id));
  };

  const onToggle = (id) => {
    dispatch(isDone_toggle(id));
  };

  return (
    <TodoBox>
      <TodoUl>
        <TodoLi>
          <TodoA>
            <BtnInfo
              onClick={() => {
                navigate("/detail", {
                  state: {
                    id: todo.id,
                    title: todo.title,
                    body: todo.body,
                  },
                });
              }}
            >
              상세보기
            </BtnInfo>

            <TodoH2 key={todo.id}>{todo.title}</TodoH2>
            <TodoP>{todo.body}</TodoP>

            <BtnBox>
              <Btn onClick={() => onRemove(todo.id)}>삭제</Btn>
              <Btn onClick={() => onToggle(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </Btn>
            </BtnBox>
          </TodoA>
        </TodoLi>
      </TodoUl>
    </TodoBox>
  );
}

export default TodoItem;
const TodoBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;

const TodoUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

const TodoLi = styled.li`
  list-style: none;
`;

const TodoA = styled.a``;

const TodoH2 = styled.h2`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 1rem;
  font-family: "Nanum Pen Script";
`;

const TodoP = styled.span`
  font-family: "Nanum Pen Script";
  margin-top: 5px;
  font-size: 2rem;
  font-weight: normal;
`;

const BtnBox = styled.div`
  display: flex;
  padding: 12px;
  gap: 12px;
`;

const Btn = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid red;
  background-color: white;
  cursor: pointer;
`;

const BtnInfo = styled.button`
  position: absolute;
  float: none;
`;
