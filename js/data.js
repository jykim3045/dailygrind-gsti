const qnaList = [
  {
    q: '[시작과 끝] 스케이트보드 파트의 시작은 역시',
    a: [
      { answer: '시선을 사로잡는 강렬한 시작', score: 1 },
      { answer: '몰입감을 높여주는 잔잔한 시작', score: 2 },
      { answer: '색다른 것도 좋다. 독창적인 시작', score: 3 }
    ]
  },
  {
    q: '[시작과 끝] 스케이트보드 파트의 끝은 역시',
    a: [
      { answer: '시원한 트릭으로 깔끔하게', score: 1 },
      { answer: '재치 있는 비하인드 씬과 크래딧', score: 2 },
      { answer: '깊은 여운이 남는 엔딩', score: 3 }
    ]
  },
  {
    q: '[음악] 귀에 처음 꽂히는 음악은',
    a: [
      { answer: '전자음악', score: 1 },
      { answer: '재즈', score: 2 },
      { answer: '한국 가요', score: 3 },
      { answer: '락/펑크 사운드', score: 4 },
      { answer: '외국 팝', score: 5 },
      { answer: '힙합', score: 6 }
    ]
  },
  {
    q: '[스팟] 이런 스팟에서 타는 걸 보고 싶다',
    a: [
      { answer: '다운, 갭, 렛지, 플랫 - 뭐든 최적인 공원/광장', score: 1 },
      { answer: '눈에 보이는 모든 게 기물. 길거리 스트릿', score: 2 },
      { answer: '오히려 희소가치. 파크/보울', score: 3 }
    ]
  },
  {
    q: '[스팟] 눈에 익은 스팟? 본적 없는 스팟?',
    a: [
      { answer: '여기서 저걸 탄다고? 트릭의 난이도를 느낄 수 있는 익숙한 스팟', score: 1 },
      { answer: '여긴 어디지? 무궁무진한 가능성, 새롭고 독특한 스팟', score: 2 }
    ]
  },
  {
    q: '[트릭] 파트에서 선호하는 트릭 종류는',
    a: [
      { answer: '어마무시한 계단 다운', score: 1 },
      { answer: '미친 속도감 힐밤', score: 2 },
      { answer: '슬래피, 본레스, 월라이드 - 뭐든 창의적인 거', score: 3 },
      { answer: '롱테이크와 끝없는 라인', score: 4 },
      { answer: '그라인드와 슬라이드! 렛지 트릭', score: 5 }
    ]
  },
  {
    q: '[영상] 선호하는 파트 길이는',
    a: [
      { answer: '숏폼이 대세! 짧고 굵게', score: 1 },
      { answer: '적당한 길이. 너무 짧으면 아쉽고 너무 길면 루즈해져', score: 2 },
      { answer: '좋은 건 많을수록 더 좋은 법. 장장익선', score: 3 }
    ]
  },
  {
    q: '[영상] HD vs VX',
    a: [
      { answer: '역시 대세는 HD', score: 1 },
      { answer: '저화질조차 감성이다 VX', score: 2 }
    ]
  },
  {
    q: '[영상] 파트 사이사이에는',
    a: [
      { answer: '예술성을 보여주는 세련된 편집', score: 1 },
      { answer: '눈이 즐거운 컷신과 풍경 등', score: 2 },
      { answer: '위험함과 과감함이! Skate or die', score: 3 },
      { answer: '행인들의 리액션. 싸움이든 응원이든', score: 4 }
    ]
  },
  {
    q: '5가지 섹션 중 포기할 수 없는 건',
    a: [
      { answer: '[시작과 끝]', score: 1 },
      { answer: '[음악]', score: 2 },
      { answer: '[스팟]', score: 3 },
      { answer: '[트릭]', score: 4 },
      { answer: '[영상]', score: 5 }
    ]
  }
]

const infoList = [
  {
    from: 10,
    to: 20,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'LABROS "TAKE ONE"',
    desc: '데일리그라인드 한줄평 : 10대 소년들이 보여주는 새로운 물결과 그 중심에 서 있는 라브로스의 행보.'
  },
  {
    from: 21,
    to: 30,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: '고아림과 친구들의 "DUOL LOUD"',
    desc: '데일리그라인드 한줄평 : 정형화된 스케이트 영상을 벗어나 다양한 시도를 보여주는 고아림의 작품. 신유진의 1인 2역 연기가 일품이다.'
  },
  {
    from: 31,
    to: 40,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'Push Off Skateshop "The Local"',
    desc: '데일리그라인드 한줄평 : 푸쉬오프의 복귀작. 도심과 자연이 어우러진 제주의 스케이팅을 맛볼 수 있다.'
  },
  {
    from: 41,
    to: 50,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: '최종원 "Or"',
    desc: '데일리그라인드 한줄평 : 찰진 팝, 고난도 트릭을 쉬워 보이게끔 하는 최종원의 모습은 미래를 더욱 기대하게 한다.'
  },
  {
    from: 51,
    to: 60,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'DAILY GRIND MONTAGE 009',
    desc: '데일리그라인드 한줄평 : 겨울부터 초여름까지 모은 데일리 그라인드 클립들.'
  },
  {
    from: 61,
    to: 70,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: '정재현의 "SURF!"',
    desc: '데일리그라인드 한줄평 : 정재현이 담은 불꽃 같은 청춘들의 이야기. 그의 마지막 VX 작품이기도 하다.'
  },
  {
    from: 71,
    to: 80,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'Close the Door “Lockpick”',
    desc: '데일리그라인드 한줄평 : 황현우의 독특한 작품 세계. 그 속에서 돋보이는 은주원의 마지막 파트는 그가 범접할 수 없는 탑 스케이터임을 다시 한번 증명한다.'
  },
  {
    from: 81,
    to: 90,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'Timber Shop “Monologue”',
    desc: '팀버샵의 10주년을 기념한 비디오. 한국 영상 최초로 트래셔(Thrasher)에 소개되었다는 점에서 큰 의미를 지닌다.'
  },
  {
    from: 91,
    to: 100,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'Vans “Cabs Lock”',
    desc: '데일리그라인드 한줄평 : 필르머 김동희의 지휘 아래 등장한 새로운 세대는 한국 신에 활력을 불어넣는다. 특히 임현성이 보여준 패기 넘치는 스케이팅에 주목하자.'
  },
  {
    from: 101,
    to: 110,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'Riot Skateshop “Rioters”',
    desc: '데일리그라인드 한줄평 : 라이엇의 화합 속에서 발견한 권민우라는 독보적인 캐릭터.'
  },
  {
    from: 111,
    to: 120,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: 'LMC “Suffer from guilty forever”',
    desc: '데일리그라인드 한줄평 : 박관주와 오재성을 주축으로 한 LMC의 한 해 결과물.'
  },
  {
    from: 121,
    to: 130,
    mLeft: '당신의 2022 최애 스케이트 파트는',
    name: '최호진 “Rush Hour”',
    desc: '데일리그라인드 한줄평 : 빡빡이가 장발이 되기까지, 최호진의 성장기.'
  }
]