import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [ // создаем или получаем объект data с нашими сотрудниками
		{ name: "Alexandr Kazulin", salary: 800, increase: false, id: 1 }, // добавляем increase
		{ name: "Guse White", salary: 3000, increase: true, id: 2 },
		{ name: "Homer Simpson", salary: 1500, increase: false, id: 3 },
		{ name: "Ayrat Hafa", salary: 850, increase: false, id: 4 },
		{ name: "Marsel Kya", salary: 900, increase: false, id: 5 },
		{ salary: 841, name: "Lego Cherepan", increase: false, id: 6 },
	];


	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	);
}

export default App;
