var bike = [
    {
        name: "Pippo",
        weight: 40

    },
    {
        name: "Topolino",
        weight: 50
    },
    {
        name: "Pluto",
        weight: 30
    }
]

console.table(bike);

let lightbike;
for( var i = 0; i < bike.length; i++){
    if(!lightbike){
        lightbike = bike[i];
    }
    var {weight} = bike[i];
    if( weight < lightbike.weight){
        lightbike = bike[i];
    }
}

var text =
    `<h1>Bike Name: ${lightbike.name}</h1>
 <h1>Bike Weight: ${lightbike.weight}</h1>
`;

document.getElementById("bike").innerHTML = text;




