import React, {memo} from 'react';

const HabitForm = memo(props => {
  const inputRef = React.createRef();
  
  const onSubmit = e => {
    e.preventDefault()
    const name = inputRef.current.value;
    name && props.onAdd(name)
    inputRef.current.value = '';
  };
  return (
    <form onSubmit={onSubmit}>
      <input 
        ref={inputRef}
        type="text" 
        placeholder="습관을 입력하세요." 
      />
      <button>추가</button>
    </form>
  );
});

export default HabitForm;