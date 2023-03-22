var h1Ele = document.querySelector('.title');
var btnChange = document.getElementById('btnChange');
btnChange.addEventListener('click', function (e) {
    e.preventDefault();
    h1Ele.textContent = 'hello';
});
