const CONST_MAIN = 2390;

function ucfnuw(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 3;
    }
    return result;
}

function juasy(data) {
    return data.filter(d => d > 28);
}

module.exports = { ucfnuw, juasy, CONST_MAIN };
