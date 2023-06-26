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