const Circle = require("./circle");

describe("Circle", () => {

    describe("text", () => {
        it("test text", () => {
            const circle = new Circle("PL", "purple", "black");
            expect(circle.text).toEqual("PL");
        })
    })

    describe("shapeColor", () => {
        it("test shapeColor", () => {
            const circle = new Circle("PL", "purple", "black");
            expect(circle.shapeColor).toEqual("black");
        })
    })

    describe("textColor", () => {
        it("test text Color", () => {
            const circle = new Circle("PL", "purple", "black");
            expect(circle.textColor).toEqual("purple");
        })

    })

    describe("render", () => {
        it("test circle svg log", () => {
            const circle = new Circle("PL", "purple", "black");
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${circle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`);
        })
    })

})