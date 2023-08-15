import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://dummyjson.com/posts', {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })
  const data = await res.json()
 
  return NextResponse.json(data)
}