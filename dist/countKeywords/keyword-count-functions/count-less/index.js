const countLess = (str) => {
    const strToLowerCase = str.toLowerCase();
    const strSplitted = strToLowerCase.split(new RegExp('[/.,:;() -]', 'g'));
    let count = 0;
    strSplitted.forEach((word) => {
        if (word === 'less') {
            count += 1;
        }
    });
    return { keyword: 'less', count: count };
};
export default countLess;
