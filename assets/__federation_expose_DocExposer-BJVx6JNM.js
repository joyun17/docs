import { importShared } from './__federation_fn_import-BbpcK5jq.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {resolveComponent:_resolveComponent,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "vp-doc shadow-none" };

const {computed} = await importShared('vue');



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
  const _component_Content = _resolveComponent("Content");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_Content, { path: __props.path }, null, 8, ["path"])
  ]))
}
}

};
const DocExposer = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-e3d35944"]]);

export { DocExposer as default };
