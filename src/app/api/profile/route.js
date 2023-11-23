import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";



// GET
export async function GET(req,res){
    //query string
    const {searchParams} = new URL(req.url);

    return NextResponse.json(searchParams.get('name'));
    // return NextResponse.json({data:searchParams.get('name')});
}



// POST
export async function POST(req,res){
    //body json
    const x = await req.json();

    // return NextResponse.json(x.roll);
    // return NextResponse.json({data:x.roll});
    // return NextResponse.json(x);
    // return NextResponse.json({data:x});
}



// PUT
export async function PUT(req,res){
    //form data
    const x = await req.formData();

    return NextResponse.json({data:x.get('country')});
}



// PATCH
export async function PATCH(req,res){
    //headers
    const x = headers();

    return NextResponse.json({data:x.get('token')});
}



// DELETE
export async function DELETE(req,res){
    //cookies
    const x = req.cookies.get('Cookie_1');

    return NextResponse.json({data:x});
}