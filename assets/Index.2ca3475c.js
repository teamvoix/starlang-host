import{k as F,i as S,u as g,c as Q,h as I,l as B,x as P,V as L,g as T,af as A,d as D,r as E,ai as n,aj as b,ak as a,al as y,ao as e,j as o,am as v,ar as C,aA as z,ap as p,aq as x,F as _,aB as G,at as c,an as d,aC as V,aD as H}from"./index.6c863571.js";import{b as N,c as K,d as q,e as u,Q as $}from"./base-store.386eeece.js";import"./vue-i18n.runtime.9eece747.js";var O=F({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:i}){const{proxy:{$q:h}}=T(),l=S(P,g);if(l===g)return console.error("QPage needs to be a deep child of QLayout"),g;if(S(L,g)===g)return console.error("QPage needs to be child of QPageContainer"),g;const w=Q(()=>{const f=(l.header.space===!0?l.header.size:0)+(l.footer.space===!0?l.footer.size:0);if(typeof t.styleFn=="function"){const j=l.isContainer.value===!0?l.containerHeight.value:h.screen.height;return t.styleFn(f,j)}return{minHeight:l.isContainer.value===!0?l.containerHeight.value-f+"px":h.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":h.screen.height-f+"px"}}),s=Q(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>I("main",{class:s.value,style:w.value},B(i.default))}});const m=N(),R=D({name:"Index",setup(){K();const t=Q(()=>m.getTheme),i=m.getPlans,h=m.getGroups,l=m.getEducationAdvantages,k=m.getLanguages,w=m.getAgeGroups;return{theme:t,plans:i,groups:h,educationAdvantages:l,languages:k,ageGroups:w,sectionChoice:E("about")}},methods:{}}),r=t=>(V("data-v-09742f86"),t=t(),H(),t),Z={class:"q-pa-md text-center"},J={id:"about"},M=r(()=>e("div",{class:"article-content"},[e("div",{style:{"max-width":"600px","margin-top":"10px","margin-bottom":"20px"}},[e("img",{src:"images/about.jpg",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}})]),e("div",{style:{"max-width":"800px"}},[e("p",{style:{"font-size":"50px","margin-top":"0px"}},"\u041E \u043D\u0430\u0441"),e("p",{style:{"font-size":"22px"}},[d(" \u0428\u043A\u043E\u043B\u0430 Starlang \u043F\u043E\u043A\u0430\u0437\u0430 \u0441\u0435\u0431\u044F \u043A\u0430\u043A \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u0443\u044E \u043E\u043D\u043B\u0430\u0439\u043D \u0448\u043A\u043E\u043B\u0443, \u0433\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043D\u0430 \u043D\u0430\u0448 \u0432\u0437\u0433\u043B\u044F\u0434 \u043E\u0434\u043D\u0438 \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0437\u043D\u0430\u043D\u0438\u0439. \u0412 \u043D\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0430 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0439 \u0440\u0435\u0447\u0438 \u0438 \u0430\u0443\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0442\u043E \u0435\u0441\u0442\u044C \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u043E\u0439 \u0440\u0435\u0447\u0438 \u043D\u0430 \u0441\u043B\u0443\u0445. \u0414\u0430\u043D\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u043A \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438 \u0441\u0434\u0430\u0447\u0438 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u043E\u0432 \u0432 \u0448\u043A\u043E\u043B\u0435, \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0441\u044F \u043A \u0441\u0434\u0430\u0447\u0435 \u041E\u0413\u042D \u0438 \u0415\u0413\u042D, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0443\u0432\u0435\u0440\u0435\u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u043F\u0440\u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u0438 \u0441 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u044F\u0437\u044B\u043A\u0430."),e("br"),e("br"),d(" \u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043D\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043E\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0448\u043A\u043E\u043B \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043C\u044B \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u043C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0434\u043B\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u043E\u043C, \u0430 \u0438\u043C\u0435\u043D\u043D\u043E: \u0433\u043E\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043B\u0443\u0445, \u043F\u0438\u0441\u044C\u043C\u043E \u0438 \u0447\u0442\u0435\u043D\u0438\u0435."),e("br"),e("br"),d(" \u041F\u043E\u0441\u043B\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0448\u0438 \u0443\u0447\u0435\u043D\u0438\u043A\u0438 \u0443\u0436\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u0447\u0438\u0442\u0430\u0442\u044C \u0438 \u0440\u0430\u0437\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0442\u044C \u043D\u0430 \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u0442\u0435\u043C\u044B, \u0443\u0447\u0430\u0442\u0441\u044F \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u043E\u0431\u0449\u0435\u043D\u0438\u0438 \u043D\u0430 \u0438\u0437\u0443\u0447\u0430\u0435\u043C\u043E\u043C \u044F\u0437\u044B\u043A\u0435."),e("br"),e("br"),d(" \u0412 \u043D\u0430\u0448\u0435\u0439 \u043E\u043D\u043B\u0430\u0439\u043D \u0448\u043A\u043E\u043B\u0435 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u044E\u0442 \u0443\u0447\u0438\u0442\u0435\u043B\u044F \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439. \u041A\u0430\u0436\u0434\u044B\u0439 \u0443\u0447\u0438\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u043E\u0432 \u043D\u0430 \u0437\u043D\u0430\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u0430 \u0441\u0440\u0435\u0434\u0438 \u043D\u0438\u0445: IELTS, TOEFL,TestDaf, GoetheZertifikat, TLC, OSD, DELE, TFC \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0438\u043F\u043B\u043E\u043C\u044B \u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A. \u041C\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435\u043C \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u043C \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F, \u0442\u043E \u0435\u0441\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u0447\u0438\u043C, \u043D\u043E \u0438 \u0443\u0447\u0438\u043C\u0441\u044F \u0441\u0430\u043C\u0438. \u041D\u0430\u0448\u0430 \u0448\u043A\u043E\u043B\u0430 \u0440\u0430\u0441\u0442\u0435\u0442 \u0438 \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u0442, \u043A\u0430\u0436\u0434\u044B\u0439 \u0433\u043E\u0434 \u043C\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u043C \u043D\u0430\u0448 \u043A\u0430\u0434\u0440\u043E\u0432\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432, \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u043E\u0432\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432. \u0412\u0441\u0435 \u043D\u0430\u0448\u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438 \u0438\u043C\u0435\u044E\u0442 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u0441\u0435\u043C\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438, \u0447\u0442\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."),e("br"),e("br"),d(" \u0411\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0412\u0430\u0441 \u0432 \u043D\u0430\u0448\u0435\u0439 \u0448\u043A\u043E\u043B\u0435, \u0433\u0434\u0435 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F, \u043D\u043E \u0438 \u043D\u043E\u0432\u044B\u0445 \u0434\u0440\u0443\u0437\u0435\u0439, \u0438 \u043E\u043F\u044B\u0442! ")])])],-1)),U=[M],W={id:"education"},X={class:"article-content"},Y=r(()=>e("div",{style:{"max-width":"600px","margin-top":"10px","margin-bottom":"50px"}},[e("img",{src:"images/education.png",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}})],-1)),ee=r(()=>e("div",{style:{"max-width":"800px"}},[e("p",{style:{"font-size":"40px","font-weight":"bolder","margin-top":"0px"}},"\u0412\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043E \u0421\u043A\u0430\u0439\u043F\u0443")],-1)),te={class:"row",style:{display:"flex","flex-wrap":"wrap","justify-content":"center","white-space":"pre-wrap"}},se={style:{"font-size":"28px","font-weight":"bold","margin-top":"15px","margin-bottom":"10px"}},oe=r(()=>e("div",{style:{"max-width":"800px"}},[e("p",{style:{"font-size":"30px","font-weight":"normal","margin-top":"50px"}},[d(" \u041D\u0430\u0431\u043E\u0440 \u0432 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0434\u0432\u0443\u0445 \u043D\u0435\u0434\u0435\u043B\u044C."),e("br"),e("br"),d(" \u041D\u0430\u0431\u043E\u0440 \u043D\u0430 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E \u0434\u043B\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0443\u0447\u0435\u043D\u0438\u043A\u0430 \u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430.")])],-1)),ne=r(()=>e("hr",{style:{margin:"40px","margin-top":"0px"}},null,-1)),ie=r(()=>e("br",null,null,-1)),le=r(()=>e("br",null,null,-1)),ae={id:"prices"},re={class:"q-pa-md row justify-center items-start q-gutter-md"},ce={style:{"font-size":"20px"}},de=r(()=>e("br",null,null,-1)),pe={style:{"font-size":"20px"}},ue={class:"q-pa-md row justify-center items-start q-gutter-md"},he=r(()=>e("p",{style:{"font-size":"20px"}}," 60 \u043C\u0438\u043D\u0443\u0442, 2 \u0440\u0430\u0437\u0430 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E ",-1)),ge={style:{"font-size":"20px"}},me={id:"languages"},fe={class:"q-pa-md row justify-center q-gutter-sm"},be=["src"],ye=r(()=>e("br",null,null,-1)),xe={key:0,style:{"font-weight":"bolder","text-align":"center","margin-bottom":"0px"}},_e={key:1,style:{"font-weight":"bolder","font-size":"11px","text-align":"center","margin-bottom":"0px"}},we={class:"q-pa-md row justify-center items-start"},ve=r(()=>e("br",null,null,-1)),Ce={style:{"font-size":"18px","font-weight":"bolder"}},ze={style:{"font-size":"18px","font-weight":"bolder"}},qe={style:{"font-size":"18px","font-weight":"bolder"}},$e={style:{"font-size":"18px","font-weight":"bolder"}};function ke(t,i,h,l,k,w){return n(),b(O,{class:y(t.theme)},{default:a(()=>[e("div",Z,[o(v,{label:"\u041E \u043D\u0430\u0441",size:"large",class:"q-mt-md",onClick:i[0]||(i[0]=s=>t.sectionChoice="about"),color:t.sectionChoice=="about"?"blue-7":"blue-5","text-color":"white",style:{"padding-inline":"20px","margin-inline":"10px"},dense:""},null,8,["color"]),o(v,{label:"\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",size:"large",class:"q-mt-md",onClick:i[1]||(i[1]=s=>t.sectionChoice="education"),color:t.sectionChoice=="education"?"blue-7":"blue-5","text-color":"white",style:{"padding-inline":"20px","margin-inline":"10px"},dense:""},null,8,["color"]),o(v,{label:"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",size:"large",class:"q-mt-md",onClick:i[2]||(i[2]=s=>t.sectionChoice="prices"),color:t.sectionChoice=="prices"?"blue-7":"blue-5","text-color":"white",style:{"padding-inline":"20px","margin-inline":"10px"},dense:""},null,8,["color"]),o(v,{label:"\u042F\u0437\u044B\u043A\u0438",size:"large",class:"q-mt-md",onClick:i[3]||(i[3]=s=>t.sectionChoice="languages"),color:t.sectionChoice=="languages"?"blue-7":"blue-5","text-color":"white",style:{"padding-inline":"20px","margin-inline":"10px"},dense:""},null,8,["color"])]),C(e("section",J,U,512),[[z,t.sectionChoice=="about"]]),C(e("section",W,[e("div",X,[Y,ee,e("div",te,[(n(!0),p(_,null,x(t.educationAdvantages,s=>(n(),p("div",{key:s.text,class:"custom-item text-center"},[o(G,{size:"50px",icon:s.icon},null,8,["icon"]),e("p",se,c(s.text),1)]))),128))]),oe,ne,ie,le])],512),[[z,t.sectionChoice=="education"]]),C(e("section",ae,[e("div",re,[(n(!0),p(_,null,x(t.plans,s=>(n(),b(q,{key:s.amount,bordered:"",class:y(`my-card text-center ${t.theme}`),style:{border:"2px solid grey",margin:"20px"}},{default:a(()=>[o(u,null,{default:a(()=>[o($,{color:"blue-5",ripple:!1,"text-color":"white",square:"",label:`${s.amount} \u0437\u0430\u043D\u044F\u0442\u0438\u0439`,style:{"font-weight":"bolder"}},null,8,["label"])]),_:2},1024),o(u,null,{default:a(()=>[e("p",ce,[d(c(s.singlePrice)+"\u20BD \u0437\u0430 \u043E\u0434\u043D\u043E",1),de,d(" \u0437\u0430\u043D\u044F\u0442\u0438\u0435 ")]),e("p",pe,c(s.totalPrice)+"\u20BD \u0437\u0430 \u043F\u0430\u043A\u0435\u0442 ",1)]),_:2},1024)]),_:2},1032,["class"]))),128))]),e("div",ue,[(n(!0),p(_,null,x(t.groups,s=>(n(),b(q,{key:s.type,bordered:"",class:y(`my-card text-center ${t.theme}`),style:{border:"2px solid grey",margin:"20px"}},{default:a(()=>[o(u,null,{default:a(()=>[o($,{color:"blue-5",ripple:!1,"text-color":"white",square:"",label:s.type,style:{"font-weight":"bolder"}},null,8,["label"])]),_:2},1024),o(u,null,{default:a(()=>[he,e("p",ge,c(s.price),1)]),_:2},1024)]),_:2},1032,["class"]))),128))])],512),[[z,t.sectionChoice=="prices"]]),C(e("section",me,[e("div",fe,[(n(!0),p(_,null,x(t.languages,s=>(n(),b(q,{key:s.name,flat:"",bordered:"",class:"col-4 col-sm-3 col-md-2"},{default:a(()=>[o(u,{class:y(`${t.theme} text-center`)},{default:a(()=>[e("img",{src:`images/flags/${s.icon}`,style:{height:"50px",width:"70px"}},null,8,be),ye,t.$q.platform.is.desktop?(n(),p("p",xe,c(s.name),1)):(n(),p("p",_e,c(s.name),1))]),_:2},1032,["class"])]),_:2},1024))),128))]),e("div",we,[(n(!0),p(_,null,x(t.ageGroups,s=>(n(),b(q,{key:s.type,bordered:"",class:y(`my-card text-center ${t.theme}`),style:{border:"2px solid grey",margin:"20px"}},{default:a(()=>[o(u,{style:{"margin-bottom":"-20px"}},{default:a(()=>[o($,{color:"blue-5",ripple:!1,"text-color":"white",square:"",label:s.title,style:{"font-weight":"bolder"}},null,8,["label"]),ve,o($,{color:"blue-5",ripple:!1,"text-color":"white",square:"",label:s.age,style:{"font-weight":"bolder"}},null,8,["label"])]),_:2},1024),o(u,null,{default:a(()=>[e("p",Ce," \u26AC "+c(s.text1),1),e("p",ze," \u26AC "+c(s.text2),1),e("p",qe," \u26AC "+c(s.text3),1),e("p",$e," \u26AC "+c(s.text4),1)]),_:2},1024)]),_:2},1032,["class"]))),128))])],512),[[z,t.sectionChoice=="languages"]])]),_:1},8,["class"])}var Fe=A(R,[["render",ke],["__scopeId","data-v-09742f86"]]);export{Fe as default};
