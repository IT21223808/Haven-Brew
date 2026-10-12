
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}// import { connectDB } from "@/lib/db";
// import Product from "@/lib/models/Product";
// import { NextResponse } from "next/server";

// // ✅ GET → அனைத்து products
// export async function GET() {
//   try {
//     await connectDB();
//     const products = await Product.find();
//     return NextResponse.json(products);
//   } catch (error) {
//     return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
//   }
// }

// // ✅ POST → new product add
// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const body = await req.json();

//     const product = await Product.create(body);

//     return NextResponse.json(product);
//   } catch (error) {
//     return NextResponse.json({ error: "Error creating product" }, { status: 500 });
//   }
// }