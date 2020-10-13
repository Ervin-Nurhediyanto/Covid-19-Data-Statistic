import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import './Doughtnut.css'

export default function DoughnutChart (props) {
  return (
    <div className='Doughnut'>
      <Doughnut
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

// const state = {
//   labels: ['January', 'February', 'March', 'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//         '#501800',
//         '#4B5000',
//         '#175000',
//         '#003350',
//         '#35014F'
//       ],
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

// export default class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Doughnut
//           data={state}
//           options={{
//             title: {
//               display: true,
//               text: 'Average Rainfall per month',
//               fontSize: 20
//             },
//             legend: {
//               display: true,
//               position: 'right'
//             }
//           }}
//         />
//       </div>
//     )
//   }
// }
