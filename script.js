function buildQrUrl(data) {
  return "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(data);
}

function updateQr() {
const url = document.getElementById("siteUrl").value || "https://ahmad-yaghi.netlify.app/";
  document.getElementById("qrImg").src = buildQrUrl(url);
}

document.getElementById("genBtn").addEventListener("click", updateQr);
updateQr();
