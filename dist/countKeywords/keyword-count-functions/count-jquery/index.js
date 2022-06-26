const countJquery = (str) => {
    const strToLowerCase = str.toLowerCase();
    const strSplitted = strToLowerCase.split(new RegExp('[/.,:;() -]', 'g'));
    let count = 0;
    strSplitted.forEach((word) => {
        if (word === 'jquery') {
            count += 1;
        }
    });
    return { keyword: 'jquery', count: count };
};
export default countJquery;
