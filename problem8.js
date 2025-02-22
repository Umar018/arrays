function spell(str){
    return [...str].map((nothing, i) => str.substring(0, i+1))
}
console.log(spell("happy"))