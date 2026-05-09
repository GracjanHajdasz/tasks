<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    //GET /api/tasks
    public function index(){
        return response()->json(Task::all());
    }

    //POST /api/tasks
    public function store(Request $request){
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'in:todo,in_progress,done',
        ]);
        $task = Task::create($validated);
        return response()->json($task, 201);
    }

     //GET /api/tasks/{id}
    public function show(Task $task)
    {
        return response()->json($task);
    }

    //PUT /api/tasks/{id}
    public function update(Request $request, Task $task)
    {
        $validated = $request->validate([
            'title'       => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'status'      => 'in:todo,in_progress,done',
            'due_date'    => 'nullable|date',
        ]);

        $task->update($validated);

        return response()->json($task);
    }

    //DELETE /api/tasks/{id}
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json(['message' => 'Zadanie usunięte']);
    }
}
