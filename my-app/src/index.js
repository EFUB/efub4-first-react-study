import React from 'react';
//chapter 06에서 렌더링 방식을 바꾸면 react-dom/client로 써줘야함
import ReactDOM from 'react-dom/client'; // react-dom/client 에서 react-dom으로 수정해야 돌아감
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import Clock from './chapter_04/Clock';
import NotificationList from './chapter_06/NotificationList';

//아래 방식으로 렌더링하면 react18에서 지원하지 않는다고 경고창이 뜬다. 
// ReactDOM.render (
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
//   );

//그래서 이렇게 바꿔줘야 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
      <NotificationList />
    </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
