class Bot {
    constructor(name) {
        this.name = name;
    }

    saySomething(text) {
        return `${this.name}: ${text}`;
    }
}

export default Bot;
