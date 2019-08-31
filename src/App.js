import React, { Component } from "react";

import "./styles.css";

//import Carousel from "./components/Carousel/Carousel";

import { default as ChatKit } from "@pusher/chatkit-server";
import ChatMessage from "./components/Chat/ChatMessage";
import Signup from "./components/Chat/Signup";

const chatkit = new ChatKit({
  instanceLocator: "v1:us1:71788713-44d7-4ddf-9505-d0eb92c6e515",
  key:
    "8b50bed7-5e2f-460b-8d91-d912f3926652:o9btMiCdu2JZpuMguOAYzbm4p+DjLde5BTTSYjsUPvE="
});

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentView: "chatMessage"
//     };
//     this.changeView = this.changeView.bind(this);
//   }

//   changeView(view) {
//     this.setState({
//         currentView: view
//     });
//   }

//   render() {
//     let view = "";
//     if (this.state.currentView === "ChatMessage") {
//       view = <ChatMessage changeView={this.changeView} />;
//     } else if (this.state.currentView === "signup") {
//       view = <Signup />;
//     }
//     return <div className="App">{view}</div>;
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: "",
      currentId: "",
      currentView: "signup"
    };
    // this.changeView = this.changeView.bind(this);
    // this.createUser = this.createUser.bind(this);
  }

  createUser(username) {
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(currentUser => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: "chatApp"
        });
      })
      .catch(err => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: "chapApp"
          });
        } else {
          console.log(err.status);
        }
      });
  }

  render() {
    return (
      <div className="App">
        <ChatMessage />
        <Signup />
      </div>
    );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Carousel />
//       </div>
//     );
//   }
// }
export default App;
