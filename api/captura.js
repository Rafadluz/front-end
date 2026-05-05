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

    const imageDataURL = canvas.toDataURL("image/png");

    enviarImagemParaServidor(imageDataURL);
})
function enviarImagemParaServidor(imageDataURL){
    console.log("Enviando imagem para o servidor...");

    const base64String = imageDataURL.split(',')[1];

    fetch("http://DOP3080-1247456:8000/images", {
        method: "POST",
        body: JSON.stringify({ image: base64String, mime_type:'image/png' }),
        headers: {
            "Content-Type": "application/json"
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
