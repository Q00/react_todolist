import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, color, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>
        <span style={{ color }}>{`${text}`}</span>
      </div>
      <div className="buttons">
        <button onClick={onEnter}>완료</button>
        <button onClick={onLeave}>해결</button>
      </div>
    </li>
  );
};

const WaitingList = ({
  input, // **** 추가됨
  waitingList,
  onChange, // **** 추가됨
  onSubmit, // **** 추가됨
  onEnter,
  onLeave,
}) => {
  // **** 데이터를 컴포넌트 리스트로 변환
  const waitingItems = waitingList.map(w => (
    <WaitingItem
      key={w.id}
      text={w.name}
      entered={w.entered}
      id={w.id}
      color={w.color}
      onEnter={() => onEnter(w.id)}
      onLeave={() => onLeave(w.id)}
    />
  ));
  return (
    <div className="WaitingList">
      <h2>Todo List</h2>
      {/* form 과 input 에 이벤트 및 값 설정 */}
      <form onSubmit={onSubmit}>
        {/* <input type="hidden" value={color} /> */}
        <input value={input} onChange={onChange} />
        <button>등록</button>
      </form>
      <ul>{waitingItems}</ul> {/* 하드코딩된것을 컴포넌트 배열로 교체 */}
    </div>
  );
};

export default WaitingList;
