import React from 'react';
import ReactDOM from 'react-dom';
//createStore와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';
//프로바이더 불러오기
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 리덕스 개발자 도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);
console.log(store.getState());

// provider 렌더링해서 기존의 app감싸주기

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
