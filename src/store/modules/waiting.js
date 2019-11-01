import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CHANGE_COLOR = 'waiting/CHANGE_COLOR'; // 투두리스트 색 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

let id = 1;
// createAction 으로 액션 생성함수 정의
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const changeColor_list = createAction(CHANGE_COLOR, color => color);
export const create = createAction(CREATE, (text, color) => ({
  text,
  color,
  id: id++,
}));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

// **** 초기 상태 정의
const initialState = {
  input: '',
  list: [
    {
      id: 0,
      name: '책읽기',
      entered: true,
      color: 'gray',
    },
    //초기상태 없음
  ],
};

// **** handleActions 로 리듀서 함수 작성
export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [CHANGE_COLOR]: (state, action) => ({
      ...state,
      color: action.payload,
    }),
    [CREATE]: (state, action) => ({
      ...state,
      list: state.list.concat({
        id: action.payload.id,
        name: action.payload.text,
        color: action.payload.color,
        entered: false,
      }),
    }),
    [ENTER]: (state, action) => ({
      ...state,
      list: state.list.map(item =>
        item.id === action.payload
          ? { ...item, entered: !item.entered, color: 'gray' }
          : item
      ),
    }),
    [LEAVE]: (state, action) => ({
      ...state,
      list: state.list.filter(item => item.id !== action.payload),
    }),
  },
  initialState
);
