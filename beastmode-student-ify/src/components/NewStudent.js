import React from 'react'

const NewStudent = ({students}) => (
  <div>
    <form>
      Name:
      <input type="text" name="firstName"/>
      &nbsp;
      <input type="text" name="lastName"/>
      <br />
      Age:
      <input type="text" name="age"/>
      <br/>
      Year:
      <input type="text" name="year"/>
      <br />
      <input type="submit" value="Submit" onClick={students.push()}/>
    </form>
  </div>
)

export default NewStudent
