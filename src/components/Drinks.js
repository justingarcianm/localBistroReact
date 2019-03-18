import React from 'react'

class Drinks extends React.Component {
	render() {
		return (
			<div className="text-center container-fluid menu">
				<div className="menu-bottom">
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<h2>wine <span>glass/bottle</span></h2>
							<h4>white</h4>
							<ul>
								<li> Chardonnay, California - 10 /40 </li>
								<li> Pino Grigio, Oregon - 9 /36  </li>
								<li>  Sauvignon Blanc, New Zeland - 11 /40  </li>
							</ul>
							<h4>red</h4>
							<ul>
								<li>Merlot, Italy - 10 / 40 </li>
								<li> Malbec, Argentina - 8 / 50 </li>
								<li> Cotes de Rhone Rouge, France - 15 / 50 </li>
							</ul>
							<h4>dessert</h4>
							<ul>
								<li> Rose - 12 / 40 </li>
								<li> Port - 15 / 60 </li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-12">
							<h2>beer <span>12oz/24oz</span></h2>
							<h4>domestic</h4>
							<ul>
								<li> Budwiser - 3 / 5 </li>
								<li> Coors Light - 4 / 5 </li>
							</ul>
							<h4>imported</h4>
							<ul>
								<li>Stella Artois - 4.75 / 6 </li>
								<li> Dos Equis Lager - 4.75 / 6 </li>
								<li> Guinness - 6.5 / 7 </li>
							</ul>
							<h4>local</h4>
							<ul>
								<li> La Cumbre Elevated IPA - 5.5 /7</li>
								<li> Marble Double White - 6 /8</li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-12">
							<h2>coffee</h2>
							<ul>
								<li>brew - 2 </li>
								<li> espresso - 1.5 </li>
								<li>cappuccino - 4.5 </li>
								<li>Latte - 4.5 </li>
								<li> Flavored Latte - 5.5 </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Drinks