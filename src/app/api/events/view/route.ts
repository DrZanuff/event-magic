// src/app/api/events/view/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { MongoClient, ObjectId } from 'mongodb'

const uri = process.env.MONGODB_URI!
const client = new MongoClient(uri)
const clientPromise = client.connect()

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json(
      { success: false, error: 'Missing ID' },
      { status: 400 }
    )
  }

  try {
    const mongoClient = await clientPromise
    const db = mongoClient.db('eventmagic')
    const events = db.collection('events')

    const event = await events.findOne({ _id: new ObjectId(id) })

    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, event })
  } catch (err) {
    console.error('Fetch event error:', err)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch event' },
      { status: 500 }
    )
  }
}
