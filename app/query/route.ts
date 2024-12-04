import { db } from "@vercel/postgres";

const client = await db.connect();

async function listReceptions() {
 	const data = await client.sql`
     SELECT receptions.name, clubs.club_name
     FROM receptions
     JOIN clubs ON receptions.club_id = clubs.id
     WHERE receptions.name = 666;
   `;

 	return data.rows;
}

async function listUsers() {
  const data = await client.sql`
    SELECT users.name
    FROM users
    WHERE users.email = 'kinai-ap@cameo.plala.or.jp';
  `;

  return data.rows;
}

export async function GET() {
//  return Response.json({
//    message:
//      'Uncomment this file and remove this line. You can delete this file when you are finished.',
//  });
   try {
   	return Response.json(await listUsers());
   } catch (error) {
   	return Response.json({ error }, { status: 500 });
   }
}
