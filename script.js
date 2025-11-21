function pad(n){return n<10?"0"+n:""+n}
function weekday(n){return["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][n]}
function updateClock(){var d=new Date();var t=pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds());var s=d.getFullYear()+"年"+pad(d.getMonth()+1)+"月"+pad(d.getDate())+"日 · "+weekday(d.getDay());document.getElementById("clockTime").textContent=t;document.getElementById("clockDate").textContent=s}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const carouselContainer = document.querySelector('.carousel-container');

function showSlide(n) {
  currentSlide = n;
  const offset = -currentSlide * 100;
  carouselContainer.style.transform = `translateX(${offset}%)`;
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-advance carousel every 4 seconds for better flow
let carouselInterval = setInterval(nextSlide, 4000);

// Add click events to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(carouselInterval);
    showSlide(index);
    carouselInterval = setInterval(nextSlide, 4000);
  });
});

var tips=[
"您辛苦了，来一杯咖啡☕️吧，再安排休息5分钟",
"闭眼深呼吸四次，肩颈放松，再来一杯温水",
"把手机放远一点，专注十分钟，再奖励自己糖果",
"站起来伸展背部和手臂，轻走一圈，回到状态",
"给自己一个微笑，写下今天完成的一件小事",
"戴上耳机听一首喜欢的歌，舒缓情绪",
"调整坐姿，让腰背贴合椅背，双脚平放",
"喝一杯水，眼睛看远处20秒，缓解疲劳",
"桌面收纳一分钟，清爽让效率更高",
"打开窗户换气两分钟，吸一口新鲜空气",
"给自己点一盏香薰或薄荷膏，轻松一下",
"设定25分钟专注，休息5分钟，番茄一下",
"把今天的难题拆小成三步，从第一步开始",
"轻柔转动颈部与手腕，避免久坐不适",
"写下此刻感恩的三件小事，心情更明亮",
"补充一点水果或坚果，稳定能量",
"看一眼天气，计划下班后的小小奖励",
"调整屏幕亮度与字体大小，让眼睛更舒服",
"把水杯装满，做一口深呼吸再继续",
"听到心跳的节奏就好，慢慢来也很好",
"换个背景音乐，降低音量，营造专注氛围",
"轻揉眼眶与太阳穴30秒，缓解酸胀",
"做10次肩膀上提与放下，放松紧张",
"站立提踵15次，促进血液循环",
"看一幅喜欢的图片或插画，获得微小快乐",
"写下下一步要做的第一件事，只一件",
"关掉不必要的通知，给自己安静的15分钟",
"整理待办列表，标注一项可立即完成",
"调整椅子高度，让手腕与键盘平行",
"在阳台或窗边呼吸新鲜空气三次",
"给自己加温暖的披肩或外套，关照身体",
"用计时器设定短短10分钟，快速清理邮件",
"用番茄钟记录一个专注回合，结束后奖励自己",
"给同事一个友善问候，获得社交能量",
"轻踩脚尖与脚跟交替20次，放松小腿",
"喝一杯温热饮料，安抚胃和心情",
"阅读一段短文或诗句，转换频道",
"调整屏幕到眼睛略下方，减少颈部压力",
"列一个三条清单：必须、可选、可以放弃",
"更换一个桌面壁纸，带来新鲜感",
"把椅子往后移一点，做一次伸展",
"清理浏览器标签页，保留当前任务相关",
"把手机静音，专注完成当下的微任务",
"听一段自然白噪音，过滤干扰",
"迷你冥想1分钟：关注呼吸、观察念头",
"给自己倒一杯果茶或柠檬水",
"打开记事本，写一句今天的目标",
"让房间更亮一点或更暗一点，优化环境",
"放慢键盘节奏，减少急躁感",
"看远处的绿色或天空30秒，放松眼睛"
]
var quotes=[
"今天的你已经很棒了，慢慢来也很好",
"把日子过轻一点，风会替你加速",
"所有努力都在路上积蓄，别急",
"你值得被温柔以待，包括被自己",
"不必和别人赛跑，和昨天的自己握手",
"把复杂的事分成小片，一片一片吃掉",
"休息不是浪费，是下一段快跑的蓄能",
"请善待今天，它是余生最年轻的一天",
"情绪需要被看见，也需要被照顾",
"光会来的，先把自己照亮一点",
"山路弯弯，但脚步一直向前",
"好好吃饭，好好睡觉，其他慢慢来",
"想要的花，等到春天自然会开",
"生活的答案，藏在认真与松弛之间",
"心软一点，对人也对自己",
"低谷不是终点，是向上的起点",
"温柔地坚持，时间会给出礼物",
"你不必完美，真实已经闪光",
"今天的云很好看，你也一样",
"把目光拉远，世界就没那么窄",
"热爱让你不累，休息让你更爱",
"与其焦虑，不如迈出半步",
"此刻平静，就是一种胜利",
"把不必的事放下，轻装更快",
"接纳不确定，拥抱变化的风",
"在关怀里成长，在慵懒里修复",
"允许自己慢一点，心会跟上",
"小小的快乐，足以照亮整天",
"今天的努力，将在某天开花",
"生活不必解答，体验就是答案",
"做自己的树，向阳，生长",
"真诚是最短的路",
"与自己和解，是最长的爱",
"每一步都算数，哪怕很小",
"请把好好生活列为重要事项",
"给心留白，给日子留光",
"安静是一种能量",
"把注意力放在能做的事上",
"温暖的人，也会被温暖照顾",
"你已经做得很好了",
"把期待放轻，惊喜会来",
"忙的时候更要记得喘气",
"别和焦虑赛跑，陪它走走",
"今天也要好好喜欢自己",
"把情绪放在阳光下晒一晒",
"你是值得的，无论此刻怎样",
"松弛感是力量，不是松懈",
"接纳当下，继续前行",
"好消息在路上",
"请为自己鼓掌"
]
function setTipAndQuote(){document.getElementById("tipText").textContent=pick(tips);document.getElementById("quoteText").textContent=pick(quotes)}
var timer=null;var remains=0
function startRest(){remains=300;document.getElementById("restTimer").hidden=false;renderTimer();document.body.classList.add("relaxing");if(timer)clearInterval(timer);timer=setInterval(function(){remains--;if(remains<=0){clearInterval(timer);timer=null;document.getElementById("timerText").textContent="00:00";document.getElementById("tipText").textContent="放松时间结束，你已经很棒了！点击按钮开始新的放松时光。";document.body.classList.remove("relaxing");setTimeout(function(){document.getElementById("restTimer").hidden=true},5000);return}renderTimer()},1000)}
function renderTimer(){var m=Math.floor(remains/60);var s=remains%60;document.getElementById("timerText").textContent=pad(m)+":"+pad(s)}
document.addEventListener("DOMContentLoaded",function(){updateClock();setTipAndQuote();setInterval(updateClock,1000);document.getElementById("shuffleBtn").addEventListener("click",setTipAndQuote);document.getElementById("restBtn").addEventListener("click",startRest);document.getElementById("cancelTimer").addEventListener("click",function(){if(timer)clearInterval(timer);timer=null;document.getElementById("restTimer").hidden=true;document.body.classList.remove("relaxing")});document.getElementById("hydrateBtn").addEventListener("click",function(e){e.preventDefault();document.getElementById("tipText").textContent="喝一杯水，给身体一个小拥抱"})})