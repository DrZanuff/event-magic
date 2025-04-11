import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI!

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

if (!clientPromise) {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const mongoClient = await clientPromise

    if (!mongoClient) {
      return new Response('Failed to connect to MongoDB', { status: 500 })
    }

    const db = mongoClient.db('eventmagic')
    const events = db.collection('events')

    const result = await events.insertOne(body)

    return NextResponse.json({ success: true, insertedId: result.insertedId })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, error: 'Failed to save event' },
      { status: 500 }
    )
  }
}
