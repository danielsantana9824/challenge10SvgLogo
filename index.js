const inquirer = require("inquirer");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
const fs = require("fs");

inquirer.prompt([{
    
    type: "input",
    message: "Enter 3 or less characters text:",
    validate: (text) => text.length <= 3 ? true : false,
    name: "text"
},
{
    type: "input",
    message: "Enter text color:",
    name: "textColor"

},
{
    type: "input",
    message: "Enter shape color:",
    name: "shapeColor"

},
{
    type: "list",
    message: "choose shape:",
    name: "shape",
    choices: ["circle", "triangle", "square"]
}
])
    .then(res => {
        let content = "";
        let filename = "";

        switch (res.shape) {

            case res.shape === "circle":

                const circle = new Circle(res.text, res.textColor, res.shapeColor)
                content = circle.render()
                filename = "./examples/circle.svg"

                break;

            case res.shape === "triangle":

                const triangle = new Triangle(res.text, res.textColor, res.shapeColor)
                content = triangle.render()
                filename = "./examples/triangle.svg"
                break;

            default:

                const square = new Square(res.text, res.textColor, res.shapeColor)
                content = square.render()
                filename = "./examples/square.svg"

                break;
        }

        fs.writeFile(filename, content, (err) => err ? console.log(err) : console.log("success"))

    })
