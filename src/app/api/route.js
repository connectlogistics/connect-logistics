import { google } from "googleapis"

export async function POST(request) {
    const req = await request.json()
    console.log(request.method);


    if (request.method == 'POST') {

        try {
            const { name, email, subject, message } = req;


            // Load Google Sheets API credentials
            const auth = new google.auth.GoogleAuth({
                keyFile: './extreme-bedrock-444100-j2-11b46f3e1dc9.json', 
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({ version: 'v4', auth });

            const spreadsheetId = '17VbpOzL-0vf0GsDt7BrZeZYBPTVEjUYEgpHIlmf7kCc';
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
            return new Response(res, {
                status: 200,
                ok: true,
            })
        } catch (error) {
            console.error(error);
            return new Response('Error', {
                status: 500,
            })
        }
    }
}