import React from "react";
import style from "./css/TodoForm.css";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		this.props.addTodo(this.input.value);
		this.input.value = '';
		event.preventDefault();
	}

	render() {
		return (
			<form className={style.TodoForm} onSubmit={this.handleSubmit}>
				<div className="form">
					<label>Add 'ToDo' item: </label>
					<input
						type="text"
						className="text-field"
						placeholder="Type here"
						ref={input => (this.input = input)}
					/>
				</div>
				<input type="submit" className="submit" value="Submit" />
			</form>
		);
	}
}

export default TodoForm;