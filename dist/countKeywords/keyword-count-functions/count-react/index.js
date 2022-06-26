const countReact = (str) => {
    const strToLowerCase = str.toLowerCase();
    const strSplitted = strToLowerCase.split(new RegExp('[/.,:;() -]', 'g'));
    let count = 0;
    strSplitted.forEach((word, index, array) => {
        if (word === 'react' || word === 'reactjs') {
            const nextword = array[index + 1];
            if (nextword !== 'native') {
                count += 1;
            }
        }
    });
    return { keyword: 'react', count: count };
};
export default countReact;
