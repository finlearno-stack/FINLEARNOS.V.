/* FINLEARN - Optimized JS */
const $=id=>document.getElementById(id);
let charts={};

// Hide Intro
function hideIntro(){
    $('intro').classList.add('hide');
    $('site').classList.add('on');
    setTimeout(initCharts,300);
}

// Page Navigation
function go(p){
    document.querySelectorAll('.page').forEach(x=>x.classList.remove('on'));
    $(p)?.classList.add('on');
    document.querySelectorAll('[data-p]').forEach(x=>x.classList.toggle('active',x.dataset.p===p));
    window.scrollTo({top:0,behavior:'smooth'});
    if(p==='sip')setTimeout(initSIPChart,100);
    if(p==='market')setTimeout(initMarketChart,100);
}

// Charts
function initCharts(){
    const g=$('growthChart');
    if(g&&!charts.growth){
        charts.growth=new Chart(g,{
            type:'line',
            data:{
                labels:['1Y','3Y','5Y','10Y','15Y','20Y'],
                datasets:[
                    {label:'Invested',data:[0.6,1.8,3,6,9,12],borderColor:'#6366f1',backgroundColor:'rgba(99,102,241,0.1)',fill:true,tension:0.4},
                    {label:'Value',data:[0.65,2.2,4.1,11.6,25,50],borderColor:'#10b981',backgroundColor:'rgba(16,185,129,0.1)',fill:true,tension:0.4}
                ]
            },
            options:{responsive:true,plugins:{legend:{display:false}}}
        });
    }
    const p=$('pieChart');
    if(p&&!charts.pie){
        charts.pie=new Chart(p,{
            type:'doughnut',
            data:{
                labels:['Large','Mid','Small','Debt','Gold'],
                datasets:[{data:[40,25,15,15,5],backgroundColor:['#6366f1','#10b981','#8b5cf6','#f59e0b','#ef4444'],borderWidth:0}]
            },
            options:{responsive:true,cutout:'60%',plugins:{legend:{display:false}}}
        });
    }
}

function initSIPChart(){
    const c=$('sipChart');
    if(c&&!charts.sip){
        charts.sip=new Chart(c,{
            type:'doughnut',
            data:{labels:['Invested','Returns'],datasets:[{data:[600000,561695],backgroundColor:['#6366f1','#10b981'],borderWidth:0}]},
            options:{responsive:true,cutout:'65%',plugins:{legend:{position:'bottom'}}}
        });
    }
}

function initMarketChart(){
    const c=$('marketChart');
    if(c&&!charts.market){
        let d=[],v=22300;for(let i=0;i<30;i++){v+=(Math.random()-.48)*30;d.push(v)}
        charts.market=new Chart(c,{
            type:'line',
            data:{labels:d.map((_,i)=>`${9+Math.floor(i/6)}:${(i%6)*10}`),datasets:[{data:d,borderColor:'#10b981',backgroundColor:'rgba(16,185,129,0.1)',fill:true,tension:0.4,pointRadius:0}]},
            options:{responsive:true,plugins:{legend:{display:false}}}
        });
    }
}

// SIP Calculator
function calcSIP(){
    const P=parseFloat($('amt')?.value)||5000;
    const r=(parseFloat($('rate')?.value)||12)/12/100;
    const n=(parseInt($('yrs')?.value)||10)*12;
    const FV=P*((Math.pow(1+r,n)-1)/r)*(1+r);
    const inv=P*n,ret=FV-inv;
    const f=v=>'₹'+Math.round(v).toLocaleString('en-IN');
    $('rY').textContent=n/12;
    $('total').textContent=f(FV);
    $('inv').textContent=f(inv);
    $('ret').textContent=f(ret);
    if(charts.sip){charts.sip.data.datasets[0].data=[inv,ret];charts.sip.update()}
}

function setupCalc(){
    ['amt','rate','yrs'].forEach((id,i)=>{
        const inp=$(id),rng=$('r'+(i+1));
        if(inp&&rng){
            inp.oninput=()=>{rng.value=inp.value;calcSIP()};
            rng.oninput=()=>{inp.value=rng.value;calcSIP()};
        }
    });
}

// Timer
function updateTimer(){
    const d=new Date(),e=new Date();e.setHours(23,59,59);
    const t=e-d;
    $('h').textContent=String(Math.floor(t/3600000)).padStart(2,'0');
    $('m').textContent=String(Math.floor((t%3600000)/60000)).padStart(2,'0');
    $('s').textContent=String(Math.floor((t%60000)/1000)).padStart(2,'0');
}

// Live Data
function updateLive(){
    $('online').textContent=800+Math.floor(Math.random()*100);
    $('joins').textContent=140+Math.floor(Math.random()*30);
}

function updateMarket(){
    const u=(id,base,r)=>{const c=(Math.random()-.5)*r,p=base+c;$(id).textContent=p.toFixed(2)};
    u('nP',22456.80,50);u('sP',73852.45,150);u('bP',48234.55,80);
}

// Toast
const toasts=[
    {n:'Rahul K.',a:'Pro liya',c:'Mumbai',i:'RK'},
    {n:'Priya S.',a:'Basic join',c:'Delhi',i:'PS'},
    {n:'Amit V.',a:'Pro upgrade',c:'Bangalore',i:'AV'},
    {n:'Sneha M.',a:'Basic liya',c:'Pune',i:'SM'}
];
let tt;
function showToast(){
    const t=toasts[Math.floor(Math.random()*toasts.length)];
    $('tAv').textContent=t.i;
    $('tTitle').textContent=`${t.n} ne ${t.a}!`;
    $('tTime').textContent=`${Math.floor(Math.random()*5)+1}m • ${t.c}`;
    $('toast').classList.add('on');
    clearTimeout(tt);tt=setTimeout(hideToast,5000);
}
function hideToast(){$('toast').classList.remove('on')}

// Modal
const modals={
    about:{t:'About FINLEARN',c:'India ka #1 Hinglish finance platform. 12,500+ learners trust us!'},
    privacy:{t:'Privacy Policy',c:'Data safe hai. Razorpay secure payments.'},
    terms:{t:'Terms',c:'Educational platform. Investment decisions aapki responsibility.'},
    disc:{t:'Disclaimer',c:'⚠️ Market risks apply. Educational content only.'}
};
function modal(k){
    const m=modals[k];
    $('mTitle').textContent=m.t;
    $('mText').textContent=m.c;
    $('modal').classList.add('on');
}
function closeModal(){$('modal').classList.remove('on')}

// Form
function setupForm(){
    $('form')?.addEventListener('submit',e=>{
        e.preventDefault();
        const n=$('name').value;
        alert(`Thanks ${n}! 🙏 Hum jaldi reply karenge.`);
        e.target.reset();
    });
}

// Users
let users=12500;
function incUsers(){
    users+=Math.floor(Math.random()*2)+1;
    $('users').textContent=users.toLocaleString('en-IN')+'+';
}

// Init
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(hideIntro,2500);
    setupCalc();calcSIP();setupForm();
    updateTimer();setInterval(updateTimer,1000);
    updateLive();setInterval(updateLive,15000);
    updateMarket();setInterval(updateMarket,10000);
    setTimeout(showToast,8000);setInterval(showToast,25000);
    setInterval(incUsers,120000);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});