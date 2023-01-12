import { CATEGORY_DATA } from "../data";
import "./categorysection.css";
function CategorySection() {
	return (
		<>
			<div className="card-wrapper-container">
				<div className="card-container-inner">
					{CATEGORY_DATA.map((each) => (
						<div className="card-wrapper-container" key={each.id}>
							{/* first img */}
							<img
								src={each.image}
								className="imageurL-Category "
								alt="imageUrl"
							/>
							{/* second img */}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default CategorySection;
