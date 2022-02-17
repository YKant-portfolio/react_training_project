import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Alexandr Kazulin", salary: 800, increase: false, id: 1 },
				{ name: "Guse White", salary: 3000, increase: true, id: 2 },
				{ name: "Homer Simpson", salary: 1500, increase: false, id: 3 },
				{ name: "Ayrat Hafa", salary: 850, increase: false, id: 4 },
				{ name: "Marsel Kya", salary: 900, increase: false, id: 5 },
				{ salary: 841, name: "Lego Cherepan", increase: false, id: 6 },
			]
		}
		this.maxId = this.state.data.length + 1;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(elem => elem.id !== id) // данный метод не изменяет текущий this.state.data, а заменяет его, так как .filter возвращает новый массив
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.maxId++,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]// создание нового объекта новый сотрудник + все старые
			return {
				data: newArr // замена значений в data без мутаций
			}
		});
	}

	render() {
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList data={this.state.data}
					onDelete={this.deleteItem} />
				<EmployeesAddForm
					onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
