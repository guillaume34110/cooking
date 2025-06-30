(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const H={language:"fr",slots:[{id:"slot-0",isEmpty:!0,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,showingIngredients:!1}],isModalOpen:!1};let i={...H};const S=()=>i.language,j=()=>[...i.slots],d=e=>i.slots.find(t=>t.id===e),N=()=>i.slots.some(e=>!e.isEmpty),z=()=>i.selectedSlotId,F=()=>i.selectedRecipeId,V=e=>{i={...i,language:e}},y=e=>{i={...i,isModalOpen:e}},U=e=>{i={...i,selectedSlotId:e}},W=e=>{i={...i,selectedRecipeId:e}},K=()=>{const e=`slot-${i.slots.length}`,t={id:e,isEmpty:!0,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,showingIngredients:!1};return i={...i,slots:[...i.slots,t]},e},l=(e,t)=>{i={...i,slots:i.slots.map(n=>n.id===e?{...n,...t}:n)}},G=(e,t)=>{l(e,{isEmpty:!1,recipeId:t,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,showingIngredients:!0})},J=e=>{l(e,{showingIngredients:!1,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0})},Q=e=>{l(e,{isEmpty:!0,recipeId:void 0,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0,showingIngredients:!1})},X=()=>"/cooking/".replace(/\/$/,""),L=e=>{const t=X(),n=e.startsWith("/")?e:`/${e}`;return`${t}${n}`},o=e=>L(`/assets/images/${e}`),w=e=>L(`/videos/${e}`),P=[{id:"crepe-classique",title:{fr:"Crêpe classique",th:"เครปคลาสสิก"},description:{fr:"Une délicieuse crêpe traditionnelle française",th:"เครปแบบดั้งเดิมของฝรั่งเศสที่อร่อย"},ingredients:{fr:["250g de farine","4 œufs","500ml de lait","1 pincée de sel","50g d'huile de coco","huile pour la cuisson"],th:["แป้งสาลี 250 กรัม","ไข่ไก่ 4 ฟอง","นม 500 มล.","เกลือเล็กน้อย","น้ำมันมะพร้าว 50 กรัม","น้ำมันสำหรับทอด"]},image:o("ingredientpatecrepe.png"),video:w("crepe-classique.mp4"),steps:[{text:{fr:"Mélanger la farine et les œufs et le lait le sel dans un mixeur",th:"ผสมแป้ง ไข่ และนมในเครื่องปั่น"},duration:10,media:{type:"image",url:o("melangemixeur.png")}},{text:{fr:"mixer",th:"เปิดเครื่องปั่น"},duration:40,media:{type:"image",url:o("mixermixin.webp")}},{text:{fr:"Chauffer la poêle et ajouter un peu d'huile 180-200",th:"ตั้งกระทะให้ร้อน แล้วใส่น้ำมันเล็กน้อย 180-200"},duration:60,media:{type:"image",url:o("crepeierchaude.png")}},{text:{fr:"Verser la pâte et étaler uniformément",th:"เทแป้งลงแล้วกระจายให้ทั่ว"},duration:45,media:{type:"image",url:o("crepiereetalage.png")}},{text:{fr:"Cuire 2 minutes puis retourner la crêpe",th:"ปิ้ง 2 นาทีแล้วพลิก"},duration:120,media:{type:"image",url:o("cuisson.png")}},{text:{fr:"Cuire encore 1 minute et servir",th:"ปิ้งอีก 1 นาทีแล้วเสิร์ฟ"},duration:60,media:{type:"image",url:o("cuisson.png")}}]},{id:"savon-barre-classique",title:{fr:"Savon en barre classique",th:"สบู่ก้อนสูตรมาตรฐาน"},description:{fr:"Savon saponifié à froid à base d’huile de palme, coco, et huiles fluides, enrichi en lait de coco, talc, et huiles essentielles.",th:"สบู่กวนเย็นทำจากน้ำมันปาล์ม น้ำมันมะพร้าว และน้ำมันเหลว เติมน้ำนมมะพร้าว แป้งทัลก์ และน้ำมันหอมระเหย"},ingredients:{fr:["600g d’huile de palme","150g d’huile de coco","250g d’huile fluide (tournesol, colza, riz, maïs, soja, coco)","142g de soude (NaOH)","325g d’eau (dont 50g à retirer pour la trace)","30g de lait de coco","30g de poudre de talc","80g d’huile essentielle","3g de poudre colorée (paprika, matcha, charbon – optionnel)"],th:["น้ำมันปาล์ม 600 กรัม","น้ำมันมะพร้าว 150 กรัม","น้ำมันเหลว 250 กรัม (ดอกทานตะวัน คาโนลา ข้าว ข้าวโพด ถั่วเหลือง มะพร้าว)","โซดาไฟ 142 กรัม","น้ำ 325 กรัม (แยกไว้ 50 กรัมสำหรับตอน Trace)","กะทิ 30 กรัม","แป้งทัลก์ 30 กรัม","น้ำมันหอมระเหย 80 กรัม","ผงสี 3 กรัม (ปาปริกา ชาเขียว ถ่านไม้ – ตามต้องการ)"]},image:o("barsoap.png"),video:w("savon-intro.mp4"),steps:[{text:{fr:"Peser et mélanger 600g d’huile de palme, 150g d’huile de coco et 250g d’huile fluide dans un grand récipient. Réserver 50g pour la trace.",th:"ชั่งและผสมน้ำมันปาล์ม 600 กรัม น้ำมันมะพร้าว 150 กรัม และน้ำมันเหลว 250 กรัม ในภาชนะขนาดใหญ่ แยกไว้ 50 กรัมสำหรับตอน Trace"},duration:60,media:{type:"image",url:o("huilesinbowl.png")}},{text:{fr:"Dissoudre 142g de soude dans 325g d’eau. Attention aux vapeurs.",th:"ละลายโซดาไฟ 142 กรัม ในน้ำ 325 กรัม ระวังไอร้อน"},duration:120,media:{type:"image",url:o("soudemix.png")}},{text:{fr:"Mélanger ensemble dans un petit récipient : 50g d’huile réservée, 30g de lait de coco, 30g de talc, 80g d’huile essentielle, et 3g de poudre colorée (facultatif).",th:"ผสมส่วนผสมทั้งหมดในถ้วยเล็ก: น้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"},duration:90,media:{type:"image",url:o("tracemix.png")}},{text:{fr:"Laisser refroidir les deux mélanges (huiles et soude diluée) à environ 40°C.",th:"ปล่อยให้น้ำมันและน้ำด่างเย็นลงที่อุณหภูมิประมาณ 40°C"},duration:600,media:{type:"image",url:o("cooldown.png")}},{text:{fr:"Mixer au blender les deux mélanges jusqu'à obtenir la trace (texture crème).",th:"ปั่นน้ำมันและน้ำด่างจนถึงช่วง Trace (เนื้อครีม)"},duration:30,media:{type:"image",url:o("mixsoap.png")}},{text:{fr:"Ajouter les ingrédients de finition : 50g d’huile réservée, 30g de lait de coco, 30g de talc, 80g d’huile essentielle, et 3g de poudre colorée (facultatif).",th:"เติมน้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"},duration:60,media:{type:"image",url:o("finalmix.png")}},{text:{fr:"Verser la pâte dans un moule rectangulaire propre.",th:"เทส่วนผสมลงในพิมพ์สี่เหลี่ยมที่สะอาด"},duration:30,media:{type:"image",url:o("moulesavon.png")}},{text:{fr:"Nettoyer tous les ustensiles à l’eau.",th:"ล้างอุปกรณ์ทั้งหมดด้วยน้ำสะอาด"},duration:60,media:{type:"image",url:o("nettoyagesavon.png")}}]}],b=e=>P.find(t=>t.id===e),Y=()=>[...P],R=e=>{const t=S();return{...e,title:e.title[t]||e.title.fr,description:e.description[t]||e.description.fr,ingredients:e.ingredients[t]||e.ingredients.fr,steps:e.steps.map(n=>({...n,text:n.text[t]||n.text.fr}))}},f={"add-recipe":{fr:"Ajouter une recette",th:"เพิ่มสูตรอาหาร"},"select-recipe":{fr:"Sélectionner la recette",th:"เลือกสูตรอาหาร"},choose:{fr:"Choisir",th:"เลือก"},cancel:{fr:"Annuler",th:"ยกเลิก"},"crepe-classique-title":{fr:"Crêpe classique",th:"เครปคลาสสิก"},"crepe-sucree-title":{fr:"Crêpe sucrée",th:"เครปหวาน"},"crepe-salee-title":{fr:"Crêpe salée",th:"เครปเค็ม"},"start-timer":{fr:"Démarrer",th:"เริ่ม"},"pause-timer":{fr:"Pause",th:"หยุดชั่วคราว"},"resume-timer":{fr:"Reprendre",th:"ดำเนินต่อ"},"stop-timer":{fr:"Arrêter",th:"หยุด"},"reset-step":{fr:"Réinitialiser",th:"รีเซ็ต"},"previous-step":{fr:"Précédent",th:"ก่อนหน้า"},"next-step":{fr:"Suivant",th:"ถัดไป"},"close-recipe":{fr:"Fermer",th:"ปิด"},step:{fr:"Étape",th:"ขั้นตอน"},of:{fr:"sur",th:"จาก"},minutes:{fr:"minutes",th:"นาที"},seconds:{fr:"secondes",th:"วินาที"},finished:{fr:"Terminé !",th:"เสร็จแล้ว!"},"timer-ended":{fr:"Temps écoulé !",th:"หมดเวลาแล้ว!"},ingredients:{fr:"Ingrédients",th:"ส่วนผสม"},"start-cooking":{fr:"Commencer la cuisine",th:"เริ่มทำอาหาร"},"app-title":{fr:"Cooking App - Recettes de Crêpes",th:"แอปทำอาหาร - สูตรเครป"}},c=e=>{const t=S();return f[e][t]||f[e].fr},Z=()=>{console.log("🌐 Traductions chargées")},_=()=>{document.querySelectorAll("[data-i18n]").forEach(t=>{const n=t.getAttribute("data-i18n");n&&f[n]&&(t.textContent=c(n))}),C()},C=()=>{const e=S();document.documentElement.lang=e,document.title=c("app-title")},ee=()=>{console.log("🎨 Rendu initial de l'interface"),x(),$()},x=()=>{const e=document.getElementById("slots-container");if(!e)return;e.innerHTML="",j().forEach(n=>{const s=A(n);e.appendChild(s)})},u=e=>{const t=d(e);if(!t)return;const n=document.getElementById(e);if(!n)return;const s=A(t);n.replaceWith(s)},A=e=>{const t=document.createElement("div");return t.className=e.isEmpty?"slot empty-slot":"slot recipe-slot",t.id=e.id,e.isEmpty?t.innerHTML=h():t.innerHTML=se(e),t},h=()=>`
    <div class="slot-content">
      <div class="add-recipe-btn">
        <span class="plus-icon">+</span>
        <p class="add-text" data-i18n="add-recipe">${c("add-recipe")}</p>
      </div>
    </div>
  `,te=(e,t)=>{const n=t.ingredients.map(s=>`<li>${s}</li>`).join("");return`
    <div class="slot-content">
      <div class="recipe-header">
        <h3 class="recipe-title">${t.title}</h3>
        <button class="close-recipe-btn" data-slot="${e.id}" data-action="close">
          ${c("close-recipe")}
        </button>
      </div>
      
      <div class="ingredients-view">
        <img class="ingredients-image" src="${t.image}" alt="${t.title}">
        
        <div class="ingredients-list">
          <h3>${c("ingredients")}</h3>
          <ul>
            ${n}
          </ul>
        </div>
        
        <div class="ingredients-actions">
          <button class="start-cooking-btn" data-slot="${e.id}" data-action="start-cooking">
            ${c("start-cooking")}
          </button>
        </div>
      </div>
    </div>
  `},ne=(e,t)=>e.type==="video"?`
      <video class="recipe-media recipe-video" autoplay loop muted>
        <source src="${e.url}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
      </video>
    `:`
      <img class="recipe-media recipe-image" src="${e.url}" alt="${t}">
    `,se=e=>{const t=b(e.recipeId);if(!t)return h();const n=R(t);if(e.showingIngredients)return te(e,n);const s=n.steps[e.currentStepIndex];return s?`
    <div class="slot-content">
      <div class="recipe-header">
        <h3 class="recipe-title">${n.title}</h3>
        <button class="close-recipe-btn" data-slot="${e.id}" data-action="close">
          ${c("close-recipe")}
        </button>
      </div>
      
      ${ne(s.media,s.text)}
      
      <div class="step-content">
        <div class="step-info">
          <span>${c("step")} ${e.currentStepIndex+1} ${c("of")} ${t.steps.length}</span>
        </div>
        
        <p class="step-text">${s.text}</p>
        
        <div class="timer-section">
          <div class="timer-display">
            <span class="timer-text">${ae(s.duration)}</span>
            <div class="timer-controls">
              <button class="btn btn-primary timer-btn" data-slot="${e.id}" data-action="start">
                ${c(e.isRunning?"pause-timer":"start-timer")}
              </button>
              <button class="btn btn-secondary timer-btn" data-slot="${e.id}" data-action="reset">
                ${c("reset-step")}
              </button>
            </div>
          </div>
          <div class="timer-progress">
            <div class="timer-progress-bar" style="width: ${e.timerProgress}%"></div>
          </div>
        </div>
        
        <div class="step-navigation">
          <button class="nav-arrow nav-arrow-left" data-slot="${e.id}" data-action="previous" 
                  ${e.currentStepIndex===0?"disabled":""}>
            <span class="arrow-icon">←</span>
          </button>
          <div class="step-indicator">
            <span class="current-step">${e.currentStepIndex+1}</span>
            <span class="step-separator">/</span>
            <span class="total-steps">${t.steps.length}</span>
          </div>
          <button class="nav-arrow nav-arrow-right" data-slot="${e.id}" data-action="next"
                  ${e.currentStepIndex>=t.steps.length-1?"disabled":""}>
            <span class="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  `:h()},I=(e,t)=>{const n=document.querySelector(`#${e} .timer-progress-bar`);n&&(n.style.width=`${t}%`,t>90?n.classList.add("ending"):n.classList.remove("ending"))},g=e=>{const t=d(e);if(!t)return;const n=document.querySelector(`#${e} .timer-btn[data-action="start"]`);n&&(n.textContent=c(t.isRunning?"pause-timer":"start-timer"))},M=e=>{const t=document.querySelector(`#${e} .step-indicator`);t&&(t.classList.add("updated"),window.setTimeout(()=>{t.classList.remove("updated")},300))},$=()=>{const e=document.getElementById("add-slot-btn");e&&(N()?e.classList.remove("hidden"):e.classList.add("hidden"))},re=()=>{const e=document.getElementById("recipe-modal");e&&(ie(),e.classList.remove("hidden"),oe())},k=()=>{const e=document.getElementById("recipe-modal");e&&e.classList.add("hidden")},ie=()=>{const e=document.querySelector(".wheel-container");if(!e)return;const n=Y().map(s=>{const r=R(s);return`
      <div class="recipe-option" data-recipe="${s.id}">
        <span>${r.title}</span>
      </div>
    `}).join("");e.innerHTML=n},oe=()=>{document.querySelectorAll(".recipe-option.selected").forEach(t=>t.classList.remove("selected"))},ae=e=>{const t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`},v=new Map,T=e=>{const t=d(e);if(!t||t.isEmpty)return;if(t.isRunning){B(e);return}const n=b(t.recipeId);if(!n)return;const s=n.steps[t.currentStepIndex];if(!s)return;const r=Date.now()-(t.pausedTime||0);l(e,{isRunning:!0,isPaused:!1,startTime:r}),de(e,s.duration),g(e)},B=e=>{const t=d(e);if(!t||!t.isRunning)return;const n=Date.now()-(t.startTime||0);l(e,{isRunning:!1,isPaused:!0,pausedTime:n}),p(e),g(e)},ce=e=>{l(e,{isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0}),p(e),I(e,0),g(e)},q=e=>{console.log(`🔄 Navigation vers étape suivante pour slot ${e}`);const t=d(e);if(!t||t.isEmpty)return;const n=b(t.recipeId);if(!n)return;const s=t.currentStepIndex+1;if(s>=n.steps.length){console.log(`⚠️ Déjà à la dernière étape (${t.currentStepIndex+1}/${n.steps.length})`);return}p(e),l(e,{currentStepIndex:s,isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0}),u(e),M(e),window.setTimeout(()=>T(e),500)},le=e=>{console.log(`🔄 Navigation vers étape précédente pour slot ${e}`);const t=d(e);if(!(!t||t.isEmpty)){if(t.currentStepIndex===0){console.log("⚠️ Déjà à la première étape");return}p(e),l(e,{currentStepIndex:t.currentStepIndex-1,isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0}),u(e),M(e)}},de=(e,t)=>{const n=window.setInterval(()=>{ue(e,t)},100);v.set(e,n)},p=e=>{const t=v.get(e);t&&(window.clearInterval(t),v.delete(e))},ue=(e,t)=>{const n=d(e);if(!n||!n.isRunning)return;const s=Date.now()-(n.startTime||0),r=Math.min(s/(t*1e3)*100,100);l(e,{timerProgress:r}),I(e,r),r>=100&&pe(e)},pe=e=>{console.log(`⏰ Timer terminé pour ${e}`),ge(),p(e),l(e,{isRunning:!1,isPaused:!1,timerProgress:100}),g(e),window.setTimeout(()=>{q(e)},2e3)},ge=()=>{const e=document.getElementById("timer-audio");e?(e.currentTime=0,e.play().catch(t=>{console.warn("⚠️ Impossible de jouer le son:",t)})):(document.body.style.backgroundColor="#D4AF37",window.setTimeout(()=>{document.body.style.backgroundColor=""},300))},me=()=>{fe(),ve(),$e(),Pe(),console.log("✅ Tous les événements configurés")},fe=()=>{document.querySelectorAll(".lang-btn").forEach(t=>{t.addEventListener("click",n=>{const r=n.target.dataset.lang;r&&(V(r),he(r),_(),x())})})},he=e=>{document.querySelectorAll(".lang-btn").forEach(n=>{const s=n;s.dataset.lang===e?s.classList.add("active"):s.classList.remove("active")})},ve=()=>{const e=document.getElementById("slots-container");e&&e.addEventListener("click",Se)},Se=e=>{const t=e.target;if(t.closest(".add-recipe-btn")){const a=t.closest(".slot");if(!a)return;U(a.id),y(!0),re();return}const n=t.closest("[data-action]");if(!n)return;const s=n.dataset.action,r=n.dataset.slot;!s||!r||n.hasAttribute("disabled")||ye(r,s)},ye=(e,t)=>{switch(console.log(`🎯 Action détectée: ${t} sur slot ${e}`),t){case"start":T(e);break;case"pause":B(e);break;case"reset":ce(e);break;case"next":q(e);break;case"previous":le(e);break;case"close":xe(e);break;case"start-cooking":be(e);break;default:console.warn(`⚠️ Action inconnue: ${t}`)}},be=e=>{J(e),u(e),window.setTimeout(()=>T(e),500)},xe=e=>{Q(e),u(e),$()},$e=()=>{Te(),we(),Ee()},Te=()=>{const e=document.querySelector(".wheel-container");e&&e.addEventListener("click",t=>{const s=t.target.closest(".recipe-option");if(!s)return;const r=s.dataset.recipe;r&&(D(),s.classList.add("selected"),W(r))})},we=()=>{const e=document.getElementById("select-recipe-btn"),t=document.getElementById("cancel-recipe-btn");e==null||e.addEventListener("click",Le),t==null||t.addEventListener("click",O)},Ee=()=>{const e=document.querySelector(".modal-backdrop");e==null||e.addEventListener("click",O)},Le=()=>{const e=z(),t=F();!e||!t||(G(e,t),y(!1),k(),u(e),$())},O=()=>{y(!1),k(),D()},Pe=()=>{const e=document.getElementById("add-slot-btn");e==null||e.addEventListener("click",()=>{K(),x()})},D=()=>{document.querySelectorAll(".recipe-option.selected").forEach(t=>t.classList.remove("selected"))},Re=()=>{console.log("⚡ Initialisation de l'application..."),Ce(),Ae(),Ie(),Me()},Ce=()=>{console.log("📋 Configuration de l'état initial...")},Ae=()=>{console.log("🌐 Chargement des traductions..."),Z(),C()},Ie=()=>{console.log("🔗 Configuration des événements..."),me()},Me=()=>{console.log("🎨 Rendu de l'interface..."),ee()},E=()=>{console.log("🥞 Démarrage de Cooking App..."),Re()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E();
