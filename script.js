var balao = document.getElementById('sobre')
function mostraMenu() {
    if (balao.style.display == 'none') {
        document.getElementById('sobre').style.display = "block"
    } else {
        document.getElementById('sobre').style.display = "none"
    }
}