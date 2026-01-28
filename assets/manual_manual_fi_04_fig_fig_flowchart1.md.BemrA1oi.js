import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, T as createTextVNode, b as createVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const __pageData = JSON.parse("{\"title\":\"결산전표관리 플로우차트\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_fi_04/fig/fig_flowchart1.md\",\"filePath\":\"manual/manual_fi_04/fig/fig_flowchart1.md\"}");
const _sfc_main = {name:"manual/manual_fi_04/fig/fig_flowchart1.md"};

const _hoisted_1 = {
  class: "no-stripe table-process",
  style: {"margin-bottom":"0px"}
};
const _hoisted_2 = { style: {"height":"340px"} };
const _hoisted_3 = {
  rowspan: "2",
  colspan: "5",
  style: {"padding":"0"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Fi04ComFlowChart_01 = resolveComponent("Fi04ComFlowChart_01");
  const _component_ClientOnly = resolveComponent("ClientOnly");

  return (openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "결산전표관리-플로우차트",
      tabindex: "-1"
    }, [
      createTextVNode("결산전표관리 플로우차트 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#결산전표관리-플로우차트",
        "aria-label": "Permalink to \"결산전표관리 플로우차트\""
      }, "​")
    ], -1)),
    _cache[6] || (_cache[6] = createBaseVNode("br", null, null, -1)),
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
        createBaseVNode("td", null, "결산관리"),
        createBaseVNode("th", null, "Task"),
        createBaseVNode("td", null, "기준관리"),
        createBaseVNode("th", null, "작성일자"),
        createBaseVNode("td", null, "2020.11.03")
      ], -1)),
      _cache[3] || (_cache[3] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", { colspan: "5" }, "업무 Flow")
      ], -1)),
      createBaseVNode("tr", _hoisted_2, [
        _cache[0] || (_cache[0] = createBaseVNode("td", null, "경영관리팀", -1)),
        createBaseVNode("td", _hoisted_3, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_Fi04ComFlowChart_01)
            ]),
            _: 1
          })
        ])
      ]),
      _cache[4] || (_cache[4] = createBaseVNode("tr", { style: {"height":"150px"} }, [
        createBaseVNode("td", null, "구매팀")
      ], -1))
    ])
  ]))
}
const fig_flowchart1 = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, fig_flowchart1 as default };
