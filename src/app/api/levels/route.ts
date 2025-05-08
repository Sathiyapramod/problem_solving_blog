import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const client = await clientPromise;
  const db = client.db("problem_solving");
  const levels = await db.collection("difficulty").find({}).toArray();
  return NextResponse.json(levels);
}
