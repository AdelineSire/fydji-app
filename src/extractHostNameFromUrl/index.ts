const extractHostNameFromUrl = (url: string) => {
	const urlObject = new URL(url);
	const hostName = urlObject.hostname.replace('www.', '').replace('.com', '');
	return hostName;
};

export default extractHostNameFromUrl;
