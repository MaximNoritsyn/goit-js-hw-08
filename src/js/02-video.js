import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const ST_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// get current time
const timeApdater = (data) => {
    localStorage.setItem(ST_KEY, data.seconds);
}

player.on('timeupdate', throttle(timeApdater, 1000));

// set current time
const savedTime = localStorage.getItem(ST_KEY) || 0;
player.setCurrentTime(savedTime);