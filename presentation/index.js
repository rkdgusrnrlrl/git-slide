// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Code
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Nanum Gothic Coding",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Git 잘 써보기
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            ....안 망하길 🙏
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>왜 쓸까??</Heading>
          <Text margin="20px 0 0" size={6} textColor="secondary">망했을 때 복구</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>망한 상황</Heading>
          <List textColor="secondary" margin="50px 0 0">
            <ListItem margin="10px">아직 커밋 전😒</ListItem>
            <ListItem margin="10px">커밋 후 소스 날려도 됨😑</ListItem>
            <ListItem margin="10px">커밋 후 소스 날려도 안됨😖</ListItem>
            <ListItem margin="10px">푸시 후 😵</ListItem>
            <ListItem margin="10px">머지 후 😇</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>아직 커밋 전😀</Heading>
          <Code margin="50px">git checkout .</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>커밋 후 소스 날려도 됨😑</Heading>
          <Code margin="50px">git reset --hard HEAD~3</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>커밋 후 소스 날려도 안됨😖</Heading>
          <Code margin="50px">git reset --soft HEAD~3</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>푸시 후 😵</Heading>
          <Code margin="50px">git push -f</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>머지 후 😇</Heading>
          <Code margin="50px">git heaven</Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>이미..망....</Quote>
            <Cite>강현구</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
