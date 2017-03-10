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
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");



const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React context
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Sometimes helpful
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="#FFF">What is it?</Heading>
          <List>
            <ListItem textColor="#FFF"><a href={'http://codepen.io/foiseworth/pen/PppKmz'} style={{color:'#FFF'}}>Code example</a></ListItem>
            <ListItem textColor="#FFF">For things that never update (unless you like pain)</ListItem>
            <ListItem textColor="#FFF">Can be overriden</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The good</Heading>
          <List>
            <ListItem>No need to pass props down so reduces coupling</ListItem>
            <ListItem>Used by many libraries: React Router, Redux</ListItem>
            <ListItem>Used by major sites in production: Sky Betting and Gaming, Mozilla, Pluralsight, PayPal, Uber</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The bad</Heading>
          <List>
            <ListItem>Can be a easy to misuse / misunderstand</ListItem>
            <ListItem>If used directly, coupled to a unstable api</ListItem>
            <ListItem>More complexity - more stuff to know such as how to unit test</ListItem>
            <ListItem>Reduces reusability</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The ugly</Heading>
          <BlockQuote>
            <Quote textSize={36} textColor="#F00">
              <p>The vast majority of applications do not need to use context.</p>
              <p>
                If you want your application to be stable, don't use context.
                It is an experimental API and it is likely to break in future releases of React.
              </p>
            </Quote>
            <Cite>https://facebook.github.io/react/docs/context.html</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>However</Heading>
          <BlockQuote>
            <Quote textSize={36} textColor="#666">
              <p>
                React won’t remove context. I mean, it’s technically possible, but the whole reason it exists is because numerous products inside FB needed it. So unless there is an equivalent solution, it won’t go away.              </p>
            </Quote>
            <Cite>http://stackoverflow.com/questions/36428355/react-with-redux-what-about-the-context-issue</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Suggestion</Heading>
          <p>Use wrapping/HOC to provide things like translations, which under the hood uses context</p>
        </Slide>
      </Deck>
    );
  }
}
