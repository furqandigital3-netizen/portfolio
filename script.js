// typing role
(function(){var el=document.getElementById('typed'),w=['Web Developer','Video Editor','Digital Marketer','CIT Professional'],i=0,j=0,d=false;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=w[0];return}
function t(){var s=w[i];j+=d?-1:1;el.textContent=s.slice(0,j);var n=d?45:85;
if(!d&&j===s.length){d=true;n=1400}else if(d&&j===0){d=false;i=(i+1)%w.length;n=300}setTimeout(t,n)}t()})();
// scroll reveal: appear when entering, fade away when scrolled past
(function(){var q='main section>*:not(footer),.job,.skills>.card,.contact dl';
var els=document.querySelectorAll('#intro>*,.t,.about p,.job,.skills>.card,#projects .card,.contact p,.contact dl,.contact .btns');
els.forEach(function(e,k){e.classList.add('rv');e.style.transitionDelay=(k%4)*70+'ms'});
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(en){en.forEach(function(x){var e=x.target;
if(x.isIntersecting){e.classList.add('in');e.classList.remove('out')}
else if(x.boundingClientRect.top<0){e.classList.remove('in');e.classList.add('out')}
else{e.classList.remove('in','out')}})},{rootMargin:'-8% 0px -8% 0px',threshold:0});
els.forEach(function(e){io.observe(e)});
// active nav link
var links=[].slice.call(document.querySelectorAll('aside nav a'));
var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('main section').forEach(function(s){so.observe(s)})})();
