import React from 'react'
import "./table.css"
import {data} from "./dummydata.jsx"

export default function Table() {
    
    const mydata  = data;
    const dataitems = mydata.map((dataitem) => 
        <tr className="dataitems">
            <th className="secondary">{dataitem.name}</th>
            <th className="secondary">{dataitem.phone}</th>
            <th className="secondary">{dataitem.email}</th>
        </tr>
    );
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
                <tbody className="tablebody">
                    {dataitems}
                </tbody>
            </table>
        </div>
    </div>
  );
}
