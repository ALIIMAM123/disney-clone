import CategorySection from "../component/CategorySection";
import Card from "../Card/Card";
import "./cardui.css";
import Slider from "../component/Slider/Slider";
function CardUI() {
	return (
		<div className="cardUi">
			<Slider />
			<CategorySection />
			<Card />
		</div>
	);
}

export default CardUI;
