import { google } from "googleapis";

export async function POST(request) {
    const req = await request.json();

    if (request.method === 'POST') {
        try {
            const { name, email, subject, message } = req;

            // Load Google Sheets API credentials from environment variables
            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                },
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({ version: 'v4', auth });

            const spreadsheetId = process.env.SPREADSHEET_ID;
            const range = 'Sheet1!A:D';

            // Append data to the sheet
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption: 'RAW',
                resource: {
                    values: [[name, email, subject, message, new Date().toISOString()]],
                },
            });

            const res = JSON.stringify(req);
            console.log(res)
            return new Response(res, {
                status: 200,
                ok: true,
            });
        } catch (error) {
            console.error(error);
            return new Response('Error', {
                status: 500,
            });
        }
    }
}
