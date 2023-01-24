import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  // Sets random anecdote after "Next anecdote" button is pressed.
  const setRandomAnecdote = () => {
    const random = Math.floor(Math.random()*8) 
    setSelected(random)
  }

  // Adds a vote to the anecdote in an array, and updates most voted.
  const registerVote = () => {
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
    const indexOfBest = copyOfVotes.indexOf(Math.max(...copyOfVotes))
    setMostVoted(indexOfBest)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes.</p>
      <button onClick={registerVote}>Vote</button>
      <button onClick={setRandomAnecdote}>Next anecdote</button>
      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[mostVoted]}</p>
      <p>This anecdote has {votes[mostVoted]} votes.</p>
    </div>
  )
}

export default App
