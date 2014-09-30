var playerStats = {
  hp: 100,
  atk: 100,
  def: 25,
  speed: 100
}


$(document).ready(function() {
  disableBattleActions();
  var playerAtb = playerAtbGauge(0, playerStats.speed);
  var enemyAtb = enemyAtbGauge(0, 50);

});

$(document).on('click', '.action', function() {
  $('#player-atb-gauge').addClass('remove-progress-bar-transition');
  playerAtbGauge(0, playerStats.speed);
  disableBattleActions();
});

/*
Author: Patrick Schreiber
Date: 2014-09-29
Description: This fucntion creates an atb gauge for the player
Usage: - playerAtbGauge(starting_point_of_atb, speed_of_gauge)
Params: - count, int, starting point of the atb gauge
        - speed, int, speed the atb gauge fills in ms (higher number = slower)
*/
function playerAtbGauge(count, speed) {
  var timer = setInterval(function() {
    count++;
    $('#player-atb-gauge').css('width', count + '%')
    if (count >= 100) {
      clearInterval(timer);
      enableBattleActions();
    }
  }, speed);
}

/*
Author: Patrick Schreiber
Date: 2014-09-29
Description: This fucntion creates an atb gauge for the enemy
Usage: - playerAtbGauge(starting_point_of_atb, speed_of_gauge)
Params: - count, int, starting point of the atb gauge
        - speed, int, speed the atb gauge fills in ms (higher number = slower)
*/
function enemyAtbGauge(count, speed) {
  var timer = setInterval(function() {
    count++;
    $('#enemy-atb-gauge').css('width', count + '%')
    if (count >= 100) {
      clearInterval(timer);
      enemyAi();
    }
  }, speed);
}

/*
Author: Patrick Schreiber
Date: 2014-09-29
Description: This fucntion enables the player's battle actions
Usage: - enableBattleActions();
Params: - This function doesn't accept any parameters
*/
function enableBattleActions() {
  $('#attack, #skill, #magic, #item').removeAttr('disabled');
}

/*
Author: Patrick Schreiber
Date: 2014-09-29
Description: This fucntion enables the player's battle actions
Usage: - enableBattleActions();
Params: - This function doesn't accept any parameters
*/
function disableBattleActions() {
  $('#attack, #skill, #magic, #item').attr('disabled', 'disabled');
}


function enemyAi() {

}
