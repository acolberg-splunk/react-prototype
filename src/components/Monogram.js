import React from "react";
import styled from "styled-components";
import Monogram from "@splunk/react-ui/Monogram";

const PrismaShim = styled.div`
  border: 3px solid rgba(57, 147, 255, 0);
  border-radius: 2rem;
  display: inline-block;
  margin: -5px;
  padding: 2px;
  transition: 0.2s border-color ease-in-out;
  &:hover {
    border-color: rgba(255, 255, 255, 0.05);
  }
  &:focus {
    border-color: rgba(57, 147, 255, 0.7);
  }
`;

export default function MonogramShim() {
  return (
    <>
      <Title>Monogram</Title>
      <PrismaShim>
        <Monogram initials="AE" />
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
