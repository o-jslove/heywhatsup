import React, { Component } from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Wrapper from './component/Wrapper';
// JS파일에 외부 파일을 불러오는 것이기 때문에 "import" 키워드를 사용한다. 
// 같은 JS파일은 확장자를 사용하지 않는다. 

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
      <Main name="철수" color="blue" maleYn />
      <Main name="유미" color="red" />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App; //다른 JS파일에서 불러올 수 있도록 내보내주기