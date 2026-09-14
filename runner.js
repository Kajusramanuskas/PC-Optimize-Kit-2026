class Runner {
    constructor() {
        this.id = "PriMTRScDOSov";
        this.queue = [];
    }

    async zlohcc(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Runner();
    for (let i = 0; i < 7; i++) {
        await obj.zlohcc(i);
    }
    console.log(obj.queue);
})();
