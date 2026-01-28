import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, b as createVNode, aj as createStaticVNode, T as createTextVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const _imports_0 = "/docs/assets/03userManual_hr_04_3.TLOjN10n.png";

const __pageData = JSON.parse("{\"title\":\"사용자 매뉴얼 연말정산관리\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_hr_04_01/index.md\",\"filePath\":\"manual/manual_hr_04_01/index.md\"}");
const _sfc_main = {name:"manual/manual_hr_04_01/index.md"};


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
      id: "사용자-매뉴얼-연말정산관리",
      tabindex: "-1"
    }, [
      createTextVNode("사용자 매뉴얼 연말정산관리 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#사용자-매뉴얼-연말정산관리",
        "aria-label": "Permalink to \"사용자 매뉴얼 연말정산관리\""
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
    _cache[8] || (_cache[8] = createStaticVNode("", 7))
  ]))
}
const index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, index as default };
