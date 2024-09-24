import "@styles/menubar.scss";
import AppleIcon from "@static/apple.png";
import BatteryIcon from "@static/battery.png";
import WifiIcon from "@static/wifi.png";
import ControlCenterIcon from "@static/controlcenter.png";
import NotifyIcon from "@static/NotifyIcon.png";
// import IcloudIcon from "@static/IcloudIcon.png";
import { useEffect, useState } from "react";

const formatMinutes = min => {
	return min < 10 ? "0" + min : min;
};

const convertToReadableDate = timestamp => {
	const shortenedDaysOfTheWeek = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];
	const shortenedMonth = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const currentDate = new Date(timestamp);
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const formattedHours = hours % 12 || 12;

	return (
		<>
			{shortenedDaysOfTheWeek[currentDate.getDay()]}{" "}
			{currentDate.getDate()} {shortenedMonth[currentDate.getMonth()]}{" "}
			<span className="time">
				{formattedHours}:{formatMinutes(minutes)} {ampm}
			</span>
		</>
	);
};

const MenuContent = props => {
	const [isMobile, setIsMobile] = useState(false);
	const [currentTime, setCurrentTime] = useState(Date.now());

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		const timer = setInterval(() => {
			setCurrentTime(Date.now());
		}, 1000);

		return () => {
			window.removeEventListener("resize", checkMobile);
			clearInterval(timer);
		};
	}, []);

	const menuItems = [
		[
			<img src={AppleIcon} alt="Apple logo" className="apple" />,
			props.programName,
			...(isMobile ? [] : ["File", "Edit", "View", "Chat", "Window", "Help"]),
		],
		[
			<img src={BatteryIcon} alt="Battery icon" className="right-icon" />,
			<img src={WifiIcon} alt="Wifi icon" className="right-icon" />,
			 ...(!isMobile ? [<img src={ControlCenterIcon} alt="Control Center icon" className="right-icon" />] : []),
			<img src={NotifyIcon} alt="Notify icon" className="right-icon" />,
			convertToReadableDate(currentTime),
		],
	];

	return (
		<div className="menu-bar">
			<div className="app-menus">
				{menuItems[0].map((item, index) => {
					return (
							<div
								className={`${
									typeof item !== "string" ? `img-container` : ``
								}`}
								key={index}
							>
								{item}
							</div>
					);
				})}
			</div>
			<div className="right-side">
				{menuItems[1].map((item, index) => {
					return (
							<div
								className={`${
									index !== menuItems[1].length - 1
										? `img-container`
										: ``
								}`}
								key={index}
							>
								{item}
							</div>
					);
				})}
			</div>
		</div>
	);
};

export default MenuContent;
