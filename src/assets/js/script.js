document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  
  const btn = document.querySelector("#btnCrearPdf")

  if (btn !== null) {

    btn.addEventListener("click", () => {
    
    const $elementoParaConvertir = document.getElementById("divpdf"); // <-- Aquí puedes elegir cualquier elemento del DOM
    
    html2pdf()
      .set({
        margin: 1,
        filename: 'documento.pdf',
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a3",
          orientation: "portrait", // landscape o portrait
        },
      })
      .from($elementoParaConvertir)
      .save()
      .catch((err) => console.log(err));
    });
  }
});
