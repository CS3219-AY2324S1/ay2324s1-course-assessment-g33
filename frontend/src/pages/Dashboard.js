import SnackBar from "../components/common/SnackBar";
import Match from "../components/services/Match";
import Question from "../components/services/Question";
import QuestionOTD from "../components/services/QuestionOTD";
import { SnackBarContext } from "../contexts/SnackBarContext";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { useContext, useEffect } from "react";

export default function Dashboard() {
  const { openSnackBar, setOpenSnackBar, sb } = useContext(SnackBarContext);
  const { currentName, currentUser, isAdmin, checkDetails } =
    useContext(FirebaseContext);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  window.onload = checkDetails(currentUser);

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
        <Question />
      </div>
      <div>{JSON.stringify(currentUser.uid)}</div>
      <div>{JSON.stringify(isAdmin)}</div>
      <div>{JSON.stringify(currentName)}</div>
    </>
  );
}
