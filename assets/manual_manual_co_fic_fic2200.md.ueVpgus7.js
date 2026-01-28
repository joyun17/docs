import { _ as _export_sfc, c as createElementBlock, a as openBlock, aj as createStaticVNode } from './chunks/framework.2vc7Ue4u.js';

const _imports_0 = "/docs/assets/02userManual_co_21.BHeeuloY.png";

const __pageData = JSON.parse("{\"title\":\"요소별원가\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"manual/manual_co/fic/fic2200.md\",\"filePath\":\"manual/manual_co/fic/fic2200.md\"}");
const _sfc_main = {name:"manual/manual_co/fic/fic2200.md"};


function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, [...(_cache[0] || (_cache[0] = [
    createStaticVNode("<h1 id=\"요소별원가\" tabindex=\"-1\">요소별원가 <a class=\"header-anchor\" href=\"#요소별원가\" aria-label=\"Permalink to &quot;요소별원가&quot;\">​</a></h1><table class=\"no-stripe\"><tr><th><strong> Program ID</strong></th><td> FIC2200</td><th><strong> Program Name</strong></th><td> 요소별원가</td></tr><tr><th><strong> Overview</strong></th><td colspan=\"3\"> 전표에서 원가중심점 , 원가요소별로 집계된 결과를 조회하는 화면입니다</td></tr><tr><th><strong> 메뉴 경로</strong></th><td colspan=\"3\"> 원가관리 &gt; 원가계산 &gt; 요소별원가</td></tr></table><p><img src=\"" + _imports_0 + "\" alt=\"\" data-zoomable=\"true\"></p><h2 id=\"사용-설명\" tabindex=\"-1\">사용 설명 <a class=\"header-anchor\" href=\"#사용-설명\" aria-label=\"Permalink to &quot;사용 설명&quot;\">​</a></h2><h3 id=\"_1-요소별원가-조회\" tabindex=\"-1\">1. <strong>[ 요소별원가 조회 ]</strong> <a class=\"header-anchor\" href=\"#_1-요소별원가-조회\" aria-label=\"Permalink to &quot;1.  **[ 요소별원가 조회 ]**&quot;\">​</a></h3><ul><li><p>원가중심점은 전표의 계정과목에 따라서 다음과 같이 집계합니다.</p></li><li><p><strong>계정과목</strong> : 판관비 -&gt; <strong>원가중심점</strong> : 판관원가중심점으로 변환하여 집계</p></li><li><p><strong>계정과목</strong> : 제조비용 -&gt; <strong>원가중심점</strong> : 제조원가중심점으로 집계</p></li><li><p>원가요소는 게정과목에서 정의한 원가요소에 따라서 분류,집계합니다. 전표에서 가져오고자 하는 경우 GL전표변환을 체크합니다.</p></li><li><p><strong>재료비</strong> : 원재료,부재료 – 조업실적에서 집계</p></li><li><p><strong>인건비</strong>: 인사시스템에서 원가중심점별 세부내역 가져옴</p></li><li><p><strong>경비</strong> : 전표에서 가져옴</p></li><li><p><strong>부산물</strong> : 부산물수불에서 집계</p></li><li><p>총액을 집계하기 위하여 영업외수익 항목은 (-)로 표시합니다.</p></li></ul>", 6)
  ]))]))
}
const fic2200 = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __pageData, fic2200 as default };
