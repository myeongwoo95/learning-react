import React, {useState, useRef} from 'react';

function InputSample(){

  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const {name, nickname } = inputs; //나중에 name값과 nickname 값을 쉽게 사용하기 위해 비구조할당을 통해 추출한다.

  const onChange = (e) => {
    const {name, value} = e.target
    
    setInputs({
      ...inputs,
      [name]: value,  
    })
   
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
    
    nameInput.current.focus();
  }

  const nameInput = useRef()

  return(
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      /> 
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      /> 
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample;