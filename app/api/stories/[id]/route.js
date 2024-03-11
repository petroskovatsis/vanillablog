import { connect } from '../../../lib/MongoConnect';

export async function GET(request, { params }) {
  const db = await connect("blog");
  const story = await db.collection("stories").findOne({ "metadata.staticTitle": params.id });

  return Response.json(story);
}

export const dynamic = 'force-dynamic';
