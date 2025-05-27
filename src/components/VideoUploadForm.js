export function VideoUploadForm() {
  return `
    <form id="uploadForm">
      <h2>Talent zeigen</h2>
      <input type="text" name="title" placeholder="Titel deines Talents" required />
      <input type="file" name="video" accept="video/mp4" required />
      <button type="submit">Video hochladen</button>
    </form>
  `;
}
