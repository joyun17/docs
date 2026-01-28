import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './chunks/03userManual_hr_01_3.Dqx6Nq7d.js';
import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, b as createVNode, aj as createStaticVNode, T as createTextVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const __pageData = JSON.parse("{\"title\":\"사용자 매뉴얼 근태관리\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_hr_02/index.md\",\"filePath\":\"manual/manual_hr_02/index.md\"}");
const _sfc_main = {name:"manual/manual_hr_02/index.md"};


const _hoisted_1 = { class: "no-stripe table-process" };
const _hoisted_2 = { style: {"height":"50px"} };
const _hoisted_3 = {
  rowspan: "3",
  style: {"padding":"0"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HRprocess = resolveComponent("HRprocess");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_HRdiagram = resolveComponent("HRdiagram");

  return (openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "사용자-매뉴얼-근태관리",
      tabindex: "-1"
    }, [
      createTextVNode("사용자 매뉴얼 근태관리 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#사용자-매뉴얼-근태관리",
        "aria-label": "Permalink to \"사용자 매뉴얼 근태관리\""
      }, "​")
    ], -1)),
    _cache[6] || (_cache[6] = createBaseVNode("h2", {
      id: "업무프로세스-구조도",
      tabindex: "-1"
    }, [
      createTextVNode("업무프로세스 구조도 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#업무프로세스-구조도",
        "aria-label": "Permalink to \"업무프로세스 구조도\""
      }, "​")
    ], -1)),
    createBaseVNode("table", _hoisted_1, [
      _cache[1] || (_cache[1] = createBaseVNode("colgroup", null, [
        createBaseVNode("col", { width: "20px" }),
        createBaseVNode("col", { width: "638px" })
      ], -1)),
      _cache[2] || (_cache[2] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", null, "구성도")
      ], -1)),
      createBaseVNode("tr", _hoisted_2, [
        _cache[0] || (_cache[0] = createBaseVNode("td", null, "Chain", -1)),
        createBaseVNode("td", _hoisted_3, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_HRprocess)
            ]),
            _: 1
          })
        ])
      ]),
      _cache[3] || (_cache[3] = createBaseVNode("tr", { style: {"height":"80px"} }, [
        createBaseVNode("td", null, "Process")
      ], -1)),
      _cache[4] || (_cache[4] = createBaseVNode("tr", null, [
        createBaseVNode("td", null, "Task")
      ], -1))
    ]),
    _cache[7] || (_cache[7] = createBaseVNode("h2", {
      id: "시스템-구성도",
      tabindex: "-1"
    }, [
      createTextVNode("시스템 구성도 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#시스템-구성도",
        "aria-label": "Permalink to \"시스템 구성도\""
      }, "​")
    ], -1)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_HRdiagram)
      ]),
      _: 1
    }),
    _cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"추진방향\" tabindex=\"-1\">추진방향 <a class=\"header-anchor\" href=\"#추진방향\" aria-label=\"Permalink to &quot;추진방향&quot;\">​</a></h2><ul><li>인사관리전반 프로세스 전산화</li><li>단일 환경으로 인사시스템/ESS 업무 수행</li><li><strong>인사관리영역</strong>: 인사정보~근태~급여</li><li><strong>인사개발영역</strong>: 교육</li><li><strong>ESS기능 제공</strong>: 개인별 인사정보 관리</li></ul><hr><br><table class=\"no-stripe\"><colgroup><col width=\"90px\"><col width=\"90px\"><col width=\"200px\"><col width=\"200px\"><col width=\"110\"></colgroup><tr><th colspan=\"2\" style=\"text-align:center;\">분류</th><th style=\"text-align:center;\">인사</th><th style=\"text-align:center;\">ESS</th><th style=\"text-align:center;\">비고</th></tr><tr><td colspan=\"2\" style=\"text-align:center;\">정의</td><td style=\"text-align:center;\">인사관리(HRM) 제반 관리 시스템(인사기준정보-근태-급여)</td><td style=\"text-align:center;\">직원 개인별 인사정보 조회(ESS) 및 실적 관리 시스템 (교육)</td><td></td></tr><tr><td colspan=\"2\" style=\"text-align:center;\">시스템 구성</td><td style=\"text-align:center;\">J.Platform 기반</td><td style=\"text-align:center;\">WEB 기반</td><td style=\"text-align:center;\"></td></tr><tr><td colspan=\"2\" style=\"text-align:center;\">사용자</td><td style=\"text-align:center;\">인사담당자</td><td style=\"text-align:center;\">전직원</td><td></td></tr><tr><td rowspan=\"6\">프로세스</td><td>인사행정</td><td>○ 조직정보 관리<br>○ 공통정보 관리<br>○ 인사기록카드<br>○ 인사발령<br>○ 인사통계</td><td>○ 조직도 조회<br>○ 개인 인사정보 조회<br>○ 주소 등 일부 수정</td><td></td></tr><tr><td>근태관리</td><td>○ 근태기준정보 (근무일정, 근무조, 교대조 등)<br>○ 기술직 근태신청<br>○ 일일 근태실적 관리<br>○ 월 근태실적 관리</td><td>○ 일반직 근태신청<br>○ 휴일근무신청(교통비,수당) 등<br>○ 개인근태정보 조회</td><td></td></tr><tr><td>급여관리</td><td>○ 급여기준정보 (급여체계, 급여항목 등)<br>○ 급상여계산<br>○ 급상여회계처리<br>○ 소득세 원천징수 회계처리 등</td><td>○ 급상여 조회(명세서)<br>○ 연봉계약서 조회</td><td></td></tr><tr><td>정산관리</td><td>○ 연말정산 / 중도퇴사자정산 / 퇴직금<br>○ 원천세, 지급명세서</td><td>○ 연말정산 결과 조회</td><td></td></tr><tr><td>복리후생</td><td>○ 4대보험 관리<br>○ 대여금관리</td><td>○ 학자금, 의료비 등 개인지원비용 처리<br>○ 개인별 대여금 현황 관리</td><td></td></tr><tr><td>교육관리</td><td></td><td>○ 교육계획 및 교육과정 관리 <br>○ 수강신청<br>○ 교육비신청<br>○ 교육실적 관리</td><td></td></tr></table><h2 id=\"메뉴구성도\" tabindex=\"-1\">메뉴구성도 <a class=\"header-anchor\" href=\"#메뉴구성도\" aria-label=\"Permalink to &quot;메뉴구성도&quot;\">​</a></h2><table class=\"no-stripe\"><tr><td rowspan=\"2\"><img src=\"" + _imports_0 + "\" alt=\"\" data-zoomable></td><td rowspan=\"2\"><img src=\"" + _imports_1 + "\" alt=\"\" data-zoomable></td><td><img src=\"" + _imports_2 + "\" alt=\"\" data-zoomable></td></tr></table>", 7))
  ]))
}
const index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, index as default };
