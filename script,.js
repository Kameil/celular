function botaashora() {
    const data = new Date();
    const diadasemana = document.getElementById("diadasemana")
    const diadomes = document.getElementById("diadomes")
    const mes = document.getElementById("mes")
    const horah = document.getElementById("horah")

    hora = String(data.getHours()).padStart(2, '0')
    minutos = String(data.getMinutes()).padStart(2, '0');
    meses = ["janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    horah.innerHTML = `${hora}:${minutos}`
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const diaSemana = diasSemana[data.getDay()];
    diadasemana.innerHTML = diaSemana
    diadomes.innerHTML = `${data.getDate()} de`
    mes.innerHTML = `${meses[data.getMonth()]}`
}



document.addEventListener("DOMContentLoaded", botaashora)



setInterval(botaashora, 1000)