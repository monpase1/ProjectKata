const spEng = s => (s.toLowerCase().search("english") === -1 ? false : true);

//or smart

const spEngPlus = s => /english/i.test(s);

//or

const spEngOther = s => s.toLowerCase().includes("english");

console.log(spEng("english123123123"));
console.log(spEngPlus("dfgdfgenglishsdvfa"));
console.log(spEngOther("asdfenglishasdgfasdf"));
