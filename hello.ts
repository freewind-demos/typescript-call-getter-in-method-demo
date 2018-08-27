class Hello {
    name: string

    constructor(name: string) {
        this.name = name
    }

    get bigName(): string {
        console.log('--- compute bigName ---')
        return this.name.toUpperCase()
    }

    sayHello() {
        console.log('Hello, ' + this.bigName)
        console.log('Hello, ' + this.bigName)
        console.log('Hello, ' + this.bigName)
    }
}

new Hello('typescript').sayHello()