import React, { useRef, useState, useMemo, useCallback }from 'react'
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users){
  console.log("활성 사용자 수를 세는중...")
  return users.filter(user => user.active).length;
}

function App() {
  console.log("Create User")

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gamil.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    },
  ]);

  const nextId = useRef(4)
  
  //입력 input onChange
  const onChange = useCallback((e) => {
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value 
    })
  }, [inputs]);

  //등록
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      ...inputs
    };

    setUsers( users => users.concat(user))
    //setUsers([...users, user])

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1
  }, [username, email, users]);

  //삭제
  const onRemove = useCallback( id => {
    setUsers( users => users.filter(user => user.id !== id))
  },[])

  //수정
  const onToggle = useCallback( id => {
    setUsers(users => users.map(
      user => user.id === id ? {...user, active: !user.active} : user 
    ));
  }, [])

  const count = useMemo( () => countActiveUsers(users), [users]);

  return(
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  )
}

export default App;
