import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, T as createTextVNode, b as createVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const _imports_0 = "/docs/assets/02userManual_bp_flow4.CAjoc0fY.png";

const __pageData = JSON.parse("{\"title\":\"경상예산집행 플로우차트\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_bp/fib/fib_flowchart.md\",\"filePath\":\"manual/manual_bp/fib/fib_flowchart.md\"}");
const _sfc_main = {name:"manual/manual_bp/fib/fib_flowchart.md"};


const _hoisted_1 = {
  class: "no-stripe table-process",
  style: {"margin-bottom":"0px"}
};
const _hoisted_2 = {
  rowspan: "2",
  colspan: "5",
  style: {"padding":"0"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BpFibFlowChart = resolveComponent("BpFibFlowChart");
  const _component_ClientOnly = resolveComponent("ClientOnly");

  return (openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "경상예산집행-플로우차트",
      tabindex: "-1"
    }, [
      createTextVNode("경상예산집행 플로우차트 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#경상예산집행-플로우차트",
        "aria-label": "Permalink to \"경상예산집행 플로우차트\""
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
        createBaseVNode("td", null, "사업계획관리"),
        createBaseVNode("th", null, "Task"),
        createBaseVNode("td", null, "계획손익 산출"),
        createBaseVNode("th", null, "작성일자"),
        createBaseVNode("td", null, "2016.04.12")
      ], -1)),
      _cache[3] || (_cache[3] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", { colspan: "5" }, "업무 Flow")
      ], -1)),
      createBaseVNode("tr", null, [
        _cache[0] || (_cache[0] = createBaseVNode("td", null, "경영분석", -1)),
        createBaseVNode("td", _hoisted_2, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_BpFibFlowChart)
            ]),
            _: 1
          })
        ])
      ]),
      _cache[4] || (_cache[4] = createBaseVNode("tr", { style: {"height":"140px"} }, [
        createBaseVNode("td", null, "현업부서")
      ], -1))
    ]),
    _cache[7] || (_cache[7] = createBaseVNode("p", null, [
      createBaseVNode("img", {
        src: _imports_0,
        alt: "",
        "data-zoomable": "true"
      })
    ], -1))
  ]))
}
const fib_flowchart = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, fib_flowchart as default };
