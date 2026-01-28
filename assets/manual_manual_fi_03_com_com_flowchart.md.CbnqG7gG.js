import { _ as _export_sfc, G as resolveComponent, c as createElementBlock, a as openBlock, e as createBaseVNode, T as createTextVNode, b as createVNode, w as withCtx } from './chunks/framework.2vc7Ue4u.js';

const __pageData = JSON.parse("{\"title\":\"자산 기준정보 관리 플로우차트\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_fi_03/com/com_flowchart.md\",\"filePath\":\"manual/manual_fi_03/com/com_flowchart.md\"}");
const _sfc_main = {name:"manual/manual_fi_03/com/com_flowchart.md"};

const _hoisted_1 = { class: "no-stripe table-process" };
const _hoisted_2 = {
  colspan: "5",
  rowspan: "3",
  style: {"padding":"0"}
};
const _hoisted_3 = { class: "no-stripe table-process" };
const _hoisted_4 = { style: {"height":"210px"} };
const _hoisted_5 = { style: {"text-align":"left","vertical-align":"top"} };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FI03comFlowChart = resolveComponent("FI03comFlowChart");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_FI03ComCode2 = resolveComponent("FI03ComCode2");

  return (openBlock(), createElementBlock("div", null, [
    _cache[12] || (_cache[12] = createBaseVNode("h1", {
      id: "자산-기준정보-관리-플로우차트",
      tabindex: "-1"
    }, [
      createTextVNode("자산 기준정보 관리 플로우차트 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#자산-기준정보-관리-플로우차트",
        "aria-label": "Permalink to \"자산 기준정보 관리 플로우차트\""
      }, "​")
    ], -1)),
    _cache[13] || (_cache[13] = createBaseVNode("br", null, null, -1)),
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
        createBaseVNode("td", null, "자산관리"),
        createBaseVNode("th", null, "Task"),
        createBaseVNode("td", null, "기준정보 관리"),
        createBaseVNode("th", null, "작성일자"),
        createBaseVNode("td", null, "2020.11.03")
      ], -1)),
      _cache[3] || (_cache[3] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", { colspan: "5" }, "업무 Flow")
      ], -1)),
      createBaseVNode("tr", null, [
        _cache[0] || (_cache[0] = createBaseVNode("td", null, "재무회계", -1)),
        createBaseVNode("td", _hoisted_2, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_FI03comFlowChart)
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _cache[14] || (_cache[14] = createBaseVNode("h2", {
      id: "자산번호-체계",
      tabindex: "-1"
    }, [
      createTextVNode("자산번호 체계 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#자산번호-체계",
        "aria-label": "Permalink to \"자산번호 체계\""
      }, "​")
    ], -1)),
    createBaseVNode("table", _hoisted_3, [
      _cache[10] || (_cache[10] = createBaseVNode("colgroup", null, [
        createBaseVNode("col", { width: "80px" }),
        createBaseVNode("col", { width: "270px" }),
        createBaseVNode("col", { width: "270px" }),
        createBaseVNode("col", { width: "60px" })
      ], -1)),
      _cache[11] || (_cache[11] = createBaseVNode("tr", null, [
        createBaseVNode("th", null, "구분"),
        createBaseVNode("th", null, "현행 (AS-IS)"),
        createBaseVNode("th", null, [
          createBaseVNode("span", { style: {"color":"red"} }, "향후"),
          createTextVNode("(TO-BE)")
        ]),
        createBaseVNode("th", null, "비고")
      ], -1)),
      createBaseVNode("tr", _hoisted_4, [
        _cache[7] || (_cache[7] = createBaseVNode("td", null, "코드체계", -1)),
        createBaseVNode("td", _hoisted_5, [
          _cache[4] || (_cache[4] = createTextVNode(" ○ ", -1)),
          _cache[5] || (_cache[5] = createBaseVNode("span", { style: {"color":"blue"} }, "총 9자리", -1)),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_FI03ComCode2)
            ]),
            _: 1
          }),
          _cache[6] || (_cache[6] = createBaseVNode("p", { style: {"line-height":"18px"} }, [
            createBaseVNode("span", { style: {"color":"blue"} }, "1 (2)"),
            createTextVNode(" : 자산 대분류"),
            createBaseVNode("br"),
            createBaseVNode("span", { style: {"color":"blue"} }, "2 (2)"),
            createTextVNode(" : 자산 중분류"),
            createBaseVNode("br"),
            createBaseVNode("span", { style: {"color":"blue"} }, "3 (5)"),
            createTextVNode(" : 일련번호"),
            createBaseVNode("br")
          ], -1))
        ]),
        _cache[8] || (_cache[8] = createBaseVNode("td", { style: {"text-align":"left","vertical-align":"top"} }, [
          createTextVNode("○ "),
          createBaseVNode("span", { style: {"color":"blue"} }, "좌동"),
          createBaseVNode("br"),
          createBaseVNode("br"),
          createBaseVNode("span", null, "[자산 대분류 중분류]"),
          createBaseVNode("table", { class: "table-process no-stripe table-non-padding" }, [
            createBaseVNode("colgroup", null, [
              createBaseVNode("col", { width: "60px" }),
              createBaseVNode("col", { width: "60px" }),
              createBaseVNode("col", { width: "120px" })
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "코드"),
              createBaseVNode("th", null, "구분"),
              createBaseVNode("th", null, "자산구분")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "1100"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "토지")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "1200"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "건물")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "1300"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "구축물")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "1400"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "기계장치")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "1500"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "차량운반구")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "1600"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "공구와기구")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "1700"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "비품")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "2100"),
              createBaseVNode("td", null, "유형"),
              createBaseVNode("td", null, "건설중인자산")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "4210"),
              createBaseVNode("td", null, "무형"),
              createBaseVNode("td", null, "산업재산권-특허권")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "4220"),
              createBaseVNode("td", null, "무형"),
              createBaseVNode("td", null, "산업재산권-실용신안권")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "4230"),
              createBaseVNode("td", null, "무형"),
              createBaseVNode("td", null, "산업재산권-의장권")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "4240"),
              createBaseVNode("td", null, "무형"),
              createBaseVNode("td", null, "산업재산권-상표권")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "4500"),
              createBaseVNode("td", null, "무형"),
              createBaseVNode("td", null, "전기가스시설이용권")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "4800"),
              createBaseVNode("td", null, "무형"),
              createBaseVNode("td", null, "소프트웨어")
            ])
          ])
        ], -1)),
        _cache[9] || (_cache[9] = createBaseVNode("td", null, null, -1))
      ])
    ])
  ]))
}
const com_flowchart = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, com_flowchart as default };
