import React from 'react'
import Food from './Food'
import Drinks from './Drinks'

class Menu extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: false,
			menuData: {}
		}
	}

	componentDidMount() {
		this.setState({ loading: true })
		fetch("https://raw.githubusercontent.com/justingarcianm/localbistro.github.io/master/data/menu.JSON")
			.then(response => response.json())
			.then(data => {
				this.setState({
					loading: false,
					menuData: data
				})
			})
	}

	render() {
		const food = this.state.menuData.food
		const drinks = this.state.menuData.drinks
		return (
			<div>
				<header className="parallax-2 text-center text-white section-title">
					<h1 className="display-2">Food</h1>
				</header>

				<Food {...food} />

				<section className="parallax-3 text-center text-white section-title">
					<h1 className="display-2">Drinks</h1>
				</section>

				<Drinks {...drinks} />

			</div>
		)
	}
}

export default Menu