import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

const Wrapper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostWritePage(props) {
  const navigate = useNavigate();
  const [title, setTItle] = useState("");
  const [content, setContent] = useState("");
  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTItle(event.target.value);
          }}
        ></TextInput>
        <TextInput
          height={480}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></TextInput>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        ></Button>
      </Container>
    </Wrapper>
  );
}
export default PostWritePage;
