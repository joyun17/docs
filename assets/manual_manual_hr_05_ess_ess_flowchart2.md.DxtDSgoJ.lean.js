import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, T as createTextVNode, b as createVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const __pageData = JSON.parse("{\"title\":\"의료비 플로우차트\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_hr_05/ess/ess_flowchart2.md\",\"filePath\":\"manual/manual_hr_05/ess/ess_flowchart2.md\"}");
const _sfc_main = {name:"manual/manual_hr_05/ess/ess_flowchart2.md"};

const _hoisted_1 = { class: "no-stripe table-process" };
const _hoisted_2 = { style: {"height":"100px"} };
const _hoisted_3 = {
  colspan: "5",
  rowspan: "3",
  style: {"padding":"0"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HR05essFlowChart2 = resolveComponent("HR05essFlowChart2");
  const _component_ClientOnly = resolveComponent("ClientOnly");

  return (openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "의료비-플로우차트",
      tabindex: "-1"
    }, [
      createTextVNode("의료비 플로우차트 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#의료비-플로우차트",
        "aria-label": "Permalink to \"의료비 플로우차트\""
      }, "​")
    ], -1)),
    _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
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
        createBaseVNode("td", null, "복리후생"),
        createBaseVNode("th", null, "Task"),
        createBaseVNode("td", null, "경조금"),
        createBaseVNode("th", null, "작성일자"),
        createBaseVNode("td", null, "2020.11.03")
      ], -1)),
      _cache[3] || (_cache[3] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", { colspan: "5" }, "업무 Flow")
      ], -1)),
      createBaseVNode("tr", _hoisted_2, [
        _cache[0] || (_cache[0] = createBaseVNode("td", { style: {"padding":"1px"} }, "건강보험공단", -1)),
        createBaseVNode("td", _hoisted_3, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_HR05essFlowChart2)
            ]),
            _: 1
          })
        ])
      ]),
      _cache[4] || (_cache[4] = createBaseVNode("tr", { style: {"height":"250px"} }, [
        createBaseVNode("td", null, "인사팀")
      ], -1)),
      _cache[5] || (_cache[5] = createBaseVNode("tr", null, [
        createBaseVNode("td", null, "임직원")
      ], -1))
    ])
  ]))
}
const ess_flowchart2 = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, ess_flowchart2 as default };
