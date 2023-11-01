import React, { useContext, useState, useEffect } from "react";
import "../css/profile.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RecentTable from "../components/common/user/RecentTable";
import UpdateProfile from "./UpdateProfile";
import { FirebaseContext } from "../contexts/FirebaseContext";

const Profile = () => {
	// eslint-disable-next-line
	const [loading, setLoading] = useState(false);
	const { currentName, currentUser, image, checkDetails } = useContext(FirebaseContext);

	useEffect(() => {
		checkDetails(currentUser); //.then(setLoading(false));
	});

	return (
		<div className="profile">
			{!loading ? (
				<div id="top-container">
					<div id="left-container" className="subcontainer">
						<div className="left-content">
							<div className="edit-icon">
								<UpdateProfile></UpdateProfile>
							</div>
							<img className="display-pic" src={image} alt="display-pic"></img>
							<div className="username">{currentName}</div>
						</div>
					</div>
					<div id="right-container" className="subcontainer">
						<RecentTable></RecentTable>
					</div>
				</div>
			) : (
				<div>Loading...</div>
			)}
			<div id="bottom-container" className="subcontainer">
				Activity page to be placed here
			</div>
		</div>
	);
};

export default Profile;
