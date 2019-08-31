import React, { Component } from "react";

import "./styles.css";

class ChatMessage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.changeView = this.changeView.bind(this);
  // }
  // changeView() {
  //   this.props.changeView("signup");
  // }
  render() {
    return (
      <div>
        <button className="chat-button" onClick={this.changeView}>
          Enviar mensagem
        </button>
      </div>
    );
  }
}
export default ChatMessage;

// const tokenProvider = new Chatkit.TokenProvider({
//   url:
//     "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/71788713-44d7-4ddf-9505-d0eb92c6e515/token"
// });

// const chatManager = new Chatkit.ChatManager({
//   instanceLocator: "v1:us1:71788713-44d7-4ddf-9505-d0eb92c6e515",
//   userId: "jesus",
//   tokenProvider: tokenProvider
// });

// chatManager
//   .connect()
//   .then(currentUser => {
//     console.log("Connected as user", currentUser);
//   })
//   .catch(error => {
//     console.error("error", error);
//   });
