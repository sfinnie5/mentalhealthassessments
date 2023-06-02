import React from 'react'

const Table = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th colSpan='3' className='text-center'>
                        GAD-7 Score Interpretation
                    </th>
                </tr>
                <tr>
                    <th>GAD-7 Score</th>
                    <th>Anxiety Severity</th>
                </tr>
                <tr>
                    <td>0-4</td>
                    <td>Minimal Anxiety</td>
                </tr>
                <tr>
                    <td>5-9</td>
                    <td>Mild Anxiety</td>
                </tr>
                <tr>
                    <td>10-14</td>
                    <td>Moderate Anxiety</td>
                </tr>
                <tr>
                    <td>15-21</td>
                    <td>Severe Anxiety</td>
                </tr>
            </thead>
        </table>
    )
}

export default Table
