import "./initialcard.css";
import Logo from "../assets/logo_white.png";
import Home from "../assets/home.png";
import Google from "../assets/search.png";
import Facebook from "../assets/facebook (1).png";
import { useNavigate } from "react-router-dom";

function InitialCard() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/listCard");
	};
	return (
		<div className="initial-card-container">
			<div className="initial-card-wrapper">
				<div className="main__card">
					<div className="top-section-container">
						<div className="top-section-wrapper-container">
							<div className="dot-wrapper-container">
								<div className="dot-container first-dot"></div>
								<div className="dot-container"></div>
								<div className="dot-container"></div>
								{/* <img src={Logo} className="logo" /> */}
							</div>
							<div className="">
								<img src={Home} className="home" />
							</div>
							<div className="">
								<img src={Google} className="home  " />
								<img src={Facebook} className="home common" />
							</div>
						</div>
					</div>
					{/* content */}
					<div className="content-container">
						<div className="content-wrapper-button-container">
							<h1 className="movie-content-title">See the Movie Details</h1>
						</div>

						<div className="button-container">
							<button className="click-button" onClick={handleNavigate}>
								Click Here
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InitialCard;
