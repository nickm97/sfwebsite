// export default defineEventHandler(async (event) => {
//   const { sendMail } = useNodeMailer();

//   // Haal gegevens op uit de request body
//   const body = await readBody(event);
//   const { name, email, phone, message } = body;

//   // Basisvalidatie
//   if (!name || !email || !message) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Vul alle verplichte velden in.',
//     });
//   }

//   // Verzenden van de e-mail
//   try {
//     await sendMail({
//       to: 'jouw_email@domein.nl', // Jouw ontvanger
//       subject: 'Nieuw bericht van je contactformulier',
//       text: `
//         Naam: ${name}
//         E-mail: ${email}
//         Telefoon: ${phone || 'Niet opgegeven'}
//         Bericht:
//         ${message}
//       `,
//     });

//     return { success: true, message: 'Bericht verzonden!' };
//   } catch (error) {
//     console.error('Fout bij verzenden van e-mail:', error);
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Er is een fout opgetreden bij het verzenden van de e-mail.',
//     });
//   }
// });
