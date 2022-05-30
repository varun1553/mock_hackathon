import React from 'react'
import "./table.css"

export default function Table() {
  return (
    <div className='table'>
        <div className="tablewrapper">
            <table className="viewalldonations">
                <thead>
                    <tr>
                        <th className="primary">Name</th>
                        <th className="primary">Phone No</th>
                        <th className="primary">Email ID</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}
