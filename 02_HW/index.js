//04_HtmlElements/index.js
document.addEventListener("DOMContentLoaded", () => {
    pageLoaded();
});


let in1;
let in2;
let btnRes;
let res;
function pageLoaded() {
    in1 = document.querySelector("#input1");
    in2 = document.querySelector("#input2");
    res = document.getElementById("lblRes");
    btnRes = document.getElementById("btnRes");
    btnRes.addEventListener("click", () => {
        calculate();
    });
    // validate while typing
    in1.addEventListener('input', () => validateNumberInput(in1));
    in2.addEventListener('input', () => validateNumberInput(in2));
}

//const btn2 = document.getElementById("btn2");


/* btn2.addEventListener("click", () => {
    print("btn2 clicked" + btn2.id + "|" + btn2.innerText);
}); */

function calculate() {
    // validate inputs and get numeric values
    const v1 = validateNumberInput(in1);
    const v2 = validateNumberInput(in2);
    if (!v1.valid || !v2.valid) {
        res.innerText = 'Please enter valid numbers';
        return;
    }
    let num1 = v1.value;
    let num2 = v2.value;
    let operation = document.getElementById("operator").value;
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;      
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            res.innerText = "Unknown operation";
            break;
    }
    res.innerText = result;
    print(num1 + " " + operation + " " + num2 + " = " + result, true);
}

function validateNumberInput(el) {
    if (!el) return { valid: false, value: NaN };
    const txt = el.value.trim();
    const num = parseFloat(txt);
    if (txt === '' || isNaN(num)) {
        el.classList.remove('is-valid');
        el.classList.add('is-invalid');
        return { valid: false, value: NaN };
    } else {
        el.classList.remove('is-invalid');
        el.classList.add('is-valid');
        return { valid: true, value: num };
    }
}

/*btn2.addEventListener("click",func1());

function func1(){   }*/


function print(msg, boo) 
{
    const ta = document.getElementById("output");
    if (boo) 
    {
        //append to text area
        if (ta) ta.value = msg + "\n"+ ta.value;
            else console.log(msg);
    }
    else 
        {
        //get text area element reference
        //--write to text area--
        if (ta) ta.value = msg;
            else console.log(msg);
    }
}


function demoNative() {
    let out = "=== STEP 1: NATIVE TYPES ===\n";

    // String
    const s = "Hello World";
    out += "\n[String] s = " + s;
    out += "\nLength: " + s.length;
    out += "\nUpper: " + s.toUpperCase();

    // Number
    const n = 42;
    out += "\n\n[Number] n = " + n;

    // Boolean
    const b = true;
    out += "\n\n[Boolean] b = " + b;

    // Date
    const d = new Date();
    out += "\n\n[Date] now = " + d.toISOString();

    // Array
    const arr = [1, 2, 3, 4];
    out += "\n\n[Array] arr = [" + arr.join(", ") + "]";
    out += "\nPush 5 → " + (arr.push(5), arr.join(", "));
    out += "\nMap x2 → " + arr.map(x => x * 2).join(", ");

    // Functions as variables
    const add = function (a, b) { return a + b; };
    out += "\n\n[Function as variable] add(3,4) = " + add(3, 4);

    // Callback
    function calc(a, b, fn) { return fn(a, b); }
    const result = calc(10, 20, (x, y) => x + y);
    out += "\n[Callback] calc(10,20, x+y ) = " + result+"\n";

    print(out);
}
