import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  input {
    height: 45px;
    width: 460px;
    margin: auto;
    padding-left: 20px;
    font-size: 16px;
    color: lightgray;
  }
  input[type='submit'] {
    background: pink;
    color: white;
    justify-self: flex-end;
  }
`;

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      starred: false,
      completed: false,
      id: '',
      due: ''
    };
  }
  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      this.props.onSubmit(this.state, event);
    }
    this.setState({ title: '', content: '', due: '', id: '' });
  };
  onInputChange = event => {
    this.setState({ title: event.target.value, id: uuid() });
  };
  onTimeChange = event => {
    this.setState({ due: event.target.value });
  };
  onContentChange = event => {
    this.setState({ content: event.target.value });
  };
  render() {
    return (
      <StyledForm onSubmit={this.onFormSubmit}>
        <input
          name="title"
          placeholder="＋ Add Task"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        <input
          name="content"
          placeholder="Notes for the task"
          type="text"
          value={this.state.content}
          onChange={this.onContentChange}
        />
        <input
          name="duetime"
          type="datetime-local"
          value={this.state.due}
          onChange={this.onTimeChange}
        />

        <input type="submit" value="Add" />
      </StyledForm>
    );
  }
}

export default AddTask;
