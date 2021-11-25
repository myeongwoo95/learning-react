import React, { useRef, useMemo, useCallback, useReducer }from 'react'
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users){
  console.log("활성 사용자 수를 세는중...")
  return users.filter(user => user.active).length;
}

const initialState = {

  inputs: {
    username: '',
    email: '',
  },

  users: [
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
  ]
}

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.input,
          [action.name]: action.value
        }
      }
    case 'CREATE_USER':
      return {
        //여기서부터
      }
    default:
      throw new Error("Unhandled action")
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nextId = useRef(4)
  const { users } = state
  const { username, email} = state.inputs

  const onChange = useCallback( e => {
    const {name, value} = e.target
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
    
  }, [])

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id : nextId.current,
        username,
        email
      }
    })
    nextId.current += 1
  }, [username, email])

  return(
    <>
      <CreateUser username = {username} email={email} onChange={onChange} />
      <UserList users={[]} />
      <div>활성 사용자 수 : 0</div>
    </>
  )
}

export default App;
