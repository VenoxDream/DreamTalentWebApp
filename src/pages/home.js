import { VideoUploadForm } from '../components/VideoUploadForm.js';

export function HomePage() {
  return `
    <div>
      <h1>Willkommen bei DreamTalent</h1>
      ${VideoUploadForm()}
    </div>
  `;
}
