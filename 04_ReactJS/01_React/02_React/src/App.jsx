//rafce 
/*import React from 'react'

const App = () => {
  const a=10
  const user="Virat"
  return (
    <div>
      <h1>hello {a}</h1>
      <h2>bye {user}</h2>
    </div>
  )
}

export default App
*/

/*
import React from 'react'

const App = () => {
  let user = "Rohit"

  const changeUser= () => {
    console.log(user)
    
    user="Hardik"
    console.log(user)
  }
  
  return (
    <div>
      <h1>User name is {user}</h1>
      <button onClick={changeUser}>Change User</button>
    </div>
  )
}
export default App
*/
/*
import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(10)
  const changeA = ()=>{
    console.log("chal geya");
    setA(60)
    
  }
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Change A</button>
    </div>
  )
}

export default App
*/

/*
import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  return (
    <div>
      <h3>Number is {num}</h3>
      <button onClick={() => {
        setNum(num + 10)
      }}>Increment</button>
      <button onClick={() => {
        setNum(num - 10)
      }}>Decrement</button>
    </div>
  )
}

export default App
*/

import React from 'react'

const App = () => {
  return (
    <div>
      <h2>Hello guys</h2>
    </div>
  )
}

export default App
