import react, {useState} from 'react';

function Counter(){
  // useState(value) value에는 초기값을 넣어주면 된다.
  //setNumber는 현재 상태를 업데이트하는 함수이다.
  const [number, setNumber] = useState(0) 

  //위 코드는 아래의 코드를 배열 비구조화 할당을 통해 간결하게 바꾼것이다. 
  //const numberState = numberState(0);
  //const Number = numberState[0]; 첫번째 원소 삽입
  //const setNumber = numberState[1] 두번째 원소 삽입

  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;