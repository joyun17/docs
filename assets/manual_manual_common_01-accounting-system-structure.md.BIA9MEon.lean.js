import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, aj as createStaticVNode, b as createVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const __pageData = JSON.parse("{\"title\":\"회계시스템 구조\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_common/01-accounting-system-structure.md\",\"filePath\":\"manual/manual_common/01-accounting-system-structure.md\"}");
const _sfc_main = {name:"manual/manual_common/01-accounting-system-structure.md"};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FIdiagram = resolveComponent("FIdiagram");
  const _component_ClientOnly = resolveComponent("ClientOnly");

  return (openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 4)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_FIdiagram)
      ]),
      _: 1
    }),
    _cache[1] || (_cache[1] = createStaticVNode("", 22))
  ]))
}
const _01AccountingSystemStructure = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, _01AccountingSystemStructure as default };
