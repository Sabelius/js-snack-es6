var soccerTeams = [
  {
    name : "Napoli",
    scoredPoints : 0,
    injuries : 0
  },
  {
    name : "Atalanta",
    scoredPoints : 0,
    injuries : 0
  },
  {
    name : "Inter",
    scoredPoints : 0,
    injuries : 0
  },
]

function getRandomNumber(min, max){ 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let team of soccerTeams){
  team.scoredPoints = getRandomNumber(0, 100);
  team.injuries = getRandomNumber(0, 100);
}

console.table(soccerTeams);



