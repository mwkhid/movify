<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Batman',
                'slug' => 'the-batman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'https://m.media-amazon.com/images/S/pv-target-images/3de84cca07fc963b66a01a5465c2638066119711e89c707ce952555783dd4b4f.jpg',
                'rating' => 9.0,
                'is_featured' => false
            ],
            [
                'name' => 'Iron Man',
                'slug' => 'iron-man',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=Ke1Y3P9D0Bc',
                'thumbnail' => 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9259486_p_v13_aa.jpg',
                'rating' => 9.2,
                'is_featured' => true
            ],
            [
                'name' => 'Suzume no Tojimari',
                'slug' => 'suzume-no-tojimari',
                'category' => 'Anime',
                'video_url' => 'https://www.youtube.com/watch?v=5pTcio2hTSw',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/7/7f/Suzume_no_Tojimari_poster.jpg',
                'rating' => 8.7,
                'is_featured' => false
            ],
        ];

        Movie::insert($movies);
    }
}
