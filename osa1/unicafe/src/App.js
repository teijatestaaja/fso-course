import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteGood = () => {
    setGood(good+1)
  }

  const voteNeutral = () => {
    setNeutral(neutral+1)
  }

  const voteBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
        <Title title="give feedback"/>
        <Button handleClick={voteGood} text='good' />
        <Button handleClick={voteNeutral} text='neutral' />
        <Button handleClick={voteBad} text='bad' /> 
        <Title title="statistics"/>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
    </div>
  )
}

export default App