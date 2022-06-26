import extractHostNameFromUrl from './index';

test('return host name from url', () => {
	const url =
		'https://www.lesjeudis.com/jdp/d%C3%A9veloppeur-fullstack-(-react-js-node-js)-h-f-j3s00h5w9qd1kwt9d0m';
	const hostName = extractHostNameFromUrl(url);
	expect(hostName).toBe('lesjeudis');
});
