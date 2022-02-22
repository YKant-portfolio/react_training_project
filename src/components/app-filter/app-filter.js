import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classActive: 'all',
		}
	}

	onChange = (e) => {
		const categoryAtr = e.currentTarget.getAttribute('data-category');
		this.props.onUpdateCategory(categoryAtr);
		if (categoryAtr === 'up') {
			this.setState({ classActive: 'up' })
		}
		else if (categoryAtr === 'greatSalary') {
			this.setState({ classActive: 'greatSalary' })
		}
		else {
			this.setState({ classActive: 'all' })
		}
	}

	render() {
		const buttonData = [
			{ dataCategory: 'all', label: 'Все сотрудники', },
			{ dataCategory: 'up', label: 'На повышение', },
			{ dataCategory: 'greatSalary', label: 'З/П больше 1000$', },
		];

		const buttons = buttonData.map(({ dataCategory, label }) => {
			const active = this.state.classActive === dataCategory;
			const claszz = active ? 'btn-light' : 'btn btn-outline-light';
			return (
				<button type="button"
					className={`btn ${claszz}`}
					data-category={dataCategory}
					onClick={this.onChange}
					key={dataCategory}
				>
					{label}
				</button>
			)
		})

		return (
			<div className={"btn-group"}>
				{buttons}
			</div>
		)
	}
}

export default AppFilter;