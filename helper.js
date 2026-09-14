class Helper {
    constructor() {
        this.id = "kUVytSfBhlUIWe";
        this.queue = [];
    }

    async baxlwly(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Helper();
    for (let i = 0; i < 4; i++) {
        await obj.baxlwly(i);
    }
    console.log(obj.queue);
})();
