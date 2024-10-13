const Shape = require("./shape.js");

describe("Shape", () => {

    describe("text", () => {
        it("test text", () => {
            const shape = new Shape("PL", "purple", "black");
            expect(shape.text).toEqual("PL");
        })
    });

    describe("shapeColor", () => {
        it("test shapeColor", () => {
            const shape = new Shape("PL", "purple", "black");
            expect(shape.shapeColor).toEqual("black");
        })
    });

    describe("textColor", () => {
        it("test text Color", () => {
            const shape = new Shape("PL", "purple", "black");
            expect(shape.textColor).toEqual("purple");
        })

    });

})