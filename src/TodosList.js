import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodosList = ({ todos }) => {
  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   width: "200px",
      //   margin: "0 auto",
      //   height: "200px",
      //   overflowY: "auto",
      //   overflowX: "hidden"
      // }}
      
    
    >
      
      {todos.map((todo, i) => (
                <Todo key={i} todotext={todo.text} todogender={todo.gender} todohobby={todo.hobby} todoage={todo.age} 
        tododate={todo.date} todotask={todo.task} todostatus={todo.status} idx={i} />
       
        
      ))}
      
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(TodosList);
