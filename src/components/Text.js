import React from "react";
import styled from "styled-components";
import Text from "@splunk/react-ui/Text";

const PrismaShim = styled.div`
  input[type="text"] {
    padding-right: 12px;
    padding-left: 12px;
  }
`;

export default function TextShim() {
  return (
    <>
      <Title>Text</Title>
      <PrismaShim>
        <Text defaultValue="Hello" />
      </PrismaShim>
    </>
  );
}

// utility styles used for this demo

const Title = styled.h1`
  border-bottom: 1px solid #ccc;
  font-size: 1.5em;
  font-family: sans-serif;
  line-height: 1.15;
  margin-bottom: 24px;
  padding: 32px 0 16px;
`;
