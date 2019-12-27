'use strict';

console.log('game.js loaded');

// declaring some of the variables needed for the game
var hostGuess = 0;
var userClick;
var userGuess;
var roundCounter = 0;
var tieCounter = 0;
var userWins = 0;
var hostWins = 0;
var bestOf = 0;
var tie;
var toUser;
var toHost;
var intervalId;
// var seconds = 2;


// capturing user's choice from button
$('button').on('click', function () {
    userClick = ($(this).val());
    // the user's choice is:
    console.log('userClick -> ', userClick);

    // converting the choice to an integer for comparison purposes
    userGuess = parseInt(userClick);

    $('#host-guess').empty();
    playGame();
    roundCounter++;
    console.log('round Counter = ', roundCounter);
    if (roundCounter === 5) {
        console.log('T H E  E N D ');
        displayResults();
    };
});

// logic to handle 'match'
function playGame() {
    // randomly generate the host's guess
    // 1 will be rock, 2 will be paper, 3 will be scissors for the purpose of this exercise
    var randomGuess = Math.floor(Math.random() * 3 + 1);
    console.log('randomGuess -> ', randomGuess);

    var hostTool = $('<img>');
    hostTool.addClass('host-side');
    hostTool.attr('src', 'assets/images/' + randomGuess + '.jpg');
    $('#host-guess').append(hostTool);


    if (userGuess === randomGuess) {
        $('#ties').empty();
        console.log('tie!');
        tieCounter++
        console.log('Ties ', tieCounter);
        tie = $('<div>');
        tie.text('great minds think alike');
        $('#result').empty();
        $('#result').append(tie);
        $('#ties').append(tieCounter);



    } else if
        (userGuess < randomGuess) {
        $('#home-team').empty();
        console.log('Host wins this one!');
        hostWins++;
        console.log('Host score ', hostWins);
        toHost = $('<div>');
        toHost.text(' GO HOME TEAM ! !');
        $('#result').empty();
        $('#result').append(toHost);
        $('#home-team').append(hostWins);


    } else {
        $('#away-team').empty()
        console.log('this one goes to you!')
        userWins++;
        console.log('User score ', userWins);
        toUser = $('<div>');
        toUser.text('This one goes to the away team');
        $('#result').empty();
        $('#result').append(toUser);
        $('#away-team').append(userWins);
    }
};

function displayResults() {
    var message = $('<div>');
    var awayWins = $('<div>');
    var homeWins = $('<div>');
    var allTies = $('<div>');
    message.text(' We played 5 rounds, game resets in 5 seconds');
    awayWins.text('Away Team ' + userWins + ' wins ');
    homeWins.text('Home Team ' + hostWins + ' wins ');
    allTies.text('Ties ' + tieCounter);
    $('#display-total').append(awayWins, homeWins, allTies, message);
    reStart();
};

function reStart() {
    clearInterval(intervalId);
    setTimeout(function(){
        location.reload();
    }, 5000);
};