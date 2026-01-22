const allBtn = document.querySelector('.sort.all');
const musicBtn = document.querySelector('.sort.music');
const podcastsBtn = document.querySelector('.sort.podcasts');

const likedSongs = document.querySelector('.album.liked-songs')
const dj = document.querySelector('.album.dj');
const inoha = document.querySelector('.album.inoha');
const ewf = document.querySelector('.album.ewf');
const gg = document.querySelector('.album.gg');
const rock = document.querySelector('.album.rock');

const gl1 = document.getElementById('gl1');
const gl2 = document.getElementById('gl2');
const gl3 = document.getElementById('gl3');
const gl4 = document.getElementById('gl4');
const gl5 = document.getElementById('gl5');
const gl6 = document.getElementById('gl6');
const bgl = document.getElementById('bgl');

/* button status key */

let key1 = true;
let key2 = true;
let key3 = true;
let key4 = true;
let key5 = true;
let key6 = true;

const lsStart = document.querySelector('.start-btn.ls-start');
const djStart = document.querySelector('.start-btn.dj-start');
const iStart = document.querySelector('.start-btn.i-start');
const eStart = document.querySelector('.start-btn.e-start');
const gStart = document.querySelector('.start-btn.g-start');
const rStart = document.querySelector('.start-btn.r-start');

const lsStop = document.querySelector('.stop-btn.ls-stop');
const djStop = document.querySelector('.stop-btn.dj-stop');
const iStop = document.querySelector('.stop-btn.i-stop');
const eStop = document.querySelector('.stop-btn.e-stop');
const gStop = document.querySelector('.stop-btn.g-stop');
const rStop = document.querySelector('.stop-btn.r-stop');

/* sort buttons */

allBtn.addEventListener('click', function() {
  allBtn.style.backgroundColor = 'whitesmoke';
  allBtn.style.color = '#121212';

  musicBtn.style.backgroundColor = 'rgba(245, 245, 245, 0.15)';
  musicBtn.style.color = 'whitesmoke';

  podcastsBtn.style.backgroundColor = 'rgba(245, 245, 245, 0.15)';
  podcastsBtn.style.color = 'whitesmoke';
})

musicBtn.addEventListener('click', function() {
  musicBtn.style.backgroundColor = 'whitesmoke';
  musicBtn.style.color = '#121212';

  allBtn.style.backgroundColor = 'rgba(245, 245, 245, 0.15)';
  allBtn.style.color = 'whitesmoke';

  podcastsBtn.style.backgroundColor = 'rgba(245, 245, 245, 0.15)';
  podcastsBtn.style.color = 'whitesmoke';
})

podcastsBtn.addEventListener('click', function() {
  podcastsBtn.style.backgroundColor = 'whitesmoke';
  podcastsBtn.style.color = '#121212';

  allBtn.style.backgroundColor = 'rgba(245, 245, 245, 0.15)';
  allBtn.style.color = 'whitesmoke';

  musicBtn.style.backgroundColor = 'rgba(245, 245, 245, 0.15)';
  musicBtn.style.color = 'whitesmoke';
})

/*gradient background*/

likedSongs.addEventListener('mouseenter', function() {
  gl1.style.opacity = '1';

  makeBtnVisible(likedSongs, key1);
})

likedSongs.addEventListener('mouseleave', function() {
  gl1.style.opacity = '0';

  makeBtnHidden(likedSongs, key1);
})

dj.addEventListener('mouseenter', function() {
  gl1.style.opacity = '1';
  gl2.style.opacity = '1';

  makeBtnVisible(dj, key2);
})

dj.addEventListener('mouseleave', function() {
  gl1.style.opacity = '0';
  gl2.style.opacity = '0';

  makeBtnHidden(dj, key2);
})

inoha.addEventListener('mouseenter', function() {
  gl1.style.opacity = '1';
  gl2.style.opacity = '1';
  gl3.style.opacity = '1';

  makeBtnVisible(inoha, key3);
})

inoha.addEventListener('mouseleave', function() {
  gl1.style.opacity = '0';
  gl2.style.opacity = '0';
  gl3.style.opacity = '0';

  makeBtnHidden(inoha, key3);
})

ewf.addEventListener('mouseenter', function() {
  gl1.style.opacity = '1';
  gl2.style.opacity = '1';
  gl3.style.opacity = '1';
  gl4.style.opacity = '1';

  makeBtnVisible(ewf, key4);
})

ewf.addEventListener('mouseleave', function() {
  gl1.style.opacity = '0';
  gl2.style.opacity = '0';
  gl3.style.opacity = '0';
  gl4.style.opacity = '0';

  makeBtnHidden(ewf, key4);
})

gg.addEventListener('mouseenter', function() {
  gl1.style.opacity = '1';
  gl2.style.opacity = '1';
  gl3.style.opacity = '1';
  gl4.style.opacity = '1';
  gl5.style.opacity = '1';

  makeBtnVisible(gg, key5);
})

gg.addEventListener('mouseleave', function() {
  gl1.style.opacity = '0';
  gl2.style.opacity = '0';
  gl3.style.opacity = '0';
  gl4.style.opacity = '0';
  gl5.style.opacity = '0';

  makeBtnHidden(gg, key5);
})

