import React from "react";
import style from "./css/Title.css";

const Title = props => {
	return (
		<div className={style.Title}>
			<h1>What To Do?</h1>
			<h3>You have {props.tasks} tasks to do.</h3>
		</div>
	);
};

export default Title;
