import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, T as createTextVNode, b as createVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const __pageData = JSON.parse("{\"title\":\"퇴직금정산 플로우차트\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_hr_04_02/hra/hra_flowchart.md\",\"filePath\":\"manual/manual_hr_04_02/hra/hra_flowchart.md\"}");
const _sfc_main = {name:"manual/manual_hr_04_02/hra/hra_flowchart.md"};

const _hoisted_1 = { class: "no-stripe table-process" };
const _hoisted_2 = { style: {"height":"300px"} };
const _hoisted_3 = {
  colspan: "3",
  style: {"padding":"0"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HR0402hraFlowChart = resolveComponent("HR0402hraFlowChart");
  const _component_ClientOnly = resolveComponent("ClientOnly");

  return (openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createBaseVNode("h1", {
      id: "퇴직금정산-플로우차트",
      tabindex: "-1"
    }, [
      createTextVNode("퇴직금정산 플로우차트 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#퇴직금정산-플로우차트",
        "aria-label": "Permalink to \"퇴직금정산 플로우차트\""
      }, "​")
    ], -1)),
    _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
    createBaseVNode("table", _hoisted_1, [
      _cache[0] || (_cache[0] = createBaseVNode("colgroup", null, [
        createBaseVNode("col", { width: "229px" }),
        createBaseVNode("col", { width: "229px" }),
        createBaseVNode("col", { width: "229px" })
      ], -1)),
      _cache[1] || (_cache[1] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "인건비관리"),
        createBaseVNode("th", null, "정산관리"),
        createBaseVNode("th", null, "회계관리")
      ], -1)),
      createBaseVNode("tr", _hoisted_2, [
        createBaseVNode("td", _hoisted_3, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_HR0402hraFlowChart)
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]))
}
const hra_flowchart = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, hra_flowchart as default };
