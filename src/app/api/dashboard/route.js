import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers"; //-----middleware a use kora jay na-----



// GET
export async function GET(req,res){
    //query string
    const {searchParams} = new URL(req.url);

    return NextResponse.json(searchParams.get('name'));
    // return NextResponse.json({data:searchParams.get('name')});
    // return NextResponse.json({status:"success",msg:"what?"}, {status:201}); //203,200(ok) //object pathaitesi as JS
}



// POST
export async function POST(req,res){
    //body json
    const x = await req.json();

    // return NextResponse.json(x.roll); // x['roll']
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
    const x = headers(); //header take dhorlam, header vitore cookie tar vitore token

    return NextResponse.json({data:x.get('token')});

    // return NextResponse.json({data:x.get('email')}); //-----middleware a ashe add hoyeche-----
}



// DELETE
export async function DELETE(req,res){
    //cookies
    const x = req.cookies.get('Cookie_1'); //cookie ta dhorlam

    return NextResponse.json({data:x}); // but {"name": "Cookie_1","value": "value"}
    // return NextResponse.json({data:x.name}); 
    // return NextResponse.json({data:x.value});
}



// ================================================================================================================