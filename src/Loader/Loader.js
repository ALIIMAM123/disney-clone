import { RotatingLines } from "react-loader-spinner";
<RotatingLines
	strokeColor="#324262;"
	strokeWidth="5"
	animationDuration="0.75"
	width="96"
	visible={true}
/>;

function LoaderSpinner() {
	return (
		<>
			<RotatingLines />
		</>
	);
}

export default LoaderSpinner;
