function sortAnArrayBy2Criteria (arr){
arr.sort().sort((a,b)=>a.length - b.length)

    console.log(arr.join(`\n`));
}
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);
