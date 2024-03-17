function MyButton(props)
{
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement
    (
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// React DOM의 렌더 함수를 사용하여 React 컴포넌트를 DOM 컨테이너에 렌더링하는 코드
// 스크립트 태그를 사용하여 컴포넌트를 가져왔다고 해도 컴포넌트가 화면에 보이지 않기 때문
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);