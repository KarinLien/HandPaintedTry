import React, { useState } from "react";
import { VelocityComponent } from "velocity-react";

const VelocityLetter = ({ letter }) => (
  <VelocityComponent
    runOnMount
    animation={{ opacity: 1, marginTop: 0 }}
    duration={500}
  >
    <p style={styles.letter}>{letter}</p>
  </VelocityComponent>
);

class ReactHooks extends React.Component {
  state = {
    letters: []
  };
  onChange = e => {
    const letters = e.target.value.split("");
    const arr = [];
    letters.forEach((l, i) => {
      arr.push(<VelocityLetter letter={l} key={i} />);
    });
    this.setState(() => ({ letters: arr }));
  };

  render() {
    return (
      <div className="react-hooks-app">
        <div className="react-hooks-container">
          <input onChange={this.onChange} style={styles.input} />
          <p>NOT HOOKS:</p>
          <div style={styles.letters}>{this.state.letters}</div>
        </div>
        <Hooks />
      </div>
    );
  }
}

const Hooks = () => {
  const [count, setCount] = useState([]);
  return (
    <div className="react-hooks-app">
      <div className="react-hooks-container">
        <input
          onChange={e => {
            const letters = e.target.value.split("");
            const arr = [];
            letters.forEach((l, i) => {
              arr.push(<VelocityLetter letter={l} key={i} />);
            });
            setCount(arr);
          }}
          style={styles.input}
        />
        <p>HOOKS:</p>
        <div style={styles.letters}>{count}</div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    height: 40,
    backgroundColor: "#ddd",
    width: 200,
    border: "none",
    outline: "none",
    marginBottom: 20,
    fontSize: 22,
    padding: 8
  },
  letters: {
    display: "flex",
    height: 140
  },
  letter: {
    opacity: 0,
    marginTop: 100,
    fontSize: 22,
    whiteSpace: "pre"
  }
};
export default ReactHooks;
