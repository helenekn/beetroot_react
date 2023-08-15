const el = React.createElement();

class NewInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = { liked: false };
   }

   render() {
      const holder = "Enter here";
      const styleField = {
         width: "400px",
      };
      return el("input");
   }
}
const domContainer = document.querySelector("#input");
const root = ReactDOM.createRoot(domContainer);

root.render(el(NewInput));
