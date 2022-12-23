import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { themes as reactUIThemes } from "@splunk/react-ui/themes";

import Accordion from "./components/Accordion";
import Monogram from "./components/Monogram";

const themeId = "scp";
const theme = {
  ...reactUIThemes[themeId]
};

export default function PrismaAccordion() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Accordion></Accordion>
        <Monogram></Monogram>
      </Main>
    </ThemeProvider>
  );
}


const Main = styled.main`
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-family: sans-serif;
  line-height: 1.15;
`;

const Subtitle = styled.p`
  font-size: 1em;
  font-family: sans-serif;
  line-height: 1.5;
`;