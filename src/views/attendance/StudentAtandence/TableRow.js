/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react'
import './studentAtandence.css'
const TableRow = ({ sno, stdroll, name, days }) => {
  return (
    <tr className='tablerow'>
      <th scope='row'>{sno + 1}</th> {/* s.no */}
      <td>{stdroll}</td> {/* std roll */}
      <td>{name}</td> {/* std name */}
      {[...Array(days)].map((date, index) => {
        return (
          <td key={index}>
            <select className="form-select" style={{width: "60px"}} name="pora">
              <option value="absent">A</option>
              <option value="present">P</option>
            </select>
          </td>
        )
      })}
    </tr>
  )
}
export default TableRow;
