const extractHostNameFromUrl = (url) => {
    const urlObject = new URL(url);
    const hostName = urlObject.hostname.replace('www.', '').replace('.com', '');
    return hostName;
};
export default extractHostNameFromUrl;
