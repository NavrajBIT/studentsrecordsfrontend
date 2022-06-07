/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react'
const TableRow = ({ sno, unit, site, empcode, name, days }) => {
  return (
    <tr>
      <th scope='row'>{sno + 1}</th> {/* s.no */}
      <td>{unit}</td> {/* unit */}
      <td>{site}</td> {/* site */}
      <td>{empcode}</td> {/* emp code */}
      <td>{name}</td> {/* name */}
      {[...Array(days)].map((date, index) => {
        return (
          <td key={index}>
            <select name="pora">
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
