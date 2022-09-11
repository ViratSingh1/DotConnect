// DIALOG BOX FOR RESET CONFIRMATION
$("#dialog").dialog({
    autoOpen: false,
    resizable: false,
    width: "400px",
    buttons: {
        YES: function () {
            reset();
            $(this).dialog("close");
        },
        NO: function () {
            $(this).dialog("close");
        }
    }
});

// RESET FUNCTION
function reset() {
    for (i = 0; i < num_players; i++) { $(players[curr_player].bg_name).css('opacity', '0'); }
    $('#bg-winner').css('background-color', 'transparent');
    $('button').css("background-color", 'rgb(230, 230, 230)');
    $('button').css("border-color", 'rgb(255, 255, 255, 0.1)');
    $('body').css('background-image', 'linear-gradient(-90deg, red, blue)')
    $('body').css('background-color', 'transparent');
    $('.navbar-left').removeClass('bg-dark');
    $('.navbar-left').html("DOT CONNECT");
    curr_player = 0, prev_player = -1, game_over = false, validClick = false;
    prev_move[0] = -1;
    prev_move[1] = -1;
    col_clicked, row_clicked, num_clicks = 0;
    grid_arr = [], first_empty = [];
    for (i = 0; i < window.TABLE_SIZE[0]; i++) {
        const a = [];
        for (let j = 0; j < window.TABLE_SIZE[1]; j++)
            a.push('none');
        grid_arr.push(a);
    }

    for (i = 0; i < window.TABLE_SIZE[1]; i++) {
        first_empty.push(window.TABLE_SIZE[0] - 1);
    }

    for (i = 0; i < players.length; i++) {
        players[i].can_undo = true;
    }
}
