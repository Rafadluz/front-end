const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("captureImage");
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

navigator.mediaDevices.getUserMedia({ video: true})
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch( erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });

botao.addEventListener("click", () => {
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataUrl("image/png");

    enviarImagemParaServidor(imageDataURL);
})
function enviarImagemParaServidor(imageDataURL){
    console.log("Enviando imagem para o servidor...");

    fetch("/", {
        method: "POST",
        body: JSON.stringify({Image: imageDataURL}),
        headers: {
            "Content-Type": "app"
        }
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log("Resposta do Servidor: ", dados);
        })
        .catch( erro => {
            console.error("Erro ao enviar a imagem: ", erro);
        })
}