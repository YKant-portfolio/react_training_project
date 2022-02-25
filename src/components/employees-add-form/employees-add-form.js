import { Component } from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
		}
	}
	// функция с одним обработчиком события работает с разными input для этого в input задали свойство name (name='name name='salary' )
	onValueChange = (e) => { // все как обычно в функции аргументом создаем event
		this.setState({
			[e.target.name]: e.target.value // синтаксис ES6 [e.target.name] обращаемся где сработало событие и достукиваемся до атрибута name
		})
	}

	onSubmitItem = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: ''
		});
	}

	render() {
		const { name, salary } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmitItem}>
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name='name'
						value={name}
						//value={this.state.name} 
						onChange={this.onValueChange} />
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name='salary'
						value={salary}
						//value={this.state.salary} 
						onChange={this.onValueChange} />
					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		)
	}
}

//* управляемые элемент input в данном компоненте прошел след этапы:
/* 
1 в input запускается onChange -> запускает onValueChange.
2 в onValueChange есть setState который изменяет состояние и записывает состояние в стейт.
3  как обычно с setState вызывает метод рендер и если value стоит в том ключе, что мы используем  state то в value записывается актуальное значение компонента, то значит, что value input будет контролироваться react и сам элемент будет называться управляемым элементом
*/

export default EmployeesAddForm;