import React from "react";
import Main from './Main';
import PropTypes from 'prop-types'

function Wrapper(props) { // 비구조화로 바뀌면 ({children})으로 요소가 바뀐다.
    const style = {
        backgroundColor: 'yellow',
    };

    // wrapper 컴포넌트가 비구조화로 바뀐다면 밑에 props.children을 children으로 쓸 수 있다.
    // props.children을 통해 여러 개의 자식을 사용할 수 있다.
    return ( 
        <div style={style}>
            {props.children} 
        </div>
    );
}

/*
// 하나의 자식만을 요구하는 프로퍼티(props) 타입(Types)이다.
Wrapper.propTypes = {
    children: PropTypes.element.isRequired
};
*/

export default Wrapper;