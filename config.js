// ============================================================
//  ★ config.js — 드림포인트 설정 파일
//  이 파일만 수정하면 전체 시스템이 바뀝니다
// ============================================================
const CONFIG = {

  // ① API URL (구글 앱스크립트 배포 후 붙여넣기)
  API_URL: "https://script.google.com/macros/s/AKfycbyr50MdCmhRK5f8AEDLzpcIM9CUREkkhfCpvUnTih0jdYoGwmT4geuNE6kvv5nTbqFJ/exec",

  // ② 시스템 이름
  SCHOOL_NAME:      "대생고등학교",
  SYSTEM_NAME:      "인재로 드림포인트",
  SYSTEM_SUBTITLE:  "학생 상벌점 관리 시스템",

  // ③ 관리자 계정 (config.js에서만 관리)
  ADMIN_ID: "admin",
  ADMIN_PW: "admin1234",

  // ④ 테마 색상
  COLOR: {
    primary:  "#2563eb",
    success:  "#16a34a",
    danger:   "#dc2626",
    warning:  "#f59e0b",
  },

  // ⑤ 상점 항목 — { label, value, score, limit(월한도/없으면null) }
  REWARD_ITEMS: [
    { label:"01. 친구 및 학습 도움",          value:"친구 및 학습 도움",       score:1,  limit:null },
    { label:"02. 학급 내 역할 수행 및 모범",   value:"학급 역할 및 모범",       score:2,  limit:null },
    { label:"03. 헌혈",                        value:"헌혈",                    score:2,  limit:null },
    { label:"04. 봉사활동 (4~9시간)",          value:"봉사활동 4~9시간",        score:3,  limit:null },
    { label:"05. 봉사활동 (10시간 이상)",      value:"봉사활동 10시간 이상",    score:5,  limit:null },
    { label:"06. 학교 행사 봉사 및 도우미",    value:"학교 행사 봉사",          score:2,  limit:null },
    { label:"07. 학교 명예 향상 (선행 미담)",  value:"학교 명예 향상",          score:5,  limit:null },
    { label:"08. 학습 태도 우수",              value:"학습 태도 우수",          score:1,  limit:10   },
    { label:"09. 자격증 합격 (필기)",          value:"자격증 합격(필기)",       score:3,  limit:null },
    { label:"09. 자격증 합격 (실기)",          value:"자격증 합격(실기)",       score:4,  limit:null },
    { label:"10. 교내 대회 입상 (금)",         value:"교내 대회 입상(금)",      score:4,  limit:null },
    { label:"10. 교내 대회 입상 (은)",         value:"교내 대회 입상(은)",      score:3,  limit:null },
    { label:"10. 교내 대회 입상 (동)",         value:"교내 대회 입상(동)",      score:2,  limit:null },
    { label:"11. 한 달 개근",                  value:"한 달 개근",              score:1,  limit:null },
    { label:"12. 교내 대회 참가 및 완주",      value:"교내 대회 완주",          score:2,  limit:null },
    { label:"13. 교내 대회 입상",              value:"교내 대회 입상",          score:3,  limit:null },
    { label:"14. 학교 홍보 활동 적극 참여",    value:"학교 홍보 적극 참여",     score:3,  limit:null },
    { label:"15. 학교 홍보 기여 공로 인정",    value:"학교 홍보 기여 공로",     score:5,  limit:null },
    { label:"16. 빈 교실 무단출입 제보",       value:"무단출입 제보",           score:1,  limit:null },
    { label:"17. 외부인 무단출입 제보",        value:"외부인 무단출입 제보",    score:2,  limit:null },
    { label:"18. 기물 파손 제보",              value:"기물 파손 제보",          score:2,  limit:null },
    { label:"19. 또래 갈등 중재 실천",        value:"또래 갈등 중재",          score:2,  limit:null },
    { label:"20. 분실물 습득 및 제보",        value:"분실물 습득 및 제보",     score:1,  limit:null },
    { label:"21. 교내 안전 및 질서 유지",     value:"안전 질서 유지 기여",     score:1,  limit:null },
    { label:"22. 복장 단정 및 인사 예절",     value:"복장 및 인사 예절",       score:1,  limit:5    },
    { label:"23. 교내 환경 정리 정돈",        value:"환경 정리 정돈 모범",     score:1,  limit:5    },
    { label:"24. 기타 교사 추천",             value:"교사 추천",               score:1,  limit:null },
  ],

  // ⑥ 벌점 항목
  PENALTY_ITEMS: [
    { label:"01. 미인정 지각/조퇴/결과",      value:"미인정 지각/조퇴/결과",  score:-2 },
    { label:"02. 미인정 결석",                value:"미인정 결석",             score:-3 },
    { label:"03. 쓰레기 투기 및 침·껌 뱉기", value:"쓰레기 투기",             score:-1 },
    { label:"04. 실내 과도한 소란 및 장난",   value:"실내 소란 및 장난",      score:-1 },
    { label:"05. 급식 질서 위반",             value:"급식 질서 위반",          score:-1 },
    { label:"06. 경미한 공공기물 파손",       value:"경미한 기물 파손",        score:-3 },
    { label:"07. 스마트폰/태블릿 무단 소지",  value:"스마트기기 무단 소지",   score:-2 },
    { label:"08. 이성 간 부적절한 신체 접촉", value:"이성 간 신체 접촉",      score:-3 },
    { label:"09. 금지 물품 휴대",             value:"휴대 금지 물품",          score:-5 },
    { label:"10. 복장 위반",                  value:"복장 위반",               score:-1 },
    { label:"11. 교외 흡연",                  value:"교외 흡연",               score:-5 },
    { label:"12. 두발 및 용의 규정 위반",     value:"두발 및 용의 위반",       score:-1 },
    { label:"13. 실내화 등하교",              value:"실내화 등하교",           score:-1 },
    { label:"14. 교복 변형",                  value:"교복 변형",               score:-2 },
    { label:"15. 수업 태도 불량",             value:"수업 태도 불량",          score:-1 },
    { label:"16. 수업 중 스마트기기 사용",    value:"수업 시간 기기 사용",    score:-2 },
    { label:"17. 수업 방해 및 지시 불이행",   value:"수업 방해",               score:-3 },
    { label:"18. 방과후 수업 무단 불참",      value:"방과후 무단 불참",        score:-1 },
    { label:"19. 교사 지시 불이행",           value:"교사 지시 불이행",        score:-2 },
    { label:"20. 빈 교실/실습실 무단 출입",   value:"빈 교실 무단 출입",      score:-3 },
    { label:"21. 학생 간 심한 욕설",          value:"학생 간 욕설",            score:-2 },
    { label:"22. 사이버 비방 글/사진 게시",   value:"사이버 비방",             score:-3 },
    { label:"23. 상벌점 인적사항 위조",       value:"상벌점 인적사항 위조",   score:-5 },
    { label:"24. 칭찬쿠폰 거래 및 제보",      value:"칭찬쿠폰 거래 및 제보",  score:-5 },
  ],
};
