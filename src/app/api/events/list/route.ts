// src/app/api/events/list/route.ts
import { MongoClient } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

const uri = process.env.MONGODB_URI!

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

if (!clientPromise) {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json()

    const mongoClient = await clientPromise

    if (!mongoClient) {
      return new Response('Failed to connect to MongoDB', { status: 500 })
    }

    const db = mongoClient.db('eventmagic')
    const events = await db.collection('events').find({ userId }).toArray()

    return NextResponse.json({ success: true, events })
  } catch (err) {
    console.error('[EVENTS_LIST_ERROR]', err)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch events.' },
      { status: 500 }
    )
  }
}
