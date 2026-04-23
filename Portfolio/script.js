
        function updateClock() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
            document.getElementById('clock').innerText = `${h}:${m}:${s}:${ms}`;
        }
        setInterval(updateClock, 40);

        function moveTargets() {
            const t1 = document.getElementById('target-stats');
            if(t1) t1.style.transform = `translate(${Math.random()*4}px, ${Math.random()*4}px)`;
        }
        setInterval(moveTargets, 5000);

function linkOpsBoard(){
  window.open("https://opsboard-omega.vercel.app");
}

function linkSAS(){
  window.open("https://github.com/RayC-Dev/SAS-Security-System-IOT");
}
