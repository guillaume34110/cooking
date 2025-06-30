(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const B={language:"fr",slots:[{id:"slot-0",isEmpty:!0,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,showingIngredients:!1}],isModalOpen:!1};let r={...B};const v=()=>r.language,O=()=>[...r.slots],l=e=>r.slots.find(t=>t.id===e),D=()=>r.slots.some(e=>!e.isEmpty),H=()=>r.selectedSlotId,j=()=>r.selectedRecipeId,N=e=>{r={...r,language:e}},S=e=>{r={...r,isModalOpen:e}},F=e=>{r={...r,selectedSlotId:e}},z=e=>{r={...r,selectedRecipeId:e}},V=()=>{const e=`slot-${r.slots.length}`,t={id:e,isEmpty:!0,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,showingIngredients:!1};return r={...r,slots:[...r.slots,t]},e},c=(e,t)=>{r={...r,slots:r.slots.map(s=>s.id===e?{...s,...t}:s)}},U=(e,t)=>{c(e,{isEmpty:!1,recipeId:t,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,showingIngredients:!0})},K=e=>{c(e,{showingIngredients:!1,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0})},W=e=>{c(e,{isEmpty:!0,recipeId:void 0,currentStepIndex:0,isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0,showingIngredients:!1})},w=[{id:"crepe-classique",title:{fr:"Crêpe classique",th:"เครปคลาสสิก"},description:{fr:"Une délicieuse crêpe traditionnelle française",th:"เครปแบบดั้งเดิมของฝรั่งเศสที่อร่อย"},ingredients:{fr:["250g de farine","4 œufs","500ml de lait","1 pincée de sel","50g d'huile de coco","huile pour la cuisson"],th:["แป้งสาลี 250 กรัม","ไข่ไก่ 4 ฟอง","นม 500 มล.","เกลือเล็กน้อย","น้ำมันมะพร้าว 50 กรัม","น้ำมันสำหรับทอด"]},image:"/assets/images/ingredientpatecrepe.png",video:"/videos/crepe-classique.mp4",steps:[{text:{fr:"Mélanger la farine et les œufs et le lait le sel dans un mixeur",th:"ผสมแป้ง ไข่ และนมในเครื่องปั่น"},duration:10,media:{type:"image",url:"/assets/images/melangemixeur.png"}},{text:{fr:"mixer",th:"เปิดเครื่องปั่น"},duration:40,media:{type:"image",url:"/assets/images/mixermixin.webp"}},{text:{fr:"Chauffer la poêle et ajouter un peu d'huile 180-200",th:"ตั้งกระทะให้ร้อน แล้วใส่น้ำมันเล็กน้อย 180-200"},duration:60,media:{type:"image",url:"/assets/images/crepeierchaude.png"}},{text:{fr:"Verser la pâte et étaler uniformément",th:"เทแป้งลงแล้วกระจายให้ทั่ว"},duration:45,media:{type:"image",url:"/assets/images/crepiereetalage.png"}},{text:{fr:"Cuire 2 minutes puis retourner la crêpe",th:"ปิ้ง 2 นาทีแล้วพลิก"},duration:120,media:{type:"image",url:"/assets/images/cuisson.png"}},{text:{fr:"Cuire encore 1 minute et servir",th:"ปิ้งอีก 1 นาทีแล้วเสิร์ฟ"},duration:60,media:{type:"image",url:"/assets/images/cuisson.png"}}]},{id:"savon-barre-classique",title:{fr:"Savon en barre classique",th:"สบู่ก้อนสูตรมาตรฐาน"},description:{fr:"Savon saponifié à froid à base d’huile de palme, coco, et huiles fluides, enrichi en lait de coco, talc, et huiles essentielles.",th:"สบู่กวนเย็นทำจากน้ำมันปาล์ม น้ำมันมะพร้าว และน้ำมันเหลว เติมน้ำนมมะพร้าว แป้งทัลก์ และน้ำมันหอมระเหย"},ingredients:{fr:["600g d’huile de palme","150g d’huile de coco","250g d’huile fluide (tournesol, colza, riz, maïs, soja, coco)","142g de soude (NaOH)","325g d’eau (dont 50g à retirer pour la trace)","30g de lait de coco","30g de poudre de talc","80g d’huile essentielle","3g de poudre colorée (paprika, matcha, charbon – optionnel)"],th:["น้ำมันปาล์ม 600 กรัม","น้ำมันมะพร้าว 150 กรัม","น้ำมันเหลว 250 กรัม (ดอกทานตะวัน คาโนลา ข้าว ข้าวโพด ถั่วเหลือง มะพร้าว)","โซดาไฟ 142 กรัม","น้ำ 325 กรัม (แยกไว้ 50 กรัมสำหรับตอน Trace)","กะทิ 30 กรัม","แป้งทัลก์ 30 กรัม","น้ำมันหอมระเหย 80 กรัม","ผงสี 3 กรัม (ปาปริกา ชาเขียว ถ่านไม้ – ตามต้องการ)"]},image:"/assets/images/barsoap.png",video:"/assets/videos/savon-intro.mp4",steps:[{text:{fr:"Peser et mélanger 600g d’huile de palme, 150g d’huile de coco et 250g d’huile fluide dans un grand récipient. Réserver 50g pour la trace.",th:"ชั่งและผสมน้ำมันปาล์ม 600 กรัม น้ำมันมะพร้าว 150 กรัม และน้ำมันเหลว 250 กรัม ในภาชนะขนาดใหญ่ แยกไว้ 50 กรัมสำหรับตอน Trace"},duration:60,media:{type:"image",url:"/assets/images/huilesinbowl.png"}},{text:{fr:"Dissoudre 142g de soude dans 325g d’eau. Attention aux vapeurs.",th:"ละลายโซดาไฟ 142 กรัม ในน้ำ 325 กรัม ระวังไอร้อน"},duration:120,media:{type:"image",url:"/assets/images/soudemix.png"}},{text:{fr:"Mélanger ensemble dans un petit récipient : 50g d’huile réservée, 30g de lait de coco, 30g de talc, 80g d’huile essentielle, et 3g de poudre colorée (facultatif).",th:"ผสมส่วนผสมทั้งหมดในถ้วยเล็ก: น้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"},duration:90,media:{type:"image",url:"/assets/images/tracemix.png"}},{text:{fr:"Laisser refroidir les deux mélanges (huiles et soude diluée) à environ 40°C.",th:"ปล่อยให้น้ำมันและน้ำด่างเย็นลงที่อุณหภูมิประมาณ 40°C"},duration:600,media:{type:"image",url:"/assets/images/cooldown.png"}},{text:{fr:"Mixer au blender les deux mélanges jusqu'à obtenir la trace (texture crème).",th:"ปั่นน้ำมันและน้ำด่างจนถึงช่วง Trace (เนื้อครีม)"},duration:30,media:{type:"image",url:"/assets/images/mixsoap.png"}},{text:{fr:"Ajouter les ingrédients de finition : 50g d’huile réservée, 30g de lait de coco, 30g de talc, 80g d’huile essentielle, et 3g de poudre colorée (facultatif).",th:"เติมน้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"},duration:60,media:{type:"image",url:"/assets/images/finalmix.png"}},{text:{fr:"Verser la pâte dans un moule rectangulaire propre.",th:"เทส่วนผสมลงในพิมพ์สี่เหลี่ยมที่สะอาด"},duration:30,media:{type:"image",url:"/assets/images/moulesavon.png"}},{text:{fr:"Nettoyer tous les ustensiles à l’eau.",th:"ล้างอุปกรณ์ทั้งหมดด้วยน้ำสะอาด"},duration:60,media:{type:"image",url:"/assets/images/nettoyagesavon.png"}}]}],y=e=>w.find(t=>t.id===e),G=()=>[...w],E=e=>{const t=v();return{...e,title:e.title[t]||e.title.fr,description:e.description[t]||e.description.fr,ingredients:e.ingredients[t]||e.ingredients.fr,steps:e.steps.map(s=>({...s,text:s.text[t]||s.text.fr}))}},m={"add-recipe":{fr:"Ajouter une recette",th:"เพิ่มสูตรอาหาร"},"select-recipe":{fr:"Sélectionner la recette",th:"เลือกสูตรอาหาร"},choose:{fr:"Choisir",th:"เลือก"},cancel:{fr:"Annuler",th:"ยกเลิก"},"crepe-classique-title":{fr:"Crêpe classique",th:"เครปคลาสสิก"},"crepe-sucree-title":{fr:"Crêpe sucrée",th:"เครปหวาน"},"crepe-salee-title":{fr:"Crêpe salée",th:"เครปเค็ม"},"start-timer":{fr:"Démarrer",th:"เริ่ม"},"pause-timer":{fr:"Pause",th:"หยุดชั่วคราว"},"resume-timer":{fr:"Reprendre",th:"ดำเนินต่อ"},"stop-timer":{fr:"Arrêter",th:"หยุด"},"reset-step":{fr:"Réinitialiser",th:"รีเซ็ต"},"previous-step":{fr:"Précédent",th:"ก่อนหน้า"},"next-step":{fr:"Suivant",th:"ถัดไป"},"close-recipe":{fr:"Fermer",th:"ปิด"},step:{fr:"Étape",th:"ขั้นตอน"},of:{fr:"sur",th:"จาก"},minutes:{fr:"minutes",th:"นาที"},seconds:{fr:"secondes",th:"วินาที"},finished:{fr:"Terminé !",th:"เสร็จแล้ว!"},"timer-ended":{fr:"Temps écoulé !",th:"หมดเวลาแล้ว!"},ingredients:{fr:"Ingrédients",th:"ส่วนผสม"},"start-cooking":{fr:"Commencer la cuisine",th:"เริ่มทำอาหาร"},"app-title":{fr:"Cooking App - Recettes de Crêpes",th:"แอปทำอาหาร - สูตรเครป"}},o=e=>{const t=v();return m[e][t]||m[e].fr},J=()=>{console.log("🌐 Traductions chargées")},Q=()=>{document.querySelectorAll("[data-i18n]").forEach(t=>{const s=t.getAttribute("data-i18n");s&&m[s]&&(t.textContent=o(s))}),L()},L=()=>{const e=v();document.documentElement.lang=e,document.title=o("app-title")},X=()=>{console.log("🎨 Rendu initial de l'interface"),b(),x()},b=()=>{const e=document.getElementById("slots-container");if(!e)return;e.innerHTML="",O().forEach(s=>{const n=R(s);e.appendChild(n)})},d=e=>{const t=l(e);if(!t)return;const s=document.getElementById(e);if(!s)return;const n=R(t);s.replaceWith(n)},R=e=>{const t=document.createElement("div");return t.className=e.isEmpty?"slot empty-slot":"slot recipe-slot",t.id=e.id,e.isEmpty?t.innerHTML=f():t.innerHTML=_(e),t},f=()=>`
    <div class="slot-content">
      <div class="add-recipe-btn">
        <span class="plus-icon">+</span>
        <p class="add-text" data-i18n="add-recipe">${o("add-recipe")}</p>
      </div>
    </div>
  `,Y=(e,t)=>{const s=t.ingredients.map(n=>`<li>${n}</li>`).join("");return`
    <div class="slot-content">
      <div class="recipe-header">
        <h3 class="recipe-title">${t.title}</h3>
        <button class="close-recipe-btn" data-slot="${e.id}" data-action="close">
          ${o("close-recipe")}
        </button>
      </div>
      
      <div class="ingredients-view">
        <img class="ingredients-image" src="${t.image}" alt="${t.title}">
        
        <div class="ingredients-list">
          <h3>${o("ingredients")}</h3>
          <ul>
            ${s}
          </ul>
        </div>
        
        <div class="ingredients-actions">
          <button class="start-cooking-btn" data-slot="${e.id}" data-action="start-cooking">
            ${o("start-cooking")}
          </button>
        </div>
      </div>
    </div>
  `},Z=(e,t)=>e.type==="video"?`
      <video class="recipe-media recipe-video" autoplay loop muted>
        <source src="${e.url}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
      </video>
    `:`
      <img class="recipe-media recipe-image" src="${e.url}" alt="${t}">
    `,_=e=>{const t=y(e.recipeId);if(!t)return f();const s=E(t);if(e.showingIngredients)return Y(e,s);const n=s.steps[e.currentStepIndex];return n?`
    <div class="slot-content">
      <div class="recipe-header">
        <h3 class="recipe-title">${s.title}</h3>
        <button class="close-recipe-btn" data-slot="${e.id}" data-action="close">
          ${o("close-recipe")}
        </button>
      </div>
      
      ${Z(n.media,n.text)}
      
      <div class="step-content">
        <div class="step-info">
          <span>${o("step")} ${e.currentStepIndex+1} ${o("of")} ${t.steps.length}</span>
        </div>
        
        <p class="step-text">${n.text}</p>
        
        <div class="timer-section">
          <div class="timer-display">
            <span class="timer-text">${ne(n.duration)}</span>
            <div class="timer-controls">
              <button class="btn btn-primary timer-btn" data-slot="${e.id}" data-action="start">
                ${o(e.isRunning?"pause-timer":"start-timer")}
              </button>
              <button class="btn btn-secondary timer-btn" data-slot="${e.id}" data-action="reset">
                ${o("reset-step")}
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
  `:f()},P=(e,t)=>{const s=document.querySelector(`#${e} .timer-progress-bar`);s&&(s.style.width=`${t}%`,t>90?s.classList.add("ending"):s.classList.remove("ending"))},p=e=>{const t=l(e);if(!t)return;const s=document.querySelector(`#${e} .timer-btn[data-action="start"]`);s&&(s.textContent=o(t.isRunning?"pause-timer":"start-timer"))},C=e=>{const t=document.querySelector(`#${e} .step-indicator`);t&&(t.classList.add("updated"),window.setTimeout(()=>{t.classList.remove("updated")},300))},x=()=>{const e=document.getElementById("add-slot-btn");e&&(D()?e.classList.remove("hidden"):e.classList.add("hidden"))},ee=()=>{const e=document.getElementById("recipe-modal");e&&(te(),e.classList.remove("hidden"),se())},A=()=>{const e=document.getElementById("recipe-modal");e&&e.classList.add("hidden")},te=()=>{const e=document.querySelector(".wheel-container");if(!e)return;const s=G().map(n=>{const i=E(n);return`
      <div class="recipe-option" data-recipe="${n.id}">
        <span>${i.title}</span>
      </div>
    `}).join("");e.innerHTML=s},se=()=>{document.querySelectorAll(".recipe-option.selected").forEach(t=>t.classList.remove("selected"))},ne=e=>{const t=Math.floor(e/60),s=e%60;return`${t}:${s.toString().padStart(2,"0")}`},h=new Map,T=e=>{const t=l(e);if(!t||t.isEmpty)return;if(t.isRunning){I(e);return}const s=y(t.recipeId);if(!s)return;const n=s.steps[t.currentStepIndex];if(!n)return;const i=Date.now()-(t.pausedTime||0);c(e,{isRunning:!0,isPaused:!1,startTime:i}),ae(e,n.duration),p(e)},I=e=>{const t=l(e);if(!t||!t.isRunning)return;const s=Date.now()-(t.startTime||0);c(e,{isRunning:!1,isPaused:!0,pausedTime:s}),u(e),p(e)},ie=e=>{c(e,{isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0}),u(e),P(e,0),p(e)},M=e=>{console.log(`🔄 Navigation vers étape suivante pour slot ${e}`);const t=l(e);if(!t||t.isEmpty)return;const s=y(t.recipeId);if(!s)return;const n=t.currentStepIndex+1;if(n>=s.steps.length){console.log(`⚠️ Déjà à la dernière étape (${t.currentStepIndex+1}/${s.steps.length})`);return}u(e),c(e,{currentStepIndex:n,isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0}),d(e),C(e),window.setTimeout(()=>T(e),500)},re=e=>{console.log(`🔄 Navigation vers étape précédente pour slot ${e}`);const t=l(e);if(!(!t||t.isEmpty)){if(t.currentStepIndex===0){console.log("⚠️ Déjà à la première étape");return}u(e),c(e,{currentStepIndex:t.currentStepIndex-1,isRunning:!1,isPaused:!1,timerProgress:0,startTime:void 0,pausedTime:void 0}),d(e),C(e)}},ae=(e,t)=>{const s=window.setInterval(()=>{oe(e,t)},100);h.set(e,s)},u=e=>{const t=h.get(e);t&&(window.clearInterval(t),h.delete(e))},oe=(e,t)=>{const s=l(e);if(!s||!s.isRunning)return;const n=Date.now()-(s.startTime||0),i=Math.min(n/(t*1e3)*100,100);c(e,{timerProgress:i}),P(e,i),i>=100&&ce(e)},ce=e=>{console.log(`⏰ Timer terminé pour ${e}`),le(),u(e),c(e,{isRunning:!1,isPaused:!1,timerProgress:100}),p(e),window.setTimeout(()=>{M(e)},2e3)},le=()=>{const e=document.getElementById("timer-audio");e?(e.currentTime=0,e.play().catch(t=>{console.warn("⚠️ Impossible de jouer le son:",t)})):(document.body.style.backgroundColor="#D4AF37",window.setTimeout(()=>{document.body.style.backgroundColor=""},300))},de=()=>{ue(),ge(),Se(),$e(),console.log("✅ Tous les événements configurés")},ue=()=>{document.querySelectorAll(".lang-btn").forEach(t=>{t.addEventListener("click",s=>{const i=s.target.dataset.lang;i&&(N(i),pe(i),Q(),b())})})},pe=e=>{document.querySelectorAll(".lang-btn").forEach(s=>{const n=s;n.dataset.lang===e?n.classList.add("active"):n.classList.remove("active")})},ge=()=>{const e=document.getElementById("slots-container");e&&e.addEventListener("click",me)},me=e=>{const t=e.target;if(t.closest(".add-recipe-btn")){const a=t.closest(".slot");if(!a)return;F(a.id),S(!0),ee();return}const s=t.closest("[data-action]");if(!s)return;const n=s.dataset.action,i=s.dataset.slot;!n||!i||s.hasAttribute("disabled")||fe(i,n)},fe=(e,t)=>{switch(console.log(`🎯 Action détectée: ${t} sur slot ${e}`),t){case"start":T(e);break;case"pause":I(e);break;case"reset":ie(e);break;case"next":M(e);break;case"previous":re(e);break;case"close":ve(e);break;case"start-cooking":he(e);break;default:console.warn(`⚠️ Action inconnue: ${t}`)}},he=e=>{K(e),d(e),window.setTimeout(()=>T(e),500)},ve=e=>{W(e),d(e),x()},Se=()=>{ye(),be(),xe()},ye=()=>{const e=document.querySelector(".wheel-container");e&&e.addEventListener("click",t=>{const n=t.target.closest(".recipe-option");if(!n)return;const i=n.dataset.recipe;i&&(q(),n.classList.add("selected"),z(i))})},be=()=>{const e=document.getElementById("select-recipe-btn"),t=document.getElementById("cancel-recipe-btn");e==null||e.addEventListener("click",Te),t==null||t.addEventListener("click",k)},xe=()=>{const e=document.querySelector(".modal-backdrop");e==null||e.addEventListener("click",k)},Te=()=>{const e=H(),t=j();!e||!t||(U(e,t),S(!1),A(),d(e),x())},k=()=>{S(!1),A(),q()},$e=()=>{const e=document.getElementById("add-slot-btn");e==null||e.addEventListener("click",()=>{V(),b()})},q=()=>{document.querySelectorAll(".recipe-option.selected").forEach(t=>t.classList.remove("selected"))},we=()=>{console.log("⚡ Initialisation de l'application..."),Ee(),Le(),Re(),Pe()},Ee=()=>{console.log("📋 Configuration de l'état initial...")},Le=()=>{console.log("🌐 Chargement des traductions..."),J(),L()},Re=()=>{console.log("🔗 Configuration des événements..."),de()},Pe=()=>{console.log("🎨 Rendu de l'interface..."),X()},$=()=>{console.log("🥞 Démarrage de Cooking App..."),we()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$):$();
