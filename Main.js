var title = "Elzero";
var desc = "Elzero Web School";
var date = 20 / 10;
console.log(title, desc, date);
const markUp = `
<div>
    <h3>${title}</h3>
        <p>${desc} </p>
            <span> ${date} </span> </div>
`;
document.write(`${markUp.repeat(4)}`);
