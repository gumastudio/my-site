const projects = [
  {id:'timely-home-ai',cat:'WEB•APP',title:'Timely AI 홈 개편',year:'2024–2026',ext:'png',
   desc:'배너와 콘텐츠로 채워져 있던 홈을, 사용자가 바로 작업을 시작하는 화면으로 재설계했습니다. 서비스 전체 흐름의 출발점이 되는 홈을 중심으로 UI/UX를 개편하고, 개발자와 함께 신규 기능 흐름을 구체화했습니다.',
   role:'프로덕트 디자인 단독',tools:'Figma · Claude Code · GPT Codex',period:'2024 — 2026',contrib:'디자인 100%',link:'',
   body:`
<section class="case-section reveal">
  <div class="case-head"><h2 class="case-label">overview<span class="dot">.</span></h2></div>
  <div class="case-text">
    <p class="case-lede">배너와 콘텐츠로 채워져 있던 홈 화면을, 사용자가 곧바로 작업을 시작하는 화면으로 재설계했습니다. “홈은 소개하는 곳이 아니라, 시작하는 곳이다”라는 관점에서 출발했습니다.</p>
  </div>
</section>
<section class="case-section reveal">
  <div class="case-head"><h2 class="case-label">context<span class="dot">.</span></h2></div>
  <div class="case-text">
    <p>타임리AI는 프롬프트, 이미지·영상 생성, 문서 변환 같은 업무용 AI 기능을 하나의 플랫폼에서 제공합니다. 서울특별시·한국석유공사·경기도서관·대구공공시설관리공단 등 <b>전국 지자체·공공기관·대학에 도입</b>되어 운영되고 있습니다.</p>
  </div>
</section>
<section class="case-section reveal">
  <div class="case-head"><h2 class="case-label">problem<span class="dot">.</span></h2></div>
  <div class="case-text">
    <p>사용자는 이미 대화형 AI의 사용 관습을 익힌 상태로 들어옵니다. 기존 홈에도 입력창은 있었지만, 문제는 위치가 아니라 <b>무게</b>였습니다. 그 아래로 배너 캐러셀·추천 프롬프트·인기 템플릿·기능 소개가 이어졌고, 화면에서 가장 크게 눈에 띈 것은 배너였습니다. 서비스가 자리 잡으며 사용법을 아는 사용자가 늘자, 배너는 매번 지나쳐야 하는 소음이 됐습니다.</p>
  </div>
</section>
<div class="case-stack reveal">
  <div>
    <h4>Before — 홈 구성</h4>
    <div class="case-bands">
      <div class="case-band use">입력창 <span class="t">사용</span></div>
      <div class="case-band noise tall">배너 캐러셀 <span class="t">소개</span></div>
      <div class="case-band noise">추천 프롬프트 <span class="t">소개</span></div>
      <div class="case-band noise tall">인기 템플릿 <span class="t">소개</span></div>
      <div class="case-band noise">기능 소개 <span class="t">소개</span></div>
    </div>
    <p class="case-note">사용을 위한 영역은 하나, 나머지는 전부 소개를 위한 영역이었습니다.</p>
  </div>
  <div>
    <h4>After — 홈 구성</h4>
    <div class="case-bands">
      <div class="case-band noise">업데이트 소식 <span class="t">소개</span></div>
      <div class="case-band use tall">입력창 <span class="t">사용</span></div>
      <div class="case-band ghost">소개 콘텐츠 → 사이드바로 이동</div>
    </div>
    <p class="case-note">소개 콘텐츠를 삭제한 것이 아니라, 찾아갈 수 있는 곳으로 옮겼습니다.</p>
  </div>
</div>
<section class="case-section reveal">
  <div class="case-head"><h2 class="case-label">approach<span class="dot">.</span></h2></div>
  <div class="case-text">
    <p>처음 온 사람을 설득하는 <b>랜딩</b>과 매일 오는 사람의 <b>작업 시작점</b> — 홈은 두 역할을 겸하고 있었습니다. 방문의 대부분은 후자인데 화면은 전자에 맞춰져 있었죠. 두 역할을 한 화면에서 모두 해내기보다, <b>홈의 역할을 하나로 정하고 나머지를 다른 자리로 옮기는 쪽</b>을 택했습니다.</p>
  </div>
</section>
<div class="case-decisions reveal">
  <div class="case-decision">
    <p class="case-dnum">01</p>
    <h3>홈의 역할을 작업 시작점으로 단일화</h3>
    <p>배너 캐러셀·추천 프롬프트·인기 템플릿·기능 소개를 홈에서 걷어냈습니다. 삭제가 아니라 이동입니다. 템플릿·스토어·Labs는 사이드바로 재배치해 <b>필요할 때 찾아갈 수 있는 구조</b>로 바꾸고, 업데이트 소식만 단일 배너로 남겼습니다.</p>
  </div>
  <div class="case-decision">
    <p class="case-dnum">02</p>
    <h3>상단 가로 메뉴를 좌측 사이드바로 전환</h3>
    <p>가로 GNB는 항목이 늘수록 감당하기 어려웠습니다. 기능이 계속 붙는 제품에선 <b>정보구조를 다시 짜지 않아도 되는 형태</b>가 필요했고, 세로 사이드바는 항목 증가를 견디면서 홈에서 걷어낸 소개 콘텐츠를 받아줄 자리가 됐습니다.</p>
  </div>
  <div class="case-decision">
    <p class="case-dnum">03</p>
    <h3>모델 선택기를 입력창 안으로</h3>
    <p>상단에 단독으로 떠 있던 모델 선택기를 입력창 안으로 옮겨 <b>모델 선택이 발화의 일부가 되도록</b> 했습니다. 무엇으로 답하게 할지를 쓰기 직전에 정하는 것이, 여러 모델을 오가는 제품의 실제 사용 방식에 가까웠습니다.</p>
  </div>
  <div class="case-decision">
    <p class="case-dnum">04</p>
    <h3>비운 자리에 신뢰 고지를</h3>
    <p>배너를 걷어낸 자리를 여백으로 두지 않고, 입력창 안내 문구를 데이터 취급 주의로 바꾸고 그 아래 저장·학습 여부와 답변의 법적 효력에 관한 고지를 배치했습니다. 공공기관이 쓰는 서비스에서 이 정보는 <b>사용을 시작하기 전에 확인되어야 하는 조건</b>입니다.</p>
  </div>
</div>
<div class="case-media case-media--2 reveal">
  <img src="img/case-home-before.png" alt="개편 전 홈 화면" loading="lazy">
  <img src="img/case-home-after.png" alt="개편 후 홈 화면" loading="lazy">
</div>
<p class="case-figcap reveal">입력창을 화면의 중심에 두고, 그 위아래를 비웠습니다.</p>
<div class="case-media case-media--2 reveal">
  <img src="img/case-chat-before.png" alt="개편 전 채팅 화면" loading="lazy">
  <img src="img/case-chat-after.png" alt="개편 후 채팅 화면" loading="lazy">
</div>
<p class="case-figcap reveal">모델 선택기가 상단에서 입력창 내부로 이동했습니다.</p>
<div class="case-pull reveal">
  <p class="p">공간을 비우는 일은 무엇을 지울지가 아니라, 그 자리에 무엇이 와야 하는지를 정하는 일이었습니다.</p>
  <p class="s">가장 눈에 띄던 배너가 있던 자리에, 가장 먼저 읽혀야 할 문장을 놓았습니다.</p>
</div>
<section class="case-section reveal">
  <div class="case-head"><h2 class="case-label">outcome<span class="dot">.</span></h2></div>
  <div class="case-text">
    <ul class="case-outcome">
      <li><b>첫 화면의 목적이 하나가 됐습니다.</b> 도착해서 처음 하는 행동과 화면이 유도하는 행동이 일치하게 됐습니다.</li>
      <li><b>기능 확장을 견디는 내비게이션을 갖췄습니다.</b> 이후 추가된 기능들은 정보구조 변경 없이 사이드바에 편입됐습니다.</li>
      <li><b>공공 도입 환경에 필요한 고지를 첫 화면에 확보했습니다.</b> 별도 안내 페이지 없이 사용 시작 지점에서 전달됩니다.</li>
    </ul>
  </div>
</section>
`},
  {id:'pluvi',cat:'EDITORIAL DESIGN',title:'식물성 단백 브랜드 플루비 카탈로그',year:'2026',ext:'png',
   desc:'식물성 단백 소재 ‘울피아(Wolffia)’를 만드는 플루비의 B2B 홍보물입니다. 2단 접지 리플릿과 8페이지 중철 제본 책자 두 종으로, 원료 특성·공급 형태·품질/안전 정보부터 재배·생산 체계까지 거래처가 한눈에 파악하도록 편집·디자인했습니다.',
   role:'편집디자인 · 인포그래픽 · 인쇄 발주',tools:'InDesign · Illustrator · Photoshop',period:'2026.10',contrib:'구마스튜디오 · 디자인 / 인쇄 발주 전담',link:'',page:'works-pluvi.html'},
  {id:'jbe-proposal',cat:'PROPOSAL',title:'전북교육청 입찰 발표자료',year:'2026',ext:'svg',
   desc:'공공 입찰을 위한 21페이지 발표자료입니다. 핵심 제안 메시지와 근거가 명확히 전달되도록 정보 설계·시각화하고, 일관된 템플릿으로 편집했습니다.',
   role:'Editorial · Presentation',tools:'Figma',period:'2026',contrib:'디자인 100%',link:''},
  {id:'pickme-proposal',cat:'PROPOSAL',title:'온라인 투표 서비스 픽미 사업 제안서',year:'2023',ext:'svg',
   desc:'픽미 서비스의 가치·성과·비전을 담은 15페이지 사업 제안서입니다. 복잡한 정보와 데이터를 한눈에 들어오도록 정보 구조와 시각 자료로 정리해, 설득력 있는 흐름으로 편집했습니다.',
   role:'Editorial · Presentation',tools:'Figma',period:'2023',contrib:'디자인 100%',link:''},
  {id:'starion-iot',cat:'WEB•APP',title:'냉장고 연동 IoT 앱 (iOS · Android)',year:'2025',ext:'svg',
   desc:'가정용 냉장고와 연동되는 IoT 모바일 앱입니다. 기기 상태 확인과 제어 흐름을 중심으로 iOS·Android 양쪽의 UI/UX를 설계했습니다. 외부 개발업체와 협업해 디자인을 전담한 프리랜서 프로젝트입니다.',
   role:'UI/UX (iOS · Android)',tools:'Figma',period:'2025',contrib:'외부 개발사 협업 · 디자인 전담',link:''},
  {id:'pickme',cat:'WEB•APP',title:'온라인 투표 서비스 픽미',year:'2021—2023',ext:'png',
   desc:'코로나19로 대면 투표가 어려운 상황을 해결하기 위해 만들어진 통합 의사결정 플랫폼입니다. 공식 홈페이지·관리자·유권자 페이지를 디자인하며, 누적 투표 유권자 100만 명을 넘는 서비스로 성장하는 과정을 함께했습니다.',
   role:'Logo · UI/UX · Editorial',tools:'Figma · Illustrator · Photoshop',period:'2021.11 — 2023.11',contrib:'10인 팀 (디자인 100%)',link:''},
  {id:'s-stay',cat:'WEB•APP',title:'‘S’사 고급 숙소 예약 플랫폼',year:'2023',ext:'png',
   desc:'고급스러운 무드를 핵심으로 한 숙박 예약 플랫폼입니다. 블랙 메인 컬러와 라운딩 레이아웃으로 차별화하고, 공식 홈페이지·숙박업소 관리자·시스템 관리자 3개 페이지를 개발팀과 조율하며 제작했습니다.',
   role:'UI/UX',tools:'Figma · Illustrator',period:'2023.09 — 2023.11',contrib:'6인 팀 (디자인 100%)',link:''},
  {id:'rainbird',cat:'WEB•APP',title:'재난 알림 앱 레인버드지오',year:'2023',ext:'png',
   desc:'인공위성 데이터 기반으로 아시아-태평양 지역의 기후 리스크를 실시간 알려주는 앱의 리디자인입니다. 외부 기획자·iOS/Android 개발자와 협업하며 더 나은 UX를 찾아간 프로젝트입니다.',
   role:'UI/UX',tools:'Figma · Zeplin · Illustrator',period:'2023.06 — 2023.08',contrib:'4인 팀 (디자인 100%)',link:''},
  {id:'knu-ebook',cat:'EDITORIAL DESIGN',title:'경북대학교 신입생 안내 전자책',year:'2020—2023',ext:'png',
   desc:'매년 초 진행한 경북대학교 신입생용 150p 이상 전자 안내 책자입니다. 일러스트·포토샵 작업부터 인디자인 편집, 전자책 변환까지 전 과정을 도맡았습니다.',
   role:'Editorial',tools:'InDesign · Illustrator',period:'2020.02 — 2023.02',contrib:'1인 (디자인 100%)',link:'https://knupia2.knu.ac.kr/guidebook/#p=1'},
  {id:'silverbook',cat:'BRANDING',title:'어르신을 위한 책 월간실버',year:'2021—2022',ext:'png',
   desc:'집에만 계시던 아픈 외할아버지를 위해 시작한 텀블벅 펀딩 프로젝트입니다. 뇌를 자극하는 놀이로 어르신과 함께할 수 있는 놀이책을 기획·디자인했습니다.',
   role:'Logo · Character · Editorial',tools:'Illustrator · Photoshop · InDesign',period:'2021.12 — 2022.01',contrib:'2인 팀 (디자인 100%)',link:'https://www.tumblbug.com/silverbook'},
  {id:'laplaya',cat:'BRANDING',title:'소녀의 바다, 라플라야',year:'2021',ext:'png',
   desc:'어린 시절의 추억에서 영감을 받아 여성 타겟으로 만든 텀블벅 펀딩 브랜드입니다. 청량한 바다 컨셉과 사랑스러운 캐릭터를 중심으로 로고·캐릭터·굿즈·제품 패키지까지 전개했습니다.',
   role:'Logo · Character · Editorial',tools:'Illustrator · Photoshop',period:'2021.09 — 2021.12',contrib:'2인 팀 (디자인 100%)',link:'https://tumblbug.com/laplaya_summer',
   gallery:['img/laplaya-g1.jpg', ['img/laplaya-g2.jpg','img/laplaya-g3.jpg'], 'img/laplaya-g4.jpg']},
  {id:'lotte',cat:'BRANDING',title:'롯데백화점 혼자볼게요 캐릭터',year:'2021',
   desc:'혼자 쇼핑하는 ‘혼쇼’ 고객을 위한 굿즈(스티커·가방 걸이) 캐릭터를 의뢰받아 제작했습니다. 귀여운 단발머리 소녀로 친근감을 부여했습니다.',
   role:'Character Design',tools:'Illustrator',period:'2021.10',contrib:'1인 (디자인 100%)',link:''},
  {id:'natuur',cat:'WEB•APP',title:'아이스크림 홈페이지 리디자인 나뚜루',year:'2020',
   desc:'프리미엄 아이스크림 브랜드 나뚜루의 홈페이지 리디자인 개인 프로젝트입니다. 기획·디자인뿐 아니라 HTML/CSS로 직접 퍼블리싱까지 구현한 경험이 있습니다.',
   role:'UI/UX · Publishing',tools:'Figma · Illustrator · VS Code',period:'2020.09 — 2020.12',contrib:'1인 개인 (100%)',link:''},
  {id:'wefresh',cat:'WEB•APP',title:'분리수거 앱 리프레시',year:'2019',ext:'png',
   desc:'올바른 분리배출 방법을 익히도록 돕는 개인 프로젝트입니다. 사용자 인터뷰·리서치를 통해 인사이트를 도출하고, 분리배출 인증으로 성취감을 주는 흐름을 설계했습니다.',
   role:'Logo · UI/UX',tools:'Illustrator · Photoshop',period:'2019.08 — 2019.12',contrib:'1인 개인 (100%)',link:''},
  {id:'morningmong',cat:'WEB•APP',title:'알람 앱 모닝몽',year:'2018',
   desc:'알람 소리만 울리는 기존 앱과 달리, 간단한 게임을 통과해야 알람이 멈추는 알람 앱입니다. ‘모닝몽’ 네이밍에 맞춰 귀여운 원숭이 캐릭터를 직접 만들어 적용했습니다.',
   role:'Logo · Character · UI/UX',tools:'Illustrator · Photoshop',period:'2018.08 — 2018.11',contrib:'1인 개인 (100%)',link:''},
  {id:'album',cat:'DIGITAL CONTENTS',title:'앨범 커버 리디자인 비행운',year:'2018',
   desc:'몽환적인 멜로디와 어릴 적 꿈이던 우주 비행사를 모티프로, 포토샵 콜라주 기법을 활용해 노래 주제가 연상되는 앨범 커버를 제작했습니다.',
   role:'Graphic Design',tools:'Illustrator · Photoshop',period:'2018.10',contrib:'1인 (디자인 100%)',link:''},
  {id:'poster',cat:'EDITORIAL DESIGN',title:'장애인종합생활체육대회 포스터',year:'2018',ext:'png',
   desc:'대구장애인체육회 주최 행사의 포스터·대형 현수막·초대장·팜플렛을 제작했습니다. 행사의 목적이 또렷이 드러나도록 댄스 스포츠를 메인 비주얼로 선정했습니다.',
   role:'Editorial',tools:'Illustrator · Photoshop · InDesign',period:'2018.08 — 2018.09',contrib:'1인 (디자인 100%)',link:''},
  {id:'mural',cat:'EDITORIAL DESIGN',title:'벽화 공모전 특선 · 대구 무형문화재',year:'2017',ext:'png',
   desc:'고산농악과 판소리 춘향전을 일러스트로 표현해 무형문화재의 이야기를 전한 벽화 공모전 출품작으로, 특선을 수상했습니다.',
   role:'Editorial · Illustration',tools:'Illustrator · Photoshop',period:'2017.07 — 2017.08',contrib:'2인 팀 (디자인 100%)',link:''},
];

const catLabel={'WEB•APP':'WEB · APP','BRANDING':'BRANDING','DIGITAL CONTENTS':'DIGITAL','MOTION GRAPHIC':'MOTION','EDITORIAL DESIGN':'EDITORIAL','PROPOSAL':'PROPOSAL'};
