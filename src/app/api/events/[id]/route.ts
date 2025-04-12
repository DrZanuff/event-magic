// src/app/api/events/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { MongoClient, ObjectId } from 'mongodb'

const uri = process.env.MONGODB_URI!

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

if (!clientPromise) {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()

    const mongoClient = await clientPromise!
    const db = mongoClient.db('eventmagic')
    const events = db.collection('events')

    const result = await events.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    )

    return NextResponse.json({ success: result.modifiedCount === 1 })
  } catch (err) {
    console.error('Update error:', err)
    return NextResponse.json(
      { success: false, error: 'Failed to update event' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const mongoClient = await clientPromise!
    const db = mongoClient.db('eventmagic')
    const events = db.collection('events')

    const result = await events.deleteOne({ _id: new ObjectId(id) })

    return NextResponse.json({ success: result.deletedCount === 1 })
  } catch (err) {
    console.error('Delete error:', err)
    return NextResponse.json(
      { success: false, error: 'Failed to delete event' },
      { status: 500 }
    )
  }
}
