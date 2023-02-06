import React from 'react'

const Course = ( {course} ) => {
    return (
      <div>
        <Header title={course.name}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = (props) => {  
    return (    
      <h2>{props.title}</h2>  
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.part.name} {props.part.exercises}</p>
    )
  }
  const Content = (props) => {
    const allContent = props.parts.map(part => <Part key={part.id} part={part}/>)
    return(
      <div>
        {allContent}
      </div>
    )
  }
  
  const Total = (props) => {
    const total = props.parts.reduce(function(sum, part){
      return sum + part.exercises
    }, 0)
  
    return (
      <p>Total of {total} exercises.</p>
    )
  }

export default Course