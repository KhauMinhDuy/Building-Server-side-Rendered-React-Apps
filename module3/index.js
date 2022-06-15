const rootElement = document.getElementById("app");

// const myElement = document.createElement("h1");
// myElement.className = "orange";
// myElement.innerHTML = "Hello From Pluralsight";

// rootElement.appendChild(myElement);

// const myReactElement = React.createElement(
//   "h1",
//   {
//     className: "orange",
//   },
//   "Hello From Pluralsight React"
// );

// ReactDOM.render(myReactElement, document.getElementById("app"));

// const Hello = function (props) {
//   return React.createElement("h1", {}, "Hello World " + props.time);
// };

// ReactDOM.render(
//   React.createElement(Hello, { time: new Date().toLocaleDateString() }, null),
//   document.getElementById("app")
// );

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  tick() {
    this.setState(() => {
      return {
        time: new Date().toLocaleString(),
      };
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  ComponentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      "h1",
      { className: "orange" },
      `Hello World ${this.state.time}`
    );
  }
}

ReactDOM.render(
  React.createElement(Hello, { time: new Date().toLocaleDateString() }, null),
  document.getElementById("app")
);
