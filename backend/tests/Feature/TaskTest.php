<?php

namespace Tests\Feature;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    // GET /api/tasks
    public function test_can_get_all_tasks(): void
    {
        Task::factory()->count(3)->create();

        $response = $this->getJson('/api/tasks');

        $response->assertStatus(200)
                 ->assertJsonCount(3);
    }

    // POST /api/tasks
    public function test_can_create_task(): void
    {
        $response = $this->postJson('/api/tasks', [
            'title' => 'Nowe zadanie',
            'description' => 'Opis zadania',
        ]);

        $response->assertStatus(201)
                 ->assertJsonFragment(['title' => 'Nowe zadanie']);

        $this->assertDatabaseHas('tasks', ['title' => 'Nowe zadanie']);
    }

    // POST /api/tasks — brak tytułu
    public function test_cannot_create_task_without_title(): void
    {
        $response = $this->postJson('/api/tasks', [
            'description' => 'Opis bez tytułu',
        ]);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['title']);
    }

    // POST /api/tasks — nieprawidłowy status
    public function test_cannot_create_task_with_invalid_status(): void
    {
        $response = $this->postJson('/api/tasks', [
            'title' => 'Zadanie',
            'status' => 'invalid_status',
        ]);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['status']);
    }

    // GET /api/tasks/{id}
    public function test_can_get_single_task(): void
    {
        $task = Task::factory()->create();

        $response = $this->getJson("/api/tasks/{$task->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['title' => $task->title]);
    }

    // PUT /api/tasks/{id}
    public function test_can_update_task(): void
    {
        $task = Task::factory()->create(['status' => 'todo']);

        $response = $this->putJson("/api/tasks/{$task->id}", [
            'title' => 'Zaktualizowany tytuł',
            'status' => 'in_progress',
        ]);

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'title' => 'Zaktualizowany tytuł',
                     'status' => 'in_progress',
                 ]);

        $this->assertDatabaseHas('tasks', [
            'id' => $task->id,
            'status' => 'in_progress',
        ]);
    }

    // DELETE /api/tasks/{id}
    public function test_can_delete_task(): void
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("/api/tasks/{$task->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Zadanie usunięte']);

        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }

    // GET /api/tasks/{id} — nieistniejące zadanie
    public function test_returns_404_for_missing_task(): void
    {
        $response = $this->getJson('/api/tasks/999');

        $response->assertStatus(404);
    }
}