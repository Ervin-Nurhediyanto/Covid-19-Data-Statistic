import React from 'react'
import { Pie } from 'react-chartjs-2'
import './Pie.css'

export default function PieChart (props) {
  return (
    <div className='pie'>
      <Pie
        data={{
          labels: ['Total Confirmed', 'Total Deaths', 'Total Recovered'],
          datasets: [
            {
              label: 'Covid-19',
              backgroundColor: [
                '#00A6B4',
                '#B21F00',
                '#2FDE00'
              ],
              hoverBackgroundColor: [
                '#003350',
                '#501800',
                '#175000'
              ],
              data: props.data
            }
          ]
        }}
        options={{
          title: {
            display: true,
            text: `${props.title}`,
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  )
}
