import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/welcome';
import Comment from './components/Comment/Comment';
import List from './components/List/List';
import Clock from './components/Clock/Clock';
import { ReduxCounter } from './redux/reduxcounter'
import { ChatInput } from './components/Comment/ChatInput'
import { WelcomeDialog } from './components/Component/WelcomeDialog'
import { RefsComponent } from './components/Refs/Refs'
// import { LikeBtn } from './components/Comment/LikeBtn'
import { TodoList } from './redux/todolist'
// import {RxjsComponent} from './rxjs/RxjsComponent'
// import { FunctionLikeBtn } from './components/Comment/FunctionLikeBtn'
import {RefsList} from './components/Refs/RefsLIst'
import { UseStateCount } from './components/Hook/useState/UseStateCount'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Comment></Comment>
      </section>
      <section>
        <Welcome></Welcome>
      </section>
      <section>
        <List></List>
      </section>
      <section>
        <Clock></Clock>
      </section>
      <section>
        <p>this is a redux component</p>
        <ReduxCounter></ReduxCounter>
      </section>
      <section>
        <p>this is a input</p>
        <ChatInput></ChatInput>
      </section>
      <section>
        <p>组件组合示例</p>
        <WelcomeDialog></WelcomeDialog>
      </section>
      <section>
        <p>ref 组件 示例</p>
        <RefsComponent></RefsComponent>
      </section>
      <section>
        <p>这是一个todo 组件</p>
        <TodoList></TodoList>
      </section>
      {/* <section>
        <RxjsComponent></RxjsComponent>
      </section> */}
      {/* <section>
        {new LikeBtn(true)}
      </section> */}
      {/* <section>
        <p>这是一个函数组件</p>
        <FunctionLikeBtn></FunctionLikeBtn>
      </section> */}
      <section>
        <p>这是一个列表 怎么更新当前 dom 的状态</p>
        <RefsList></RefsList>
      </section>
      <section>
        <p>hook useState</p>
        <UseStateCount></UseStateCount>
      </section>
    </div>
  );
}

export default App;
