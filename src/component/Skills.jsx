import React from 'react'


function Skills({ color, level, skill}) {
    //const color = props.color;

    const colorStyle = {
        backgroundColor: color,
        borderRadius: '10px',
        width: 'auto',
        margin: '5px',
        padding: '5px 10px '
    }

  return (
    <>
        <div style={colorStyle}>
           <span>{ skill } </span> 
           <span> {level === 'beginner' && '👶🏼'} </span>
           <span> {level === 'intermediate' && '💪🏼'} </span>
           <span> {level === 'advanced' && '🏆'} </span>
        </div>
    </>
  )
}

export default Skills