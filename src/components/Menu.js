import React from 'react'
import Food from './Food'
import Drinks from './Drinks'

class Menu extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: false,
			menuItem: {}
		}
	}

	componentDidMount() {
		this.setState({ loading: true })
		fetch("https://raw.githubusercontent.com/justingarcianm/localbistro.github.io/master/data/menu.JSON")
			.then(res => res.json())
			.then(data => {
				this.setState({
					loading: false,
					menuItem: data
				})
			})
	}

	render() {

		return (
			<div>
				<header className="parallax-2 text-center text-white section-title">
					<h1 className="display-2">Food</h1>
				</header>

				<Food {...this.state.menuItem.food} />

				<section className="parallax-3 text-center text-white section-title">
					<h1 className="display-2">Drinks</h1>
				</section>

				<Drinks />

			</div>
		)
	}
}

export default Menu