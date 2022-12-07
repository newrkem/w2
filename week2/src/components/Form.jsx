import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const addItem = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title: title,
        body: body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <InputForm onSubmit={addItem}>
      <Label>제목</Label>
      <Input
        placeholder="제목을 입력하세요."
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></Input>
      <Label>내용</Label>
      <Input
        placeholder="내용을 입력하세요."
        type="text"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></Input>

      <InputBtn type="submit">추가하기</InputBtn>
    </InputForm>
  );
}

export default Form;

const InputForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;
const Input = styled.input`
  height: 70px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
const InputBtn = styled.button`
  background-color: teal;
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  width: 140px;
  color: white;
  font-weight: 700;
`;
