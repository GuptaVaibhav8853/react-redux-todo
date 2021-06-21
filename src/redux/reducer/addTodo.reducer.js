const initState = {
  todos: [],
  text: "",
  gender: "",
  hobby: [],
  age: 0,
  date: new Date(),
  task: "",
  status: "",
  selected: undefined
};



export const addTodo = (state = initState, action) => {
  switch (action.type) {
  
    case "ADD_TEXT":
      return { ...state, text: action.payload };
    case "ADD_TASK":
      return { ...state, task: action.payload };
    case "ADD_STATUS":
      return { ...state, status: action.payload };
    case "ADD_GENDER":
        return { ...state, gender: action.payload };
    case "ADD_HOBBY":
        return { ...state, hobby:[...state.hobby,action.payload] };
    case "ADD_AGE":
        return { ...state, age: action.payload };
    case "ADD_DATE":
        return { ...state, date: action.payload };
    case "REMOVE_HOBBY":
      const todo5 = state.hobby.filter((hby, i) => hby !== action.payload);
      return {
        ...state,
        hobby: todo5
      };
    case "ADD_TODO":
      const todos2 = state.todos.concat(action.payload);
      return {
        ...state,
        todos: todos2
      };
      
      
    case "DELETE_TODO":
      const todo3 = state.todos.filter((todo, i) => i !== action.payload);
      
      return {
        ...state,
        todos: todo3
      };
    case "EDIT_TODO":
      return {
        ...state,
        text: state.todos[action.payload].text,
        gender: state.todos[action.payload].gender,
        hobby: state.todos[action.payload].hobby,
        age: state.todos[action.payload].age,
        date: state.todos[action.payload].date,
        task: state.todos[action.payload].task,
        status: state.todos[action.payload].status,
        selected: action.payload
      };
    case "EDIT_ADD_TODO":
      const todo4 = state.todos.map((todo, i) =>
        i !== action.payload.selected ? todo : action.payload.value
      );
      
      return {
        ...state,
        todos: todo4,
        selected: undefined,
        text: ""
      };
    case "DELETE_ALL":
      
      return { ...state, todos: [], text: "" };
    default:
      return state;
  }
};
