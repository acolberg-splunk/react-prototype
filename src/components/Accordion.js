import React from "react";
import styled from "styled-components";
import Accordion from "@splunk/react-ui/Accordion";
import P from "@splunk/react-ui/Paragraph";

const PrismaShim = styled.div`
  div {
    /* fix collapsible heading spacing */
    &:first-child {
      button {
        font-weight: 500;
        padding: 18px 52px;
        span:first-child {
          top: 17px;
          left: 24px;
        }
      }
    }
    /* apply spacing to content - might want to move this onto elements */
    &:last-child > div > p {
      padding: 20px;
      padding-bottom: 10px;
    }
  }
`;

export default function AccordionShim() {
  return (
    <>
      <Title>Accordion</Title>
      <PrismaShim>
        <Accordion collapseAll defaultOpenPanelId={null}>
          <Accordion.Panel panelId={1} title="Panel 1">
            <P>
              An Accordion contains more than one managed CollapsiblePanel,
              where only one panel can be expanded at a time. If you want more
              precise control of a CollapsiblePanel or need to be able to expand
              multiple panels at a time, see CollapsiblePanel.
            </P>
          </Accordion.Panel>
          <Accordion.Panel
            panelId={2}
            title="Panel 2"
            description="Description"
          >
            <P>
              An Accordion contains more than one managed CollapsiblePanel,
              where only one panel can be expanded at a time. If you want more
              precise control of a CollapsiblePanel or need to be able to expand
              multiple panels at a time, see CollapsiblePanel.
            </P>
          </Accordion.Panel>
          <Accordion.Panel panelId={3} title="Panel 3">
            <P>
              An Accordion contains more than one managed CollapsiblePanel,
              where only one panel can be expanded at a time. If you want more
              precise control of a CollapsiblePanel or need to be able to expand
              multiple panels at a time, see CollapsiblePanel.
            </P>
          </Accordion.Panel>
        </Accordion>
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
