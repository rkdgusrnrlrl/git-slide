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
  Image,
  Link 
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
  bestgithub: require('../assets/best-github.png'),
  police: require('../assets/y8VBq1q.jpg'),
  what_to_do: require('../assets/what-to-do.png')
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
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>
            다양한 사람 follow 하기
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            모르는 사람이 부담 스럽다면 아는 사람 부터~
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>
            좋은 소스 찾기...그리고 스타 찍기
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            자신의 관심사를 표현 하는 법.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>
            자신이 하는 것(?) 공개 하기
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            rkdgusrnrlrl/what-to-do 이런거 만들어 보기 
          </Text>
          <Image src={images.what_to_do.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>
            남의 것(?) 구경가기
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            관심 있는 내용이 있다면 comment 를 남겨 보자 남도 기다리고 있다. 
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>
            그냥 시도해 보기(겟 스타트)
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            레파지토리 많이 만든다고 안잡아간다.
          </Text>
          <Image src={images.police.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>
            같이 프로젝트 하기
          </Heading>
          <List textColor="secondary" margin="50px 0 0">
            <ListItem margin="10px">천천히 같이 맞춰 가기</ListItem>
            <ListItem margin="10px">그리고 재미있게 하기</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>
            정 없다면...나(?)랑 같이 하기
          </Heading>
          <Link href="https://github.com/rkdgusrnrlrl">
            <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
              https://github.com/rkdgusrnrlrl
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
