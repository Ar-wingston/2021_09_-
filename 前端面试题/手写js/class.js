class Mon {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
    get() {
        console.log(`名字：${this.name}，性别：${this.gender}`);
    }
}

class Father extends Mon {
    constructor(name, gender, baby) {
        super(name, gender)
        this.baby = baby
    }
    baby() {
        console.log('baby => ', this.baby);
    }
}

const xd = new Father('yd', 'n', 'xx')
xd.baby()
