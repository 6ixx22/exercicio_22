setInterval(function(){let e=new Date("March 4, 2025 00:00:00").getTime()-new Date().getTime(),n=Math.floor(e/864e5),t=Math.floor(e%864e5/36e5),o=Math.floor(e%36e5/6e4),d=Math.floor(e%6e4/1e3);document.getElementById("days").innerHTML=n,document.getElementById("hours").innerHTML=t,document.getElementById("minutes").innerHTML=o,document.getElementById("seconds").innerHTML=d,e<0&&(document.getElementById("countdown").innerHTML="O evento já aconteceu!")},1e3);
//# sourceMappingURL=index.6c9ef640.js.map
