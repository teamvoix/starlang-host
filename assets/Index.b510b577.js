import{k as S,i as C,u as g,c as q,h as F,l as I,x as j,V as P,g as B,af as L,d as T,r as A,ai as o,aj as x,ak as n,al as f,an as e,aA as v,ao as p,aq as y,F as b,j as i,aB as E,at as r,as as l,aC as D,aD as G}from"./index.760fd13d.js";import{b as V,c as H,d as $,e as c,Q as z}from"./base-store.dccb69ca.js";import"./vue-i18n.runtime.255dbe4e.js";var N=S({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:_}){const{proxy:{$q:m}}=B(),a=C(j,g);if(a===g)return console.error("QPage needs to be a deep child of QLayout"),g;if(C(P,g)===g)return console.error("QPage needs to be child of QPageContainer"),g;const w=q(()=>{const h=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof s.styleFn=="function"){const Q=a.isContainer.value===!0?a.containerHeight.value:m.screen.height;return s.styleFn(h,Q)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-h+"px":m.screen.height===0?h!==0?`calc(100vh - ${h}px)`:"100vh":m.screen.height-h+"px"}}),t=q(()=>`q-page${s.padding===!0?" q-layout-padding":""}`);return()=>F("main",{class:t.value,style:w.value},I(_.default))}});const u=V(),K=T({name:"Index",setup(){H();const s=q(()=>u.getTheme),_=u.getPlans,m=u.getGroups,a=u.getEducationAdvantages,k=u.getLanguages,w=u.getAgeGroups;return{theme:s,plans:_,groups:m,educationAdvantages:a,languages:k,ageGroups:w,sectionChoice:A("about")}},methods:{}}),d=s=>(D("data-v-206c57d0"),s=s(),G(),s),O=d(()=>e("section",{id:"about"},[e("div",{class:"article-content"},[e("div",{style:{"max-width":"600px","margin-top":"30px","margin-bottom":"10px"}},[e("img",{src:"images/about.jpg",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}})]),e("div",{style:{"max-width":"800px"}},[e("p",{style:{"font-size":"50px","margin-top":"0px",color:"#2c70b1"}},"\u041E \u043D\u0430\u0441"),e("p",{style:{"font-size":"21px","font-weight":"600"}},[l(" \u0428\u043A\u043E\u043B\u0430 Starlang \u043F\u043E\u043A\u0430\u0437\u0430\u043B\u0430 \u0441\u0435\u0431\u044F \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u043E\u0439 \u043E\u043D\u043B\u0430\u0439\u043D-\u0448\u043A\u043E\u043B\u043E\u0439, \u0433\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043D\u0430 \u043D\u0430\u0448 \u0432\u0437\u0433\u043B\u044F\u0434 \u043E\u0434\u043D\u0438 \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0437\u043D\u0430\u043D\u0438\u0439. \u0412 \u043D\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0430 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0439 \u0440\u0435\u0447\u0438 \u0438 \u0430\u0443\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0442\u043E \u0435\u0441\u0442\u044C \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u043E\u0439 \u0440\u0435\u0447\u0438 \u043D\u0430 \u0441\u043B\u0443\u0445. \u0414\u0430\u043D\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u043A \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438 \u0441\u0434\u0430\u0447\u0435 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u043E\u0432 \u0432 \u0448\u043A\u043E\u043B\u0435, \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0434\u0430\u0447\u0435 \u041E\u0413\u042D \u0438 \u0415\u0413\u042D, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442 \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u043F\u0440\u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u0438 \u0441 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u044F\u0437\u044B\u043A\u0430."),e("br"),e("br"),l(" \u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043D\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043E\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0448\u043A\u043E\u043B \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043C\u044B \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u043C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0434\u043B\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u043E\u043C, \u0430 \u0438\u043C\u0435\u043D\u043D\u043E: \u0433\u043E\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043B\u0443\u0445, \u043F\u0438\u0441\u044C\u043C\u043E \u0438 \u0447\u0442\u0435\u043D\u0438\u0435."),e("br"),e("br"),l(" \u041F\u043E\u0441\u043B\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0448\u0438 \u0443\u0447\u0435\u043D\u0438\u043A\u0438 \u0443\u0436\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u0447\u0438\u0442\u0430\u0442\u044C \u0438 \u0440\u0430\u0437\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0442\u044C \u043D\u0430 \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u0442\u0435\u043C\u044B, \u0443\u0447\u0430\u0442\u0441\u044F \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u043E\u0431\u0449\u0435\u043D\u0438\u0438 \u043D\u0430 \u0438\u0437\u0443\u0447\u0430\u0435\u043C\u043E\u043C \u044F\u0437\u044B\u043A\u0435."),e("br"),e("br"),l(" \u0412 \u043D\u0430\u0448\u0435\u0439 \u043E\u043D\u043B\u0430\u0439\u043D-\u0448\u043A\u043E\u043B\u0435 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u044E\u0442 \u0443\u0447\u0438\u0442\u0435\u043B\u044F \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439. \u041A\u0430\u0436\u0434\u044B\u0439 \u0443\u0447\u0438\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u043E\u0432 \u043D\u0430 \u0437\u043D\u0430\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u0430 \u0441\u0440\u0435\u0434\u0438 \u043D\u0438\u0445: IELTS, TOEFL,TestDaf, GoetheZertifikat, TLC, OSD, DELE, TFC \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0438\u043F\u043B\u043E\u043C\u044B, \u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A."),e("br"),e("br"),l(" \u041C\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435\u043C \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u043C \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F, \u0442\u043E \u0435\u0441\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u0447\u0438\u043C, \u043D\u043E \u0438 \u0443\u0447\u0438\u043C\u0441\u044F \u0441\u0430\u043C\u0438. \u041D\u0430\u0448\u0430 \u0448\u043A\u043E\u043B\u0430 \u0440\u0430\u0441\u0442\u0435\u0442 \u0438 \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u0442, \u043A\u0430\u0436\u0434\u044B\u0439 \u0433\u043E\u0434 \u043C\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u043C \u043D\u0430\u0448 \u043A\u0430\u0434\u0440\u043E\u0432\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432, \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u043E\u0432\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432. \u0412\u0441\u0435 \u043D\u0430\u0448\u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438 \u0438\u043C\u0435\u044E\u0442 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u0441\u0435\u043C\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438, \u0447\u0442\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."),e("br"),e("br"),l(" \u0411\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0412\u0430\u0441 \u0432 \u043D\u0430\u0448\u0435\u0439 \u0448\u043A\u043E\u043B\u0435, \u0433\u0434\u0435 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F, \u043D\u043E \u0438 \u043D\u043E\u0432\u044B\u0445 \u0434\u0440\u0443\u0437\u0435\u0439, \u0438 \u043E\u043F\u044B\u0442! ")])])])],-1)),R={id:"education"},Z={class:"article-content"},J=d(()=>e("div",{style:{"max-width":"600px","margin-top":"0px","margin-bottom":"50px"}},[e("img",{src:"images/education.png",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}})],-1)),M=d(()=>e("div",{style:{"max-width":"800px"}},[e("p",{style:{"font-size":"40px","font-weight":"bolder","margin-top":"0px","margin-inline":"20px"}},"\u0412\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043E \u0421\u043A\u0430\u0439\u043F\u0443")],-1)),U={class:"row",style:{display:"flex","flex-wrap":"wrap","justify-content":"center","white-space":"pre-wrap","max-width":"1200px",color:"#2c70b1"}},W={style:{"font-size":"28px","font-weight":"bold","margin-top":"15px","margin-bottom":"10px","white-space":"pre-line"}},X=d(()=>e("div",{style:{"max-width":"800px","margin-bottom":"0px"}},[e("p",{style:{"font-size":"24px","font-weight":"bolder","margin-top":"50px","margin-inline":"20px","max-width":"650px",color:"#2c70b1"}},[l(" \u26AC \u041D\u0430\u0431\u043E\u0440 \u0432 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 2-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C."),e("br"),e("br"),l(" \u26AC \u041D\u0430\u0431\u043E\u0440 \u043D\u0430 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E \u0434\u043B\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0443\u0447\u0435\u043D\u0438\u043A\u0430 \u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430. ")])],-1)),Y={id:"prices"},ee={class:"q-pa-md row justify-center items-start q-gutter-md",style:{"padding-top":"0px","max-width":"1200px",margin:"auto"}},te={style:{"font-size":"20px"}},se=d(()=>e("br",null,null,-1)),oe={style:{"font-size":"20px"}},ae=d(()=>e("p",{style:{"font-size":"20px"}}," 60 \u043C\u0438\u043D\u0443\u0442, 2 \u0440\u0430\u0437\u0430 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E ",-1)),ne={style:{"font-size":"20px"}},ie={id:"languages"},re={class:"q-pa-md row justify-center q-gutter-sm",style:{"margin-bottom":"60px"}},le=["src"],pe=d(()=>e("br",null,null,-1)),de={key:0,style:{"font-weight":"bolder","text-align":"center","margin-bottom":"0px"}},ce={key:1,style:{"font-weight":"bolder","font-size":"11px","text-align":"center","margin-bottom":"0px"}},me=d(()=>e("br",null,null,-1)),ge={style:{"font-size":"20px","font-weight":"bolder"}},ue={style:{"font-size":"20px","font-weight":"bolder"}},he={style:{"font-size":"20px","font-weight":"bolder"}},xe={style:{"font-size":"20px","font-weight":"bolder"}};function fe(s,_,m,a,k,w){return o(),x(N,{class:f(s.theme)},{default:n(()=>[O,e("hr",{style:v(s.$q.platform.is.desktop?"margin-inline: 100px; margin-top: 80px; margin-bottom: 100px":"margin-inline: 50px; margin-top: 80px; margin-bottom: 100px")},null,4),e("section",R,[e("div",Z,[J,M,e("div",U,[(o(!0),p(b,null,y(s.educationAdvantages,t=>(o(),p("div",{key:t.text,class:"custom-item text-center",style:{"max-width":"300px"}},[i(E,{size:"50px",icon:t.icon},null,8,["icon"]),e("p",W,r(t.text),1)]))),128))]),X])]),e("hr",{style:v(s.$q.platform.is.desktop?"margin-inline: 100px; margin-top: 80px; margin-bottom: 100px":"margin-inline: 50px; margin-top: 80px; margin-bottom: 100px")},null,4),e("section",Y,[e("div",ee,[(o(!0),p(b,null,y(s.plans,t=>(o(),x($,{key:t.amount,bordered:"",class:f(`my-card text-center ${s.theme}`),style:{border:"2px solid grey",margin:"20px",width:"280px",height:"240px"}},{default:n(()=>[i(c,null,{default:n(()=>[i(z,{color:"blue-6",ripple:!1,"text-color":"white",square:"",label:`${t.amount} \u0437\u0430\u043D\u044F\u0442\u0438\u0439`,style:{"font-weight":"bolder"}},null,8,["label"])]),_:2},1024),i(c,{style:{"font-weight":"bolder"}},{default:n(()=>[e("p",te,[l(r(t.singlePrice)+"\u20BD \u0437\u0430 \u043E\u0434\u043D\u043E",1),se,l(" \u0437\u0430\u043D\u044F\u0442\u0438\u0435 ")]),e("p",oe,r(t.totalPrice)+"\u20BD \u0437\u0430 \u043F\u0430\u043A\u0435\u0442 ",1)]),_:2},1024)]),_:2},1032,["class"]))),128)),(o(!0),p(b,null,y(s.groups,t=>(o(),x($,{key:t.type,bordered:"",class:f(`my-card text-center ${s.theme}`),style:{border:"2px solid grey",margin:"20px",width:"280px",height:"240px"}},{default:n(()=>[i(c,null,{default:n(()=>[i(z,{color:"blue-6",ripple:!1,"text-color":"white",square:"",label:t.type,style:{"font-weight":"bolder"}},null,8,["label"])]),_:2},1024),i(c,{style:{"font-weight":"bolder"}},{default:n(()=>[ae,e("p",ne,r(t.price),1)]),_:2},1024)]),_:2},1032,["class"]))),128))])]),e("hr",{style:v(s.$q.platform.is.desktop?"margin-inline: 100px; margin-top: 80px; margin-bottom: 100px":"margin-inline: 50px; margin-top: 80px; margin-bottom: 100px")},null,4),e("section",ie,[e("div",re,[(o(!0),p(b,null,y(s.languages,t=>(o(),x($,{key:t.name,flat:"",bordered:"",class:"col-4 col-sm-3 col-md-2"},{default:n(()=>[i(c,{class:f(`${s.theme} text-center`)},{default:n(()=>[e("img",{src:`images/flags/${t.icon}`,style:{height:"50px",width:"70px"}},null,8,le),pe,s.$q.platform.is.desktop?(o(),p("p",de,r(t.name),1)):(o(),p("p",ce,r(t.name),1))]),_:2},1032,["class"])]),_:2},1024))),128))]),e("div",{class:"q-pa-md row justify-center items-start",style:v(s.$q.platform.is.desktop?"margin-bottom: 70px":"margin-bottom: 40px")},[(o(!0),p(b,null,y(s.ageGroups,t=>(o(),x($,{key:t.type,bordered:"",class:f(`my-card text-center ${s.theme}`),style:{border:"2px solid grey",margin:"20px",width:"450px","min-height":"400px"}},{default:n(()=>[i(c,{style:{"margin-bottom":"-20px"}},{default:n(()=>[i(z,{color:"blue-6",ripple:!1,"text-color":"white",square:"",label:t.title,style:{"font-weight":"bolder"}},null,8,["label"]),me,i(z,{color:"blue-6",ripple:!1,"text-color":"white",square:"",label:t.age,style:{"font-weight":"bolder"}},null,8,["label"])]),_:2},1024),i(c,null,{default:n(()=>[e("p",ge," \u26AC "+r(t.text1),1),e("p",ue," \u26AC "+r(t.text2),1),e("p",he," \u26AC "+r(t.text3),1),e("p",xe," \u26AC "+r(t.text4),1)]),_:2},1024)]),_:2},1032,["class"]))),128))],4)])]),_:1},8,["class"])}var we=L(K,[["render",fe],["__scopeId","data-v-206c57d0"]]);export{we as default};