import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, b as createVNode, aj as createStaticVNode, T as createTextVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const _imports_0 = "/docs/assets/02userManual_co_4.V2TU3M7c.png";

const _imports_1 = "/docs/assets/02userManual_co_3.Bqsjnr6q.png";

const _imports_2 = "/docs/assets/02userManual_co_2.DtlMbPao.png";

const _imports_3 = "/docs/assets/02userManual_co_6.D--wpAkz.png";

const _imports_4 = "/docs/assets/02userManual_co_5.BG8Ps8o9.png";

const __pageData = JSON.parse("{\"title\":\"사용자 매뉴얼 사업계획\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_bp/index.md\",\"filePath\":\"manual/manual_bp/index.md\"}");
const _sfc_main = {name:"manual/manual_bp/index.md"};


const _hoisted_1 = { class: "no-stripe table-process" };
const _hoisted_2 = { style: {"height":"50px"} };
const _hoisted_3 = {
  rowspan: "3",
  style: {"padding":"0"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BPprocess = resolveComponent("BPprocess");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_BPsystem = resolveComponent("BPsystem");

  return (openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "사용자-매뉴얼-사업계획",
      tabindex: "-1"
    }, [
      createTextVNode("사용자 매뉴얼 사업계획 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#사용자-매뉴얼-사업계획",
        "aria-label": "Permalink to \"사용자 매뉴얼 사업계획\""
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
              createVNode(_component_BPprocess)
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
        createVNode(_component_BPsystem)
      ]),
      _: 1
    }),
    _cache[8] || (_cache[8] = createStaticVNode("<h3 id=\"구현내용\" tabindex=\"-1\">구현내용 <a class=\"header-anchor\" href=\"#구현내용\" aria-label=\"Permalink to &quot;구현내용&quot;\">​</a></h3><ul><li>제품별 계획/실적 분석</li><li>실제원가 수준의 사업계획 정보 관리</li><li>손익 추정 시스템으로 활용</li><li><strong>판매계획</strong> : 생산계획정보로 활용</li><li>원료단가 변동 반영</li><li>원단위 계획 관리(수율조정기능 관리)</li></ul><h2 id=\"메뉴구조도\" tabindex=\"-1\">메뉴구조도 <a class=\"header-anchor\" href=\"#메뉴구조도\" aria-label=\"Permalink to &quot;메뉴구조도&quot;\">​</a></h2><table class=\"no-stripe\"><tr><td><img src=\"" + _imports_0 + "\" alt=\"\" data-zoomable></td><td><img src=\"" + _imports_1 + "\" alt=\"\" data-zoomable></td><td rowspan=\"2\"><img src=\"" + _imports_2 + "\" alt=\"\" data-zoomable></td></tr><tr><td><img src=\"" + _imports_3 + "\" alt=\"\" data-zoomable></td><td><img src=\"" + _imports_4 + "\" alt=\"\" data-zoomable></td></tr></table>", 4))
  ]))
}
const index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, index as default };
