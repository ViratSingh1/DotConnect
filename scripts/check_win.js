// FUNCTION TO CHECK IF THE CURR_PLAYER WINS WITH THE CURRENT MOVE
//  - STARTING FROM THE CURRENT CELL, CHECK IN ALL DIRECTIONS: 
//    DIAGONALS, VERTICAL, HORIZONTAL
//  - IF A STRAIGHT LINE WITH REQ_LEN OF DOTS IS FOUND, THE PLAYER HAS WON
//  - HIGHLIGHT THE LINE FORMED WITH A WHITE BORDER

function check_win(row, col) {
    var win = false;

    var res = diag1_check(row, col);
    if (!win && res[0] >= req_len) {
        win = true;
        for (i = 1; i <= res[1]; i++) {
            $('#grid tr').eq(row - i).find('td').eq(col - i).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
        for (i = 0; i < res[2]; i++) {
            $('#grid tr').eq(row + i).find('td').eq(col + i).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
    }

    var res = diag2_check(row, col);
    if (!win && res[0] >= req_len) {
        win = true;
        for (i = 1; i <= res[1]; i++) {
            $('#grid tr').eq(row - i).find('td').eq(col + i).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
        for (i = 0; i < res[2]; i++) {
            $('#grid tr').eq(row + i).find('td').eq(col - i).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
    }

    var res = row_check(row, col);
    if (!win && res[0] >= req_len) {
        win = true;
        for (i = 1; i <= res[1]; i++) {
            $('#grid tr').eq(row - i).find('td').eq(col).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
        for (i = 0; i < res[2]; i++) {
            $('#grid tr').eq(row + i).find('td').eq(col).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
    }

    var res = col_check(row, col);
    if (!win && res[0] >= req_len) {
        win = true;
        for (i = 1; i <= res[1]; i++) {
            $('#grid tr').eq(row).find('td').eq(col - i).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
        for (i = 0; i < res[2]; i++) {
            $('#grid tr').eq(row).find('td').eq(col + i).find('button').css("border-color", 'rgba(255,255,255,0.8)');
        }
    }

    if (win) {
        $('#bg-winner').css('background-color', players[curr_player].win_color);
        $('#bg-red').css('opacity', '0');
        $('#bg-blue').css('opacity', '0');
        $('#bg-yellow').css('opacity', '0');
        $('#bg-green').css('opacity', '0');
        $('.navbar-left').html("<span style='color:" + players[curr_player].color + "'>" + players[curr_player].name.toUpperCase() + "</span> WINS!!");
        $('.navbar-left').addClass('bg-dark');
    }

    return win;
}

function diag1_check(row, col) {
    var before = curr_after = cnt = 0, tmpRow = row - 1, tmpCol = col - 1;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpRow--; tmpCol--; cnt++; }
    before = cnt;
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { row++; col++; cnt++; }
    curr_after = cnt - before;
    return [cnt, before, curr_after];
}

function diag2_check(row, col) {
    var before = curr_after = cnt = 0, tmpRow = row - 1, tmpCol = col + 1;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpRow--; tmpCol++; cnt++; }
    before = cnt;
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { row++; col--; cnt++; }
    curr_after = cnt - before;
    return [cnt, before, curr_after];
}

function row_check(row, col) {
    var before = curr_after = cnt = 0, tmpRow = row - 1, tmpCol = col;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpRow--; cnt++; }
    before = cnt;
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { row++; cnt++; }
    curr_after = cnt - before;
    return [cnt, before, curr_after];
}

function col_check(row, col) {
    var before = curr_after = cnt = 0, tmpRow = row, tmpCol = col - 1;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpCol--; cnt++; }
    before = cnt;
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { col++; cnt++; }
    curr_after = cnt - before;
    return [cnt, before, curr_after];
}

function isValid(row, col) {
    if (row >= window.TABLE_SIZE[0] || row < 0) { return false; }
    if (col >= window.TABLE_SIZE[1] || col < 0) { return false; }
    return true;
}