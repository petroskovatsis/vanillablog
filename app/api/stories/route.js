import { connect } from '../../lib/MongoConnect';

export async function GET(request) {
  const db = await connect("blog");
  const projection = { _id: 0, title: 1, subtitle: 1, metadata: 1 };
  const stories = await db.collection("stories").find({}).project(projection).toArray();

  return Response.json(stories);
}

export const dynamic = 'force-dynamic';
