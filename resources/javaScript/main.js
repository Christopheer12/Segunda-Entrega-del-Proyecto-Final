const UVA = 18 / 100;
const Especial = 36 / 100;
const IUDU = 50 / 100;
const Santander = 55.5 / 100;

function bancos() {
    let dinero = parseInt(document.getElementById("dinero_a_prestar").value);
    let cuotas = parseInt(document.getElementById("cantidad_de_cuotas").value);
    let bancosSeleccion = document.getElementById("bancosSeleccion").value;
    switch (bancosSeleccion) {
        case "UVA":
            let cuotasMenualesUva = dinero / cuotas;
            let interesesUva = cuotasMenualesUva * UVA;
            let finalPorMesUva = cuotasMenualesUva + interesesUva
            alert(` tus cuotas UVA son de ${finalPorMesUva} por mes, recuerda que al ser una taza uva esta sujeta a inflacion`);
            break;
        case "Especial":
            let cuotasMenualesEspecial = dinero / cuotas;
            let interesesEspecial = cuotasMenualesEspecial * Especial;
            let finalPorMesEspecial = cuotasMenualesEspecial + interesesEspecial
            alert(`Tu cuenta fija en taza especial es de : ${finalPorMesEspecial}`);
            break;
        case "IUDU":
            let cuotasMenualesIUDU = dinero / cuotas;
            let interesesIUDU = cuotasMenualesIUDU * IUDU;
            let finalPorMesIUDU = cuotasMenualesIUDU + interesesIUDU
            alert(`Tu cuenta fija en taza IUDU es de :${finalPorMesIUDU}`);
            break;
        case "Santander":
            let cuotasMenualesSantander = dinero / cuotas;
            let interesesSantander = cuotasMenualesSantander * Santander;
            let finalPorMesSantander = cuotasMenualesSantander + interesesSantander
            alert(`Tu cuenta fija en taza Santander es de :${finalPorMesSantander}`);
            break;

    }

    
    localStorage.setItem("dinero_solicitado", dinero);
    localStorage.setItem("cantidad_de_coutas", cuotas);
    localStorage.setItem("banco_seleccionado", bancosSeleccion);
    console.log(localStorage.getItem("dinero_solicitado"));
    console.log(localStorage.getItem("cantidad_de_coutas"));
    console.log(localStorage.getItem("banco_seleccionado"));
    

}


