function Mybutton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click here!"
  );
} //리액트의 함수 컴포넌트

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(Mybutton), domContainer); //컴포넌트를 스크립트를 통해 가져왔어도 아직 화면에 보이는 건 아니기에 렌더 필요
