<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>드림포인트</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

<script>
const CONFIG = {
  // 알려주신 앱스 스크립트 웹 앱 URL 적용 완료
  API_URL: "https://script.google.com/macros/s/AKfycbyr50MdCmhRK5f8AEDLzpcIM9CUREkkhfCpvUnTih0jdYoGwmT4geuNE6kvv5nTbqFJ/exec", 
  
  ADMIN_ID: "admin",
  ADMIN_PW: "admin1234",
  SYSTEM_NAME: "드림포인트",
  SYSTEM_SUBTITLE: "학생 상벌점 관리 시스템",
  THEME: {
    primary: "#1e40af", // Classy Navy Blue
    success: "#16a34a", 
    danger: "#dc2626"   
  },
  REWARD_ITEMS: [
    { label: "학습 태도 우수", value: "학습 태도 우수", score: 2, limit: 10 },
    { label: "복장 및 인사 예절", value: "복장 및 인사 예절", score: 1, limit: 5 },
    { label: "환경 정리 정돈 모범", value: "환경 정리 정돈 모범", score: 1, limit: 5 }
  ],
  PENALTY_ITEMS: [
    { label: "무단 지각/결석", value: "무단 지각/결석", score: -2 },
    { label: "수업 방해", value: "수업 방해", score: -2 },
    { label: "교칙 위반", value: "교칙 위반", score: -3 }
  ]
};
</script>
<style>
/* ─── 디자인 및 레이아웃 CSS ─── */
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html{-webkit-text-size-adjust:100%}
body{font-family:'Noto Sans KR',sans-serif;background:#f0f4ff;color:#1e293b;min-height:100vh}

:root{--p:#1e40af;--ok:#16a34a;--ng:#dc2626;--mu:#64748b;--bd:#e2e8f0;--bg:#f0f4ff}

/* 로그인 화면 */
#LS{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;
    background:linear-gradient(135deg,#1e40af,#3b82f6)}
.lbox{background:#fff;border-radius:20px;padding:30px 24px;width:100%;max-width:340px;
      box-shadow:0 20px 60px rgba(0,0,0,.2);animation:up .3s ease}
.llogo{text-align:center;margin-bottom:16px;cursor:pointer;user-select:none}
.llogo .ico{font-size:2rem;display:block;margin-bottom:3px}
.llogo h1{font-size:1.25rem;font-weight:900;color:var(--p)}
.llogo p{font-size:.7rem;color:var(--mu);margin-top:1px}
.rtabs{display:flex;gap:4px;background:var(--bg);border-radius:9px;padding:3px;margin-bottom:12px}
.rtab{flex:1;padding:8px 4px;text-align:center;border-radius:7px;font-size:.74rem;font-weight:700;
      color:var(--mu);border:none;background:transparent;cursor:pointer;font-family:inherit;transition:all .12s}
.rtab.on{background:#fff;color:var(--p);box-shadow:0 1px 5px rgba(0,0,0,.08)}
#aBtn{display:none;width:100%;padding:8px;margin-bottom:10px;background:#eff6ff;color:var(--p);
      border:1.5px solid #bfdbfe;border-radius:7px;font-size:.76rem;font-weight:700;font-family:inherit;cursor:pointer}
.fg{margin-bottom:10px}
.fg label{font-size:.7rem;font-weight:700;color:var(--mu);display:block;margin-bottom:3px}
.fg input,.fg select{width:100%;height:44px;border:1.5px solid var(--bd);border-radius:8px;padding:0 12px;
          font-size:16px;font-family:inherit;outline:none;transition:border-color .12s;background:#fff}
.fg input:focus,.fg select:focus{border-color:var(--p)}
.bpri{width:100%;height:46px;background:var(--p);color:#fff;border:none;border-radius:9px;
      font-size:.93rem;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity .12s}
.bpri:active{opacity:.85}

#pwOv{display:none;position:fixed;inset:0;background:rgba(30,64,175,.93);z-index:900;
      align-items:center;justify-content:center;padding:20px}
#pwOv.on{display:flex}
.pwbox{background:#fff;border-radius:16px;padding:26px 20px;width:100%;max-width:320px}
.pwbox h2{font-size:.95rem;font-weight:900;margin-bottom:4px}
.pwbox p{font-size:.74rem;color:var(--mu);margin-bottom:14px}

/* 앱 전체 레이아웃 */
#APP{display:none;flex-direction:column;min-height:100vh}
#APP.on{display:flex}
.hdr{height:48px;background:#fff;border-bottom:1px solid var(--bd);display:flex;align-items:center;
     justify-content:space-between;padding:0 14px;flex-shrink:0;position:sticky;top:0;z-index:300;
     box-shadow:0 1px 4px rgba(0,0,0,.05)}
.hdr-logo{font-size:.88rem;font-weight:900;color:var(--p)}
.hdr-r{display:flex;align-items:center;gap:6px}
.badge{background:var(--bg);border-radius:13px;padding:3px 9px;font-size:.68rem;font-weight:700;
       color:var(--p);max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.blg{background:none;border:1.5px solid var(--bd);border-radius:6px;padding:3px 8px;
     font-size:.65rem;font-weight:700;color:var(--mu);cursor:pointer;font-family:inherit}

.tabbar{display:flex;gap:4px;padding:7px 12px;background:#fff;border-bottom:1px solid var(--bd);
        flex-shrink:0;overflow-x:auto;-webkit-overflow-scrolling:touch}
.tabbar::-webkit-scrollbar{display:none}
.titem{padding:5px 14px;border-radius:18px;border:1.5px solid var(--bd);background:#fff;
       font-size:.72rem;font-weight:700;color:var(--mu);cursor:pointer;font-family:inherit;
       white-space:nowrap;transition:all .11s;flex-shrink:0}
.titem.on{background:var(--p);border-color:var(--p);color:#fff}

.bwrap{display:flex;flex:1;overflow:hidden}
.snav{display:none}
.mc{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}

@media(min-width:900px){
  .snav{display:flex;flex-direction:column;width:156px;background:#fff;
        border-right:1px solid var(--bd);padding:10px 8px;gap:2px;flex-shrink:0}
  .snav .titem{border:none;background:transparent;border-radius:8px;
               padding:9px 11px;font-size:.78rem;display:flex;align-items:center;gap:6px;text-align:left}
  .snav .titem.on,.snav .titem:hover{background:var(--bg);color:var(--p)}
  .tabbar{display:none}
  .mc{padding:16px 18px}
}

.view{display:none}
.view.on{display:block;animation:up .16s ease}
.stitle{font-size:.92rem;font-weight:900;margin-bottom:10px}

/* 카드형 스타일 적용 */
.card{background:#fff;border-radius:10px;padding:12px;margin-bottom:8px;
      border: 1px solid var(--bd); box-shadow:0 2px 8px rgba(30,64,175,.05)}
.ctit{font-size:.7rem;font-weight:900;color:var(--p);margin-bottom:10px;
      letter-spacing:.3px;}

/* 통계 대시보드 */
.sg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px}
@media(min-width:480px){.sg{grid-template-columns:repeat(4,1fr)}}
.sb{background:#fff;border-radius:10px;padding:11px 6px;text-align:center;border: 1px solid var(--bd);
    box-shadow:0 2px 8px rgba(30,64,175,.05)}
.sb .sl{font-size:.61rem;font-weight:700;color:var(--mu);margin-bottom:1px}
.sb .sv{font-size:1.2rem;font-weight:900;color:var(--p)}
.sb.g .sv{color:var(--ok)} .sb.r .sv{color:var(--ng)}

/* 상벌점 입력 3단 레이아웃 */
.inp3{display:flex;flex-direction:column;gap:8px}
@media(min-width:900px){
  .inp3{flex-direction:row;align-items:stretch;gap:10px;height:calc(100vh - 170px)}
  .col-stu,.col-r,.col-p{flex:1;display:flex;flex-direction:column;min-width:0}
  .col-stu .slist,.col-r .ibody,.col-p .ibody{flex:1;max-height:none!important}
}

.tauth-bar{background:#fff;border-radius:10px;padding:9px 12px;margin-bottom:8px;
           box-shadow:0 1px 7px rgba(37,99,235,.07);display:flex;align-items:center;gap:8px; border: 1px solid var(--bd);}
.tauth-bar label{font-size:.72rem;font-weight:700;color:var(--mu);flex-shrink:0;white-space:nowrap}
.tauth-bar input{flex:1;height:36px;border:1.5px solid var(--bd);border-radius:7px;padding:0 9px;
                 font-size:13px;font-family:inherit;outline:none;background:#f8fafc;transition:border-color .12s}
.tauth-bar input:focus{border-color:var(--p);background:#fff}

.col-head{padding:9px 11px;font-size:.78rem;font-weight:900;text-align:center;border-radius:8px 8px 0 0}
.col-head.cr{background:var(--ok);color:#fff}
.col-head.cp{background:var(--ng);color:#fff}
.col-head.cs{background:var(--p);color:#fff}
.ibody{background:#fff;border-radius:0 0 8px 8px;border:1px solid var(--bd);border-top:none;
       max-height:300px;overflow-y:auto;-webkit-overflow-scrolling:touch}

.itabs{display:flex;border-radius:8px;overflow:hidden;border:1.5px solid var(--bd);margin-bottom:6px}
.itabs button{flex:1;padding:9px;font-size:.8rem;font-weight:700;border:none;
              background:#f8fafc;color:#94a3b8;cursor:pointer;font-family:inherit;transition:all .11s}
.itabs .ar{background:var(--ok);color:#fff}
.itabs .ap{background:var(--ng);color:#fff}
.ipanel{display:none}
.ipanel.on{display:block}
@media(min-width:900px){
  .itabs{display:none}
  .ipanel{display:block!important} 
  .col-r,.col-p{display:flex!important;flex-direction:column}
}

.si{width:100%;height:40px;border:1.5px solid var(--bd);border-radius:8px;padding:0 11px;
    font-size:16px;font-family:inherit;outline:none;margin-bottom:5px;transition:border-color .12s}
.si:focus{border-color:var(--p)}
.slist{max-height:220px;overflow-y:auto;border:1px solid var(--bd);border-radius:8px;
       background:#fafbff;-webkit-overflow-scrolling:touch}
@media(min-width:900px){.slist{max-height:none;flex:1}}
.sit{display:flex;align-items:center;padding:9px 10px;border-bottom:1px solid #f1f5f9;cursor:pointer;gap:8px}
.sit:last-child{border-bottom:none}
.sit:active,.sit:hover{background:#eff6ff}
.sit input[type=checkbox]{width:16px;height:16px;accent-color:var(--p);flex-shrink:0}
.sit .sn{font-size:.82rem;font-weight:700}
.sit .si2{font-size:.64rem;color:var(--mu)}

.ib{display:flex;align-items:center;justify-content:space-between;padding:10px 11px;
    border-bottom:1px solid #f1f5f9;cursor:pointer;background:#fff;font-family:inherit;
    font-size:.78rem;color:#1e293b;width:100%;text-align:left;min-height:42px;
    border-left:none;border-right:none;border-top:none;transition:background .1s}
.ib:last-child{border-bottom:none}
.ib:active,.ib:hover{background:#f8fafc}
.ib.sr{background:#f0fdf4}
.ib.sp{background:#fff1f2}
.ib .sc{font-size:.77rem;font-weight:900;min-width:26px;text-align:right;flex-shrink:0}
.sc.pos{color:var(--ok)} .sc.neg{color:var(--ng)}
.lb{font-size:.53rem;background:#fef3c7;color:#92400e;border-radius:3px;padding:1px 3px;
    margin-left:3px;font-weight:700;vertical-align:middle}

.sumbar{background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:8px;padding:9px 11px;
        display:flex;justify-content:space-between;align-items:center;margin-bottom:7px}
.sumbar .st{font-size:.74rem;font-weight:700;color:var(--p)}
.sumbar .ss{font-size:.94rem;font-weight:900}
.bsv{width:100%;height:46px;background:linear-gradient(135deg,var(--p),#3b82f6);color:#fff;
     border:none;border-radius:9px;font-size:.92rem;font-weight:700;cursor:pointer;
     font-family:inherit;box-shadow:0 3px 9px rgba(30,64,175,.22);transition:opacity .12s}
.bsv:active{opacity:.85}
.bsv:disabled{opacity:.42;cursor:not-allowed}

.tfil{display:flex;gap:4px;margin-bottom:7px;flex-wrap:wrap}
.tb{padding:4px 11px;border-radius:13px;border:1.5px solid var(--bd);background:#fff;
    font-size:.69rem;font-weight:700;cursor:pointer;font-family:inherit;color:var(--mu);transition:all .1s}
.tb.on{background:var(--p);border-color:var(--p);color:#fff}
.ri{display:flex;justify-content:space-between;align-items:center;padding:9px 10px;
    border-radius:8px;margin-bottom:5px;background:#fff;border:1px solid var(--bd)}
.ri .ln{font-size:.82rem;font-weight:700}
.ri .lm{font-size:.65rem;color:var(--mu);margin-top:1px}
.ri .rr{text-align:right;flex-shrink:0;margin-left:7px}
.rsc{font-size:.86rem;font-weight:900}
.rsc.pos{color:var(--ok)} .rsc.neg{color:var(--ng)}
.bdel{font-size:.61rem;padding:2px 7px;border-radius:5px;border:1px solid var(--ng);
      color:var(--ng);background:none;cursor:pointer;font-family:inherit;margin-top:3px}
.bedit{font-size:.61rem;padding:2px 7px;border-radius:5px;border:1px solid var(--p);
       color:var(--p);background:none;cursor:pointer;font-family:inherit;margin-top:3px;margin-right:3px}

.shero{background:linear-gradient(135deg,#1e40af,#3b82f6);border-radius:13px;padding:22px 15px;
       text-align:center;color:#fff;margin-bottom:8px; box-shadow:0 4px 12px rgba(30,64,175,.3)}
.shero .hn{font-size:.8rem;opacity:.8;margin-bottom:2px}
.shero .hs{font-size:2.5rem;font-weight:900}
.shero .hl{font-size:.67rem;opacity:.6}
.srow{display:flex;padding:8px 10px;border-bottom:1px solid #f1f5f9;font-size:.76rem;gap:4px;align-items:center}
.srow:last-child{border-bottom:none}
.srow .sd{color:var(--mu);font-size:.65rem;flex-shrink:0;min-width:36px}
.srow .sr{flex:1}
.srow .ss2{font-weight:900;flex-shrink:0;min-width:30px;text-align:right}
.srow .ste{font-size:.61rem;color:var(--mu);flex-shrink:0;min-width:42px;text-align:right}

.cls-row{display:flex;align-items:center;justify-content:space-between;padding:9px 11px;
         border-bottom:1px solid #f1f5f9;cursor:pointer}
.cls-row:hover{background:#f8fafc}
.cls-row:last-child{border-bottom:none}
.cls-row .cn{font-size:.82rem;font-weight:700}
.cls-row .ci{font-size:.64rem;color:var(--mu)}
.cls-row .ca{display:flex;gap:4px;flex-shrink:0;margin-left:7px}
.breset{font-size:.61rem;padding:3px 7px;border-radius:5px;border:1px solid #f59e0b;
        color:#92400e;background:#fef3c7;cursor:pointer;font-family:inherit}
.bchpw{font-size:.61rem;padding:3px 7px;border-radius:5px;border:1px solid var(--p);
       color:var(--p);background:none;cursor:pointer;font-family:inherit}
.flag-badge{font-size:.56rem;background:#fef3c7;color:#92400e;border-radius:3px;
            padding:1px 4px;margin-left:3px;font-weight:700}

.stu-detail{background:#fff;border:1px solid var(--bd);border-radius:8px;margin-top:6px;
            overflow:hidden;display:none; box-shadow: 0 4px 15px rgba(0,0,0,0.08);}
.stu-detail.on{display:block;animation:up .15s ease}
.sdh{display:flex;align-items:center;justify-content:space-between;
     padding:12px 14px;background:var(--p);color:#fff}
.sdh .dname{font-size:.85rem;font-weight:900}
.sdh .dscore{font-size:.78rem;opacity:.9; margin-top:2px}
.sdh .dclose{background:rgba(255,255,255,.2);border:none;color:#fff;
             border-radius:5px;padding:4px 10px;font-size:.7rem;cursor:pointer;font-family:inherit; font-weight:bold;}
.drow{display:flex;padding:9px 12px;border-bottom:1px solid #f1f5f9;font-size:.76rem;gap:6px;align-items:center}
.drow:last-child{border-bottom:none}
.drow .dd{color:var(--mu);font-size:.64rem;flex-shrink:0;min-width:36px}
.drow .dr{flex:1; font-weight: 700;}
.drow .ds{font-weight:900;flex-shrink:0;min-width:28px;text-align:right}
.drow .dt{font-size:.6rem;color:#94a3b8;flex-shrink:0;min-width:40px;text-align:right}

.date-row{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-bottom:8px}
.date-row input[type=date]{height:34px;border:1.5px solid var(--bd);border-radius:7px;
  padding:0 8px;font-size:13px;font-family:inherit;outline:none;background:#fff;cursor:pointer}
.date-row input[type=date]:focus{border-color:var(--p)}
.date-row .bsrch{height:34px;padding:0 14px;background:var(--p);color:#fff;border:none;
                 border-radius:7px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:inherit}

.grade-grid{display:grid;grid-template-columns:1fr;gap:8px}
@media(min-width:600px){.grade-grid{grid-template-columns:repeat(3,1fr)}}
.grade-box{background:#fff;border-radius:9px;overflow:hidden;border:1px solid var(--bd)}
.grade-box-hdr{padding:8px 10px;font-size:.75rem;font-weight:900;background:var(--bg);
               border-bottom:1px solid var(--bd);color:var(--p)}
.rk{display:flex;align-items:center;padding:8px 10px;border-bottom:1px solid #f1f5f9;gap:7px}
.rk:last-child{border-bottom:none}
.rn{width:20px;height:20px;border-radius:50%;background:var(--bg);font-size:.66rem;font-weight:900;
    display:flex;align-items:center;justify-content:center;color:var(--mu);flex-shrink:0}
.rn.g{background:#fef3c7;color:#d97706} .rn.s{background:#f1f5f9;color:#475569} .rn.b{background:#fff7ed;color:#c2410c}
.rnm{flex:1;font-size:.8rem;font-weight:700}
.rsc2{font-size:.82rem;font-weight:900;color:var(--p)}

.bxls{padding:6px 14px;background:#16a34a;color:#fff;border:none;border-radius:7px;
      font-size:.74rem;font-weight:700;cursor:pointer;font-family:inherit}

.item-mgr-row{display:flex;align-items:center;gap:6px;padding:7px 10px;
              border-bottom:1px solid #f1f5f9;font-size:.78rem}
.item-mgr-row:last-child{border-bottom:none}
.item-mgr-row .ilbl{flex:1}
.item-mgr-row input[type=number]{width:60px;height:30px;border:1.5px solid var(--bd);border-radius:6px;
  padding:0 6px;font-size:13px;font-family:inherit;outline:none;text-align:center}
.item-mgr-row .bsave-sm{padding:3px 9px;background:var(--p);color:#fff;border:none;border-radius:5px;
                         font-size:.65rem;font-weight:700;cursor:pointer;font-family:inherit}

.fsel{padding:4px 8px;border:1.5px solid var(--bd);border-radius:6px;font-size:.7rem;
      font-family:inherit;outline:none;background:#fff;cursor:pointer}

#modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.38);z-index:500;
       align-items:center;justify-content:center;padding:16px}
#modal.on{display:flex}
.mbox{background:#fff;border-radius:14px;padding:19px 17px;width:100%;max-width:310px;
      box-shadow:0 8px 40px rgba(0,0,0,.18);animation:up .16s ease}
.mbox h3{font-size:.88rem;font-weight:900;margin-bottom:10px}
.mbox select,.mbox input[type=number]{width:100%;height:39px;border:1.5px solid var(--bd);border-radius:7px;
  padding:0 9px;font-size:13px;font-family:inherit;outline:none;margin-bottom:7px}
.mbtns{display:flex;gap:5px}
.mbtns button{flex:1;height:38px;border:none;border-radius:7px;font-weight:700;font-size:.8rem;cursor:pointer;font-family:inherit}
.mok{background:var(--p);color:#fff} .mcan{background:var(--bg);color:var(--mu)}

.empty{text-align:center;padding:20px 10px;color:#94a3b8;font-size:.75rem}
.empty .ei{font-size:1.7rem;display:block;margin-bottom:4px;opacity:.26}
.hidden{display:none!important}
.spin{display:inline-block;width:12px;height:12px;border:2px solid rgba(255,255,255,.3);
      border-top-color:#fff;border-radius:50%;animation:sp .5s linear infinite;vertical-align:middle;margin-right:4px}
@keyframes up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes sp{to{transform:rotate(360deg)}}
#toast{position:fixed;bottom:14px;left:50%;transform:translateX(-50%) translateY(7px);
       background:#1e293b;color:#fff;padding:8px 16px;border-radius:18px;font-size:.76rem;
       font-weight:700;opacity:0;transition:all .17s;pointer-events:none;
       white-space:pre-line;text-align:center;max-width:82vw;z-index:999}
#toast.on{opacity:1;transform:translateX(-50%) translateY(0)}
</style>
</head>
<body>

<div id="LS">
  <div class="lbox">
    <div class="llogo" id="llogo" onclick="ltap()">
      <span class="ico">🏫</span>
      <h1 id="ltitle">드림포인트</h1>
      <p id="lsub">학생 상벌점 관리 시스템</p>
    </div>
    <div class="rtabs">
      <button class="rtab on" id="tabT" onclick="setRole('teacher')">👩‍🏫 교사/관리자</button>
      <button class="rtab" id="tabS" onclick="setRole('student')">🎒 학생</button>
    </div>
    <button id="aBtn" onclick="setRole('admin')">🔑 관리자 모드 진입</button>
    <div class="fg"><label id="lbl">아이디 (관리자는 admin)</label>
      <input type="text" id="lid" autocomplete="off" autocapitalize="none" placeholder="아이디 입력"></div>
    <div class="fg"><label>비밀번호</label>
      <input type="password" id="lpw" placeholder="비밀번호 입력" onkeydown="if(event.key==='Enter')doLogin()"></div>
    <button class="bpri" onclick="doLogin()">로그인 →</button>
  </div>
</div>

<div id="pwOv">
  <div class="pwbox">
    <h2>🔒 비밀번호 변경 필요</h2>
    <p>담임선생님이 비밀번호를 초기화했습니다.<br>새 비밀번호를 설정해야 계속할 수 있습니다.</p>
    <div class="fg"><label>새 비밀번호 (4자 이상)</label>
      <input type="password" id="nPw1" placeholder="새 비밀번호"></div>
    <div class="fg"><label>확인</label>
      <input type="password" id="nPw2" placeholder="비밀번호 확인" onkeydown="if(event.key==='Enter')submitNewPw()"></div>
    <button class="bpri" onclick="submitNewPw()">변경하기</button>
  </div>
</div>

<div id="APP">
  <header class="hdr">
    <div class="hdr-logo">🏫 드림포인트</div>
    <div class="hdr-r">
      <div class="badge" id="ubadge"></div>
      <button class="blg" onclick="doLogout()">로그아웃</button>
    </div>
  </header>
  <div class="tabbar" id="topNav"></div>
  <div class="bwrap">
    <nav class="snav" id="sideNav"></nav>
    <div class="mc">

      <div class="view on" id="vInput">
        <div id="taArea">
          <div class="tauth-bar">
            <label>🔐 교사 인증</label>
            <input type="text" id="tId" placeholder="교사 ID" autocapitalize="none">
            <input type="password" id="tPw" placeholder="비밀번호">
          </div>
        </div>
        <div class="inp3">
          <div class="col-stu">
            <div class="col-head cs">👥 학생 선택</div>
            <div style="background:#fff;border:1px solid var(--bd);border-top:none;border-radius:0 0 8px 8px;padding:8px">
              <input class="si" type="search" id="ssearch" placeholder="🔍 이름 또는 학번" oninput="filterS()">
              <div class="slist" id="slist"><div class="empty"><span class="ei">⏳</span>로딩 중…</div></div>
            </div>
          </div>
          <div class="col-r">
            <div class="itabs" id="mTabs">
              <button id="tabR" onclick="switchTab('r')" class="ar">✅ 상점</button>
              <button id="tabP" onclick="switchTab('p')">❌ 벌점</button>
            </div>
            <div class="col-head cr" id="headR" style="display:none">✅ 상점 항목</div>
            <div class="ipanel on ibody" id="panR"></div>
            <div class="ipanel ibody" id="panP" style="display:none"></div>
          </div>
          <div class="col-p" id="colP" style="display:none">
            <div class="col-head cp">❌ 벌점 항목</div>
            <div class="ibody" id="deskP"></div>
          </div>
          <div id="sumArea">
            <div class="sumbar">
              <div class="st" id="stxt">학생·항목을 선택하세요</div>
              <div class="ss" id="ssc" style="color:#94a3b8">0점</div>
            </div>
            <button class="bsv" id="bsv" onclick="saveRec()">💾 기록하기</button>
          </div>
        </div>
      </div>

      <div class="view" id="vHist">
        <p class="stitle">📋 내 입력 기록</p>
        <div class="tfil">
          <button class="tb on" onclick="fHist('all',this)">전체</button>
          <button class="tb" onclick="fHist('r',this)">상점</button>
          <button class="tb" onclick="fHist('p',this)">벌점</button>
        </div>
        <div id="hlist"><div class="empty"><span class="ei">📭</span>기록 없음</div></div>
      </div>

      <div class="view" id="vScore">
        <p class="stitle">🏆 나의 드림포인트</p>
        <div id="scoreWrap">
          <div class="card">
            <div class="ctit">학번 & 비밀번호로 조회</div>
            <div class="fg"><label>학번</label>
              <input type="text" id="ssid" inputmode="numeric" placeholder="학번 입력"></div>
            <div class="fg"><label>비밀번호</label>
              <input type="password" id="sspw" placeholder="비밀번호 입력" onkeydown="if(event.key==='Enter')searchStu()"></div>
            <button class="bsv" onclick="searchStu()">조회하기</button>
          </div>
        </div>
      </div>

      <div class="view" id="vDash">
        <p class="stitle">📊 전체 현황 및 엑셀 추출</p>
        <div class="sg">
          <div class="sb"><div class="sl">기록수</div><div class="sv" id="stTotal">-</div></div>
          <div class="sb g"><div class="sl">상점합계</div><div class="sv" id="stR">-</div></div>
          <div class="sb r"><div class="sl">벌점합계</div><div class="sv" id="stP">-</div></div>
          <div class="sb"><div class="sl">참여학생</div><div class="sv" id="stS">-</div></div>
        </div>
        <div class="card">
          <div class="ctit">📅 기간 지정 (학급/학년별 조회 및 엑셀 다운로드)</div>
          <div class="date-row">
            <input type="date" id="dFrom">
            <span style="font-size:.75rem;color:var(--mu)">~</span>
            <input type="date" id="dTo">
            <button class="bsrch" onclick="searchRange()">조회</button>
            <button class="bxls" onclick="exportXLS()">📥 XLSX 엑셀 다운로드</button>
          </div>
          <div style="display:flex;gap:5px;margin-bottom:8px;flex-wrap:wrap">
            <select class="fsel" id="fGrade2" onchange="onGradeChg2()"><option value="">전 학년</option><option>1</option><option>2</option><option>3</option></select>
            <select class="fsel" id="fClass2" onchange="renderRangeRank()"><option value="">전 반</option></select>
          </div>
          <div id="rangeRankList"><div class="empty"><span class="ei">📅</span>기간을 선택하고 조회하세요</div></div>
        </div>
        <div class="card">
          <div class="ctit">🏆 학년별 반 순위 (선택된 기간 기준 상위 3명)</div>
          <div class="grade-grid" id="gradeGrid"><div class="empty"><span class="ei">⏳</span>기간 조회 후 표시됩니다</div></div>
        </div>
        <div class="card">
          <div class="ctit">🥇 전체 기간 누적 상위 20명</div>
          <div style="display:flex;gap:5px;margin-bottom:8px;flex-wrap:wrap">
            <select class="fsel" id="fGrade" onchange="onGradeChg()"><option value="">전 학년</option><option>1</option><option>2</option><option>3</option></select>
            <select class="fsel" id="fClass" onchange="renderRank()"><option value="">전 반</option></select>
            <select class="fsel" id="fMonth" onchange="renderRank()"><option value="">전체 기간</option></select>
          </div>
          <div id="rankList"><div class="empty"><span class="ei">⏳</span>로딩 중…</div></div>
        </div>
      </div>

      <div class="view" id="vEdit">
        <p class="stitle">✏️ 상벌점 전체 기록 수정/삭제</p>
        <div class="tfil">
          <button class="tb on" onclick="fEdit('all',this)">전체</button>
          <button class="tb" onclick="fEdit('r',this)">상점</button>
          <button class="tb" onclick="fEdit('p',this)">벌점</button>
        </div>
        <input class="si" type="search" id="esearch" placeholder="🔍 학생 이름/학번" oninput="renderEdit()" style="margin-bottom:7px">
        <div id="elist"><div class="empty"><span class="ei">⏳</span>로딩 중…</div></div>
      </div>

      <div class="view" id="vItems">
        <p class="stitle">⚙️ 상벌점 항목 관리</p>
        <p style="font-size:.74rem;color:var(--mu);margin-bottom:10px">
          상점 및 벌점 점수를 임시 변경합니다.
        </p>
        <div class="card">
          <div class="ctit">✅ 상점 항목</div>
          <div id="itemMgrR"></div>
        </div>
        <div class="card">
          <div class="ctit">❌ 벌점 항목</div>
          <div id="itemMgrP"></div>
        </div>
        <button class="bsv" onclick="applyItemChanges()" style="margin-top:4px">변경 사항 로컬 저장</button>
      </div>

      <div class="view" id="vClass">
        <p class="stitle" id="classTitleText">🔑 학급 학생 관리 (이력 상세조회)</p>
        <p style="font-size:.7rem;color:var(--mu);margin-bottom:10px">학생을 클릭하면 상세 상벌점 이력(Drill-down)을 볼 수 있습니다.</p>
        <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap" id="clsFilterArea">
          <select class="fsel" id="clsGradeFilter" onchange="renderClassStudents()"><option value="">전 학년</option><option>1</option><option>2</option><option>3</option></select>
          <select class="fsel" id="clsClsFilter" onchange="renderClassStudents()"><option value="">전 반</option></select>
          <input class="si" type="search" id="clsSearch" placeholder="🔍 이름/학번" oninput="renderClassStudents()" style="width:130px;margin-bottom:0;height:32px;font-size:13px">
        </div>
        <div class="stu-detail" id="stuDetail">
          <div class="sdh">
            <div>
              <div class="dname" id="dStuName">학생 이름</div>
              <div class="dscore" id="dStuScore">누적 0점</div>
            </div>
            <button class="dclose" onclick="closeStudentDetail()">✕ 닫기</button>
          </div>
          <div id="dStuRows"></div>
        </div>
        <div id="clsList"><div class="empty"><span class="ei">⏳</span>로딩 중…</div></div>
      </div>

    </div>
  </div>
</div>

<div id="modal">
  <div class="mbox">
    <h3>기록 수정</h3>
    <select id="mReason"></select>
    <input type="number" id="mScore" placeholder="점수 (양수=상점, 음수=벌점)">
    <div class="mbtns">
      <button class="mcan" onclick="closeModal()">취소</button>
      <button class="mok" onclick="submitEdit()">저장</button>
    </div>
  </div>
</div>

<div id="toast"></div>

<script>
var G = {
  role:'teacher', user:null,
  students:[], picked:null, pickedV:null, curTab:'r',
  histList:[], histF:'all',
  editList:[], editF:'all', editRow:null,
  adminData:null, rangeData:null,
  clsStudents:[], pendingStudent:null,
  isMobile:true,
  rewardItems: null, penaltyItems: null
};

(function init(){
  var t = CONFIG.THEME, s = document.documentElement.style;
  ['primary','success','danger'].forEach(function(k,i){
    s.setProperty(['--p','--ok','--ng'][i], [t.primary,t.success,t.danger][i]);
  });
  document.getElementById('ltitle').textContent = CONFIG.SYSTEM_NAME   || '드림포인트';
  document.getElementById('lsub').textContent   = CONFIG.SYSTEM_SUBTITLE || '학생 상벌점 관리 시스템';
  G.rewardItems  = JSON.parse(JSON.stringify(CONFIG.REWARD_ITEMS));
  G.penaltyItems = JSON.parse(JSON.stringify(CONFIG.PENALTY_ITEMS));
  var today = new Date();
  var y = today.getFullYear(), m = today.getMonth();
  document.getElementById('dFrom').value = y + '-' + pad2(m+1) + '-01';
  document.getElementById('dTo').value   = y + '-' + pad2(m+1) + '-' + pad2(today.getDate());
  function chkBP(){ G.isMobile = window.innerWidth < 900; }
  chkBP();
  window.addEventListener('resize', function(){
    G.isMobile = window.innerWidth < 900;
    if(G.user && G.user.role !== 'student') applyLayout();
  });
  prefetchStudents();
})();

function pad2(n){ return n < 10 ? '0'+n : String(n); }

var cbIdx = 0;
function api(payload, cb){
  var n = '_dp' + (++cbIdx);
  var timer = setTimeout(function(){
    if(window[n]){ delete window[n]; toast('❌ 응답 시간 초과 (15초) - 네트워크를 확인하세요.'); }
  }, 15000);
  window[n] = function(data){
    clearTimeout(timer); delete window[n];
    var el = document.getElementById(n);
    if(el && el.parentNode) el.parentNode.removeChild(el);
    cb(data);
  };
  var s = document.createElement('script');
  s.id = n;
  s.src = CONFIG.API_URL + '?callback=' + n + '&payload=' + encodeURIComponent(JSON.stringify(payload));
  s.onerror = function(){
    clearTimeout(timer); delete window[n];
    if(s.parentNode) s.parentNode.removeChild(s);
    toast('❌ 서버 연결 실패 - 주소를 다시 확인해주세요.');
  };
  document.head.appendChild(s);
}

var SKEY = 'dp_stu', STTL = 30 * 60 * 1000;
function prefetchStudents(){
  try{
    var raw = localStorage.getItem(SKEY);
    if(raw){ var o = JSON.parse(raw); if(Date.now() - o.ts < STTL){ G.students = o.d; return; } }
  }catch(e){}
  api({ action: 'getAllStudents' }, function(r){
    if(r && r.students){ G.students = r.students; saveSC(r.students); }
  });
}
function saveSC(arr){ try{ localStorage.setItem(SKEY, JSON.stringify({ts:Date.now(),d:arr})); }catch(e){} }
function loadStudents(){
  if(G.students.length > 0){ renderStudents(G.students); return; }
  api({ action: 'getAllStudents' }, function(r){
    if(r && r.students){ G.students = r.students; saveSC(r.students); renderStudents(r.students); }
  });
}

var ltapCount = 0, ltapTimer = null;
function ltap(){
  ltapCount++; clearTimeout(ltapTimer);
  ltapTimer = setTimeout(function(){ ltapCount = 0; }, 2000);
  if(ltapCount >= 5){ ltapCount = 0; document.getElementById('aBtn').style.display = 'block'; toast('🔑 관리자 모드 버튼 활성화'); }
}
function setRole(r){
  G.role = r;
  document.getElementById('tabT').classList.toggle('on', r === 'teacher' || r === 'admin');
  document.getElementById('tabS').classList.toggle('on', r === 'student');
  document.getElementById('lbl').textContent = r === 'student' ? '학번' : '아이디 (관리자는 admin)';
}
function doLogin(){
  var id = document.getElementById('lid').value.trim();
  var pw = document.getElementById('lpw').value.trim();
  if(!id || !pw){ toast('아이디와 비밀번호를 입력하세요'); return; }
  
  if((G.role === 'admin' || id === CONFIG.ADMIN_ID) && pw === CONFIG.ADMIN_PW){
    onLoginOK({ role:'admin', name:'최고관리자', id:id, pw:pw });
    return;
  }
  
  if(G.role === 'teacher'){
    api({ action:'authTeacher', teacherId:id, teacherPw:pw }, function(r){
      if(r && r.success){
        var nm = (r.name && typeof r.name === 'string') ? r.name : id;
        onLoginOK({ role:'teacher', name:nm, id:id, pw:pw });
      } else { toast('❌ ' + (r && r.error ? r.error : '교사 인증 실패')); }
    });
    return;
  }
  api({ action:'getStudentScore', id:id, pw:pw }, function(r){
    if(r && r.mustChangePw){ G.pendingStudent = {id:id,pw:pw,name:r.name}; document.getElementById('pwOv').classList.add('on'); return; }
    if(r && r.error){ toast('❌ ' + r.error); return; }
    if(r && r.name){ onLoginOK({ role:'student', name:r.name, id:id, pw:pw, sd:r }); }
    else { toast('❌ 로그인 실패'); }
  });
}
function submitNewPw(){
  var p1 = document.getElementById('nPw1').value.trim();
  var p2 = document.getElementById('nPw2').value.trim();
  if(!p1 || p1.length < 4){ toast('비밀번호는 4자 이상이어야 합니다'); return; }
  if(p1 !== p2){ toast('비밀번호가 일치하지 않습니다'); return; }
  var st = G.pendingStudent;
  api({ action:'updateMyPw', id:st.id, oldPw:st.pw, newPw:p1 }, function(r){
    if(r && r.error){ toast('❌ ' + r.error); return; }
    toast(r && r.message ? r.message : '✅ 변경 완료');
    document.getElementById('pwOv').classList.remove('on');
    api({ action:'getStudentScore', id:st.id, pw:p1 }, function(r2){
      if(r2 && r2.name) onLoginOK({ role:'student', name:r2.name, id:st.id, pw:p1, sd:r2 });
    });
  });
}
function onLoginOK(u){
  G.user = u;
  document.getElementById('LS').style.display = 'none';
  document.getElementById('APP').classList.add('on');
  var nm = (u.name && typeof u.name === 'string') ? u.name : u.id;
  document.getElementById('ubadge').textContent = ({admin:'🔑 ',teacher:'👩‍🏫 ',student:'🎒 '}[u.role] || '') + nm;
  buildNav();
  if(u.role === 'teacher'){
    document.getElementById('tId').value = u.id;
    document.getElementById('tPw').value = u.pw;
    document.getElementById('taArea').classList.remove('hidden');
    loadStudents(); buildItems(); applyLayout();
  } else if(u.role === 'admin'){
    document.getElementById('taArea').classList.add('hidden');
    loadStudents(); buildItems(); applyLayout();
    loadDash(); loadEditRecords(); loadAdminStudents(); buildItemMgr();
  } else {
    document.getElementById('taArea').classList.add('hidden');
    renderScore(u.sd);
  }
}
function doLogout(){
  G.user = null; G.students = []; G.picked = null; G.pickedV = null;
  G.histList = []; G.editList = []; G.adminData = null; G.rangeData = null; G.clsStudents = [];
  document.getElementById('APP').classList.remove('on');
  document.getElementById('APP').style.display = '';
  document.getElementById('LS').style.display = 'flex';
  document.getElementById('lid').value = ''; document.getElementById('lpw').value = '';
}

var NAVS = {
  admin:  [{id:'vDash',ic:'📊',lb:'통계'},{id:'vEdit',ic:'✏️',lb:'수정'},{id:'vInput',ic:'➕',lb:'입력'},
           {id:'vItems',ic:'⚙️',lb:'항목관리'},{id:'vClass',ic:'🔑',lb:'전체학생관리'}],
  teacher: [{id:'vInput',ic:'✏️',lb:'입력'},{id:'vHist',ic:'📋',lb:'기록'},{id:'vClass',ic:'🔑',lb:'우리반관리'}],
  student: [{id:'vScore',ic:'🏆',lb:'내 점수'}]
};
function buildNav(){
  var items = NAVS[G.user.role] || [];
  var html = items.map(function(n){
    return '<button class="titem" data-view="' + n.id + '" onclick="switchView(\'' + n.id + '\',this)">' + n.ic + ' ' + n.lb + '</button>';
  }).join('');
  document.getElementById('topNav').innerHTML  = html;
  document.getElementById('sideNav').innerHTML = html;
  document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('on'); });
  if(items.length){
    var fv = document.getElementById(items[0].id);
    if(fv) fv.classList.add('on');
    document.querySelectorAll('[data-view="' + items[0].id + '"]').forEach(function(b){ b.classList.add('on'); });
  }
  if(G.user.role === 'admin'){
    document.getElementById('classTitleText').textContent = '🔑 전체 학생 관리 (상세조회/비밀번호)';
    document.getElementById('clsFilterArea').classList.remove('hidden');
  } else {
    document.getElementById('classTitleText').textContent = '🔑 우리 반 관리 (상세조회/비밀번호)';
  }
}
function switchView(id, el){
  document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('on'); });
  var v = document.getElementById(id); if(v) v.classList.add('on');
  document.querySelectorAll('.titem').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-view') === id);
  });
  if(id === 'vHist')  loadHist();
  if(id === 'vDash'  && !G.adminData)      loadDash();
  if(id === 'vEdit'  && !G.editList.length) loadEditRecords();
  if(id === 'vClass') loadClassStudents();
  if(id === 'vItems') buildItemMgr();
}

function applyLayout(){
  var mob = G.isMobile;
  document.getElementById('mTabs').style.display  = mob ? 'flex' : 'none';
  document.getElementById('headR').style.display  = mob ? 'none' : 'block';
  document.getElementById('colP').style.display   = mob ? 'none' : 'flex';
  
  if(!mob){ 
    buildFlatItems('deskP', G.penaltyItems, 'p'); 
    document.getElementById('panR').style.display = 'block';
    document.getElementById('panP').style.display = 'none';
  } else {
    document.getElementById('panR').style.display = G.curTab === 'r' ? 'block' : 'none';
    document.getElementById('panP').style.display = G.curTab === 'p' ? 'block' : 'none';
  }
}

function renderStudents(arr){
  var el = document.getElementById('slist');
  if(!arr || !arr.length){ el.innerHTML = '<div class="empty"><span class="ei">👥</span>학생 없음</div>'; return; }
  el.innerHTML = arr.map(function(s){
    return '<div class="sit" onclick="toggleS(this)">' +
      '<input type="checkbox" class="schk" value="' + s.id + '" data-name="' + s.name + '" onclick="event.stopPropagation()">' +
      '<div><div class="sn">' + s.name + '</div><div class="si2">' + s.id + '</div></div></div>';
  }).join('');
}
function filterS(){
  var v = document.getElementById('ssearch').value.toLowerCase();
  renderStudents(G.students.filter(function(s){ return s.id.includes(v) || s.name.includes(v); }));
}
function toggleS(el){ var c = el.querySelector('.schk'); c.checked = !c.checked; updateSum(); }

function switchTab(t){
  G.curTab = t;
  document.getElementById('tabR').className = t === 'r' ? 'ar' : '';
  document.getElementById('tabP').className = t === 'p' ? 'ap' : '';
  document.getElementById('panR').style.display = t === 'r' ? 'block' : 'none';
  document.getElementById('panP').style.display = t === 'p' ? 'block' : 'none';
}
function buildItems(){
  buildFlatItems('panR', G.rewardItems,  'r');
  buildFlatItems('panP', G.penaltyItems, 'p');
  if(!G.isMobile) buildFlatItems('deskP', G.penaltyItems, 'p');
}
function buildFlatItems(cid, items, type){
  var el = document.getElementById(cid); if(!el) return;
  var seen = {};
  var deduped = (items || []).filter(function(item){
    var key = item.value + '|' + item.score;
    if(seen[key]) return false; seen[key] = true; return true;
  });
  el.innerHTML = deduped.map(function(item){
    var v  = item.value.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
    var lb = item.limit ? '<span class="lb">월' + item.limit + '점</span>' : '';
    return '<button class="ib" onclick="pickItem(this,\'' + v + '\',' + item.score + ',\'' + type + '\')" data-v="' + v + '">' +
      '<span>' + item.label + lb + '</span>' +
      '<span class="sc ' + (item.score > 0 ? 'pos' : 'neg') + '">' + (item.score > 0 ? '+' : '') + item.score + '</span></button>';
  }).join('');
}
function pickItem(btn, v, sc, type){
  document.querySelectorAll('.ib').forEach(function(b){ b.classList.remove('sr','sp'); });
  if(G.pickedV === v){ G.picked = null; G.pickedV = null; updateSum(); return; }
  G.pickedV = v; G.picked = { value:v, score:sc, type:type };
  document.querySelectorAll('.ib[data-v="' + v.replace(/'/g,"\\'") + '"').forEach(function(b){
    b.classList.add(type === 'r' ? 'sr' : 'sp');
  });
  updateSum();
}
function updateSum(){
  var cnt = document.querySelectorAll('.schk:checked').length;
  var sc  = G.picked ? G.picked.score : 0;
  var se  = document.getElementById('ssc'), te = document.getElementById('stxt');
  if(!cnt || !G.picked){ te.textContent = '학생·항목을 선택하세요'; se.textContent = '0점'; se.style.color = '#94a3b8'; return; }
  te.textContent = cnt + '명 × ' + G.picked.value;
  se.textContent = (sc > 0 ? '+' : '') + sc + '점';
  se.style.color = sc > 0 ? 'var(--ok)' : 'var(--ng)';
}

function saveRec(){
  var tId = document.getElementById('tId').value.trim();
  var tPw = document.getElementById('tPw').value.trim();
  var chks = document.querySelectorAll('.schk:checked');
  if(G.user.role !== 'admin' && (!tId || !tPw)){ toast('교사 ID/PW를 입력하세요'); return; }
  if(!chks.length){ toast('학생을 선택하세요'); return; }
  if(!G.picked){ toast('항목을 선택하세요'); return; }
  var btn = document.getElementById('bsv');
  btn.disabled = true; btn.innerHTML = '<span class="spin"></span>처리 중…';
  api({
    action:'saveBatchData',
    teacherId: tId || CONFIG.ADMIN_ID, teacherPw: tPw || CONFIG.ADMIN_PW,
    reason: G.picked.value, score: G.picked.score,
    students: Array.from(chks).map(function(c){ return { id:c.value, name:c.dataset.name }; })
  }, function(r){
    btn.disabled = false; btn.textContent = '💾 기록하기';
    toast(r && r.message ? r.message : String(r));
    document.querySelectorAll('.schk:checked').forEach(function(c){ c.checked = false; });
    document.querySelectorAll('.ib').forEach(function(b){ b.classList.remove('sr','sp'); });
    G.picked = null; G.pickedV = null;
    document.getElementById('ssearch').value = '';
    renderStudents(G.students); updateSum();
  });
}

function exportXLS(){
  var data = G.rangeData || G.adminData;
  if(!data || !data.topStudents){ toast('먼저 데이터를 조회하세요'); return; }
  
  var grade = document.getElementById('fGrade2') ? document.getElementById('fGrade2').value : '';
  var cls   = document.getElementById('fClass2') ? document.getElementById('fClass2').value : '';
  var list  = data.topStudents;
  
  if(grade) list = list.filter(function(s){ return String(s.grade)===grade; });
  if(cls)   list = list.filter(function(s){ return String(s.cls)===cls; });
  
  var ws_data = [['순위', '학번', '이름', '학년', '반', '누적점수']];
  list.forEach(function(s, i){ 
    ws_data.push([i+1, s.id, s.name, s.grade, s.cls, s.total]); 
  });
  
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.aoa_to_sheet(ws_data);
  XLSX.utils.book_append_sheet(wb, ws, "학생 통계");
  
  var dateStr = document.getElementById('dFrom').value || '전체기간';
  XLSX.writeFile(wb, "드림포인트_통계_" + dateStr + ".xlsx");
}

function loadHist(){
  var tId = document.getElementById('tId').value.trim();
  var tPw = document.getElementById('tPw').value.trim();
  if(G.user.role === 'teacher' && (!tId || !tPw)){
    document.getElementById('hlist').innerHTML = '<div class="empty"><span class="ei">🔑</span>교사 정보를 입력하세요</div>'; return;
  }
  document.getElementById('hlist').innerHTML = '<div class="empty"><span class="ei">⏳</span>불러오는 중…</div>';
  api({ action:'getTeacherHistory', teacherId:tId||CONFIG.ADMIN_ID, teacherPw:tPw||CONFIG.ADMIN_PW }, function(r){
    if(r && r.error){ toast('❌ ' + r.error); return; }
    G.histList = (r && r.history) ? r.history : [];
    renderHist();
  });
}
function fHist(f, el){
  G.histF = f;
  document.querySelectorAll('#vHist .tb').forEach(function(b){ b.classList.remove('on'); });
  el.classList.add('on'); renderHist();
}
function renderHist(){
  var el = document.getElementById('hlist');
  var list = G.histList;
  if(G.histF === 'r') list = list.filter(function(h){ return h.score > 0; });
  if(G.histF === 'p') list = list.filter(function(h){ return h.score < 0; });
  if(!list.length){ el.innerHTML = '<div class="empty"><span class="ei">📭</span>기록 없음</div>'; return; }
  el.innerHTML = list.map(function(h){
    var nm = h.studentName.replace(/'/g,"\\'");
    return '<div class="ri">' +
      '<div><div class="ln">' + h.studentName + ' <span style="color:#94a3b8;font-size:.62rem">(' + h.studentId + ')</span></div>' +
      '<div class="lm">' + h.date + ' · ' + h.reason + '</div></div>' +
      '<div class="rr"><div class="rsc ' + (h.score>0?'pos':'neg') + '">' + (h.score>0?'+':'') + h.score + '점</div>' +
      '<button class="bdel" onclick="delRec(' + h.rowIndex + ',\'' + nm + '\')">취소</button></div></div>';
  }).join('');
}
function delRec(rowIndex, nm){
  if(!confirm('[' + nm + '] 기록을 취소하시겠습니까?')) return;
  var tId = document.getElementById('tId').value.trim();
  var tPw = document.getElementById('tPw').value.trim();
  api({ action:'deleteRecord', rowIndex:rowIndex, teacherId:tId||CONFIG.ADMIN_ID, teacherPw:tPw||CONFIG.ADMIN_PW }, function(r){
    toast(r && r.message ? r.message : String(r)); loadHist();
  });
}
function searchStu(){
  var sid = document.getElementById('ssid').value.trim();
  var spw = document.getElementById('sspw').value.trim();
  if(!sid || !spw){ toast('학번과 비밀번호를 입력하세요'); return; }
  api({ action:'getStudentScore', id:sid, pw:spw }, function(r){
    if(r && r.mustChangePw){ G.pendingStudent = {id:sid,pw:spw,name:r.name}; document.getElementById('pwOv').classList.add('on'); return; }
    if(r && r.error){ toast('❌ ' + r.error); return; }
    renderScore(r);
  });
}
function renderScore(data){
  if(!data) return;
  var h = data.history || [];
  var rows = h.length ? h.map(function(x){
    return '<div class="srow"><span class="sd">' + x.date + '</span><span class="sr">' + x.reason + '</span>' +
      '<span class="ss2 rsc ' + (parseFloat(x.score)>=0?'pos':'neg') + '">' + x.score + '</span>' +
      '<span class="ste">' + (x.teacherName||'') + '</span></div>';
  }).join('') : '<div class="empty"><span class="ei">📭</span>기록 없음</div>';
  document.getElementById('scoreWrap').innerHTML =
    '<div class="shero"><div class="hn">' + data.name + ' 학생</div>' +
    '<div class="hs">' + data.total + '점</div><div class="hl">누적 드림포인트</div></div>' +
    '<div class="card"><div class="ctit">상세 내역</div>' + rows + '</div>';
}
function loadDash(){
  api({ action:'getAdminStats', adminId:CONFIG.ADMIN_ID, adminPw:CONFIG.ADMIN_PW }, function(r){
    if(r && r.error){ toast('❌ ' + r.error); return; }
    G.adminData = r;
    document.getElementById('stTotal').textContent = r.totalCount   || 0;
    document.getElementById('stR').textContent     = r.totalReward  || 0;
    document.getElementById('stP').textContent     = Math.abs(r.totalPenalty || 0);
    document.getElementById('stS').textContent     = r.studentCount || 0;
    var ms = document.getElementById('fMonth');
    if(ms.options.length <= 1){
      Object.keys(r.monthlyRanks || {}).sort().reverse().forEach(function(ym){
        var o = document.createElement('option'); o.value = ym; o.textContent = ym; ms.appendChild(o);
      });
    }
    renderRank();
  });
}
function onGradeChg(){
  var g = document.getElementById('fGrade').value;
  var fc = document.getElementById('fClass');
  fc.innerHTML = '<option value="">전 반</option>';
  if(g && G.adminData){
    var cs = {};
    (G.adminData.topStudents||[]).forEach(function(s){ if(String(s.grade)===g) cs[String(s.cls)]=1; });
    Object.keys(cs).sort().forEach(function(c){
      var o = document.createElement('option'); o.value=c; o.textContent=c+'반'; fc.appendChild(o);
    });
  }
  renderRank();
}
function renderRank(){
  if(!G.adminData) return;
  var mon   = document.getElementById('fMonth').value;
  var grade = document.getElementById('fGrade').value;
  var cls   = document.getElementById('fClass').value;
  var list  = mon ? (G.adminData.monthlyRanks[mon]||[]) : (G.adminData.topStudents||[]);
  if(grade) list = list.filter(function(s){ return String(s.grade)===grade; });
  if(cls)   list = list.filter(function(s){ return String(s.cls)===cls; });
  var el = document.getElementById('rankList');
  if(!list.length){ el.innerHTML = '<div class="empty"><span class="ei">📊</span>데이터 없음</div>'; return; }
  el.innerHTML = list.slice(0,20).map(function(s,i){
    return '<div class="rk"><div class="rn ' + (i===0?'g':i===1?'s':i===2?'b':'') + '">' + (i+1) + '</div>' +
      '<div class="rnm">' + s.name + ' <span style="color:#94a3b8;font-size:.62rem">(' + s.id + ')</span></div>' +
      '<div class="rsc2">' + s.total + '점</div></div>';
  }).join('');
}
function searchRange(){
  var from = document.getElementById('dFrom').value;
  var to   = document.getElementById('dTo').value;
  if(!from || !to){ toast('날짜를 선택하세요'); return; }
  document.getElementById('rangeRankList').innerHTML = '<div class="empty"><span class="ei">⏳</span>조회 중…</div>';
  document.getElementById('gradeGrid').innerHTML     = '<div class="empty"><span class="ei">⏳</span>집계 중…</div>';
  api({ action:'getStatsRange', from:from, to:to }, function(r){
    if(r && r.error){ toast('❌ ' + r.error); return; }
    G.rangeData = r;
    document.getElementById('stTotal').textContent = r.totalCount   || 0;
    document.getElementById('stR').textContent     = r.totalReward  || 0;
    document.getElementById('stP').textContent     = Math.abs(r.totalPenalty||0);
    document.getElementById('stS').textContent     = r.studentCount || 0;
    renderRangeRank();
    renderGradeGrid(r.classRanks);
  });
}
function onGradeChg2(){
  var g = document.getElementById('fGrade2').value;
  var fc = document.getElementById('fClass2');
  fc.innerHTML = '<option value="">전 반</option>';
  if(g && G.rangeData){
    var cr = (G.rangeData.classRanks||{})[g] || {};
    Object.keys(cr).sort().forEach(function(c){
      var o = document.createElement('option'); o.value=c; o.textContent=c+'반'; fc.appendChild(o);
    });
  }
  renderRangeRank();
}
function renderRangeRank(){
  if(!G.rangeData) return;
  var grade = document.getElementById('fGrade2').value;
  var cls   = document.getElementById('fClass2').value;
  var list  = G.rangeData.topStudents || [];
  if(grade) list = list.filter(function(s){ return String(s.grade)===grade; });
  if(cls)   list = list.filter(function(s){ return String(s.cls)===cls; });
  var el = document.getElementById('rangeRankList');
  if(!list.length){ el.innerHTML = '<div class="empty"><span class="ei">📊</span>데이터 없음</div>'; return; }
  el.innerHTML = list.slice(0,20).map(function(s,i){
    return '<div class="rk"><div class="rn '+(i===0?'g':i===1?'s':i===2?'b':'')+'">'+
      (i+1)+'</div><div class="rnm">'+s.name+' <span style="color:#94a3b8;font-size:.62rem">('+s.id+')</span></div>'+
      '<div class="rsc2">'+s.total+'점</div></div>';
  }).join('');
}
function renderGradeGrid(classRanks){
  var el = document.getElementById('gradeGrid');
  if(!classRanks || !Object.keys(classRanks).length){
    el.innerHTML = '<div class="empty"><span class="ei">📊</span>데이터 없음</div>'; return;
  }
  var html = '';
  Object.keys(classRanks).sort().forEach(function(g){
    var clsObj = classRanks[g];
    Object.keys(clsObj).sort().forEach(function(c){
      var top3 = clsObj[c];
      html += '<div class="grade-box"><div class="grade-box-hdr">' + g + '학년 ' + c + '반</div>' +
        top3.map(function(s,i){
          return '<div class="rk"><div class="rn '+(i===0?'g':i===1?'s':i===2?'b':'')+'">'+
            (i+1)+'</div><div class="rnm">'+s.name+'</div><div class="rsc2">'+s.total+'점</div></div>';
        }).join('') + '</div>';
    });
  });
  el.innerHTML = html;
}

function loadEditRecords(){
  document.getElementById('elist').innerHTML = '<div class="empty"><span class="ei">⏳</span>불러오는 중…</div>';
  api({ action:'getAdminRecords', adminId:CONFIG.ADMIN_ID, adminPw:CONFIG.ADMIN_PW }, function(r){
    if(r && r.error){ toast('❌ ' + r.error); return; }
    G.editList = (r && r.records) ? r.records : [];
    renderEdit();
  });
}
function fEdit(f, el){
  G.editF = f;
  document.querySelectorAll('#vEdit .tb').forEach(function(b){ b.classList.remove('on'); });
  el.classList.add('on'); renderEdit();
}
function renderEdit(){
  var el  = document.getElementById('elist');
  var q   = document.getElementById('esearch').value.toLowerCase();
  var list = G.editList;
  if(G.editF === 'r') list = list.filter(function(h){ return h.score > 0; });
  if(G.editF === 'p') list = list.filter(function(h){ return h.score < 0; });
  if(q) list = list.filter(function(h){ return h.studentName.includes(q) || h.studentId.includes(q); });
  if(!list.length){ el.innerHTML = '<div class="empty"><span class="ei">📭</span>기록 없음</div>'; return; }
  el.innerHTML = list.slice(0,100).map(function(h){
    var rs = h.reason.replace(/'/g,"\\'");
    return '<div class="ri">' +
      '<div><div class="ln">' + h.studentName + ' <span style="color:#94a3b8;font-size:.62rem">(' + h.studentId + ')</span></div>' +
      '<div class="lm">' + h.date + ' · ' + h.reason + ' · ' + h.teacherId + '</div></div>' +
      '<div class="rr"><div class="rsc ' + (h.score>0?'pos':'neg') + '">' + (h.score>0?'+':'') + h.score + '점</div>' +
      '<button class="bedit" onclick="openModal(' + h.rowIndex + ',\'' + rs + '\',' + h.score + ')">수정</button>' +
      '<button class="bdel" onclick="adminDel(' + h.rowIndex + ')">삭제</button></div></div>';
  }).join('');
}
function adminDel(rowIndex){
  if(!confirm('이 기록을 삭제하시겠습니까?')) return;
  api({ action:'deleteRecord', rowIndex:rowIndex, teacherId:CONFIG.ADMIN_ID, teacherPw:CONFIG.ADMIN_PW }, function(r){
    toast(r && r.message ? r.message : String(r));
    G.editList = G.editList.filter(function(x){ return x.rowIndex !== rowIndex; });
    G.adminData = null; renderEdit();
  });
}
function openModal(rowIndex, reason, score){
  G.editRow = rowIndex;
  var sel = document.getElementById('mReason');
  sel.innerHTML = G.rewardItems.concat(G.penaltyItems).map(function(i){
    return '<option value="' + i.value + '"' + (i.value===reason?' selected':'') + '>' + i.label + '</option>';
  }).join('');
  document.getElementById('mScore').value = score;
  document.getElementById('modal').classList.add('on');
}
function closeModal(){ document.getElementById('modal').classList.remove('on'); G.editRow = null; }
function submitEdit(){
  if(!G.editRow) return;
  var reason = document.getElementById('mReason').value;
  var score  = parseFloat(document.getElementById('mScore').value);
  if(isNaN(score)){ toast('점수를 입력하세요'); return; }
  api({ action:'editRecord', rowIndex:G.editRow, reason:reason, score:score }, function(r){
    toast(r && r.message ? r.message : String(r));
    closeModal(); G.editList = []; G.adminData = null; loadEditRecords();
  });
}

function buildItemMgr(){
  buildMgrList('itemMgrR', G.rewardItems,  'r');
  buildMgrList('itemMgrP', G.penaltyItems, 'p');
}
function buildMgrList(cid, items, type){
  var el = document.getElementById(cid); if(!el) return;
  el.innerHTML = items.map(function(item, idx){
    return '<div class="item-mgr-row">' +
      '<span class="ilbl">' + item.label + '</span>' +
      '<input type="number" value="' + item.score + '" id="imsc_' + type + '_' + idx + '" step="1" style="width:55px">' +
      (item.limit !== null && item.limit !== undefined
        ? '<input type="number" value="' + item.limit + '" id="imlm_' + type + '_' + idx + '" placeholder="한도" step="1" style="width:50px" title="월 한도">'
        : '<input type="number" placeholder="한도없음" id="imlm_' + type + '_' + idx + '" step="1" style="width:50px;opacity:.4" title="월 한도">') +
      '</div>';
  }).join('');
}
function applyItemChanges(){
  G.rewardItems.forEach(function(item, idx){
    var sc = parseFloat(document.getElementById('imsc_r_' + idx).value);
    var lm = parseFloat(document.getElementById('imlm_r_' + idx).value);
    if(!isNaN(sc)) item.score = sc;
    item.limit = isNaN(lm) ? null : lm;
  });
  G.penaltyItems.forEach(function(item, idx){
    var sc = parseFloat(document.getElementById('imsc_p_' + idx).value);
    if(!isNaN(sc)) item.score = sc;
  });
  buildItems();
  if(!G.isMobile) buildFlatItems('deskP', G.penaltyItems, 'p');
  toast('✅ 항목 변경이 로컬 메모리에 임시 적용되었습니다.');
}

function loadClassStudents(){
  if(G.user.role === 'admin'){
    if(G.clsStudents.length > 0){ renderClassStudents(); return; }
    document.getElementById('clsList').innerHTML = '<div class="empty"><span class="ei">⏳</span>불러오는 중…</div>';
    api({ action:'getAllStudentsAdmin', adminId:CONFIG.ADMIN_ID, adminPw:CONFIG.ADMIN_PW }, function(r){
      if(r && r.error){ toast('❌ ' + r.error); return; }
      G.clsStudents = (r && r.students) ? r.students : [];
      var clsSet = {};
      G.clsStudents.forEach(function(s){ clsSet[s.cls] = 1; });
      var fc = document.getElementById('clsClsFilter');
      fc.innerHTML = '<option value="">전 반</option>';
      Object.keys(clsSet).sort().forEach(function(c){
        var o = document.createElement('option'); o.value=c; o.textContent=c+'반'; fc.appendChild(o);
      });
      renderClassStudents();
    });
  } else {
    var tId = document.getElementById('tId').value.trim();
    var tPw = document.getElementById('tPw').value.trim();
    if(!tId || !tPw){ document.getElementById('clsList').innerHTML='<div class="empty"><span class="ei">🔑</span>교사 정보를 먼저 입력하세요</div>'; return; }
    document.getElementById('clsList').innerHTML = '<div class="empty"><span class="ei">⏳</span>불러오는 중…</div>';
    api({ action:'getMyClassStudents', teacherId:tId, teacherPw:tPw }, function(r){
      if(r && r.error){ toast('❌ ' + r.error); return; }
      G.clsStudents = (r && r.students) ? r.students : [];
      renderClassStudents();
    });
  }
}
function loadAdminStudents(){ G.clsStudents = []; }

function renderClassStudents(){
  var el = document.getElementById('clsList');
  var g  = document.getElementById('clsGradeFilter') ? document.getElementById('clsGradeFilter').value : '';
  var c  = document.getElementById('clsClsFilter')   ? document.getElementById('clsClsFilter').value   : '';
  var q  = document.getElementById('clsSearch')      ? document.getElementById('clsSearch').value.toLowerCase() : '';
  var list = G.clsStudents;
  if(g) list = list.filter(function(s){ return String(s.grade) === g; });
  if(c) list = list.filter(function(s){ return String(s.cls) === c; });
  if(q) list = list.filter(function(s){ return s.name.includes(q) || s.id.includes(q); });
  if(!list.length){ el.innerHTML = '<div class="empty"><span class="ei">👥</span>학생 없음</div>'; return; }
  el.innerHTML = '<div class="card">' + list.map(function(s){
    var flag = s.mustChange ? '<span class="flag-badge">변경대기</span>' : '';
    var sid  = s.id.replace(/'/g,"\\'"), snm = s.name.replace(/'/g,"\\'");
    var isAdm = G.user.role === 'admin';
    return '<div class="cls-row" onclick="viewStuDetail(\'' + sid + '\',\'' + snm + '\')">' +
      '<div style="flex:1"><div class="cn">' + s.name + flag + '</div><div class="ci">' + s.id + '</div></div>' +
      '<div class="ca" onclick="event.stopPropagation()">' +
      '<button class="breset" onclick="resetPw(\'' + sid + '\',\'' + snm + '\',' + isAdm + ')">비번 초기화</button>' +
      '<button class="bchpw"  onclick="changePw(\'' + sid + '\',\'' + snm + '\',' + isAdm + ')">변경</button>' +
      '</div></div>';
  }).join('') + '</div>';
}
function resetPw(sid, nm, isAdmin){
  if(!confirm('[' + nm + '] 비밀번호를 0000으로 초기화하고\n다음 로그인 시 변경을 강제합니까?')) return;
  var tId = document.getElementById('tId').value.trim() || CONFIG.ADMIN_ID;
  var tPw = document.getElementById('tPw').value.trim() || CONFIG.ADMIN_PW;
  api({ action:'changeStudentPw', teacherId:tId, teacherPw:tPw,
        studentId:sid, newPw:'0000', mustChange:true, isAdmin:!!isAdmin }, function(r){
    toast(r && r.message ? r.message : (r && r.error ? '❌ '+r.error : String(r)));
    G.clsStudents = [];
    loadClassStudents();
  });
}
function changePw(sid, nm, isAdmin){
  var np = prompt('[' + nm + '] 새 비밀번호를 입력하세요 (4자 이상):');
  if(!np || np.length < 4){ if(np !== null) toast('4자 이상 입력해주세요'); return; }
  var tId = document.getElementById('tId').value.trim() || CONFIG.ADMIN_ID;
  var tPw = document.getElementById('tPw').value.trim() || CONFIG.ADMIN_PW;
  api({ action:'changeStudentPw', teacherId:tId, teacherPw:tPw,
        studentId:sid, newPw:np, mustChange:false, isAdmin:!!isAdmin }, function(r){
    toast(r && r.message ? r.message : (r && r.error ? '❌ '+r.error : String(r)));
    G.clsStudents = [];
    loadClassStudents();
  });
}
function viewStuDetail(sid, snm){
  document.getElementById('stuDetail').classList.remove('on');
  document.getElementById('dStuName').textContent  = snm + ' 학생 상세 이력';
  document.getElementById('dStuScore').textContent = '조회 중…';
  document.getElementById('dStuRows').innerHTML    = '<div class="empty"><span class="ei">⏳</span>불러오는 중…</div>';
  document.getElementById('stuDetail').classList.add('on');
  var tId = document.getElementById('tId').value.trim() || CONFIG.ADMIN_ID;
  var tPw = document.getElementById('tPw').value.trim() || CONFIG.ADMIN_PW;
  api({ action:'getStuRecordByTeacher', teacherId:tId, teacherPw:tPw, studentId:sid }, function(r){
    if(r && r.error){ toast('❌ ' + r.error); return; }
    document.getElementById('dStuScore').textContent = '누적 ' + (r.total||0) + '점';
    var rows = r.history || [];
    document.getElementById('dStuRows').innerHTML = rows.length ? rows.map(function(x){
      return '<div class="drow"><span class="dd">' + x.date + '</span><span class="dr">' + x.reason + '</span>' +
        '<span class="ds rsc ' + (parseFloat(x.score)>=0?'pos':'neg') + '">' + x.score + '</span>' +
        '<span class="dt">' + (x.teacherName||'') + '</span></div>';
    }).join('') : '<div class="empty"><span class="ei">📭</span>기록 없음</div>';
    document.getElementById('stuDetail').scrollIntoView({ behavior:'smooth', block:'start' });
  });
}
function closeStudentDetail(){ document.getElementById('stuDetail').classList.remove('on'); }

var toastTimer = null;
function toast(msg){
  var t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ t.classList.remove('on'); }, 3200);
}
</script>
</body>
</html>
