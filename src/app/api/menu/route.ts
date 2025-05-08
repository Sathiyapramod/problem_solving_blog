import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  const client = await clientPromise;
  const db = client.db("problem_solving");
  const menu_items = await db.collection("menu_items").find({}).toArray();
  return NextResponse.json(menu_items);
}
