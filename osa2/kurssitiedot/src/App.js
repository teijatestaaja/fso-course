const Course = ( {course} ) => {
  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts} />
    </div>
  )
}

const Header = (props) => {  
  return (    
    <h1>{props.title}</h1>  
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

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App