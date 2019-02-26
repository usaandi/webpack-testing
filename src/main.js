require('./main.scss');
import img from "./images/image.png";
import {log,announce} from "./notification";

class Form {
    constructor(){
        let numbers =[10,2,5,1,4,3,5].map(n => n *2);
        console.log(numbers);
    }

}
new Form();
//commonjs
//let notify = require('./notification');
// other way

log("hello world console");
//announce("Hello webpack");