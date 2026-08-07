const OFFICIAL={
 guide:'https://www.jbe.go.kr/board/list.jbe?boardId=BBS_0000085&menuCd=DOM_000000106002002000&contentsSid=336&cpath=',
 manual:'https://www.jbe.go.kr/board/list.jbe?boardId=BBS_0000010&menuCd=DOM_000000106005000000&contentsSid=346&cpath=',
 budget:'https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000707000000000',
 finance:'https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000717000000000',
 hr:'https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000715000000000',
 labor:'https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000718000000000',
 facility:'https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000719000000000',
 safety:'https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000706000000000',
 audit:'https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000702000000000'
};
const common={
 resources:[['행정업무 길라잡이',OFFICIAL.guide],['전북교육청 업무매뉴얼',OFFICIAL.manual]],
 step:(title,summary,type='do',todo=[],docs=[],check='처리 결과와 결재 상태를 확인합니다.')=>({title,summary,type,todo,docs,check})
};
const areas=[
 {id:'people',icon:'♙',name:'인사·복무',desc:'인사, 복무, 급여와 교육공무직 업무',works:[
  {name:'복무 관리',desc:'근무상황 신청부터 승인·기록까지',resources:[['총무과 공식자료',OFFICIAL.hr]],steps:[
   common.step('적용 기준 확인','복무 종류와 적용 규정을 먼저 확인','check',['대상자의 신분과 복무 유형 확인','기관 내부 위임전결 기준 확인'],['관련 복무 규정','기관별 복무 처리 기준'],'적용할 복무 유형과 승인권자가 확정됩니다.'),
   common.step('신청 내용 작성','기간·사유·근무상황을 등록','do',['나이스 등 업무시스템에서 근무상황 입력','필요한 증빙자료 첨부'],['신청서','증빙자료'],'신청 기간과 실제 근무일이 일치합니다.'),
   common.step('업무 공백 검토','대체업무와 수업·행정 공백 확인','check',['업무 인계 여부 확인','복무 중 연락체계 확인'],['업무 인계서'],'업무 공백에 대한 조치가 마련됩니다.'),
   common.step('결재 및 승인','결재권자가 적정성을 확인','approve',['결재선에 따라 상신','보완 요청 시 수정 후 재상신'],['전자결재 문서'],'최종 승인 상태를 확인합니다.'),
   common.step('대장·기록 확인','승인 결과가 기록에 반영되었는지 확인','check',['복무 대장 반영 확인','변경·취소 사항 즉시 정정'],['복무 대장'],'시스템과 관련 대장의 기록이 일치합니다.')
  ]},
  {name:'급여 지급',desc:'변동자료 수집부터 지급 결과 확인까지',resources:[['총무과 공식자료',OFFICIAL.hr],['노사협력과 공식자료',OFFICIAL.labor]],steps:[
   common.step('지급 대상 확인','재직·휴직·전출입 등 인사변동 확인','check',['기준일 현재 재직 상태 확인','신규·퇴직·휴직자 목록 정리'],['인사발령 자료','급여 대상자 명단']),
   common.step('변동자료 수집','수당·공제·시간외 등 변동사항 취합','do',['부서별 변동자료 제출 요청','증빙과 입력값 대조'],['수당 신청서','공제 자료']),
   common.step('급여 산정·검증','지급액과 공제액을 교차 검토','check',['전월 대비 증감 확인','개인별 지급·공제 내역 검증'],['급여 산출내역','전월 급여대장']),
   common.step('지급 결재','급여대장과 지급자료 승인','approve',['지급 품의 및 결재','계좌 이체자료 확정'],['급여대장','지급결의 자료']),
   common.step('지급·사후 확인','이체 결과와 오류 건을 확인','check',['이체 결과 조회','반송·오류 건 정정'],['이체 결과','급여명세서'])
  ]}
 ]},
 {id:'budget',icon:'₩',name:'예산·지출',desc:'예산 편성, 지출과 결산의 핵심 흐름',works:[
  {name:'예산 편성',desc:'요구자료 수집부터 예산 확정까지',resources:[['예산과 공식자료',OFFICIAL.budget],['행정업무 길라잡이',OFFICIAL.guide]],steps:[
   common.step('편성 기준 확인','회계연도 지침과 일정을 확인','check',['최신 예산편성 지침 확인','기관 편성 일정 수립'],['예산편성 기본지침','예산 일정표']),
   common.step('사업 요구 수합','부서별 사업계획과 요구액 취합','do',['요구서 제출 안내','목적·산출근거·재원 확인'],['사업계획서','예산요구서']),
   common.step('요구액 검토·조정','필요성·우선순위와 과목 적정성 검토','check',['중복사업 확인','세입 전망과 재원 범위 검토'],['검토조서','세입 추계']),
   common.step('예산안 작성','과목별 예산안을 작성','do',['세입·세출 예산안 입력','산출기초와 설명자료 정리'],['예산안','산출기초']),
   common.step('심의·확정','위원회 심의와 최종 결재','approve',['심의자료 제출','의결 결과 반영 및 확정'],['심의자료','회의록'],'확정 예산과 시스템 입력액이 일치합니다.')
  ]},
  {name:'일반 지출',desc:'원인행위부터 지급·장부 확인까지',resources:[['재무과 공식자료',OFFICIAL.finance],['업무매뉴얼',OFFICIAL.manual]],steps:[
   common.step('예산·집행 기준 확인','예산 잔액과 집행 가능 여부 확인','check',['예산 과목·잔액 확인','집행 제한 및 사전절차 확인'],['사업계획','예산현액 자료']),
   common.step('품의·원인행위','집행 목적과 금액을 확정','do',['품의 작성','채권자·계좌·증빙 확인'],['품의서','견적·계약 자료']),
   common.step('검수·지출결의','이행 결과와 청구 내용을 검토','check',['검수 또는 검사 완료','세금계산서·청구서 대조'],['검수조서','청구서','세금계산서']),
   common.step('지급명령·결재','지급자료를 최종 승인','approve',['지출결의 결재','지급명령 처리'],['지출결의서','지급명령 자료']),
   common.step('이체·장부 확인','지급 결과와 회계장부 반영 확인','check',['이체 성공 여부 확인','증빙 편철·장부 대조'],['이체 결과','회계장부'])
  ]}
 ]},
 {id:'contract',icon:'▤',name:'계약·물품',desc:'구매, 계약, 검수와 물품 관리',works:[
  {name:'물품 구매',desc:'구매 계획부터 물품 등록까지',resources:[['재무과 공식자료',OFFICIAL.finance]],steps:[
   common.step('구매 필요성 검토','수요·재고·예산을 확인','check',['보유 재고와 대체 가능성 확인','예산 과목 및 잔액 확인'],['물품 수요조사','재고 현황']),
   common.step('구매 방식 결정','금액과 품목에 맞는 계약방법 선택','check',['추정가격 산정','경쟁·수의 등 적용 방식 검토'],['견적서','산출내역']),
   common.step('품의·계약 처리','구매 품의와 계약 절차 진행','do',['구매 품의 결재','업체 선정 및 계약'],['품의서','계약서']),
   common.step('납품·검수','규격·수량·상태를 확인','check',['납품서와 현품 대조','검수 결과 기록'],['납품서','검수조서']),
   common.step('지급·물품 등록','대금 지급과 관리대장 등록','approve',['지출결의 및 지급','관리대상 물품 등재'],['지출증빙','물품대장'])
  ]},
  {name:'공사·용역 계약',desc:'계획부터 준공·대금 지급까지',resources:[['재무과 공식자료',OFFICIAL.finance],['시설과 공식자료',OFFICIAL.facility]],steps:[
   common.step('사업 범위 확정','과업·공사 범위와 예산 확인','check',['현장과 요구조건 확인','설계·과업 내용 검토'],['과업지시서','설계서']),
   common.step('계약 방법 검토','금액·기간·자격요건에 맞는 방법 결정','check',['관련 법령과 계약 기준 검토','입찰·수의계약 요건 확인'],['계약 검토서']),
   common.step('공고·계약 체결','상대자를 선정하고 계약','do',['공고 또는 견적 요청','계약보증·필수서류 확인'],['입찰서류','계약서']),
   common.step('이행 관리','착수부터 완료까지 감독','do',['착수서류 확인','과업·공정과 변경사항 관리'],['착수계','감독 기록']),
   common.step('검사·대금 지급','완료 검사 후 대금 정산','approve',['완료·준공검사','하자·보험·세금 서류 확인 후 지급'],['완료계','검사조서','청구서'])
  ]}
 ]},
 {id:'asset',icon:'⌂',name:'재산·시설',desc:'재산, 시설공사와 유지관리 업무',works:[
  {name:'시설 유지보수',desc:'점검·계획·공사·사후관리 흐름',resources:[['시설과 공식자료',OFFICIAL.facility],['학교안전과 공식자료',OFFICIAL.safety]],steps:[
   common.step('현장 상태 점검','결함 위치와 위험도를 확인','check',['사진·치수·사용상태 기록','긴급 통제 필요성 판단'],['점검표','현장사진']),
   common.step('보수 범위·예산 검토','공법과 예상비용을 검토','check',['보수 범위와 우선순위 결정','예산 확보 여부 확인'],['보수계획','견적서']),
   common.step('발주·시공 관리','계약 후 안전하게 시공','do',['공사 일정·안전조치 협의','공정과 품질 확인'],['계약서','공사일지']),
   common.step('준공 검사','완료 상태와 계약 이행 확인','approve',['현장 검사','미비사항 보완 확인'],['준공계','검사조서']),
   common.step('하자·이력 관리','보수 결과와 하자기간 기록','check',['시설 이력대장 반영','하자보수 보증 관리'],['시설대장','하자보증서'])
  ]},
  {name:'공유재산 관리',desc:'취득·사용·처분과 대장 관리',resources:[['재무과 공식자료',OFFICIAL.finance]],steps:[
   common.step('재산 현황 확인','권리·면적·사용상태 확인','check',['등기·대장과 현장 대조','무단사용·변동 여부 확인'],['등기사항','재산대장']),
   common.step('관리 계획 수립','취득·사용·처분 필요성 검토','do',['관련 부서 의견 수렴','가격·활용계획 검토'],['관리계획안']),
   common.step('심의·승인','필요한 심의와 결재 진행','approve',['공유재산 절차 확인','심의·의결 결과 반영'],['심의자료','의결서']),
   common.step('계약·등기 처리','승인 결과에 따라 권리 변동 처리','do',['계약 체결','등기·공부 정리'],['계약서','등기서류']),
   common.step('대장·현장 정비','시스템과 현장 표시를 갱신','check',['재산대장 반영','정기 실태조사 대상 관리'],['재산대장'])
  ]}
 ]},
 {id:'school',icon:'⌘',name:'학교운영',desc:'위원회, 기록물과 민원·정보공개',works:[
  {name:'학교운영위원회',desc:'안건 접수부터 회의 결과 공개까지',resources:[['행정업무 길라잡이',OFFICIAL.guide]],steps:[
   common.step('심의 안건 확인','법정 심의 대상과 제출기한 확인','check',['안건별 근거와 제출부서 확인','회의 일정 역산'],['안건 제출서']),
   common.step('안건 접수·검토','제안 내용과 첨부자료 검토','do',['안건 번호 부여','보완사항 요청'],['제안서','관련 자료']),
   common.step('회의 소집·공고','일시·장소·안건을 안내','do',['위원에게 소집 통지','공고와 방청 안내'],['소집통지서','공고문']),
   common.step('회의·의결','정족수 확인 후 심의·의결','approve',['출석과 제척 여부 확인','의결 결과 기록'],['회의록','의결서']),
   common.step('결과 통보·공개','의결 결과를 반영하고 공개','check',['관련 부서에 결과 통보','회의록 공개 범위 검토'],['결과 통보서','공개 회의록'])
  ]},
  {name:'정보공개 청구',desc:'접수부터 공개·비공개 결정까지',resources:[['총무과 공식자료',OFFICIAL.hr]],steps:[
   common.step('청구 접수','청구 내용과 대상 정보를 확인','do',['청구 범위·연락처 확인','담당 부서 배부'],['정보공개 청구서']),
   common.step('보유 정보 검색','대상 문서와 보유 여부 확인','check',['문서·시스템 검색','타 기관 이송 여부 검토'],['대상 문서']),
   common.step('공개 여부 검토','법정 비공개 사유와 제3자 정보를 검토','check',['부분공개 가능성 검토','필요 시 제3자 의견 청취'],['비공개 검토표']),
   common.step('결정·결재','공개·부분공개·비공개 결정','approve',['결정통지서 작성','처리기한 내 결재'],['결정통지서']),
   common.step('공개·기록 관리','수수료와 공개 방법을 안내','do',['정보 제공','처리 결과와 이의절차 안내'],['공개 자료','처리 기록'])
  ]}
 ]},
 {id:'safety',icon:'△',name:'안전·감사',desc:'안전점검, 사고 대응과 감사 준비',works:[
  {name:'안전사고 대응',desc:'초동조치부터 보고·재발방지까지',resources:[['학교안전과 공식자료',OFFICIAL.safety]],steps:[
   common.step('인명 보호·현장 통제','응급조치와 추가 위험 차단','do',['119 등 긴급 연락','위험구역 통제와 인원 파악'],['비상연락망']),
   common.step('상황 파악','사고 시각·장소·피해를 확인','check',['사실관계와 목격자 확인','사진 등 객관 자료 확보'],['사고 기록','현장사진']),
   common.step('보고·연락','보고체계에 따라 신속히 알림','approve',['기관장과 교육청 보고','보호자 등 관계자 연락'],['사고 보고서']),
   common.step('후속 조치','치료·복구·보험 등 처리','do',['피해자 지원','시설 복구와 행정처리'],['진료·보험 자료']),
   common.step('원인 분석·재발 방지','개선대책을 수립하고 이행 확인','check',['원인과 대응과정 분석','교육·시설 개선 실시'],['재발방지 계획'])
  ]},
  {name:'감사 준비',desc:'대상업무 점검부터 후속조치까지',resources:[['감사관 공식자료',OFFICIAL.audit]],steps:[
   common.step('감사 범위 확인','기간·대상·요구자료를 확인','check',['감사계획과 대상 기간 확인','업무별 담당자 지정'],['감사계획','자료 요구목록']),
   common.step('자료 수집·정리','원본 증빙과 시스템 자료 정리','do',['목록별 자료 취합','개인정보·보안사항 점검'],['업무대장','증빙서류']),
   common.step('자체 점검','규정·결재·증빙의 일치 여부 검토','check',['누락·오류 확인','사실관계와 경위 정리'],['자체점검표']),
   common.step('감사 대응','요구자료 제출과 질문에 사실대로 답변','approve',['제출 이력 관리','추가자료 신속 보완'],['제출자료 목록']),
   common.step('결과 조치','지적사항을 처리하고 재발 방지','do',['처분 요구 이행','제도·절차 개선과 결과 보고'],['조치결과 보고서'])
  ]}
 ]}
];
areas.forEach(a=>a.works.forEach(w=>{w.resources=[...common.resources,...(w.resources||[])];w.steps.forEach((s,i)=>{s.area=a.name;s.work=w.name;s.no=i+1})}));
const areaGrid=document.querySelector('#areaGrid'),workspace=document.querySelector('#workspace'),areaSection=document.querySelector('#areaSection'),intro=document.querySelector('.map-intro'),searchResults=document.querySelector('#searchResults');
let currentArea=null,currentWork=null;
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderAreas(){areaGrid.innerHTML=areas.map(a=>`<button class="area-card" data-area="${a.id}"><span class="area-icon">${a.icon}</span><h3>${a.name}</h3><p>${a.desc}</p><small>${a.works.length}개 업무 →</small></button>`).join('');areaGrid.querySelectorAll('button').forEach(b=>b.onclick=()=>openArea(b.dataset.area))}
function openArea(id,workIndex=0){currentArea=areas.find(a=>a.id===id);currentWork=currentArea.works[workIndex];areaSection.hidden=true;intro.hidden=true;searchResults.hidden=true;workspace.hidden=false;document.querySelector('#areaName').textContent=currentArea.name;document.querySelector('#workTitle').textContent=currentWork.name;document.querySelector('#workDesc').textContent=currentWork.desc;renderTabs();renderWork();scrollTo({top:0,behavior:'smooth'})}
function renderTabs(){const tabs=document.querySelector('#workTabs');tabs.innerHTML=currentArea.works.map((w,i)=>`<button class="${w===currentWork?'active':''}" role="tab" data-index="${i}">${esc(w.name)}</button>`).join('');tabs.querySelectorAll('button').forEach(b=>b.onclick=()=>{currentWork=currentArea.works[+b.dataset.index];document.querySelector('#workTitle').textContent=currentWork.name;document.querySelector('#workDesc').textContent=currentWork.desc;renderTabs();renderWork()})}
function renderWork(){const flow=document.querySelector('#flowList');flow.innerHTML=currentWork.steps.map((s,i)=>`${i?'<div class="flow-arrow"></div>':''}<button class="step-card" data-step="${i}" data-type="${s.type}"><span class="step-num">${String(i+1).padStart(2,'0')}</span><span><b>${esc(s.title)}</b><small>${esc(s.summary)}</small></span><i>›</i></button>`).join('');flow.querySelectorAll('button').forEach(b=>b.onclick=()=>showStep(+b.dataset.step));const unique=[...new Map(currentWork.resources.map(r=>[r[1],r])).values()];document.querySelector('#resourceCount').textContent=unique.length;document.querySelector('#resourceList').innerHTML=unique.map(r=>`<a class="resource-link" href="${r[1]}" target="_blank" rel="noopener"><span><small>전북교육청 공식자료</small><b>${esc(r[0])}</b></span><i>↗</i></a>`).join('');document.querySelector('#detailPanel').innerHTML='<div class="detail-empty"><span>☞</span><b>단계를 선택하세요</b><p>해야 할 일, 준비자료와 완료 확인사항을 볼 수 있습니다.</p></div>'}
function showStep(i){const s=currentWork.steps[i];document.querySelectorAll('.step-card').forEach((b,n)=>b.classList.toggle('active',n===i));document.querySelector('#detailPanel').innerHTML=`<article class="detail-content"><header><small>STEP ${String(i+1).padStart(2,'0')} · ${s.type==='approve'?'승인':s.type==='check'?'확인':'처리'}</small><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p></header><div><section class="detail-block"><h4>해야 할 일</h4><ul>${s.todo.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><section class="detail-block"><h4>준비자료</h4><p>${s.docs.map(esc).join(' · ')}</p></section><section class="detail-block"><h4>완료 확인</h4><p class="complete">${esc(s.check)}</p></section></div></article>`;if(innerWidth<900)document.querySelector('#detailPanel').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelector('#backButton').onclick=()=>{workspace.hidden=true;areaSection.hidden=false;intro.hidden=false;scrollTo({top:0,behavior:'smooth'})};
document.querySelector('#resourceButton').onclick=()=>document.querySelector('#related').scrollIntoView({behavior:'smooth'});
const searchInput=document.querySelector('#searchInput');
function runSearch(){const q=searchInput.value.trim().toLowerCase();document.querySelector('#clearSearch').style.visibility=q?'visible':'hidden';if(!q){searchResults.hidden=true;if(workspace.hidden){areaSection.hidden=false;intro.hidden=false}return}workspace.hidden=true;areaSection.hidden=true;intro.hidden=true;searchResults.hidden=false;const found=[];areas.forEach(a=>a.works.forEach((w,wi)=>w.steps.forEach(s=>{if(`${a.name} ${w.name} ${w.desc} ${s.title} ${s.summary} ${s.todo.join(' ')}`.toLowerCase().includes(q))found.push({a,w,wi,s})})));document.querySelector('#searchCount').textContent=found.length;document.querySelector('#searchList').innerHTML=found.length?found.map((x,i)=>`<button class="search-item" data-i="${i}"><span>${esc(x.a.name)} · ${esc(x.w.name)}</span><b>${esc(x.s.title)}</b><small>${esc(x.s.summary)} →</small></button>`).join(''):'<p class="detail-empty">검색 결과가 없습니다. 다른 검색어를 입력해 주세요.</p>';document.querySelectorAll('.search-item').forEach((b,i)=>b.onclick=()=>{const x=found[i];openArea(x.a.id,x.wi);setTimeout(()=>showStep(x.s.no-1),0)})}
searchInput.oninput=runSearch;document.querySelector('#clearSearch').onclick=()=>{searchInput.value='';runSearch();searchInput.focus()};
document.querySelector('#themeButton').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('workflowTheme',document.body.classList.contains('dark')?'dark':'light')};if(localStorage.getItem('workflowTheme')==='dark')document.body.classList.add('dark');
const dialog=document.querySelector('#helpDialog');document.querySelector('#helpButton').onclick=()=>dialog.showModal();document.querySelector('#closeHelp').onclick=()=>dialog.close();document.querySelector('#startButton').onclick=()=>dialog.close();
renderAreas();
