import React from 'react'

const Snake = props => {

   return (
      <div>
         {props.snakeDots.map((dot, i) => {
            const style = {
               left: dot[0] + 'px',
               top: dot[1] + 'px',
               backgroundColor: props.colour
            }
            return (
               <div className='snake-dot' key={i} style={style}></div>
            )
         })}
      </div>
   )
}

export default Snake