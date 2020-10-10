import React from 'react'
// import './LineGraph.css'
import { Line } from 'react-chartjs-2'

export default function LineGraph (props) {
  return (
    <div>
      <div className='data-month'>
        <Line
          data={props.state}
          options={{
            title: {
              display: true,
              text: `Data Covid 19 di ${props.country}`,
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    </div>
  )
}
