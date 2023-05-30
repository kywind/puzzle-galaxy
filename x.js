Game.saveState();Game.tickTimer();this.jstimerPersonal.value = Game.getTimer();this.ansH.value=Game.serializeSolution()

var Game = {}; 
 var Puzzle = {}; 
 var task = 'bpdziccl'; 
 var loadedId = 0; 
 $(document).ready(function(){ 
    Game = $('#game').galaxies({ 
        ident: 'galaxies.0' , 
        task: task, 
        hashedSolution: 'c956f3cfd752c431431db97099854bff', 
        token: document.forms['answerForm'].param.value, 
        puzzleID: $('#puzzleID').text(), 
        puzzleWidth: 5, 
        puzzleHeight: 5 ,
        localTimer: new Date().getTime() ,
        relativeTo: '#puzzleContainerOverflowDiv' ,
        noCheck: true ,
        onLoaded: function() { 
            updateCheckpoints(); 
        } 
    }).initGame(); 
    $(window).on('scroll', function() { }); 
    Game.panzoomAction = function() { 
        this.zoomingPanning = true; 
        this.repositionHelpers(); 
    }; 
    var savedState; 
    if ( (savedState = Game.getSaved()) && (!loadedId || (Game.getSaved().puzzleID && (loadedId == Game.getSaved().puzzleID.replaceAll(',', '')))) ) { 
        if (!savedState.solved || 0 || 0) { 
            Game.loadGame(savedState); 
            document.forms['answerForm'].param.value = Game.getSetting('token'); 
            if (Game.getSetting('puzzleID')) $('#puzzleID').text(Game.getSetting('puzzleID')); 
            startTime = Game.getSetting('localTimer'); 
        } else { 
            Game.resetTimer(); 
        } 
    } else { 
        Settings.remove(Game.getSaveIdent()); 
        Game.resetTimer(); 
    } 
    Game.plSize = 0; 
    Game.check = function() { 
        if (Settings.get('global.auto-submit')) { 
            $("#btnReady").click(); 
        } 
    }; 
    Game.initEventHandlers(); 
    $('#stage').on('mousedown touchstart', function(e) { e.preventDefault(); }).contextmenu(function(){ return false; }); 
    $('body').addClass('ingame'); 
    var scale = Settings.get(getZoomSettingName()); 
    if (!scale) scale = 1; 
    $('#zoomslider').val(scale).change(); 
    setZoom(scale); 
    Layout.init(); 
});
window.onerror = function(msg, url, line, col, error) { 
    var extra = !col ? '' : '\ncolumn: ' + col; 
    extra += !error ? '' : '\nerror: ' + error.stack; 
    var m = msg + "\nurl: " + url + "\nline: " + line + extra; 
    console.error("%cPuzzle Error: ", 'color:#36c; font-size: 15pt'); 
    console.error("%c"+m, 'color:#36c; background-color: #FFC'); 
    if (!line) return true; 
    if (User.logged) m += "\nUser: " + User.email; 
    var xhr = new XMLHttpRequest(); 
    xhr.open('POST', '/errlog.php'); 
    xhr.send(m); 
    return true;
};