const countNext = (str) => {
    const strToLowerCase = str.toLowerCase();
    const strSplitted = strToLowerCase.split(new RegExp('[/.,:;() -]', 'g'));
    let count = 0;
    strSplitted.forEach((word) => {
        if (word === 'next' || word === 'nextjs') {
            count += 1;
        }
    });
    return { keyword: 'next', count: count };
};
export default countNext;
