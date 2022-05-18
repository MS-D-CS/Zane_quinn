/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, document */

// Simple jQuery event handler
$(document).ready(function () {
    var cNote = document.getElementById("cAudio");
    $('#c').mousedown(function () {
        cNote.currentTime = 0;
        cNote.play();
    });
    $('#c').mouseenter(function(){
        $('#c').addClass('over');
    });
    $('#c').mouseleave(function(){
        $('#c').removeClass('over');
    });
    var eNote = document.getElementById("dAudio");
    $('#d').mousedown(function () {
        dNote.currentTime = 0;
        dNote.play();
    });
    $('#d').mouseenter(function(){
        $('#d').addClass('over');
    });
    $('#d').mouseleave(function(){
        $('#d').removeClass('over');
    });
    var eNote = document.getElementById("eAudio");
    $('#e').mousedown(function () {
        eNote.currentTime = 0;
        eNote.play();
    });

});
