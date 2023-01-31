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

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course key={course.id} course={course}/>)}
    </div>
  )
}

export default App