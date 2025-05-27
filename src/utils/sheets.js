
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from './credentials.json' assert { type: "json" };

const SHEET_ID = '1TxwIVNFgkanFapgNTyQe00CIKrLWJN0MtdxVAKe8Ezo';

export async function saveApplication({ name, email, videoLink, rating, comment }) {
  const doc = new GoogleSpreadsheet(SHEET_ID);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow({
    Name: name,
    Email: email,
    VideoLink: videoLink,
    Bewertung: rating,
    Kommentar: comment
  });
}
