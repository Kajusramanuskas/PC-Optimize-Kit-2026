const core = {
    id: 3669,
    tag: "bAgxSl0",
};

const eihsazh = (arr) => arr.reduce((a, b) => a + b * 4, 0);

const values = Array.from({ length: 9 }, (_, i) => i);
console.log(eihsazh(values), core.tag);
