import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, b as createVNode } from './framework.2vc7Ue4u.js';

const _hoisted_1 = { class: "vp-doc shadow-none" };


const _sfc_main = {
  __name: 'DocExposer',
  props: {
    path: {
        type: String,
        default: '/' // 예: '/manual/manual_common/01-accounting-system-structure'
    }
},
  setup(__props) {

return (_ctx, _cache) => {
  const _component_Content = resolveComponent("Content");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Content, { path: __props.path }, null, 8, ["path"])
  ]))
}
}

};
const DocExposer = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-d9eb2c82"]]);

export { DocExposer as default };
