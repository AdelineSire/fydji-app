import countBootstrap from './keyword-count-functions/count-bootstrap';
import countCss from './keyword-count-functions/count-css';
import countFrontend from './keyword-count-functions/count-frontend';
import countGraphql from './keyword-count-functions/count-graphql';
import countHtml from './keyword-count-functions/count-html';
import countJquery from './keyword-count-functions/count-jquery';
import countLess from './keyword-count-functions/count-less';
import countNext from './keyword-count-functions/count-next';
import countReact from './keyword-count-functions/count-react';
import countRest from './keyword-count-functions/count-rest';
import countSass from './keyword-count-functions/count-sass';
import countTailwind from './keyword-count-functions/count-tailwind';
import countTypescript from './keyword-count-functions/count-typescript';

const countKeywords = (str: string) => {
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
