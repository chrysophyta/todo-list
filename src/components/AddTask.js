import React from 'react';

export default function(props) {
  return (
    <form className="add-task" onSubmit={props.onSubmit}>
      <input
        placeholder="＋ Add Task"
        value={props.value}
        onChange={props.onChange}
      />
      {ItemForm}
    </form>
  );
}

const ItemForm = (
  <div>HI</div>
)