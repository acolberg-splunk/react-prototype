import React, { Component } from "react";
import styled from "styled-components";
import TabBar from "@splunk/react-ui/TabBar";

const PrismaShim = styled.div`
  button {
    line-height: 20px;
  }
`;

const PrismaShim2 = styled.div`
  button {
    line-height: 20px;
    flex-grow: 1;
    padding-right: 0px !important;
    padding-left: 0px !important;
    div:last-child {
      width: 100%;
    }
  }
`;

export default class Basic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { activeTabId: "one" };
  }

  handleChange = (e, { selectedTabId }) => {
    this.setState({ activeTabId: selectedTabId });
  };

  render() {
    return (
      <>
        <Title>TabBar</Title>
        <PrismaShim>
          <TabBar
            activeTabId={this.state.activeTabId}
            onChange={this.handleChange}
          >
            <TabBar.Tab label="Tab One" tabId="one" />
            <TabBar.Tab label="Tab Two" tabId="two" />
            <TabBar.Tab label="Tab Three" tabId="three" />
            <TabBar.Tab label="Tab Four" tabId="four" />
            <TabBar.Tab label="Tab Five" tabId="five" />
          </TabBar>
        </PrismaShim>
        <PrismaShim2>
          <TabBar
            activeTabId={this.state.activeTabId}
            onChange={this.handleChange}
          >
            <TabBar.Tab label="Tab One" tabId="one" />
            <TabBar.Tab label="Tab Two" tabId="two" />
            <TabBar.Tab label="Tab Three" tabId="three" />
            <TabBar.Tab label="Tab Four" tabId="four" />
            <TabBar.Tab label="Tab Five" tabId="five" />
          </TabBar>
        </PrismaShim2>
      </>
    );
  }
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
