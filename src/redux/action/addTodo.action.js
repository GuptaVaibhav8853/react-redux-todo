
export const addText = value => ({

  type: "ADD_TEXT",
  payload: value
});
export const addGender = value => ({
  type: "ADD_GENDER",
  payload: value
});
export const addTask = value => ({
  type: "ADD_TASK",
  payload: value
});
export const addStatus = value => ({
  type: "ADD_STATUS",
  payload: value
});
export const addHobby = value => ({
  type: "ADD_HOBBY",
  payload: value
});
export const removeHobby = value => ({
  type: "REMOVE_HOBBY",
  payload: value
});
export const addAge = value => ({
  type: "ADD_AGE",
  payload: value
});
export const addDate = value => ({
  type: "ADD_DATE",
  payload: value
});
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo
});

export const deleteTodo = key => ({
  type: "DELETE_TODO",
  payload: key
});

export const editTodo = key => ({
  type: "EDIT_TODO",
  payload: key
});

export const editAddTodo = obj => ({
  type: "EDIT_ADD_TODO",
  payload: obj
});

export const deleteAll = () => ({
  type: "DELETE_ALL"
});
