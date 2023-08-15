const el = React.createElement;

class LikeButton extends React.Component {
   constructor(props) {
      super(props);
      this.state = { liked: false };
   }

   render() {
      if (this.state.liked) {
         return "You click this";
      }

      return el(
         "span",
         { onClick: () => this.setState({ liked: true }), className: "btn_1" },
         "Click me"
      );
   }
}

const domContainer = document.querySelector("#like_button");
const root = ReactDOM.createRoot(domContainer);

root.render(el(LikeButton));
