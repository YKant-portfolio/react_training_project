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
				{ name: "Alexandro Kazulin", salary: 800, increase: false, like: true, id: 1 },
				{ name: "Guse White", salary: 3000, increase: true, like: false, id: 2 },
				{ name: "Dio Denisovich", salary: 1500, increase: false, like: false, id: 3 },
				{ name: "Ayrat Hafa", salary: 850, increase: false, like: false, id: 4 },
				{ name: "Marsel Kya", salary: 900, increase: false, like: false, id: 5 },
				{ salary: 841, name: "Lego Cherepan", increase: false, like: false, id: 6 },
			],
			term: '',
			categoryAtr: 'all',
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

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		})
	}

	onUpdateSearch = (term) => {
		this.setState({ term });
	}

	onUpdateCategory = (categoryAtr) => {
		this.setState({ categoryAtr })
	}
	changeCategory = (items, categoryAtr) => {
		switch (categoryAtr) {
			case 'up':
				return items.filter(item => item.like);
			case 'greatSalary':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	render() {
		const { data, term, categoryAtr } = this.state;
		const tmpData = this.searchEmp(data, term);
		const visibleData = this.changeCategory(tmpData, categoryAtr);
		return (
			<div className="app">
				<AppInfo
					onCountEmployees={data.length}
					onCountIncrease={data.filter(item => item.increase).length}
				/>
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter onUpdateCategory={this.onUpdateCategory} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm
					onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
