const nums =  [
    {name : 'Pravin', gender : 'Male'},
    {name : 'Anil', gender : 'Male'},
    {name : 'Mayuri', gender : 'Female'},
    {name : 'Rutika', gender : 'Female'}
    ];
    
    let filterFemale = nums.filter(function (gen) 
    {
        return gen.gender ==="Female";
    });
    
    let startA = nums.filter(function(initial)
    {
        return initial.name.charAt(0)==='A';
    });
    
    let malesCount = nums.filter(function (gen) 
    {
        return gen.gender ==="Male";
        
    });
console.log(filterFemale);
console.log(startA);
console.log(malesCount.length);
