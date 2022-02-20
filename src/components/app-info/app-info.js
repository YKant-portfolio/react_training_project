import "./app-info.css";

const AppInfo = ({ onCountEmployees, onCountIncrease }) => {

	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании KantProject</h1>
			<h2>Общее число сотрудников: {onCountEmployees} </h2>
			<h2>Премию получат: {onCountIncrease}</h2>
		</div>
	)
}

export default AppInfo;