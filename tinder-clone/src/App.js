import React from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/chat/:person" component={ChatScreen}>
            {/* header buttons */}
            <Header backButton="/chat" />
            {/* chat */}

            <ChatScreen />
          </Route>
        </Switch>
        <Route exact path="/chat">
          {/* header buttons */}
          <Header backButton="/home" />
          {/* chat list */}
          <Chats />
        </Route>

        <Switch>
          <Route path="/home">
            <Header />
            {/* card */}
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
