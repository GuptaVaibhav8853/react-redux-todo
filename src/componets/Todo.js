import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodo.action";

const Todo = ({ todotext ,todogender, todohobby, todoage, tododate, todotask, todostatus, idx, deleteTodo, editTodo, selected, text, gender, age, date, task, status, hobby }) => {


  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        cursor: "pointer"
      }}
    >
      <div>
             
         {selected === idx ? 
        <div> 
            <table>         
               <tr ><td >{text}||</td> <td>{gender}||</td> <td>{hobby.map((hby,i)=><div>{hby}</div>)}</td> <td>||{age}||</td> <td>Date:{date.toString().substr(4,11)}||</td> <td>{task}||</td> <td>{status}</td></tr>            
             </table> 
         </div> : 
         <div>
           <table>
              <tr ><td >{todotext}||</td> <td >{todogender}||</td> <td >{todohobby.map((hby,i)=><div>{hby}</div>)}</td> <td >||{todoage}||</td> <td >{tododate.toString().substr(4,11)}||</td> <td >{todotask}||</td> <td>{todostatus}</td></tr>          
            </table>
         </div>
         }
      </div>
     <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{ cursor: "pointer" }} onClick={() => editTodo(idx)}>
          edit
        </div>
        <div style={{ cursor: "pointer", marginLeft: "3px"}} onClick={()=>{alert("Delet?");deleteTodo(idx)}}>
          delete
        </div>
       
      </div> 
      
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected, gender, age, date, task, status, hobby}) => ({
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
)(Todo);
