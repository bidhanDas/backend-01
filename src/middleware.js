import { NextRequest, NextResponse } from "next/server";


export function middleware(req,res){

    //before login
    if(req.nextUrl.pathname.startsWith("/api/site")){
        //no Auth check
        return NextResponse.next(); //go ahead
    }


    // //after login
    // //headers
    // if(req.nextUrl.pathname.startsWith("/api/dashboard")){
    //     //Auth check
    //     const x = new Headers(req.headers);
    //     if(x.get('token')==='ABC-123'){

    //         //set user identity in header
    //         x.set("email","264cat@gmail.com"); //token 'Decode' kore mail ta pabo

    //         return NextResponse.next(
    //             {
    //                 request:{headers:x}
    //             }
    //         );
    //     }
    //     else{
    //         return NextResponse.json({msg:"Unauthorized"},{status:401});
    //     }
    // }



    //after login
    //cookie read
    if(req.nextUrl.pathname.startsWith("/api/dashboard")){
        
        const x = req.cookies.get('Cookie_1');

        try {
            if(x.value==="value"){
                return NextResponse.next();
            }
            else{
                return NextResponse.json({msg:"Unauthorized"},{status:401});
            }
        }
        catch(e){
            return NextResponse.json({msg:"Unauthorized"},{status:401});
        }
    }

}

