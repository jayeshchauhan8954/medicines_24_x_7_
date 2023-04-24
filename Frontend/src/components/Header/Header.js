import React from "react";
import { NavLink } from "react-router-dom";

import {
	faAmbulance,
	faMedkit,
	faLaptopMedical,
	faHeartPulse,
	faClinicMedical,
	faFileMedicalAlt,
	faCartFlatbedSuitcase,
	faHospitalUser,
	faStoreAlt,
	faSearch,
	faWallet,
	faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<h1>P</h1>
				{/* <img src={logo} alt="Logo" /> */}
				<p>logo</p>
			</div>
			<form className="search">
				<input type="text" placeholder="Search..." className="search_input" />
				<button type="submit" className="search_button">
					{" "}
					<FontAwesomeIcon icon={faSearch} />
					Go!
				</button>
			</form>

			<nav className="nav">
				<ul className="nav_list">
					<li>
						<NavLink className="nav_item" to="/medicine">
							{" "}
							<FontAwesomeIcon icon={faMedkit} />
						</NavLink>{" "}
					</li>
					<li>
						<NavLink className="nav_item" to="/healthcare">
							{" "}
							<FontAwesomeIcon icon={faClinicMedical} />
						</NavLink>
					</li>
					<li>
						<NavLink className="nav_item" to="/labtest">
							{" "}
							<FontAwesomeIcon icon={faHospitalUser} />
						</NavLink>
					</li>
					<li>
						<NavLink className="nav_item" to="/sugeries">
							<FontAwesomeIcon icon={faHeartPulse} />
						</NavLink>
					</li>
					<li>
						<NavLink className="nav_item" to="/plus">
							{" "}
							<FontAwesomeIcon icon={faLaptopMedical} />{" "}
						</NavLink>
					</li>
					<li>
						<NavLink className="nav_item" to="/offers">
							{" "}
							<FontAwesomeIcon icon={faMoneyCheckDollar} />
						</NavLink>
					</li>
					<li>
						<NavLink className="nav_item" to="/healthblog">
							{" "}
							<FontAwesomeIcon icon={faFileMedicalAlt} />
						</NavLink>
					</li>
					<li>
						<NavLink className="nav_item" to="/cart">
							<FontAwesomeIcon icon={faStoreAlt} />{" "}
							<FontAwesomeIcon icon={faAmbulance} />{" "}
							<FontAwesomeIcon icon={faCartFlatbedSuitcase} />
							<FontAwesomeIcon icon={faWallet} />
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
