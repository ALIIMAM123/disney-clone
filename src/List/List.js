import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./list.css";

function List() {
	const [listData, setListData] = useState();

	const location = useLocation();
	console.log(location.state, "locationState");
	// setListData(location.state);
	const detailData = location.state;
	console.log(detailData.data, "detailDataxx");

	/* <h1>{detailData.data.episode_id}</h1> */

	return (
		<div className="listPage-container">
			<div className="wrapper-container">
				{/* heading */}
				<div className="common-container1 ">
					<h1 className=" title-details-name">{detailData.data.title}</h1>
				</div>
				<div className="details-items-container">
					<div className="left-side common-side left-details-container-box">
						{/* episode */}
						<div className="remain-details-container">
							<div className="wrapper-items-container common-containerDetail item-key-value-1">
								<h1 className="episode episode-key  first  id-detail">
									Episode Id:
								</h1>
								<h1 className="episode episode-key second id-detail">
									{" "}
									{detailData.data.episode_id}
								</h1>
							</div>
						</div>
						{/* opening crawl */}
						<div className="remain-details-container content-container">
							<div className="wrapper-items-container  common-containerDetail ">
								<h1 className="episode episode-key  first  id-detail">
									Director:
								</h1>
								<h1 className="episode episode-key episode--value second id-detail">
									{" "}
									{detailData.data.director}
								</h1>
							</div>
						</div>
						{/* producer */}
						<div className="remain-details-container content-container">
							<div className="wrapper-items-container common-containerDetail ">
								<h1 className="episode episode-key first id-detail">
									Producer:
								</h1>
								<h1 className="episode episode-key testt second id-detail">
									{" "}
									{detailData.data.producer}
								</h1>
							</div>
						</div>
					</div>
					<div className="right-side common-side  right-side-details">
						{/* opening crawl */}
						<div className="remain-details-container  openi ">
							<div className="  opening-crawl detail-crawl-container">
								<h1 className="episode episode-key opening-details-key open-crawll">
									Opening Crawl
								</h1>
								<h1 className="episode episode-value  opening-details-value">
									{" "}
									{detailData.data.opening_crawl}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default List;
