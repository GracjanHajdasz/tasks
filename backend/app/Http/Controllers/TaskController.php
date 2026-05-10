<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function __construct(private TaskService $taskService) {}

    public function index()
    {
        return response()->json($this->taskService->getAll());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'status'      => 'in:todo,in_progress,done',
        ]);

        $task = $this->taskService->create($validated);

        return response()->json($task, 201);
    }

    public function show(Task $task)
    {
        return response()->json($task, 200);
    }

    public function update(Request $request, Task $task)
    {
        $validated = $request->validate([
            'title'       => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'status'      => 'in:todo,in_progress,done',
            'due_date'    => 'nullable|date',
        ]);

        $task = $this->taskService->update($task, $validated);

        return response()->json($task, 200);
    }

    public function destroy(Task $task)
    {
        $this->taskService->delete($task);

        return response()->json(['message' => 'Zadanie usunięte'], 200);
    }
}