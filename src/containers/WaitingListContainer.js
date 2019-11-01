import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as waitingActions from '../store/modules/waiting';
import WaitingList from '../components/WaitingList';

class WaitingListContainer extends Component {
  // 인풋 변경 이벤트
  handleChange = e => {
    const { WaitingActions } = this.props;
    WaitingActions.changeInput(e.target.value);
  };
  // 등록 이벤트
  handleSubmit = e => {
    console.log('내가 볼거', this.props);
    e.preventDefault();
    const { WaitingActions, input, color } = this.props;
    WaitingActions.create(input, color); // 등록
    WaitingActions.changeInput(''); // 인풋 값 초기화
    WaitingActions.changeColor_list(color);
  };
  // 입장
  handleEnter = id => {
    const { WaitingActions } = this.props;
    WaitingActions.enter(id);
  };
  // 나가기
  handleLeave = id => {
    const { WaitingActions } = this.props;
    WaitingActions.leave(id);
  };
  render() {
    const { input, list, color } = this.props;
    return (
      <WaitingList
        input={input}
        color={color}
        waitingList={list}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onEnter={this.handleEnter}
        onLeave={this.handleLeave}
      />
    );
  }
}

const mapStateToProps = ({ waiting }) => ({
  input: waiting.input,
  color: waiting.color,
  list: waiting.list,
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  WaitingActions: bindActionCreators(waitingActions, dispatch),
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingListContainer);
