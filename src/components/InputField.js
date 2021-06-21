import React from "react";
import { connect } from "react-redux";
import { addTodo, addText, editAddTodo, addGender, addHobby, removeHobby, addAge, addDate, addTask, addStatus } from "../redux/action/addTodo.action";
import Slider from 'react-input-slider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select'
const InputField = ({ addText, text, gender, selected, addTodo, addGender,hobby, addHobby, removeHobby, age, addAge, date, addDate, task, addTask, status, addStatus}) => {
  const handleChange = e => addText(e.target.value);
  const handleChange2 = e=> addGender(e.target.value);
  const handleChange3 = e=> {
    document.getElementById(e.target.id).checked && addHobby(e.target.value);    
    !document.getElementById(e.target.id).checked && removeHobby(e.target.value) 
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    if (selected || selected === 0)
      editAddTodo({
        value: text,
        selected: selected
      });
    else {
      addTodo({text:text, gender:gender, hobby:hobby, age:age, date:date, task:task, status:status}); 
       
    }                                  
  };

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
    
  ];
  
  return (
    <form onSubmit={handleSubmit}>
    <center>
      <table>
       <tr>
        <td><label >User Name<i>(alphabets and spaces only, no more than 15 characetrs)</i> :</label></td>
        <td>
        <input type="text" name="todo" id="todo" value={text} placeholder="Enter your todo..." onChange={handleChange}
        pattern="[A-Za-z ]{1,15}" />
         </td>
        </tr>
       <tr>
        <td><label >Gender:</label></td>
        <td>  
            <input type="radio" name="gender" id="male" value="male"  onChange={handleChange2} style={{marginRight: "7px"}}/>           
            <label >Male</label><br />   
            <input type="radio" name="gender" id="female" value="female"  onChange={handleChange2} style={{marginRight: "7px"}}/>  
            <label>Female</label> 
        </td>
           
                
      </tr>
      <tr>
        <td>Hobby:</td>
        <td> 

            <input type="checkbox" id="hobby1" name="hobby1" onChange={handleChange3} value="Sports" />  
            <label > Sports</label><br />      
             
             <input type="checkbox" id="hobby2" name="hobby2" onChange={handleChange3} value="Reading" />   <label > Reading</label><br />    
             
             <input type="checkbox" id="hobby2" name="hobby2" onChange={handleChange3} value="Music" /> <label >Music</label>            
             
        </td>
        
      </tr>
    
      <tr>
        <td>Age:</td>
        <td>
         <Slider axis="x" xmin={18} xmax={55} x={age} onChange={({x})=>addAge(x)} />
        </td>   
      </tr>
      <tr>
        <td><label>Date:</label></td>
        <td>
        <DatePicker selected={date} onChange={(date) => addDate(date) }/>
        </td>
      </tr>    
      <tr>
        <td><lable>Taks Name:</lable></td>
        <td><input type="text" name="task" id="task" value={task} onChange={(e)=>addTask(e.target.value)}></input></td>
      </tr> 

      <tr>
        <td><label>Status:</label></td>
        <td><Select  placeholder={status} value={status} options={options} onChange={(e)=>addStatus(e.value)}/></td>
      </tr>  
              
      </table><br />
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </center> 
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  
  addTodo: (todo) => dispatch(addTodo(todo)),
  
  addGender: (value)=>dispatch(addGender(value)),
  addHobby: (value)=>dispatch(addHobby(value)),
  addDate: (value)=>dispatch(addDate(value)),
  removeHobby: (value)=>dispatch(removeHobby(value)),
  addAge: (value)=>dispatch(addAge(value)),
  addText: value => dispatch(addText(value)),
  addTask: value => dispatch(addTask(value)),
  addStatus: value => dispatch(addStatus(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj))
});

const mapStateToProps = ({ text, selected, age, date, task, status,gender, hobby }) => ({
  text,
  selected,
  gender,
  age,
  date, 
  task,
  status,
  hobby
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
