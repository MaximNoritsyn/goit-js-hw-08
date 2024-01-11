import Player from '@vimeo/player';

const ST_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// get current time
const timeApdater = (data) => {
    localStorage.setItem(ST_KEY, data.seconds);
}

player.on('timeupdate', timeApdater);

// set current time
const savedTime = localStorage.getItem(ST_KEY) || 0;
player.setCurrentTime(savedTime);