<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Menu>
 */
class MenuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // 'idCategory' => fake()->biasedNumberBetween(1, 3),
            'name' => fake()->sentence(),
            'description' => fake()->text(),
            'price' => fake()->biasedNumberBetween(),
            'ratingcount' => fake()->biasedNumberBetween(),
            'ratingsum' => fake()->biasedNumberBetween(),
        ];
    }
}
