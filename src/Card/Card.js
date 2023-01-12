import "./card.css";
import { DUMMY_DATA } from "../data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "../Loader/Loader";
function Card() {
	const navigator = useNavigate();
	// const [isShown, setIsShown] = useState(false);

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	let url = "https://swapi.dev/api/films/";

	async function fetchData() {
		setIsLoading(true);
		console.log(isLoading, "before-api");

		await fetch(url, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((response) => response.json())

			.then((response) => {
				setData(response?.results);
				setIsLoading(false, "after-api");
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		fetchData();
	}, []);

	// console.log(data, "data");

	// handleClickCard
	function handleClickCard(dataReceived) {
		// console.log(dataReceived, "dataReceived");

		navigator("/list", { state: { data: dataReceived } });
	}

	return (
		<div className="card-container">
			<h1 className="recommended-heading">List of Movies</h1>
			<div className="card-wrapper-container">
				<div className="card-container-inner">
					{!isLoading ? (
						data.map((each, index) => (
							<div
								className="card-wrapper-container"
								key={index}
								// onClick={() => {
								// 	console.log("hello");
								// }}
								onClick={() => handleClickCard(each)}
							>
								<div className="card">
									{/* INDEX NO */}
									<div className="common-container ">
										<span className="index-no common-key">Index No</span>
										<span className="id-of-each-array common-value">
											{index}
										</span>
									</div>
									{/* EPISODE-ID */}
									<div className="common-container ">
										<span className="index-no common-key">episode_id</span>
										<span className="id-of-each-array common-value">
											{each.episode_id}
										</span>
									</div>
									{/* TITLE */}
									<div className="title-container common-container">
										<span className="titleKey common-key">Title</span>
										<span className="titleValue common-value">
											{each.title}
										</span>
									</div>
									{/* OPENING-CRAWL */}
									{/* <div className="title-container common-container">
										<span className="titleKey common-key">opening_crawl</span>
										<span className="titleValue common-value opening_crawl">
											{each.opening_crawl}
										</span>
									</div> */}
								</div>
							</div>
						))
					) : (
						// <h1 className="loader-spinner">Please Wait </h1>
						<LoaderSpinner />
					)}
				</div>
			</div>
			{/* Disney + original */}
			<h1 className="recommended-heading">Disney + Originals</h1>
			<div className="card-wrapper-container">
				<div className="card-container-inner">
					{DUMMY_DATA.map((each) => (
						<div className="card-wrapper-container" key={each.id}>
							{/* first img */}
							<img src={each.image} className="imageurL " alt="imageUrl" />
							{/* second img */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Card;
