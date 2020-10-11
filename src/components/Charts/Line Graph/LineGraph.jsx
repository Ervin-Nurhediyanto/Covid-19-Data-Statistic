import React from 'react'
import './LineGraph.css'
import { Line } from 'react-chartjs-2'

export default function LineGraph (props) {
  return (
    <div>
      <div className='data-month'>
        <Line
          data={{
            labels: props.labels,
            // labels: [],
            datasets: [
              {
                label: props.labelA,
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'red',
                borderWidth: 2,
                data: props.dataA
              },
              {
                label: props.labelB,
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'Blue',
                borderWidth: 2,
                data: props.dataB
              },
              {
                label: props.labelC,
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'Yellow',
                borderWidth: 2,
                data: props.dataC
              }
            ]
          }}
          // data={props.state}
          options={{
            title: {
              display: true,
              text: `Data Covid 19 Bulan ${props.month}`,
              fontSize: 18
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
