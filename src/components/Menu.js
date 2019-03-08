import React from 'react'
import Food from './Food'
import Drinks from './Drinks'

class Menu extends React.Component {

	render() {

		return (
			<div>
				<header className="parallax-2 text-center text-white section-title" id="food">
					<h1 className="display-2">Food</h1>
				</header>

				<Food />

				<section className="parallax-3 text-center text-white section-title" id="drinks">
					<h1 className="display-2">Drinks</h1>
				</section>

				<Drinks />

			</div>
		)
	}
}

export default Menu