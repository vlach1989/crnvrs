(this.webpackJsonpcrnvrs=this.webpackJsonpcrnvrs||[]).push([[0],{299:function(e,t,a){e.exports=a(487)},443:function(e,t,a){},486:function(e,t,a){},487:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(47),o=a.n(c),i=a(15),s=a(127),l=a(269),u=a(41),d=a(13).f.deepKeyMirror(Object(u.a)({},i.h,{},{CONFIRMED_CASES:{ADD:null}})),h=Object(u.a)({},i.b),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.CONFIRMED_CASES.ADD:return i.j.add(e,t);default:return e}};a(441),a(442),a(443),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(9),b=a.n(p),f=a(40),C=a.n(f),v=a(270),y=a.n(v),g={confirmedCasesData:"https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"},O=i.i.add(d.CONFIRMED_CASES),j={loadCsvData:function(){return function(e){y.a.parse(g.confirmedCasesData,{download:!0,header:!0,complete:function(t){if(!t||!t.data)throw Error("Data loading failed!");var a=t.data.map((function(e){var t=e["Country/Region"],a=e["Province/State"];delete e["Country/Region"],delete e["Province/State"],delete e.Lat,delete e.Long;var n=t;a&&(n+="_"+a);var r=[],c=0,o=0;return C.a.forIn(e,(function(e,t){var a=b()(t).toISOString(),n=Number(e);c=o,o=n,n&&r.push({date:a,value:n})})),{key:n,data:{name:a?"".concat(a," (").concat(t,")"):t,country:t,province:a,currentCases:o,changedDaily:o-c,cases:r}}}));e(O(a))}})}}},E=Object(u.a)({},i.a,{specific:{confirmedCases:j}}),S=a(4),k=i.k.getAll((function(e){return e.specific.confirmedCases})),w={getAll:k,getAllSortedByCases:Object(S.createSelector)([k],(function(e){return C.a.orderBy(e,["data.currentCases"],["desc"])})),getAllSortedByChange:Object(S.createSelector)([k],(function(e){return C.a.orderBy(e,["data.changedDaily"],["desc"])})),getFilteredDataByConfirmedCasesThreshold:Object(S.createSelector)([k,function(e,t){return t},function(e,t,a){return a}],(function(e,t,a){if(e.length){var n=C.a.filter(e,(function(e){return C.a.includes(a,e.key)})),r=null;return n&&(r=n.map((function(e){var a=[],n=1;return C.a.forEach(e.data.cases,(function(e){e.value>=t&&(a.push(Object(u.a)({},e,{day:n})),n++)})),Object(u.a)({},e,{data:Object(u.a)({},e.data,{cases:a})})}))),r}return null}))},A=Object(u.a)({},i.d,{specific:{confirmedCases:w}}),D=a(48),N=a(49),_=a(51),P=a(50),B=a(58),I=a(52),T=a(76),F=a(280),K=a(45),R=function(e){function t(e){return Object(D.a)(this,t),Object(_.a)(this,Object(P.a)(t).call(this,e))}return Object(I.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return this.props.data?r.a.createElement(K.b,null,r.a.createElement(F.a,{key:"time-scale-line",data:this.props.data,keySourcePath:"key",nameSourcePath:"data.name",serieDataSourcePath:"data.cases",xSourcePath:"day",ySourcePath:"value",isSerie:!0,pointRadius:3,xValuesSize:1.8,xOptions:{name:"Day"},yScaleType:"logarithmic",yValuesSize:3.8,yOptions:{name:"Confirmed cases",min:100,max:1e5,unit:"cases"},sorting:[["day","asc"]],height:18,legend:!0,withPoints:!0,pointOptions:{radius:4,showOnHover:!0}})):null}}]),t}(r.a.PureComponent),x=Object(i.m)((function(e,t){return{data:A.specific.confirmedCases.getFilteredDataByConfirmedCasesThreshold(e,t.threshold,t.countries)}}),(function(e,t){return{}}))(R),L=a(11),M=a.n(L),V=(a(486),function(e){function t(){return Object(D.a)(this,t),Object(_.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=M()("crnvrs-card",{"two-col":2===this.props.col});return r.a.createElement("div",{className:e},r.a.createElement("div",{className:"crnvrs-card-header"},r.a.createElement("div",{className:"crnvrs-card-title"},this.props.title,r.a.createElement("span",null,this.props.subtitle?"(".concat(this.props.subtitle,")"):null)),this.props.switch),r.a.createElement("div",{className:"crnvrs-card-content"},this.props.children))}}]),t}(r.a.PureComponent)),W=function(e){function t(){return Object(D.a)(this,t),Object(_.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(N.a)(t,[{key:"onOptionClick",value:function(e){e.active||this.props.onChange(e.optionKey)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"crnvrs-card-switch"},r.a.Children.map(this.props.children,(function(t){return r.a.cloneElement(t,{onClick:e.onOptionClick.bind(e,t.props)})})))}}]),t}(r.a.PureComponent),z=function(e){var t=M()("crnvrs-card-switch-option",{active:e.active,disabled:e.disabled});return r.a.createElement("div",{className:t,onClick:e.onClick},e.children)},H=[{key:"1",label:1},{key:"20",label:20},{key:"100",label:100},{key:"500",label:500},{key:"1000",label:1e3}],J=function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(_.a)(this,Object(P.a)(t).call(this,e))).state={selectedAreas:["Czechia","Italy","Norway","US_New York","Spain","Korea, South"],threshold:H[2]},a.onAreaChange=a.onAreaChange.bind(Object(B.a)(a)),a.onThresholdChange=a.onThresholdChange.bind(Object(B.a)(a)),a}return Object(I.a)(t,e),Object(N.a)(t,[{key:"onAreaChange",value:function(e){var t=e.map((function(e){return e.key})),a=C.a.sortBy(t);this.setState({selectedAreas:a})}},{key:"onThresholdChange",value:function(e){this.setState({threshold:e})}},{key:"render",value:function(){return r.a.createElement(V,{title:"Confirmed cases progress",subtitle:"from the day with at least 100 cases",col:2},r.a.createElement(T.e,{value:this.state.selectedAreas,optionLabel:"data.name",optionValue:"key",options:this.props.allAreas,multi:!0,onChange:this.onAreaChange,clearable:!1}),r.a.createElement(x,{threshold:this.state.threshold.label,countries:this.state.selectedAreas}))}}]),t}(r.a.PureComponent),q=Object(i.m)((function(e,t){return{allAreas:A.specific.confirmedCases.getAllSortedByCases(e)}}),(function(e,t){return{}}))(J),G=function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(_.a)(this,Object(P.a)(t).call(this,e))).onContentChange=a.onContentChange.bind(Object(B.a)(a)),a}return Object(I.a)(t,e),Object(N.a)(t,[{key:"onContentChange",value:function(){}},{key:"render",value:function(){return r.a.createElement(V,{title:"Cases",switch:r.a.createElement(W,{onChange:this.onContentChange},r.a.createElement(z,{optionKey:"total",active:!0},"Total"),r.a.createElement(z,{optionKey:"perCapita",disabled:!0},"Per capita"))},r.a.createElement("table",{className:"crnvrs-table"},r.a.createElement("tr",null,r.a.createElement("th",null,"Country/province"),r.a.createElement("th",{className:"crnvrs-table-column-right"},"Cases")),this.props.allAreas.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+1,". ",e.data.name),r.a.createElement("td",{className:"crnvrs-table-column-right"},e.data.currentCases.toLocaleString()))}))))}}]),t}(r.a.PureComponent),U=Object(i.m)((function(e,t){return{allAreas:A.specific.confirmedCases.getAllSortedByCases(e)}}),(function(e,t){return{}}))(G),Y=function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(_.a)(this,Object(P.a)(t).call(this,e))).onContentChange=a.onContentChange.bind(Object(B.a)(a)),a}return Object(I.a)(t,e),Object(N.a)(t,[{key:"onContentChange",value:function(){}},{key:"render",value:function(){return r.a.createElement(V,{title:"Change",switch:r.a.createElement(W,{onChange:this.onContentChange},r.a.createElement(z,{optionKey:"Daily",active:!0},"Daily"),r.a.createElement(z,{optionKey:"Weekly",disabled:!0},"Weekly"))},r.a.createElement("table",{className:"crnvrs-table"},r.a.createElement("tr",null,r.a.createElement("th",null,"Country/province"),r.a.createElement("th",{className:"crnvrs-table-column-right"},"Change")),this.props.allSortedByChange.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+1,". ",e.data.name),r.a.createElement("td",{className:"crnvrs-table-column-right"},e.data.changedDaily.toLocaleString()))}))))}}]),t}(r.a.PureComponent),$=Object(i.m)((function(e,t){return{allSortedByChange:A.specific.confirmedCases.getAllSortedByChange(e)}}),(function(e,t){return{}}))(Y),Q=function(e){var t=Object(i.f)(i.r,Object(i.q)(e));return Object(i.o)(Object(i.g)({specific:Object(i.g)({confirmedCases:m}),app:i.e,router:Object(i.n)(e)}),Object(i.l)(i.p,t,i.p,Object(i.f)(i.r),i.p))}(function(e){var t=Object(s.a)(e);return Object(l.wrapHistory)(t,{primaryFocusTarget:"body",smoothScroll:!0}),t}({basename:"/crnvrs"}));Q.dispatch(E.specific.confirmedCases.loadCsvData()),o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{store:Q},r.a.createElement("div",{className:"ptr-light"},r.a.createElement("div",{className:"crnvrs-card-row"},r.a.createElement(q,null),r.a.createElement("div",{className:"crnvrs-card-group"},r.a.createElement(U,null),r.a.createElement($,null)))))),document.getElementById("ptr")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[299,1,2]]]);
//# sourceMappingURL=main.05b5ac32.chunk.js.map