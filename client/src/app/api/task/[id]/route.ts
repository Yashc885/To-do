import { connectDB } from './../../../../database/config';
import { Task } from './../../../../model/Task';
import { NextRequest, NextResponse } from 'next/server';

// ✅ Corrected PUT Handler
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = params;
    const { title, completed } = await request.json();

    console.log(`✏️ Updating task with ID: ${id}`);

    const updatedTask = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });

    if (!updatedTask) {
      console.log('⚠️ Task not found');
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    console.log('✅ Task updated successfully');
    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    console.error('❌ Error updating task:', error);
    return NextResponse.json({ message: 'Error updating task' }, { status: 500 });
  }
}

// ✅ Corrected DELETE Handler
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = params;

    console.log(`🗑️ Deleting task with ID: ${id}`);

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      console.log('⚠️ Task not found');
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    console.log('✅ Task deleted successfully');
    return NextResponse.json({ message: 'Task deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('❌ Error deleting task:', error);
    return NextResponse.json({ message: 'Error deleting task' }, { status: 500 });
  }
}
