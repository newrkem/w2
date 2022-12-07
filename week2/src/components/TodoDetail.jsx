import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <PostBox>
      <SmallPostBox>
        <IdBox>ID:{location.state.id}</IdBox>
        <Btn
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </Btn>
      </SmallPostBox>
      <H1>{location.state.title}</H1>
      <BodyBox>{location.state.body}</BodyBox>
    </PostBox>
  );
};

export default TodoDetail;

const PostBox = styled.div`
  border: 2px solid;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallPostBox = styled.div`
  display: flex;
  height: 80px;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  padding: 0px 24px;
`;
const BodyBox = styled.div`
  padding: 0px 24px;
`;
const IdBox = styled.div``;

const Btn = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
