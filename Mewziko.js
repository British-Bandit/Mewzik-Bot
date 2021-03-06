/*!
 *Copyright 2014 British Bandit
 *Modifications (including forks) of the code to fit personal needs are allowed only for personal use and should refer back to the original source.
 *This software is not for profit, any extension, or unauthorised person providing this software is not authorised to be in a position of any monetary gain from this use of this software. Any and all money gained under the use of the software (which includes donations) must be passed on to the original author.
 *Mewziko.settings.MaxSongLength
 */

(function () {
var BotCreator = "British Bandit";

var Mewziko = {
  Name: "Mewziko",
  Script: "https://raw.githubusercontent.com/British-Bandit/Mewzik-Bot/master/Mewziko.js",
  CommandList: "https://raw.githubusercontent.com/British-Bandit/Mewzik-Bot/master/CommandList",
  Settings: {
    MaxSongLength: 480,
    SkipRequestLimit: 8,
    ReplayTimer: 30
  }
}

SkipSong = function () {
  if (API.getMedia().duration >= Mewziko.Settings.MaxSongLength){
    API.moderateForceSkip();
    return -1;
  }
  else return 1;
}
}).call(this);
