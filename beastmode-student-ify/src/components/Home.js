import React from 'react'

const Home = ({students}) => (
  students.map((student) => {
    return (
      <div>
        <p>
          <strong>
            Name:&nbsp;
          </strong>
          {student.firstName} {student.lastName}
          &nbsp;
          <strong>
            Age:
          </strong>
          {student.age}
        </p>
        <p>
          <strong>
            Year:
          </strong>
          {student.year}
        </p>
      </div>
    )
  })
)

export default Home
