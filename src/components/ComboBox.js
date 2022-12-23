import React from "react";
import styled from "styled-components";
import Multiselect from "@splunk/react-ui/Multiselect";

const defaultValues = [];

const PrismaShim = styled.div`
  input {
    padding: 8px 12px 9px;
  }
`;

export default function ComboBoxShim() {
  return (
    <>
      <Title>ComboBox</Title>
      <PrismaShim>
        <Multiselect defaultValues={defaultValues} inline>
          <Multiselect.Option label="Line Chart" value="1" />
          <Multiselect.Option label="Area Chart" value="2" />
          <Multiselect.Option label="Column Chart" value="3" />
          <Multiselect.Option label="Bar Chart" value="4" />
          <Multiselect.Option label="Pie Chart" value="5" />
          <Multiselect.Option label="Scatter Chart" value="6" />
          <Multiselect.Option label="Bubble Chart" value="7" />
        </Multiselect>
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
