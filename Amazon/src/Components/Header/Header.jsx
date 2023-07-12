import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../firebase";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import usFlag from "../../assets/image/us-flag.jpg";
function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<>
			<div className="header">
				<Link to="/">
					<img
						className="header__logo"
						src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt="Amazone logo"
					/>
				</Link>
				{/* <div className="header__deliveryAddress">
					<span className="header__optionLineOne">Deliver to</span>
					<p>
						<LocationOnIcon fontSize="small" />
						<span className="header__optionLineTwo"> Denmark</span>
					</p>
				</div> */}
				<div className="header__search">
					<input
						className="header__searchInput"
						type="text"
						placeholder="Search Amazon"
					/>
					<SearchIcon className="header__searchIcon" />
				</div>

				<div className="header__nav">
					{/* <select className="header__lang">
						<img src={usFlag} alt="us-flag" />
						<option value="en">EN</option>
						<option value="es">spanish</option>
					</select> */}
					<Link to={!user && "/login"} className="header__clearlink">
						<div onClick={handleAuthenticaton} className="header__option">
							<span className="header__optionLineOne">
								Hello {!user ? "Guest" : user.email}
							</span>
							<span className="header__optionLineTwo">
								{user ? "Sign Out" : "Sign In"}
							</span>
						</div>
					</Link>
					<Link to="/orders" className="header__clearlink">
						<div className="header__option">
							<span className="header__optionLineOne">Returns</span>
							<span className="header__optionLineTwo">& Orders</span>
						</div>
					</Link>
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
					<Link to="/checkout" className="header__clearlink">
						<div className="header__optionBasket">
							<ShoppingCartIcon />
							<span className="header__optionLineTwo header__basketCount">
								{basket.length}
							</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
