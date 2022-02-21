import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classActive: 'btn3',
		}
	}

	onChange = (e) => {
		const categoryAtr = e.currentTarget.getAttribute('data-category');
		this.props.onUpdateCategory(categoryAtr);
		if (categoryAtr === 'up') {
			this.setState({ classActive: 'btn1' })
		}
		else if (categoryAtr === 'greatSalary') {
			this.setState({ classActive: 'btn2' })
		}
		else {
			this.setState({ classActive: 'btn3' })
		}
	}

	render() {
		const { classActive } = this.state;
		return (
			<div className={"btn-group"}>
				<button type="button"
					className={classActive === 'btn3' ? 'btn btn-light' : 'btn btn-outline-light'}
					data-category='all'
					onClick={this.onChange}
					value={this.setState.categoryAtr}
				>
					Все сотрудники
				</button>
				<button type="button"
					className={classActive === 'btn1' ? 'btn btn-light' : 'btn btn-outline-light'}
					data-category='up'
					onClick={this.onChange}
					value={this.setState.categoryAtr}
				>
					На повышение
				</button>
				<button type="button"
					className={classActive === 'btn2' ? 'btn btn-light' : 'btn btn-outline-light'}
					data-category='greatSalary'
					onClick={this.onChange}
					value={this.setState.categoryAtr}
				>
					З/П больше 1000$
				</button>
			</div>
		)
	}
}

export default AppFilter;