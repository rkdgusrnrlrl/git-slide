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
  Code,
  Image 
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

const images = {
  badgithub: require('../assets/bad-github.png'),
  bettergithub: require('../assets/better-github.png'),
  bestgithub: require('../assets/best-github.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            같이 해요 GitHub
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            GitHub 잘 사용하기
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>보통의 깃헙</Heading>
          <Image src={images.badgithub.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>이제 막 달리는(?) 깃헙</Heading>
          <Image src={images.bettergithub.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>꾸준히 하는 깃헙</Heading>
          <Image src={images.bestgithub.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>어떻게 하면 꾸준히 할 수 있을까?</Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            중요한건 마음..?!
          </Text>
        </Slide>
      </Deck>
    );
  }
}
