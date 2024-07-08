function solution(a, b){
    if(!b.length) return a
    if(!a.length) return b
    var word = (a.length > b.length) ? b + a + b : a + b + a
    return word
}
console.log(solution("aaa", "bbbb"))