rock.addEventListener('mouseenter', function() {
  gl1.style.opacity = '1';
  gl2.style.opacity = '1';
  gl3.style.opacity = '1';
  gl4.style.opacity = '1';
  gl5.style.opacity = '1';
  gl6.style.opacity = '1';

  makeBtnVisible(rock, key6);
})

rock.addEventListener('mouseleave', function() {
  gl1.style.opacity = '0';
  gl2.style.opacity = '0';
  gl3.style.opacity = '0';
  gl4.style.opacity = '0';
  gl5.style.opacity = '0';
  gl6.style.opacity = '0';

  makeBtnHidden(rock, key6);
})

/* make buttons visible / hidden */
 
function makeBtnVisible(name, key) {
  const innerStartBtn = name.querySelector('.start-btn');
  const innerStopBtn = name.querySelector('.stop-btn');

  if (key) {
    innerStartBtn.style.opacity = '1';
    innerStartBtn.style.zIndex = '1';

    innerStopBtn.style.opacity = '0';
    innerStopBtn.style.zIndex = '0';
  }
  else {
    innerStopBtn.style.opacity = '1';
    innerStopBtn.style.zIndex = '1';

    innerStartBtn.style.opacity = '0';
    innerStartBtn.style.zIndex = '0';
  }
}

function makeBtnHidden(name, key) {
  const innerStartBtn = name.querySelector('.start-btn');
  const innerStopBtn = name.querySelector('.stop-btn');

  if (key) {
    innerStartBtn.style.opacity = '0';
    innerStartBtn.style.zIndex = '0';

    innerStopBtn.style.opacity = '0';
    innerStopBtn.style.zIndex = '0';
  }
  else {
    innerStopBtn.style.opacity = '0';
    innerStopBtn.style.zIndex = '0';

    innerStartBtn.style.opacity = '0';
    innerStartBtn.style.zIndex = '0';
  }
}

/* changr start / stop button */

lsStart.addEventListener('click', () => {
  [key1, key2, key3, key4, key5, key6] = [false, true, true, true, true, true]

  lsStart.style.opacity = '0';
  lsStart.style.zIndex = '0';

  lsStop.style.opacity = '1';
  lsStop.style.zIndex = '1';
})

lsStop.addEventListener('click', () => {
  key1 = true;

  lsStart.style.opacity = '1';
  lsStart.style.zIndex = '1';

  lsStop.style.opacity = '0';
  lsStop.style.zIndex = '0';
})

djStart.addEventListener('click', () => {
  [key1, key2, key3, key4, key5, key6] = [true, false, true, true, true, true]

  djStart.style.opacity = '0';
  djStart.style.zIndex = '0';

  djStop.style.opacity = '1';
  djStop.style.zIndex = '1';
})

djStop.addEventListener('click', () => {
  key2 = true;

  djStart.style.opacity = '1';
  djStart.style.zIndex = '1';

  djStop.style.opacity = '0';
  djStop.style.zIndex = '0';
})

iStart.addEventListener('click', () => {
  [key1, key2, key3, key4, key5, key6] = [true, true, false, true, true, true]

  iStart.style.opacity = '0';
  iStart.style.zIndex = '0';

  iStop.style.opacity = '1';
  iStop.style.zIndex = '1';
})

iStop.addEventListener('click', () => {
  key3 = true;

  iStart.style.opacity = '1';
  iStart.style.zIndex = '1';

  iStop.style.opacity = '0';
  iStop.style.zIndex = '0';
})

eStart.addEventListener('click', () => {
  [key1, key2, key3, key4, key5, key6] = [true, true, true, false, true, true]

  eStart.style.opacity = '0';
  eStart.style.zIndex = '0';

  eStop.style.opacity = '1';
  eStop.style.zIndex = '1';
})

eStop.addEventListener('click', () => {
  key4 = true;

  eStart.style.opacity = '1';
  eStart.style.zIndex = '1';

  eStop.style.opacity = '0';
  eStop.style.zIndex = '0';
})

gStart.addEventListener('click', () => {
  [key1, key2, key3, key4, key5, key6] = [true, true, true, true, false, true]

  gStart.style.opacity = '0';
  gStart.style.zIndex = '0';

  gStop.style.opacity = '1';
  gStop.style.zIndex = '1';
})

gStop.addEventListener('click', () => {
  key5 = true;

  gStart.style.opacity = '1';
  gStart.style.zIndex = '1';

  gStop.style.opacity = '0';
  gStop.style.zIndex = '0';
})

rStart.addEventListener('click', () => {
  [key1, key2, key3, key4, key5, key6] = [true, true, true, true, true, false]

  rStart.style.opacity = '0';
  rStart.style.zIndex = '0';

  rStop.style.opacity = '1';
  rStop.style.zIndex = '1';
})

rStop.addEventListener('click', () => {
  key6 = true;

  rStart.style.opacity = '1';
  rStart.style.zIndex = '1';

  rStop.style.opacity = '0';
  rStop.style.zIndex = '0';
})