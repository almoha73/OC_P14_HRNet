import React from "react";

const Spinner = () => {
	return (
		<div id="container">
			<svg viewBox="0 0 100 100">
				<defs>
					<filter id="shadow">
						<feDropShadow
							dx="0"
							dy="0"
							stdDeviation="1.5"
							flood-color="#fc6767"
						/>
					</filter>
				</defs>
				<circle
					id="spinner"
					className="stroke-green-500
					fill-transparent"
					style={{
						strokeWidth: "7px",
						strokeLinecap: "round",
						filter: `url(#shadow)`,
					}}
					cx="50"
					cy="50"
					r="45"
				/>
			</svg>
		</div>
	);
};

export default Spinner;
