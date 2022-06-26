const countBootstrap = (str) => {
    const strToLowerCase = str.toLowerCase();
    const strSplitted = strToLowerCase.split(new RegExp('[/.,/:;() -]', 'g'));
    let count = 0;
    strSplitted.forEach((word) => {
        if (word === 'bootstrap') {
            count += 1;
        }
    });
    return { keyword: 'bootstrap', count: count };
};
export default countBootstrap;
