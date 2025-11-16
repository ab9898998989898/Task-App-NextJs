import { NextResponse } from "next/server";
import Task from "@/models/Task";
import connectDB from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req: Request, {params}:{params:Promise<{id:string}>>}){
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const id = (await params).id;
        const task = await Task.findById(id);
        
        if (!task) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }
        
        return NextResponse.json(task);
    } catch (error) {
        console.error('Get task error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function PUT(req: Request, {params}:{params:Promise<{id:string}>>}){
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const id = (await params).id;
        const data = await req.json();
        const updated = await Task.findByIdAndUpdate(id, data, {new:true});
        
        if (!updated) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }
        
        return NextResponse.json(updated);
    } catch (error) {
        console.error('Update task error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(req: Request, {params}:{params:Promise<{id:string}>>}){
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const id = (await params).id;
        const deleted = await Task.findByIdAndDelete(id);
        
        if (!deleted) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }
        
        return NextResponse.json({message:"Task deleted successfully"});
    } catch (error) {
        console.error('Delete task error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}