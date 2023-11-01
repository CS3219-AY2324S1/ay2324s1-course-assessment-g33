import SnackBar from "../components/common/SnackBar";
import Match from "../components/services/Match";
import Question from "../components/services/Question";
import QuestionOTD from "../components/services/QuestionOTD";
import { SnackBarContext } from "../contexts/SnackBarContext";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { useContext, useEffect } from "react";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const { openSnackBar, setOpenSnackBar, sb } = useContext(SnackBarContext);
	const { currentUser, isAdmin, checkDetails } = useContext(FirebaseContext);
	const navigate = useNavigate();

	const handleCloseSnackBar = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackBar(false);
	};

	const handleClick = () => {
		navigate("/create");
	};

	useEffect(() => {
		console.log("render");
		checkDetails(currentUser);
		//eslint-disable-next-line
	}, []);
	return (
		<>
			<SnackBar
				msg={sb.msg}
				handleCloseSnackBar={handleCloseSnackBar}
				openSnackBar={openSnackBar}
				severity={sb.severity}
			/>
			<div className="dashboard-container">
				<div className="dashboard-container-top">
					<QuestionOTD />
					<Match />
				</div>
				<div className="create-question">
					{isAdmin && (
						<Button variant="primary" onClick={handleClick}>
							Create Question
						</Button>
					)}
				</div>
				<Question />
			</div>
			<br></br>
		</>
	);
}
