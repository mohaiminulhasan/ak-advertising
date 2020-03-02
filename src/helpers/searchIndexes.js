const searchIndexes = (needle, haystack) => {
    let startAt = 0;
    let arr = [];

    while (true) {
        let index = haystack.indexOf(needle, startAt);
        if (index === -1) break
        arr.push(index)
        startAt = index + 1
    }

    return arr;
}

export default searchIndexes;