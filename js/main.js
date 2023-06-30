const header = document.getElementById('header');
const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 9;
const select = [];
let qIdx = -1;

const goTo = (dest) => {
  let elem;
  let elemTop;
  if (dest === 'artist') {
    elem = document.getElementById('intro-box');
  } else {
    elem = document.getElementById('share-box');
  }
  elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
  if (pcMQL.matches) {
    elemTop -= 150;
  } else if (tabletMQL.matches) {
    elemTop -= 115;
  } else {
    elemTop -= 60;
  }
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elemTop
  });
}
const goArtist = () => goTo('artist');
const goShare = () => goTo('share');

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = "https://dailygrind-gsti.netlify.app/";
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}

/*
const calcScore = () => {
  let point = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point += qnaList[i].a[select[i]].score;
  }
  return point;
}
*/

const calcScore = () => {
  let point = [];
  for (let i = 0; i < ENDPOINT; i++) {
    point[i] = qnaList[i].a[select[i]].score;
  }
  return point;
}

const calcLastScore = () => {
  let point = 0;
  point += qnaList[9].a[select[9]].score;
  return point;
}

const sortResult = (point) => {
  const v1 = [1,1,4,1,1,1,2,1,3];
  const v2 = [3,3,3,2,2,3,3,2,1];
  const v3 = [2,1,5,1,1,5,2,2,4];
  const v4 = [3,2,4,1,1,5,1,2,2];
  const v5 = [1,1,1,1,1,1,1,1,2];
  const v6 = [2,2,4,1,2,2,3,2,2];
  const v7 = [2,1,2,2,2,5,3,2,1];
  const v8 = [3,2,3,1,2,5,3,1,4];
  const v9 = [1,2,4,1,1,1,2,2,3];
  const v10 = [3,2,6,1,2,5,2,1,2];
  const v11 = [3,2,1,1,1,4,2,1,3];
  const v12 = [1,3,3,1,1,1,1,2,1];
  const vids = [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12];
  const lastP = calcLastScore();

  let matches = 0;
  let match_vid = 0;

  let num1 = 15;
  let num2 = 15;
  let num3 = 15;
  if (lastP == 1) {
    num1 = 0;
    num2 = 1;
  } else if (lastP == 2) {
    num1 = 2;
  } else if (lastP == 3) {
    num1 = 3;
    num2 = 4;
  } else if (lastP == 4) {
    num1 = 5;
  } else {
    num1 = 6;
    num2 = 7;
    num3 = 8;
  }

  for (let i = 0; i < vids.length; i++){
    const indexes = [];
    const vid = vids[i];
    for (let j = 0; j < vid.length; j++) {
      if (vid[j] == point[j]) {
        indexes.push(j);
      }
    }

    if (indexes.includes(num1)) {
      indexes.push(num1);
      indexes.push(num1);
    } else if (indexes.includes(num2)) {
      indexes.push(num2);
      indexes.push(num2);
    } else if (indexes.includes(num3)) {
      indexes.push(num3);
      indexes.push(num3);
    }

    if (indexes.length > matches) {
      matches = indexes.length;
      match_vid = i;
    }
  }

  return match_vid;
}

const goResult = () => {
  if (pcMQL.matches) {
    console.log('PC');
    wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    console.log('tablet');
    wrap.style.marginTop = '115px';
  }

  const result = document.getElementById('result');
  const point = calcScore();
  const grade = sortResult(point);
  const pTitle = document.querySelector('.p');
  const img_url = 'img/image-' + grade + '.png';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const animal = document.querySelector('.result');
  const desc = document.querySelector('.res');

  pTitle.innerHTML = infoList[grade].mLeft;
  res_img.src = img_url;
  res_img.alt = infoList[grade].name;
  res_img.title = infoList[grade].name;
  res_img_div.appendChild(res_img);
  animal.innerHTML = infoList[grade].name;
  desc.innerHTML = infoList[grade].desc;


  setTimeout(() => {
    header.style.display = 'block';
    footer.style.display = 'block';
    result.style.display = 'block';
    header.style.animation =
      'fade-in 0.3s forwards';
    footer.style.animation =
      'fade-in 0.3s forwards';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    const calc = document.getElementById('calc');
    calc.style.display = 'block';
    calc.style.animation =
      'going-up 0.5s forwards, ' +
      'fade-in 0.5s forwards';
  }, 700);
  setTimeout(() => {
    calc.style.animation = '';
    calc.style.animation =
      'going-left 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      calc.style.display = 'none';
      goResult();
    }, 400);
  }, 9000);
}

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;
  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');
      goNext();
    }, 800);
  });

  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}


const goNext = () => {
  if (qIdx++ === qnaList.length - 1) {
    end();
    return;
  }

  const status = document.querySelector('.status');
  const qNum = qnaList[qIdx];
  const q = document.querySelector('.q');

  status.style.width = (ENDPOINT * (qIdx + 1)) + '%';
  q.innerHTML = qNum.q;
  qna.style.animation =
    'fade-in 0.3s ease-in-out 0.4s forwards, ' +
    'going-down 0.3s ease-in-out 0.4s forwards';

  setTimeout(() => {
    const endIdx = qNum.a.length - 1;
    for (let i in qNum.a) {
      addAnswer(qNum.a[i].answer, i);
    }
    qna.style.opacity = 1;
  }, 700);
}

const begin = () => {
  const welcome = document.getElementById('welcome');
  header.style.animation =
    'going-up 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  footer.style.animation =
    'going-down 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  setTimeout(() => welcome.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards', 500);
  setTimeout(() => {
    header.style.display = 'none';
    footer.style.display = 'none';
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      console.log('tablet');
      wrap.style.marginTop = '30px';
    }
    goNext();
  }, 1000);
}

const load = () => {
  const start_btn = document.querySelector('.start');

  start_btn.addEventListener('click', () => {
    start_btn.disabled = true;
    begin();
  });

}

window.onload = load();