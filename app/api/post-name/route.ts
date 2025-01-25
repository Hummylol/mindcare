import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const { name } = await request.json()
  
      if (!name) {
        return NextResponse.json({ error: 'Name is required' }, { status: 400 })
      }
  
      const { error } = await supabase
        .from('names')
        .insert({ name })
  
      if (error) {
        console.error('Supabase insertion error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
  
      return NextResponse.json({ message: 'Name submitted successfully' }, { status: 200 })
    } catch (error) {
      console.error('Route handler error:', error)
      return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
    }
  }