import "./slider.css";

function Slider() {
	let slider = {
		slide1:
			"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3851/1423851-h-286df3c0ee36",
		slide2:
			"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4416/674416-h",
		slide3:
			"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4395/1444395-h-d2dca9e325ea",
	};
	return (
		<div class="slider-container">
			<div
				id="carouselExampleAutoplaying"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							src={slider.slide1}
							class="d-block w-100  siderImg"
							alt="..."
						/>
					</div>
					<div class="carousel-item">
						<img src={slider.slide2} class="d-block w-100 siderImg" alt="..." />
					</div>
					<div class="carousel-item">
						<img src={slider.slide3} class="d-block w-100 siderImg" alt="..." />
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default Slider;
