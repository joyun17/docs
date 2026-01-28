import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, aj as createStaticVNode, T as createTextVNode, b as createVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const __pageData = JSON.parse("{\"title\":\"거래처관리 플로우차트\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_fi_01/com/com_flowchart.md\",\"filePath\":\"manual/manual_fi_01/com/com_flowchart.md\"}");
const _sfc_main = {name:"manual/manual_fi_01/com/com_flowchart.md"};

const _hoisted_1 = { class: "no-stripe table-process" };
const _hoisted_2 = { style: {"height":"210px"} };
const _hoisted_3 = {
  colspan: "5",
  rowspan: "3",
  style: {"padding":"0"}
};
const _hoisted_4 = { class: "no-stripe table-process" };
const _hoisted_5 = { style: {"height":"210px"} };
const _hoisted_6 = {
  colspan: "2",
  style: {"padding":"0"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FI01comFlowChart = resolveComponent("FI01comFlowChart");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_FI01ComCode = resolveComponent("FI01ComCode");

  return (openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createBaseVNode("h1", {
      id: "거래처관리-플로우차트",
      tabindex: "-1"
    }, [
      createTextVNode("거래처관리 플로우차트 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#거래처관리-플로우차트",
        "aria-label": "Permalink to \"거래처관리 플로우차트\""
      }, "​")
    ], -1)),
    _cache[11] || (_cache[11] = createBaseVNode("br", null, null, -1)),
    createBaseVNode("table", _hoisted_1, [
      _cache[1] || (_cache[1] = createBaseVNode("colgroup", null, [
        createBaseVNode("col", { width: "30px" }),
        createBaseVNode("col", { width: "100px" }),
        createBaseVNode("col", { width: "40px" }),
        createBaseVNode("col", { width: "130px" }),
        createBaseVNode("col", { width: "90px" }),
        createBaseVNode("col", { width: "250px" })
      ], -1)),
      _cache[2] || (_cache[2] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "Process"),
        createBaseVNode("td", null, "채무관리"),
        createBaseVNode("th", null, "Task"),
        createBaseVNode("td", null, "거래처 관리"),
        createBaseVNode("th", null, "작성일자"),
        createBaseVNode("td", null, "2020.11.03")
      ], -1)),
      _cache[3] || (_cache[3] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", { colspan: "5" }, "업무 Flow")
      ], -1)),
      createBaseVNode("tr", _hoisted_2, [
        _cache[0] || (_cache[0] = createBaseVNode("td", null, "회계", -1)),
        createBaseVNode("td", _hoisted_3, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_FI01comFlowChart)
            ]),
            _: 1
          })
        ])
      ]),
      _cache[4] || (_cache[4] = createBaseVNode("tr", { style: {"height":"60px"} }, [
        createBaseVNode("td", null, "인사")
      ], -1)),
      _cache[5] || (_cache[5] = createBaseVNode("tr", { style: {"height":"150px"} }, [
        createBaseVNode("td", null, "구매")
      ], -1))
    ]),
    _cache[12] || (_cache[12] = createBaseVNode("h2", {
      id: "거래처-코드",
      tabindex: "-1"
    }, [
      createTextVNode("거래처 코드 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#거래처-코드",
        "aria-label": "Permalink to \"거래처 코드\""
      }, "​")
    ], -1)),
    createBaseVNode("table", _hoisted_4, [
      _cache[7] || (_cache[7] = createBaseVNode("colgroup", null, [
        createBaseVNode("col", { width: "80px" }),
        createBaseVNode("col", { width: "300px" }),
        createBaseVNode("col", { width: "300px" })
      ], -1)),
      _cache[8] || (_cache[8] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", null, "현행 (AS-IS)"),
        createBaseVNode("th", null, [
          createBaseVNode("span", { style: {"color":"red"} }, "향후"),
          createTextVNode("(TO-BE)")
        ])
      ], -1)),
      createBaseVNode("tr", _hoisted_5, [
        _cache[6] || (_cache[6] = createBaseVNode("td", null, "코드체계", -1)),
        createBaseVNode("td", _hoisted_6, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_FI01ComCode)
            ]),
            _: 1
          })
        ])
      ]),
      _cache[9] || (_cache[9] = createBaseVNode("tr", { style: {"height":"60px"} }, [
        createBaseVNode("td", null, "주요 변화 사항"),
        createBaseVNode("td", {
          colspan: "2",
          style: {"text-align":"left"}
        }, "거래가 발생하는 사내외 모든 거래처 통합 관리")
      ], -1))
    ]),
    _cache[13] || (_cache[13] = createStaticVNode("", 1))
  ]))
}
const com_flowchart = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, com_flowchart as default };
