import React from 'react';
import PropTypes from 'prop-types' // 프로퍼티 타입을 지정해주기 위해 사용 한다.

function Main({color, name, maleYn}) { // 비구조화 할당
    const msg = maleYn ? '남자' : '여자'; // boolean 사용
    return (
        <div>
            <main>
                <h1 style={{color}}>안녕하세요. {name}입니다. ({msg})</h1>
            </main>
        </div>
    );
}

// 프로퍼티 타입 지정
Main.propTypes = {
    name: PropTypes.string
}

//프로퍼티 기본값 지정
Main.defaultProps = {
    name: '디폴트'
}

// 프로퍼티 타입 지정 및 필수값 설정 (값을 지정하지 않으면 경고 메시지가 나온다.)
// 지금은 위에 기본값 '디폴트'가 지정되어 있어서 밑에 프로퍼티가 이용되지 않는다.
Main.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Main; //다른 JS파일에서 불러올 수 있도록 내보내주기