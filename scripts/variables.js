// COLOR RGB CONF FOR DOTS
var red = 'rgb(255, 80, 0)', blue = 'rgb(0, 160, 255)', yellow = 'rgb(255, 195, 0)', green = 'rgb(0, 240, 160)';

// PLAYER DETAILS
// NAME: DISPLAY NAME
// WIN_COLOR: BACKGROUND COLOR CHANGE ON WINNING
// COLOR: DOT COLOR
// BG_NAME: ID OF BACKGROUND DIV
// CAN_UNDO: WETHER OR NOT HAS THE PLAYER USED IT'S UNDO CHANCE ONCE

var player1 = {
  name: "Player-1",
  win_color: 'rgb(80, 10, 10)',
  color: red,
  bg_name: '#bg-red',
  can_undo: true
};

var player2 = {
  name: "Player-2",
  win_color: 'rgb(10, 10, 50)',
  color: blue,
  bg_name: '#bg-blue',
  can_undo: true
};

var player3 = {
  name: "Player-3",
  win_color: 'rgb(255, 100, 0)',
  color: yellow,
  bg_name: '#bg-yellow',
  can_undo: true
};

var player4 = {
  name: "Player-4",
  win_color: 'rgb(60, 150, 60)',
  color: green,
  bg_name: '#bg-green',
  can_undo: true
};

var players = [player1, player2, player3, player4];

// CURRENT STATUS OF THE GAME or STATE VARIABLES
var curr_player = 0, prev_player = -1, game_over = false, validClick = false;
var col_clicked, row_clicked, num_clicks = 0;
var undo_clicked = false;

// GAME VARIABLES
var req_len = 4, num_players = 2;     //DEFAULT
var prev_move = [-1, -1];   //ROW, COLULMN

// GRID_ARR: A 2-D ARRAY TO STORE THE GRID STATE AT ANY POINT OF TIME
// FIRST_EMPTY: AN ARRAY TO STORE THE TOPMOST EMPTY CELL FOR EACH COLUMN IN THE GRID
var grid_arr = [], first_empty = [];
for (i = 0; i < window.TABLE_SIZE[0]; i++) {
  const tmp = [];
  // INITIALIZING EACH CELL WITH 'NONE'; AFTER A MOVE, COLOUR OF THE PLAYER IS STORED
  for (let j = 0; j < window.TABLE_SIZE[1]; j++)
    tmp.push('none');
  grid_arr.push(tmp);
}

// INITIALIZING EACH COL'S FIRST_EMPTY CELL WITH THE LAST ROW INDEX
for (i = 0; i < window.TABLE_SIZE[1]; i++) {
  first_empty.push(window.TABLE_SIZE[0] - 1);
}