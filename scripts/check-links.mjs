import fs from 'node:fs/promises';
const links=[
 ['calendar','https://www.jbe.go.kr/schedule/list.jbe?boardId=BBS_0000084&menuCd=DOM_000000106002001000&contentsSid=335&cpath='],['admin-guide','https://www.jbe.go.kr/board/list.jbe?boardId=BBS_0000085&menuCd=DOM_000000106002002000&contentsSid=336&cpath='],['accounting','https://www.jbe.go.kr/board/list.jbe?boardId=BBS_0000086&menuCd=DOM_000000106002003000&contentsSid=337&cpath='],['school-establish','https://www.jbe.go.kr/board/list.jbe?boardId=BBS_0000087&menuCd=DOM_000000106002004000&contentsSid=338&cpath='],['manual','https://www.jbe.go.kr/board/list.jbe?boardId=BBS_0000010&menuCd=DOM_000000106005000000&contentsSid=346&cpath='],
 ...[['704'],['705'],['706'],['707'],['708'],['709'],['710'],['711'],['712'],['713'],['714'],['715'],['716'],['717'],['718'],['719'],['702']].map(([c])=>[`dept-${c}`,`https://www.jbe.go.kr/office/index.jbe?menuCd=DOM_000000${c}000000000`])
];
const old=JSON.parse(await fs.readFile('link-status.json','utf8').catch(()=>'{"failures":{}}'));const failures=old.failures||{};const inactive=[];
for(const [id,url] of links){try{const r=await fetch(url,{redirect:'follow',headers:{'user-agent':'Mozilla/5.0 oper-link-check/1.0'},signal:AbortSignal.timeout(20000)});if(r.ok){failures[id]=0}else failures[id]=(failures[id]||0)+1}catch{failures[id]=(failures[id]||0)+1}if(failures[id]>=3)inactive.push(id)}
await fs.writeFile('link-status.json',JSON.stringify({checkedAt:new Date().toISOString(),inactive,failures},null,2)+'\n');
