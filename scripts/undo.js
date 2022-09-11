function undo() {
    // GAME ALREADY ENDED
    if (game_over) {
        alert("Game has ended!");
    }

    // CONSECUTIVE
    else if (undo_clicked){
        alert("Consecutive UNDOs not allowed!");
    }

    // FIRST MOVE OF THE GAME
    else if (prev_player == -1) {
        alert("No move registered!");
    }

    // CURR_PLAYER HAS NOT USED UNDO YET
    else if (players[prev_player].can_undo) {
        undo_clicked = true;
        // RESET PARAMETERS
        grid_arr[prev_move[0]][prev_move[1]] = 'none';
        $(players[curr_player].bg_name).css('opacity', '0');
        first_empty[col_clicked]++;
        $('#grid tr').eq(prev_move[0]).find('td').eq(prev_move[1]).find('button').css("background-color", 'rgb(230, 230, 230)');
        $('#grid tr').eq(prev_move[0]).find('td').eq(prev_move[1]).find('button').css("border-color", 'rgb(255, 255, 255, 0.1)');

        // MAKE CHANGES
        curr_player = prev_player;
        players[curr_player].can_undo = false;
        $(players[curr_player].bg_name).css('opacity', '1');
    }

    // CURR_PLAYER HAS USED UNDO ONCE
    else {
        alert(players[prev_player].name + " has already used UNDO once!");
    }
}