<?php

namespace App\Http\Controllers;

use App\Models\Education;
use App\Models\Home;

class DataController extends Controller
{
    public function index()
    {
        $home = Home::first();
        $education = Education::all();
        return response()->json([
            'home' => $home,
            'education' => $education
        ]);
    }
}
