<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; // ← dodaj
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory; // ← dodaj

    protected $fillable = [
        'title',
        'description',
        'status',
    ];
}