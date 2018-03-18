import React from "react";
import style from "./css/TodoList.css";
import Todo from "./Todo";

const TodoList = props => {
	const todoItems = props.data.map(item => (
		<Todo key={item.id} id={item.id} todo={item.text} remove={props.remove} />
	));
	return <ul className={style.TodoList}>{todoItems}</ul>;
};

export default TodoList;