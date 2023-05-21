function drawStairs(n) {
    if (n === 0) {
        return ''
    }
    let str = '',
        ent = '';

    for (let i = 0; i < n - 1; i++){
        str += ent + 'I\n';
        ent += ' ';
    }
    str += ent + 'I';
    return str;
}
console.log(drawStairs(0));