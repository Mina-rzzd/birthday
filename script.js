const deadline = new Date('2026-08-06T23:59:59');
// deadlineText.textContent = deadline.toLocaleDateString('fa-IR');

let startButton = document.getElementById('start-button');
startButton.addEventListener("click", function () {
    if (new Date() > deadline) {
        alert('⛔ وقت بازی تموم شده!');
        return;
    }
    location.href = 'games.html';
});

if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", 0);
}
document.getElementById('displayScore').textContent = localStorage.getItem("score");
if (Number(localStorage.getItem("score")) === 1000000) {
    document.getElementById('allScore').textContent = "عجب کسی هستی! همه امتیازا رو جمع کردی!! دمت گرم!!😎";
}

// function startButtonClick() {
//     if (new Date() > deadline) {
//         alert('⛔ وقت بازی تموم شده!');
//         return;
//     }
//     location.href='games.html';
// }


//
// const games = [{t: 'معمای ریاضی', q: '۵+۸×۲', a: '21', s: 10}, {
//     t: 'مورس',
//     q: '.... . .-.. .-.. ---',
//     a: 'hello',
//     s: 15
// }, {t: 'رمز سزار', q: 'KHOOR', a: 'HELLO', s: 20}];
// let score = +localStorage.score || 0, done = JSON.parse(localStorage.done || '[]');
// scoreEl = score;
// document.getElementById('score').textContent = score;
// start.onclick = () => {
//     if (new Date() > deadline) {
//         alert('⛔ وقت بازی تموم شده!');
//         return;
//     }
//     landing.classList.add('hidden');
//     games.classList.remove('hidden');
//     render();
// }
//
// function render() {
//     cards.innerHTML = '';
//     document.getElementById('score').textContent = score;
//     games.forEach((g, i) => {
//         let c = document.createElement('div');
//         c.className = 'card' + (done.includes(i) ? ' done' : '');
//         c.innerHTML = `<h3>${g.t}</h3><p>+${g.s} امتیاز</p><button ${done.includes(i) ? 'disabled' : ''}>شروع</button>`;
//         c.querySelector('button').onclick = () => {
//             let ans = prompt(g.q);
//             if (ans && ans.toLowerCase() == g.a.toLowerCase()) {
//                 alert('درست!');
//                 score += g.s;
//                 done.push(i);
//                 localStorage.score = score;
//                 localStorage.done = JSON.stringify(done);
//             } else alert('اشتباه');
//             render();
//         };
//         cards.appendChild(c);
//     });
// }