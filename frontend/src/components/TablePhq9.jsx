import React from 'react'

const Table = () => {
  return (
    <table className='table'>
      <thead>
        <tr>
            <th colSpan='3'className='text-center'>PHQ-9 Score Interpretation</th>
        </tr>
        <tr>
            <th>PHQ-9 Score</th>
            <th>Depression Severity</th>
        </tr>
        <tr>
            <td>0-4</td>
            <td>None-Minimal</td>
        </tr>
        <tr>
            <td>5-9</td>
            <td>Mild</td>
        </tr>
        <tr>
            <td>10-14</td>
            <td>Moderate</td>
        </tr>
        <tr>
            <td>15-19</td>
            <td>Moderately Severe</td>
        </tr>
        <tr>
            <td>20-27</td>
            <td>Severe</td>
        </tr>
      </thead>
    </table>
  )
}

export default Table