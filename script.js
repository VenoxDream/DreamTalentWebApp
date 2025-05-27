function uploadVideo() {
  const input = document.getElementById("videoUpload");
  if (!input.files[0]) return alert("Bitte wähle ein Video aus.");

  alert("Video hochgeladen (Demo)");
}