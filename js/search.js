$('button.musicbuttons').click(function () {
    var genre = $(this).text().toLowerCase();
    window.location = './music.php?video='+findVideo(genre);
});
$('#custom-search-input input#tags').keypress(function(e) {
    if (e.which == 13) {
        window.location = './music.php?video='+findVideo($(this).val());
    }
});
$('#custom-search-input button').click(function () {
    window.location = './music.php?video='+findVideo($('#custom-search-input input#tags').val());
})

function findVideo(keyword) {
    switch (keyword) {
        case 'alternative':
            return 'XN32lLUOBzQ';
        case 'rock':
            return '1VQ_3sBZEm0';
        case 'pop':
            return 'O-zpOMYRi0w';
        case 'rap':
            return 'wk4ftn4PArg';
        case 'indie':
            return '3gxNW2Ulpwk';
        case 'country':
            return 'QyS0nRLNY5A';
        case 'r&amp;b':
            return 'GtUVQei3nX4';
        case 'classical':
            return 'E2j-frfK-yg';
        case 'hip-hop':
            return '6Y1Emb7Jyks';
        case 'jazz':
            return 'vmDDOFXSgAs';
        case 'blues':
            return 'UonBS_mvW-E';
        case 'folk':
            return 'syNLBJ_Lq9E';
        case 'metal':
            return 'YfjTZLxekig';
        case 'electronic':
            return 'H-k_Eg7zXuc';
        case 'reggae':
            return 'vdB-8eLEW8g';
        case 'random':
        default:
            return 'S0lj8X2bUk8';
    }
}
