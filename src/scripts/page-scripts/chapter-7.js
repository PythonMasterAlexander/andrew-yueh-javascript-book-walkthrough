/*
  This code has a ton of problems. The function playerAboveSkillAndAge should be returing an array that includes
  the players who are above the specified skill and age.

  let players = [
    {player: 'super', skill: 1, age: 20},
    {player: 'smurf', skill: 8, age: 24},
    {player: 'ANS', skill: 6, age: 27},
    {player: 'faker', skill: 10, age: 17},
    {player: 'shroud', skill: 9, age: 26},
  ];

  function playerAboveSkillAndAge(players, skill) {
    let skilledPlayer = players;
    for (let i = 0; i < players.length; i++) {
      let objectKey = 'skill';
      if (players[i].objectKey < skill) {
        skilledPlayer.push(players);
      }
    }
    return skilledPlayer;
  }

  function playersAboveAge(players, age) {
    let agedPlayers = players;
    for (let i = 0; i < agedPlayers; i++) {
      let objectKey = 'age';
      if (players[i].objectKey < age) {
        agedPlayers.push(players);
      }
    }
    return agedPlayers; 
  }
*/
