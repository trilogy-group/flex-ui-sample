import React from "react";
import * as Flex from "@twilio/flex-ui";

class App extends React.Component {
  render() {
    const { manager } = this.props;

    if (!manager) {
      return null;
    }

    return (
      <div>
        <h1>Hello, from DevFactory!</h1>
        <Flex.ContextProvider manager={manager}>
          <Flex.RootContainer />
        </Flex.ContextProvider>
      </div>
    );
  }
}

export default App;
