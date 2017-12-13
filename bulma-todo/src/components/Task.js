import React from 'react';
import { Panel } from 'reactbulma';

const Task = ({ id, name, time, complete, onClick }) => (

  <div>
    <Panel.Block className={(complete) ? "complete-emoji" : "" }label onClick={onClick}>

    {
      (!complete) ? <p>{name} - {(new Date(time)).toLocaleString()}</p> : <span className="complete-emoji" aria-label="check" role="img">✔️</span>
    }

    </Panel.Block>
  </div>

)

export default Task;
