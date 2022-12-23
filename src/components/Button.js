import React from "react";
import styled from "styled-components";
import Button from "@splunk/react-ui/Button";
import { _ } from "@splunk/ui-utils/i18n";
import MoreVertical from "@splunk/react-icons/MoreVertical";
import Tooltip from "@splunk/react-ui/Tooltip";

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

const PrismaShim2 = styled.div`
  border: 3px solid rgba(57, 147, 255, 0);
  border-radius: 2rem;
  color: #818285;
  display: inline-block;
  margin: -5px;
  padding: 2px;
  transition: 0.2s border-color ease-in-out;
  svg {
    color: #818285;
    transition: 0.2s color ease-in-out;
  }
  &:hover {
    border-color: rgba(255, 255, 255, 0.05);
    svg {
      color: #f5f5f5;
    }
  }
  &:focus {
    border-color: rgba(57, 147, 255, 0.7);
    svg {
      color: #f5f5f5;
    }
  }
`;

export default function ButtonShim() {
  return (
    <>
      <Title>Button</Title>
      <PrismaShim>
        <Button>Click me!</Button>
      </PrismaShim>
      <Spacer />
      <PrismaShim2>
        <Tooltip compact content={_("Actions")}>
          <Button
            appearance="secondary"
            aria-label={_("Actions")}
            icon={
              <MoreVertical
                screenReaderText={_("Actions")}
                hideDefaultTooltip
                size={1.7}
              />
            }
          />
        </Tooltip>
      </PrismaShim2>
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

const Spacer = styled.div`
  display: inline-block;
  width: 32px;
`;
