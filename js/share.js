const url_ = 'https://jykim3045.github.io/dailygrind-gsti/';
const title = '[GSTI]당신의 최애 2022 국산 스케이트 파트는?';
const hash = '%GSTI %dailygrind ';

const fb = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u='
    + url_ + '&t=' + title + '' + hash,
    'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const tw = () => {
  let name = document.querySelector('.result').innerHTML;
  let url = '';
  switch (name) {
    case 'LABROS "TAKE ONE"':
      url += 'https://www.youtube.com/watch?v=wUbt-pl-2uc&ab_channel=LabrosSeoul';
    case '고아림과 친구들의 "DUOL LOUD"':
      url += 'https://www.youtube.com/watch?v=nhCGMvKLvEs&ab_channel=GoarimGo';
    case 'Push Off Skateshop "The Local"':
      url += 'https://www.youtube.com/watch?v=T9ipvdTXW6M&ab_channel=PUSHOFFSKATESHOP';
    case '최종원 "Or"':
      url += 'https://www.youtube.com/watch?v=nq1Yty3qYpw&ab_channel=kimdonghe';
    case 'DAILY GRIND MONTAGE 009':
      url += 'https://www.youtube.com/watch?v=4lYAAprJOk8';
    case '정재현의 "SURF!"':
      url += 'https://www.youtube.com/watch?v=1EFwHvODb2M';
    case 'Close the Door “Lockpick”':
      url += 'https://www.youtube.com/watch?v=spxd2YjYnoA';
    case 'Timber Shop “Monologue”':
      url += 'https://www.youtube.com/watch?v=svQ_FXyHx0Y';
    case 'Vans “Cabs Lock”':
      url += 'https://www.youtube.com/watch?v=d7kqNZFnFGc';
    case 'Riot Skateshop “Rioters”':
      url += 'https://www.youtube.com/watch?v=45s4-eVjcDk';
    case 'LMC “Suffer from guilty forever”':
      url += 'https://www.youtube.com/watch?v=ocYTFh5zEjc';
    case '최호진 “Rush Hour”':
      url += 'https://www.youtube.com/watch?v=RwDc61WI2RA';
    default:
      url += 'https://www.youtube.com/watch?v=wUbt-pl-2uc&ab_channel=LabrosSeoul';
  }
  window.open(url,
    'youtubevideo', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const nv = () => {
  window.open('http://share.naver.com/web/shareView.nhn?url='
    + url_ + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}
const band = () => {
  window.open('https://band.us/plugin/share?url='
    + url_ + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}