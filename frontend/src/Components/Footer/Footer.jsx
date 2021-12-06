import React from 'react'
import { Link,BrowserRouter } from 'react-router-dom'
export default function Footer() {
    return (
        <div className="grid grid-cols-4 p-3 m-3 text-xs bg-blue-300">
        <BrowserRouter>
        <div className="col-span-1 py-1 text-center">
            <h3 className="">-:Quick Links:-</h3>
            <Link to="https://www.nhsinform.scot/search?q=cancer&locpt=&ds=&tab=inform" >Diseases info</Link><br/>
            <Link to="">Emergency</Link><br/>
            <Link to="">check health</Link><br/>
        </div>
        <div className="col-span-1 py-1 text-center">
            <h3 className="">-:Quick Tools:-</h3>
            <Link to="#" >BMI calculator</Link><br/>
            <Link to=""> Symptoms</Link><br/>
            <Link to=""> Guide</Link><br/>
        </div>
        <div className="col-span-2 py-1 text-center">
            <h3 className="">-:Feedback:-</h3>
            <article>Feedbacks are the best tools for improvement.<br/>
                    <input id="opinion" placeholder="write your opinion"/>
                    <label id="opinion"></label> 
                    <button type="button">Submit</button>

            </article>
        </div>
        </BrowserRouter>
        </div>
    )
}
