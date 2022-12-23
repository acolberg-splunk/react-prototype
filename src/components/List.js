import React from "react";
import styled from "styled-components";
import List from "@splunk/react-ui/List";

const PrismaShim = styled.div`
  ol {
    /* padding-left: 16px; */
    li {
      /* padding-left: 12px; */
    }
  }
  ul {
    padding-left: 20px;
    li {
      padding-left: 8px;
    }
  }
`;

export default function ListShim() {
  return (
    <>
      <Title>List</Title>
      <PrismaShim>
        <List type="decimal" style={{ paddingLeft: "16px" }}>
          <List.Item style={{ paddingLeft: "12px" }}>
            Lorem ipsum dolor sit amet
          </List.Item>
          <List.Item style={{ paddingLeft: "12px" }}>
            Excepteur sint occaecat cupidatat non proident
          </List.Item>
          <List.Item style={{ paddingLeft: "12px" }}>
            Sed ut perspiciatis unde omnis
          </List.Item>
        </List>
        <List>
          <List.Item>Lorem ipsum dolor sit amet</List.Item>
          <List.Item>Excepteur sint occaecat cupidatat non proident</List.Item>
          <List.Item>Sed ut perspiciatis unde omnis</List.Item>
        </List>
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
