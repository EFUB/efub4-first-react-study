//시계 만들기

import React from "react";

function Clock(props) { //현재 시간을 출력하는 간단한 컴포넌트
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    
}

export default Clock;