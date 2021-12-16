import React from 'react'
import { useState } from 'react'

export default function NewAppointment() {
    const [type,setType]=useState("doctor")
    return (
        <div className='ml-2'>
            <div className='m-2'>
                <label htmlFor="type">Which appointment would you like to take?</label><br/>
                <select id="type" onChange={(e)=>setType(e.target.value)}>
                    <option value="doctor" defaultChecked>Doctor</option>
                    <option value="pathology">Pathology</option>
                </select>
            </div>
            {type==="doctor" && (<div>
                <label for="pdisease">Disease : </label>
                <input type="text" name="pdisease" id="pdisease" className='m-2 bg-blue-100 '></input><br></br>
                <label for="pdate">Preferred date :  </label>
                <input type="text" name="pdate" id="pdate" className='m-2 bg-blue-100'></input><br></br>
                <label for="ptime">Preferred timing :  </label>
                <input type="text" name="ptime" id="ptime" className='m-2 bg-blue-100'></input><br></br>
                <button type="button" className="flex flex-row p-2 mt-8 ml-10 text-white bg-blue-800">Check Availability</button>


                </div>)}
            {
                type==="pathology" && (<div>
                    <label for="ptestname">Test name :  </label>
                    <input type="text" name="ptestname" id="ptestname" className='m-2 bg-blue-100'></input><br></br>
                    <label for="plabtiming">Preferred timing :  </label>
                    <input type="text" name="plabtiming" id="plabtiming" className='m-2 bg-blue-100'></input><br></br>
                    
                    <button type="button" className="flex flex-row p-2 mt-8 ml-10 text-white bg-blue-800">Check Availability</button>

                    </div>)
            }
        </div>
    )
}
