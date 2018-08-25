import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    height: 3rem;
    width: 100%;
    margin: auto;
    padding-left: 1.25rem;
    font-size: 1rem;
    color: lightgray;
    background: none;
    border: none;
    border-bottom: 1px solid black;
  }
  input:focus {
    outline: none;
  }
  input[type='submit'] {
    background: #4a90e2;
    color: white;
    justify-self: flex-end;
  }
  .hide {
    display: none;
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
          className="hide"
        />
        <input
          name="duetime"
          type="datetime-local"
          value={this.state.due}
          onChange={this.onTimeChange}
          className="hide"
        />

        <input type="submit" value="Add" className="hide" />
      </StyledForm>
    );
  }
}

export default AddTask;
