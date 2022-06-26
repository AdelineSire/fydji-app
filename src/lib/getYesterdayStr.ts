const getYesterdayStr = () => {
	const DAY_IN_MS = 86400000;
	const dateInMs = new Date().getTime() - DAY_IN_MS;
	const date = new Date(dateInMs);
	return date.toISOString();
};

export default getYesterdayStr;
