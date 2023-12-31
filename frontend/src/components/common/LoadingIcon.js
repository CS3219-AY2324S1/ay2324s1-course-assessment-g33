import Box from "@mui/material/Box";
import Countdown from "react-countdown";
import { MATCHMAKING_TIMEOUT } from "../../utils/constants";
import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";

function LoadingIcon({ text }) {
	return (
		<Box sx={{ display: "flex" }}>
			{text !== "Cancel" ? (
				<CircularProgress sx={{ color: "secondary.contrastText" }} />
			) : (
				<Countdown
					date={Date.now() + parseInt(MATCHMAKING_TIMEOUT)}
					intervalDelay={0}
					precision={0}
					renderer={(props) => (
						<div>
							{text} {props.total / 1000}
						</div>
					)}
				/>
			)}
		</Box>
	);
}
export default React.memo(LoadingIcon);
