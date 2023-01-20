import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ option, result }) => {
  if(option==="positive"){
    return(
      <p>{option} {result} %</p>
    )
  }
  return(
    <p>{option} {result} </p>
  )
}

const Statistics = (props) => {
  if(props.all===0){
    return(
      <p>No feedback given</p>
    )
  }  
  return(
    <div>
      <StatisticLine option="good" result={props.good} />
      <StatisticLine option="neutral" result={props.neutral} />
      <StatisticLine option="bad" result={props.bad} />
      <StatisticLine option="all" result={props.all} />
      <StatisticLine option="average" result={props.average} />
      <StatisticLine option="positive" result={props.positive} />
    </div>
  )
}

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
        <Button handleClick={voteGood} text="good" />
        <Button handleClick={voteNeutral} text="neutral" />
        <Button handleClick={voteBad} text="bad" /> 
        <Title title="statistics"/>
        <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad} average={(bad*(-1)+good)/(good+neutral+bad)} positive={good/(good+neutral+bad)*100} />
    </div>
  )
}

export default App