import { connectDB } from './../../../database/config';
import { Task } from './../../../model/Task';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    await connectDB();
    console.log('🔍 Fetching all tasks...');
    const tasks = await Task.find();
    console.log('✅ Tasks fetched successfully');
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error('❌ Error fetching tasks:', error);
    return NextResponse.json({ message: 'Error fetching tasks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const { title } = await request.json();

    console.log('📝 Creating task:', title);
    const newTask = await Task.create({ title });

    console.log('✅ Task created successfully');
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error('❌ Error creating task:', error);
    return NextResponse.json({ message: 'Error creating task' }, { status: 500 });
  }
}
