import React from "react";
import styled from "styled-components";
import Menu from "@splunk/react-ui/Menu";
import ChartLine from "@splunk/react-icons/ChartLine";

const PrismaShim = styled.div`
  div:first-child {
    padding: 8px 0;
    button {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
  margin-bottom: 16px;
`;

export default function MenuShim() {
  return (
    <>
      <Title>Menu</Title>
      <PrismaShim>
        <Menu retainFocus={false} style={{ width: "300px" }}>
          <Menu.Item icon={<ChartLine />}>Line Chart</Menu.Item>
          <Menu.Divider style={{ margin: "8px 0" }} />
          <Menu.Item>Area Chart</Menu.Item>
          <Menu.Item>Column Chart</Menu.Item>
          <Menu.Item>Bar Chart</Menu.Item>
          <Menu.Item>Pie Chart</Menu.Item>
          <Menu.Item>Scatter Chart</Menu.Item>
          <Menu.Item>Bubble Chart</Menu.Item>
        </Menu>
      </PrismaShim>

      <Menu retainFocus={false} style={{ padding: "8px 0", width: "300px" }}>
        <Menu.Item
          icon={<ChartLine />}
          style={{ paddingTop: "8px", paddingBottom: "8px" }}
        >
          Line Chart
        </Menu.Item>
        <Menu.Divider style={{ margin: "8px 0" }} />
        <Menu.Item style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          Area Chart
        </Menu.Item>
        <Menu.Item style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          Column Chart
        </Menu.Item>
        <Menu.Item style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          Bar Chart
        </Menu.Item>
        <Menu.Item style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          Pie Chart
        </Menu.Item>
        <Menu.Item style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          Scatter Chart
        </Menu.Item>
        <Menu.Item style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          Bubble Chart
        </Menu.Item>
      </Menu>
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
