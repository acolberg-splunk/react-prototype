import React from "react";
import styled from "styled-components";
import Select from "@splunk/react-ui/Select";

const PrismaShim = styled.div`
  button {
    /* padding-right: 12px;
    padding-left: 12px; */
  }
`;

export default function SelectShim() {
  return (
    <>
      <Title>Select</Title>
      <PrismaShim>
        <Select defaultValue="2">
          <Select.Option
            label="Line Chart"
            value="1"
            style={{ paddingRight: "24px", paddingLeft: "12px" }}
          />
          <Select.Option
            label="Area Chart"
            value="2"
            style={{ paddingRight: "24px", paddingLeft: "12px" }}
          />
          <Select.Option label="Column Chart" value="3" />
          <Select.Option label="Bar Chart" value="4" />
          <Select.Option label="Pie Chart" value="5" />
          <Select.Option label="Scatter Chart" value="6" />
          <Select.Option label="Bubble Chart" value="7" />
        </Select>
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
