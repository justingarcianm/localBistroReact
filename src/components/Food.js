import React from 'react'

class Food extends React.Component {

	render(props) {


		return (

			<div className="text-center container-fluid menu">
				<div className="menu-top">
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<ul>
								<h3>Breakfast</h3>
								<li>
									<span className="bold">Ham and eggs - 8  </span><br />
									2 eggs cooked any style and a slice of ham topped with parsley
							</li>
								<li>
									<span className="bold">Pancake platter - 10   </span><br />
									2 buttermilk pancakes with your choice of side
							</li>
								<li>
									<span className="bold">Rise and shine burrito - 7.5   </span><br />
									eggs, your choice of meat, cheese, and chile wrapped in a flour tortilla
							</li>
								<li>
									<span className="bold">power bowl - 10.5    </span><br />
									yogurt topped with granola with a side of fruit
							</li>

							</ul>
						</div>
						<div className="col-md-4 col-sm-12">
							<ul>
								<h3>Lunch</h3>
								<li>
									<span className="bold">Local break burger - 12 </span><br />
									one patty with cheese, guacamole, and chioce of chile between a sesame bun
							</li>
								<li>
									<span className="bold">street style tacos - 12.5  </span><br />
									3 tacos with the chioce of chicken, beef, or fish topped with cilantro, pico de galo, and a side of lemon
							</li>
								<li>
									<span className="bold">Prosciutto salad - 12 </span><br />
									mixed greens, sliced pears, sprinkled pecans, bleu cheese, and topped with a balsamic vinegar
							</li>
								<li>
									<span className="bold">Choice sandwich - 10 </span><br />
									choice of bread, choice of meat, choice of cheese, you get the picture
							</li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-12">
							<ul>
								<h3>Dinner</h3>
								<li>
									<span className="bold">Grilled Salmon - 18  </span><br />
									topped with couscous, creamy sause, and a side of asparagus
							</li>
								<li>
									<span className="bold">Grilled Lemon Pepper Chicken - 13  </span><br />
									2 chicken breasts sauteed in a lemon pepper sauce served on top of a vegetable medley
							</li>
								<li>
									<span className="bold">Portobella Burger - 12  </span><br />
									Portobella cap, melted mozzarella, tomato and basil with a ricotta spread
							</li>
								<li>
									<span className="bold">Pasta Alfredo - 16 </span><br />
									Homemade creamy Alfredo sauce and Italian sausage
							</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<ul>
								<h3>Dessert</h3>
								<li>
									<span className="bold">Apple Crisp - 6 </span><br />
									vanilla ice cream and caramel drizzle
							</li>
								<li>
									<span className="bold">Chocolate Cream Pie Crêpes - 7</span><br />
									Brown sugar meringue crisp, hibiscus syrup
							</li>
								<li>
									<span className="bold">Cheese Plate Sampler - 10 </span><br />
									a selection of four cheeses served in tasting portions with house-made jam and fruit garnish
							</li>
							</ul>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-sm-12">
							<p>Join us or call to find our daily and weekly specials.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Food
