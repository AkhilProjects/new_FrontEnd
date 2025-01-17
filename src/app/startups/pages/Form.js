import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router";
import arrow from "../../../Assets/icons/arrow.svg";
import { CreateStep2 } from "../../../redux/actions/startupAction";
const  Form =()=> {
 
  const [verified, setverified] = useState(2);
const dispatch = useDispatch();
const history = useHistory();
let user = localStorage.getItem("user");
  const userid = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState({
    Fullname: "",
    Personal_email: "",
    current_year: 1,
    Idea_title:"",
    Brief_Idea:"",
    URL:"",
    Mentor: "",
  });
const startup_detail = useSelector(state=>state.startup);

  const setFormStatus = ()=>{
if(startup_detail.Idea.status==="Step1-complete"){
    setverified(0);
}
else if(startup_detail.Idea.status==="under-reviewed"){
    setverified(1);
}
else {
    setverified(2);
}
  }
  const onHandleBack = ()=>{
      history.push("/startups/Register");
  }

  const onStep3 = ()=>{
      history.push("/startups/Register");
  }

  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const mentors = [
    {key:1,
      name: " mr. amitsingh",
    },
    {key:2,
      name: " lakshmi",
    },
    {key:3,
      name: "hondsa",
    },
    {key:4,
      name: " chehe",
    },
    {key:5,
      name: " hola",
    },
    {key:6,
      name: " mr. amitsingh",
    },
  ];


  const onHandleSubmit = (e)=>{
      let id = userid._id;

      dispatch(CreateStep2(id, data))
      e.preventDefault();
      console.log(data);
      
  }
  //const nextstep

  return (
      <div className = "form">
          <form >
          
        <label>
          Your Name: 
          
        {verified==0&&<input name="Fullname" type="text" value={data.Fullname} onChange={onHandleChange} />}  
        </label>

        {(verified===1||verified===2) &&<p>{data.Fullname}</p>}
        <br/>
        <label>
          Personal Email: 
          {verified==0 &&<input name = "Personal_email" type="email" value={data.Personal_email} onChange={onHandleChange} />}
        </label>
        {(verified===1||verified===2)&& <p>{data.Personal_email}</p>}
        <br/>
        <label>
          Current year: 
         { verified===0 && <input name= "current_year" type="number" value={data.current_year} onChange={onHandleChange} />}
        </label>
        {(verified===1||verified===2)&& <p>{data.current_year}</p>}
        <br/>
        <label>
          Idea Title: 
         {verified===0 && <input name="Idea_title" type="text" value={data.Idea_title} onChange={onHandleChange} />}
        </label>
        {(verified===1||verified===2)&& <p>{data.Idea_title}</p>}
        <br/>
        <label>
          Brief Idea: 
        { verified===0 && <input name= "Brief_Idea" type="text" value={data.Brief_Idea} onChange={onHandleChange} />}
        </label>
        {(verified===1||verified===2)&& <p>{data.Brief_Idea}</p>}
        <br/>
        <label>
          URL: 
          {verified===0 && <input name="URL" type="text" value={data.URL} onChange={onHandleChange} />}
        </label>
        {(verified===1||verified===2)&& <p>{data.URL}</p>}
        <br/>
        <label>
          Mentor:
         { verified===0 &&<select value = {data.Mentor} onChange = {onHandleChange} name= "Mentor">
    {mentors.map(fbb =>
      <option key={fbb.key} value={fbb.name}>{fbb.name}</option>
    )};
  </select>}
        </label>
        {(verified===1||verified===2)&& <p>{data.Mentor}</p>}
       
       {verified===0 && <button onClick = {onHandleSubmit}>Submit </button>} 
       {verified===1 && <button onClick = {onHandleBack}>Back</button>}
       {verified===2 && <button onClick = {onStep3}>Step 3</button>}
      </form>
      </div>
  )
    
}

export default Form;