import{d as g,j as b,c as f,e as o,O as e,u as t,o as d,i as w,x as m,y as c,F as y,X as p,K as v,J as z,Y as x,a as D}from"./runtime-dom.esm-bundler.01c691fe.js";import{_ as C,H as $,a as T}from"./ModalPeek.vue_vue_type_script_setup_true_lang.6fa5d986.js";import{S}from"./booking-confirmation-status-order-mobile.097bbaf5.js";import{t as E}from"./index.4bfdba01.js";import{u as j}from"./vue-i18n.esm-bundler.0ada7a8c.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const F="/booking-confirmation/arrow-right.svg",h="/booking-confirmation/vector.svg",B={class:"flight"},O={class:"title-flight"},A={class:"airline"},P={class:"img-airline"},K=["src"],M={class:"name-airline"},J={class:"card-flight"},V={class:"content-card"},H={class:"airport"},I=o("img",{src:F,width:"10"},null,-1),U={class:"schedule"},G=o("span",null,[o("img",{src:h,width:"4"})],-1),L=o("span",null,[o("img",{src:h,width:"4"})],-1),R=o("span",null,[o("img",{src:h,width:"4"})],-1),_=g({__name:"booking-confirmation-flight-mobile",props:{title:null,segments:null,t:null},setup(n){const{title:a,segments:r,t:s}=n,i=b(()=>r.Departure[0]),l=b(()=>r.Departure[r.Departure.length-1]);return(u,k)=>(d(),f("div",B,[o("div",O,[o("span",null,e(n.title),1)]),o("div",A,[o("div",P,[o("img",{src:t(i).AirlineImageUrl},null,8,K)]),o("div",M,[o("div",null,e(t(i).AirlineName),1),o("span",null,e(t(i).ClassCategory)+" (Subclas "+e(t(i).ClassCode)+")",1)])]),o("div",J,[o("div",V,[o("div",H,[o("span",null,e(t(i).OriginCityName)+" ("+e(t(i).Origin)+") ",1),I,o("span",null,e(t(l).DestinationCityName)+" ("+e(t(l).Destination)+")",1)]),o("div",U,[o("span",null,e(t(E)(t(i).DepartDate)),1),G,o("span",null,e(t(i).DepartTime)+" - "+e(t(l).ArriveTime),1),L,o("span",null,e(n.segments.TravelTimeDepart),1),R,o("span",null,e(n.t("isTransit",n.segments.TotalTransitDepart)),1)])])])]))}}),X="/booking-confirmation/cupon.svg",Y=o("div",{class:"title"},"Kode Promo",-1),q=o("img",{src:X},null,-1),Q=[q],W=o("div",{class:"title"},"Kode Promo",-1),Z=o("button",{class:"btn btn-primary"},"Gunakan",-1),oo=g({__name:"booking-confirmation-promocode-mobile",setup(n){const a=w(!1),r=()=>{a.value=!a.value};return(s,i)=>(d(),f(y,null,[o("div",{class:"promo-code"},[Y,o("div",{class:"cupon"},[o("a",{onClick:r},Q)])]),m(C,{show:a.value,"onUpdate:show":i[1]||(i[1]=l=>a.value=l),onClose:i[2]||(i[2]=l=>a.value=!1),class:"modal-codepromo",placeholder:"hh/bb/tt"},{footer:c(()=>[o("button",{class:"btn btn-primary-outline",onClick:i[0]||(i[0]=l=>a.value=!1)}," Batal "),Z]),default:c(()=>[W]),_:1},8,["show"])],64))}}),eo={class:"price-detail"},io={class:"title"},to={class:"price"},no={class:"subtotal"},ro={class:"total"},ao={class:"include-tax"},lo=g({__name:"booking-confirmation-detail-price-mobile",props:{reservation:null,t:null},setup(n){const{reservation:a,t:r}=n,s=b(()=>a.Currency);return(i,l)=>(d(),f("div",eo,[o("div",io,e(n.t("price_detail")),1),o("div",to,[o("div",no,[o("span",null,e(n.t("subtotal")),1),o("span",null,e(t(s))+" "+e(n.reservation.Total),1)]),o("div",ro,[o("span",null,e(n.t("total")),1),o("span",null,e(t(s))+" "+e(n.reservation.TotalAfterDiscount),1)])]),o("div",ao,"*"+e(n.t("tax")),1)]))}}),so={en:{confirmation:"Confirmation",time_limit:"Payment deadline",departure:"Departure",return:"Return",isTransit:"Direct | Transit",traveler_details:"Traveler Details",price_detail:"Price Details",subtotal_price:"Subtotal",total_price:"Total",tax:"Includes Tax",pay_now_btn:"Pay Now"},id:{confirmation:"Konfirmasi",time_limit:"Batas waktu pembayaran",departure:"Keberangkatan",return:"Kepulangan",isTransit:"Langsung | Transit",traveler_details:"Detail Penumpang",price_detail:"Detail Harga",subtotal_price:"Subtotal",total_price:"Total",tax:"Termasuk Pajak",pay_now_btn:"Bayar Sekarang"}},mo={id:"booking-confirmation-mobile"},po=g({__name:"booking-confirmation-mobile.ce",props:{data:null,reservation:null},setup(n){const a=n,{t:r}=j({messages:so}),s=p(a.reservation?JSON.parse(a.reservation):null),i=p(a.data?JSON.parse(a.data):null),l=p(i.segment1?JSON.parse(i.segment1):null),u=p(i.segment2?JSON.parse(i.segment2):null);return(k,bo)=>(d(),f("div",mo,[m($,null,{default:c(()=>[x(e(t(r)("confirmation")),1)]),_:1}),m(S,{reservation:s,t:t(r)},null,8,["reservation","t"]),m(_,{title:t(r)("departure"),segments:l.Segments,t:t(r)},null,8,["title","segments","t"]),i.trip==="2"?(d(),v(_,{key:0,title:t(r)("return"),segments:u.Segments,t:t(r)},null,8,["title","segments","t"])):z("",!0),m(oo),m(lo,{reservation:s,t:t(r)},null,8,["reservation","t"]),m(T,null,{default:c(()=>[x(e(t(r)("pay_now_btn")),1)]),_:1})]))}}),co=`:root{--el-color-primary: $primary-1}.form{margin-bottom:1rem}.form__error{margin-top:4px;color:#c62828;font-weight:500;font-size:10px}.form__info{margin-top:1rem;color:#9e9e9e;font-size:10px;font-weight:500}.form .form-input{border-bottom:2px solid #657085}.form .form-input .form-input__title{color:#657085}.form .form-input .form-input__control{display:flex;justify-content:space-between;align-items:center;margin-right:5px}.form .form-input input{border:none;font-size:16px;padding:6px 0;outline:none;width:100%}.form .form-select .form-select__title{padding:1rem 0;font-size:.875rem;font-weight:600}.form .form-select .form-select__item{display:flex;justify-content:space-between;padding:1rem 0;border-bottom:1px solid #C5CAD3;font-size:.875rem;font-weight:600;color:#2f4095}.form .form-select .form-select__item:last-child{border:none;padding-bottom:0}.form .form-info__description{margin:1rem 0;text-align:left}.form .form-info__description ul{padding-inline-start:1rem}.form .form-info__description ul li{margin-bottom:.5rem}.form.form-phone{display:flex;gap:1rem}.form.form-phone .form-phone__code{width:35%}.form.form-phone .form-phone__number{width:65%}.form.form-phone .form-input__control img{margin-right:1rem}.form.form-phone .form-phone__citizenship{width:100%!important}.form .form-country__input{padding:1rem;border:1px solid #C5CAD3}.form .form-country__input .form-input{display:flex;align-items:center;padding:0 .75rem;background:#DFE2E7;border-radius:8px}.form .form-country__input .form-input svg{margin-right:1rem}.form .form-country__input .form-input input{background:#DFE2E7;height:45px}.form .form-country__list .form-country__item{display:flex;justify-content:space-between;padding:1rem;border-bottom:1px solid #C5CAD3}.form .form-country__list .form-country__item-text{display:flex;align-items:center;gap:1rem}.form.form-dob .form-input__control .calendar{margin-right:.5rem}#mobile-header{position:relative;display:flex;justify-content:space-between;align-items:center;height:56px;width:100%;background:#2F4095;color:#fff}#mobile-header>div{display:flex;align-items:center;justify-content:center;height:100%;width:100%;text-align:center;font-size:1.25rem}#mobile-header .header-left{position:absolute;width:4rem;z-index:3}#mobile-header .header-middle{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:1.125rem;font-weight:500}#mobile-header .header-middle h1{margin-bottom:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:1.25rem;line-height:56px}#mobile-header .btn-header{min-width:0;height:100%;width:100%;padding:1rem;background-color:transparent;border:none;cursor:pointer}#mobile-footer{z-index:900;position:fixed;right:0;bottom:0;left:0;padding:1rem;background:#fefefe;border-top:1px solid #e0e0e0}#mobile-footer button{margin:auto;padding:.75rem 0;width:100%;min-width:calc(50% - .75rem);background-color:#dd2c00;color:#fefefe;border:none;border-radius:4px;font-size:.875rem;font-weight:600;text-transform:uppercase;cursor:pointer}#modal-peek-mobile{position:fixed;display:flex;align-items:flex-end;height:100%;width:100vw;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.15);z-index:2}#modal-peek-mobile .modal-peek-mobile__wrapper{width:100%;height:auto;overflow-y:auto;border-radius:.5rem .5rem 0 0;background-color:#fff}#modal-peek-mobile .modal-peek-mobile__body{padding:1rem 1.5rem}#modal-peek-mobile .modal-peek-mobile__footer{padding:16px 24px;gap:24px;position:static;display:flex;justify-content:space-between;align-items:center;background-color:#fff;border-top:1px solid #DFE2E7;border-radius:0}#modal-peek-mobile .modal-peek-mobile__footer>*{width:100%!important;margin:0}#modal-peek-mobile .modal-peek-mobile__footer .btn{gap:24px}#modal-window-mobile{position:fixed;height:100vh;width:100vw;top:0;left:0;background-color:#fefefe;z-index:1200}#modal-window-mobile .modal-window-mobile__body{height:calc(100vh - 56px);overflow-y:auto}#booking-confirmation-mobile{padding-bottom:60px}@media (min-width: 769px){#booking-confirmation-mobile{display:none}}#booking-confirmation-mobile .status-order{padding:16px;display:grid;grid-template-columns:repeat(1,1fr);gap:16px;font-family:Montserrat;font-style:normal;font-weight:500;font-size:14px;line-height:16px;border-bottom:1px solid #DFE2E7}#booking-confirmation-mobile .status-order .title{color:#757575;margin-bottom:4px}#booking-confirmation-mobile .status-order .content-booking{margin-top:4px;color:#424242}#booking-confirmation-mobile .status-order .content-status,#booking-confirmation-mobile .status-order .content-limit{margin-top:4px;color:#dd2c00}#booking-confirmation-mobile .flight{padding:16px;border:1px solid #DFE2E7}#booking-confirmation-mobile .flight .title-flight span{font-weight:600;font-size:16px;line-height:24px}#booking-confirmation-mobile .flight .airline{padding-top:8px;display:grid;grid-template-columns:10% 90%;gap:16px;align-items:center}#booking-confirmation-mobile .flight .airline .img-airline img{height:24px}#booking-confirmation-mobile .flight .airline .name-airline div{font-weight:600;font-size:14px;line-height:24px}#booking-confirmation-mobile .flight .airline .name-airline span{font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}#booking-confirmation-mobile .flight .card-flight{margin-top:8px;border:1px solid #e0e0e0;border-radius:8px}#booking-confirmation-mobile .flight .card-flight .content-card{padding:16px}#booking-confirmation-mobile .flight .card-flight .airport{font-weight:500;font-size:12px;line-height:24px;color:#424242}#booking-confirmation-mobile .flight .card-flight .airport img{margin-right:4px}#booking-confirmation-mobile .flight .card-flight .schedule{font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}#booking-confirmation-mobile .flight .card-flight .schedule img{margin:0 4px}#booking-confirmation-mobile .detail-passanger{padding:16px}#booking-confirmation-mobile .detail-passanger .title{font-weight:600;font-size:16px;line-height:24px;color:#424242}#booking-confirmation-mobile .detail-passanger .same-passanger{padding-top:18px;display:flex;justify-content:space-between}#booking-confirmation-mobile .detail-passanger .same-passanger .content{font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}#booking-confirmation-mobile .detail-passanger .same-passanger .button-same-passanger button{border-radius:32px}#booking-confirmation-mobile .detail-passanger .passanger{margin-top:18px}#booking-confirmation-mobile .detail-passanger .passanger .title-passanger{font-weight:600;font-size:14px;line-height:16px;color:#424242}#booking-confirmation-mobile .detail-passanger .passanger .luggage{margin-top:8px;padding-left:5px}#booking-confirmation-mobile .detail-passanger .passanger .luggage .text-luggage{font-weight:500;font-size:12px;line-height:16px;color:#424242;padding-left:5px}#booking-confirmation-mobile .detail-passanger .passanger hr{margin-top:16px;border:1px solid #e0e0e0}#booking-confirmation-mobile .promo-box{padding:0 16px 16px;border-bottom:1px solid #DFE2E7}#booking-confirmation-mobile .promo-box .title{font-weight:600;font-size:16px;line-height:24px;color:#424242}#booking-confirmation-mobile .promo-box div{justify-content:space-between}#booking-confirmation-mobile .price-detail{padding:16px;margin-bottom:16px}#booking-confirmation-mobile .price-detail .title{font-weight:600;font-size:16px;line-height:24px;color:#424242}#booking-confirmation-mobile .price-detail .price{margin-top:16px}#booking-confirmation-mobile .price-detail .price .subtotal{font-weight:500;font-size:12px;line-height:16px;color:#424242;display:flex;justify-content:space-between;text-transform:capitalize}#booking-confirmation-mobile .price-detail .price .total{margin-top:8px;font-weight:600;font-size:14px;line-height:24px;display:flex;justify-content:space-between;text-transform:capitalize}#booking-confirmation-mobile .price-detail .price .total span:nth-child(1){color:#424242}#booking-confirmation-mobile .price-detail .price .total span:nth-child(2){color:#dd2c00}#booking-confirmation-mobile .price-detail .include-tax{text-align:right;font-size:9px;color:#dd2c00}.btn{width:100%;margin-top:.5rem;padding:.5rem 0;border-radius:4px;font-weight:600;font-size:14px;line-height:24px;text-align:center}.btn-primary{color:#fefefe;background-color:#dd2c00;border:1px solid #dd2c00}.btn-primary-outline{color:#dd2c00;background-color:#fefefe;border:1px solid #dd2c00}.button-slide{box-sizing:border-box}.button-slide .checkbox{opacity:0;position:absolute}.button-slide .label{width:30px;height:10px;background-color:#eee;display:flex;border-radius:50px;align-items:center;justify-content:space-between;padding:5px;position:relative;transform:scale(1.5)}.button-slide .ball{width:15px;height:16px;background-color:#9e9e9e;position:absolute;top:2px;left:2px;border-radius:50%;transition:transform .2s linear}.button-slide .checkbox:checked+.label .ball{transform:translate(18px);background-color:#323c9f}@media only screen and (min-width: 600px){#booking-detail-mobile .promo-code .cupon a img{width:100%;height:130px}}
`,go=N(po,[["styles",[co]]]),fo=D(go);function yo(){customElements.define("ma-booking-confirmation-mobile",fo)}export{yo as register};