(this["webpackJsonpintello-gate"]=this["webpackJsonpintello-gate"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(5),c=a.n(s),i=(a(11),a(2)),m=a(3),l=a(18),d={deviceTree:{CardReader:[{driver:"MicroelectronicaNFC",modName:"CardReader",modVersion:1,port:"/dev/serial/by-id/usb-Silicon_Labs_CP2104_USB_to_UART_Bridge_Controller_014DF6DF-if00-port0",status:0,statusDescr:"Idling"}],CashAcceptor:[{driver:"ID003",modName:"Money",modVersion:3,port:"/dev/ttyS0",status:0,type:"JCM",version:"S(UKR)-03-MW SM-BDP04V029-21 28FEB17     "}],CashDispenser:[{modName:"Dispenser",modVersion:2,products:[]}],POS:[{driver:"Ingenico",modName:"POS",modVersion:1,options:[{},{merchantIdx:"1"}],port:"/dev/serial/by-id/usb-INGENICO_Ingenico_iUP250-if00",status:0}],Printer:[{driver:"SeaRRO",modName:"Printer",modVersion:1,papperState:-1,port:"/dev/serial/by-id/usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0",status:0}],ProductDispenser:[{driver:"ICT-CVD",modName:"Dispenser",modVersion:2,port:"/dev/ttyS5",products:[{class:"Fare card",count:75,name:"Kharkov fare card"}],status:0}]},deviceTreeTypeMap:{CashDispenser:[{products:[]}],POS:[{options:[{},{merchantIdx:"number"},{}]}],ProductDispenser:[{products:[{count:"number"}]}]}},u=(a(12),a(13),a(1)),p=a.n(u),o=function(e){var t=e.cardReaderItem;return n.a.createElement("div",{className:"card-reader-item"},n.a.createElement("p",null,"driver: ",n.a.createElement("span",{className:"embed-text"},t.driver)),n.a.createElement("p",null,"modName: ",n.a.createElement("span",{className:"embed-text"},t.modName)),n.a.createElement("p",null,"modVersion: ",n.a.createElement("span",{className:"embed-text"},t.modVersion)),n.a.createElement("p",null,"port: ",n.a.createElement("span",{className:"embed-text"},t.port)),n.a.createElement("p",null,"status: ",n.a.createElement("span",{className:"embed-text"},t.status)),n.a.createElement("p",null,"statusDescr: ",n.a.createElement("span",{className:"embed-text"},t.statusDescr)))},E=(p.a.shape({id:p.a.string.isRequired,driver:p.a.string.isRequired,modName:p.a.string.isRequired,modVersion:p.a.number.isRequired,port:p.a.string.isRequired,status:p.a.number.isRequired,statusDescr:p.a.string.isRequired}),function(e){var t=e.cardReader;return n.a.createElement("div",{className:"card #f5f5f5 grey lighten-4 card-reader-list"},t.map((function(e){return n.a.createElement(o,{cardReaderItem:e,key:e.id})})))}),b=function(e){var t=e.cashAcceptorItem;return n.a.createElement("div",{className:"cash-acceptor-item"},n.a.createElement("p",null,"driver: ",n.a.createElement("span",{className:"embed-text"},t.driver)),n.a.createElement("p",null,"modName: ",n.a.createElement("span",{className:"embed-text"},t.modName)),n.a.createElement("p",null,"modVersion: ",n.a.createElement("span",{className:"embed-text"},t.modVersion)),n.a.createElement("p",null,"port: ",n.a.createElement("span",{className:"embed-text"},t.port)),n.a.createElement("p",null,"status: ",n.a.createElement("span",{className:"embed-text"},t.status)),n.a.createElement("p",null,"type: ",n.a.createElement("span",{className:"embed-text"},t.type)),n.a.createElement("p",null,"version:",n.a.createElement("span",{className:"embed-text"}," ",t.version)))},N=(p.a.shape({id:p.a.string.isRequired,driver:p.a.string.isRequired,modName:p.a.string.isRequired,modVersion:p.a.number.isRequired,port:p.a.string.isRequired,status:p.a.number.isRequired,type:p.a.string.isRequired,version:p.a.string.isRequired}),function(e){var t=e.cashAcceptor;return n.a.createElement("div",{className:"card #f5f5f5 grey lighten-4 cash-acceptor-list"},t.map((function(e){return n.a.createElement(b,{cashAcceptorItem:e,key:e.id})})))}),v=function(e){var t=e.cashDispenserItem;return n.a.createElement("div",{className:"cash-dispenser-item"},n.a.createElement("p",null,"modName: ",n.a.createElement("span",{className:"embed-text"},t.modName," ")),n.a.createElement("p",null,"modVersion: ",n.a.createElement("span",{className:"embed-text"},t.modVersion)," "),n.a.createElement("ul",null,t.products.lenngth?t.products.map((function(e){return n.a.createElement("li",{key:e.id},"...content")})):n.a.createElement("p",null,"Array is empty :(")))},f=(p.a.shape({id:p.a.string.isRequired,modName:p.a.string.isRequired,modVersion:p.a.number.isRequired,products:p.a.arrayOf(p.a.shape({}))}),function(e){var t=e.cashDispenser;return n.a.createElement("div",{className:"card #f5f5f5 grey lighten-4 cash-dispenser-list"},t.map((function(e){return n.a.createElement(v,{cashDispenserItem:e,key:e.id})})))}),h=function(e){var t=e.optionItem,a=Object(r.useState)(t.merchantIdx),s=Object(m.a)(a,2),c=s[0],i=s[1];return n.a.createElement("div",{className:"card-label-wrapper"},n.a.createElement("label",{htmlFor:"merchant-inp",className:"card-label"},"merchantIdx:",n.a.createElement("input",{type:"text",id:"merchant-inp",value:c,onChange:function(e){i(e.target.value)}})))},g=function(e){var t=e.posItem;return n.a.createElement("div",{className:"pos-item"},n.a.createElement("p",null,"driver: ",n.a.createElement("span",{className:"embed-text"},t.driver)),n.a.createElement("p",null,"modName: ",n.a.createElement("span",{className:"embed-text"},t.modName)),n.a.createElement("p",null,"modVersion: ",n.a.createElement("span",{className:"embed-text"},t.modVersion)),n.a.createElement("p",null,"port: ",n.a.createElement("span",{className:"embed-text"},t.port)),n.a.createElement("p",null,"status: ",n.a.createElement("span",{className:"embed-text"},t.status)),n.a.createElement("div",{className:"card-input-list"},t.options.length?t.options.map((function(e){return n.a.createElement(h,{optionItem:e,key:e.id})})):n.a.createElement("p",null,"Array is empty :(")))},R=(p.a.shape({driver:p.a.string.isRequired,modName:p.a.string.isRequired,modVersion:p.a.number.isRequired,options:p.a.arrayOf(p.a.shape({merchantIdx:p.a.string})),port:p.a.string.isRequired,status:p.a.number.isRequired}),function(e){var t=e.POS;return n.a.createElement("div",{className:"card #f5f5f5 grey lighten-4 pos-list"},t.map((function(e){return n.a.createElement(g,{posItem:e,key:e.id})})))}),O=function(e){var t=e.printerItem;return n.a.createElement("div",{className:"printer-item"},n.a.createElement("p",null,"driver: ",n.a.createElement("span",{className:"embed-text"},t.driver)),n.a.createElement("p",null,"modName: ",n.a.createElement("span",{className:"embed-text"},t.modName)),n.a.createElement("p",null,"modVersion: ",n.a.createElement("span",{className:"embed-text"},t.modVersion)),n.a.createElement("p",null,"papperState: ",n.a.createElement("span",{className:"embed-text"},t.papperState)),n.a.createElement("p",null,"port: ",n.a.createElement("span",{className:"embed-text"},t.port)),n.a.createElement("p",null,"status: ",n.a.createElement("span",{className:"embed-text"},t.status)))},x=(p.a.shape({driver:p.a.string.isRequired,modName:p.a.string.isRequired,modVersion:p.a.number.isRequired,papperState:p.a.number.isRequired,port:p.a.string.isRequired,status:p.a.number.isRequired,id:p.a.string.isRequired}),function(e){var t=e.printerList;return n.a.createElement("div",{className:"card #f5f5f5 grey lighten-4 printer-list"},t.map((function(e){return n.a.createElement(O,{printerItem:e,key:e.id})})))}),q=function(e){var t=e.productItem,a=Object(r.useState)(t.class),s=Object(m.a)(a,2),c=s[0],i=s[1],l=Object(r.useState)(t.count),d=Object(m.a)(l,2),u=d[0],p=d[1],o=Object(r.useState)(t.class),E=Object(m.a)(o,2),b=E[0],N=E[1],v=function(e,t){var a=t.target.value;switch(e){case"class":i(a);break;case"count":p(a);break;case"name":N(a);break;default:return 1}};t.id;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card-input-warpper"},n.a.createElement("label",{htmlFor:"dispenser-inp-1",className:"card-label"},"Class:",n.a.createElement("input",{type:"text",id:"dispenser-inp-1",value:c,onChange:function(e){return v("class",e)}}))),n.a.createElement("div",{className:"card-input-warpper"},n.a.createElement("label",{htmlFor:"dispenser-inp-2",className:"card-label"},"Count:",n.a.createElement("input",{type:"text",id:"dispenser-inp-2",value:u,onChange:function(e){return v("count",e)}}))),n.a.createElement("div",{className:"card-input-warpper"},n.a.createElement("label",{htmlFor:"dispenser-inp-3",className:"card-label"},"Name:",n.a.createElement("input",{type:"text",id:"dispenser-inp-3",value:b,onChange:function(e){return v("name",e)}}))))},y={productItem:p.a.shape({class:p.a.string.isRequired,count:p.a.number.isRequired,name:p.a.string.isRequired})};q.propsTypes=y;var j=function(e){var t=e.productList;return n.a.createElement("div",{className:"dispancer-product-list card-input-list"},t.map((function(e,t){return n.a.createElement(q,{productItem:e,key:e.id})})))},I=function(e){var t=e.productDispenserItem;return n.a.createElement("div",{className:"product-dispenser-item"},n.a.createElement("p",null,"driver: ",n.a.createElement("span",{className:"embed-text"},t.driver)),n.a.createElement("p",null,"modName: ",n.a.createElement("span",{className:"embed-text"},t.modName)),n.a.createElement("p",null,"modVersion: ",n.a.createElement("span",{className:"embed-text"},t.modVersion)),n.a.createElement("p",null,"port: ",n.a.createElement("span",{className:"embed-text"},t.port)),n.a.createElement("p",null,"status: ",n.a.createElement("span",{className:"embed-text"},t.status)),n.a.createElement(j,{productList:t.products}))},D=(p.a.shape({driver:p.a.string.isRequired,modName:p.a.string.isRequired,modVersion:p.a.number.isRequired,port:p.a.string.isRequired,products:p.a.arrayOf(y.productItem).isRequired,status:p.a.number.isRequired,id:p.a.string.isRequired}),function(e){var t=e.productDispenser;return n.a.createElement("div",{className:"card #f5f5f5 grey lighten-4 product-dispenser-list"},t.map((function(e){return n.a.createElement(I,{productDispenserItem:e,key:e.id})})))}),C=function(){var e=Object(r.useState)((function(){var e=d.deviceTree,t=d.deviceTreeTypeMap;return{CardReader:e.CardReader.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)()})})),CashAcceptor:e.CashAcceptor.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)()})})),CashDispenser:e.CashDispenser.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{products:e.products.map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)()})})),id:Object(l.a)()})})),Printer:e.Printer.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)()})})),ProductDispenser:e.ProductDispenser.map((function(e,a){return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)(),products:e.products.map((function(e,r){var n=t.ProductDispenser[a].products[r];if(n&&"number"===n.count)return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)(),canEdit:!0})}))})})),POS:e.POS.map((function(e,a){return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)(),options:e.options.map((function(e,r){var n=t.POS[a].options[r];if(n&&"number"===n.merchantIdx)return Object(i.a)(Object(i.a)({},e),{},{id:Object(l.a)(),canEdit:!0})})).filter((function(e){return e}))})}))}})),t=Object(m.a)(e,2),a=t[0];t[1];return n.a.createElement("div",{className:"app"},n.a.createElement(E,{cardReader:a.CardReader}),n.a.createElement(N,{cashAcceptor:a.CashAcceptor}),n.a.createElement(f,{cashDispenser:a.CashDispenser}),n.a.createElement(R,{POS:a.POS}),n.a.createElement(x,{printerList:a.Printer}),n.a.createElement(D,{productDispenser:a.ProductDispenser}))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.32167e7f.chunk.js.map