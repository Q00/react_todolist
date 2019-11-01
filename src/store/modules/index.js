import { combineReducers } from 'redux';
import counter from './counter';
import waiting from './waiting'; // **** 불러오기

export default combineReducers({
  counter,
  waiting, // **** 추가
});
