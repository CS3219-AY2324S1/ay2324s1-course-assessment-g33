import { socket } from "./WebSocket";
import { SnackBarContext } from "../../contexts/SnackBarContext";
import { useContext, useEffect } from "react";
import { MatchContext } from "../../contexts/MatchContext";
import { Box } from "@mui/material";
import { QuestionContext } from "../../contexts/QuestionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CoolButton from "../common/CoolButton";
import { ProblemContext } from "../../contexts/ProblemContext";

var timeout_id = null;

function Match() {
	const { setOpenSnackBar, setSB } = useContext(SnackBarContext);
	const { setQuestion } = useContext(QuestionContext);
	const { match, findMatch, hasInit, setFindMatch } = useContext(MatchContext);
	const { setMessage } = useContext(ProblemContext);
	const navigate = useNavigate();

	const getMatch = (difficulty) => {
		socket.emit("match", socket.id, difficulty.toLowerCase());
		setSB({
			msg: `[${difficulty}]Finding a match!`,
			severity: "success",
		});
		console.log("add user");
		setOpenSnackBar(true);
		setFindMatch(true);
		timeout_id = setTimeout(() => {
			setFindMatch(false);
			setSB({ msg: "You are alone", severity: "error" });
			setOpenSnackBar(true);
		}, 5000);
	};

	const getRandomEasyQuestion = async () => {
		try {
			const { data } = await axios.get(`http://localhost:5000/api/v1/question/problem/3-sum`);
			setQuestion({ titleSlug: "3Sum", problem: data });
			navigate("/match");
		} catch (e) {
			setSB({ msg: e.message, severity: "error" });
			setOpenSnackBar(true);
		}
	};
	useEffect(() => {
		if (match) {
			//match is either false or room_id
			clearTimeout(timeout_id);
			timeout_id = null;
			setFindMatch(false);
			setMessage([]);
			getRandomEasyQuestion();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [match]);

	return (
		<Box
			className="match-container"
			sx={{
				backgroundColor: "secondary.main",
				color: "secondary.contrastText",
			}}
		>
			<div className="match-container-title">Match</div>
			<div className="match-difficulty-container">
				{findMatch ? (
					<CoolButton
						text={"Cancel"}
						loading={findMatch}
						onClick={() => {
							clearTimeout(timeout_id);
							setFindMatch(false);
							socket.emit("match_cancel");
						}}
					/>
				) : (
					<>
						<CoolButton
							text={"Easy"}
							loading={findMatch || !hasInit}
							onClick={() => getMatch("Easy")}
							disabled={!hasInit}
						/>
						<CoolButton
							text={"Medium"}
							loading={findMatch || !hasInit}
							onClick={() => getMatch("Medium")}
							disabled={!hasInit}
						/>
						<CoolButton
							text={"Hard"}
							loading={findMatch || !hasInit}
							onClick={() => getMatch("Hard")}
							disabled={!hasInit}
						/>
					</>
				)}
			</div>
		</Box>
	);
}

export default Match;
