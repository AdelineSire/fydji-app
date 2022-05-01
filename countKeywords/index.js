import countBootstrap from './keyword-count-functions/count-bootstrap/index.js';
import countCss from './keyword-count-functions/count-css/index.js';
import countFrontend from './keyword-count-functions/count-frontend/index.js';
import countGraphql from './keyword-count-functions/count-graphql/index.js';
import countHtml from './keyword-count-functions/count-html/index.js';
import countJquery from './keyword-count-functions/count-jquery/index.js';
import countLess from './keyword-count-functions/count-less/index.js';
import countNext from './keyword-count-functions/count-next/index.js';
import countReact from './keyword-count-functions/count-react/index.js';
import countRest from './keyword-count-functions/count-rest/index.js';
import countSass from './keyword-count-functions/count-sass/index.js';
import countTailwind from './keyword-count-functions/count-tailwind/index.js';
import countTypescript from './keyword-count-functions/count-typescript/index.js';

const countKeywords = (str) => {
	const results = [];

	const bootstrap = countBootstrap(str);
	if (bootstrap.count > 0) {
		results.push(bootstrap);
	}
	const css = countCss(str);
	if (css.count > 0) {
		results.push(css);
	}
	const frontend = countFrontend(str);
	if (frontend.count > 0) {
		results.push(frontend);
	}
	const graphql = countGraphql(str);
	if (graphql.count > 0) {
		results.push(graphql);
	}
	const html = countHtml(str);
	if (html.count > 0) {
		results.push(html);
	}
	const jquery = countJquery(str);
	if (jquery.count > 0) {
		results.push(jquery);
	}
	const less = countLess(str);
	if (jquery.count > 0) {
		results.push(less);
	}
	const next = countNext(str);
	if (next.count > 0) {
		results.push(next);
	}
	const react = countReact(str);
	if (react.count > 0) {
		results.push(react);
	}
	const rest = countRest(str);
	if (rest.count > 0) {
		results.push(rest);
	}
	const sass = countSass(str);
	if (sass.count > 0) {
		results.push(sass);
	}
	const tailwind = countTailwind(str);
	if (tailwind.count > 0) {
		results.push(tailwind);
	}
	const typescript = countTypescript(str);
	if (typescript.count > 0) {
		results.push(typescript);
	}

	return results;
};

export default countKeywords;
