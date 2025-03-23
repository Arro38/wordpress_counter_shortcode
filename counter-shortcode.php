<?php
/**
 * Plugin Name: Counter Shortcode
 * Plugin URI: https://github.com/Arro38/wordpress_counter_shortcode
 * Description: Un shortcode [counter] qui anime un nombre de 0 à une valeur définie.
 * Version: 1.0.0
 * Author: Arro38
 * Author URI: https://coding974.com
 * License: GPL2
 */

if (!defined('ABSPATH')) {
    exit; // Sécurité : empêche l'accès direct au fichier
}

// Enqueue le script uniquement si un shortcode est présent
function counter_enqueue_scripts() {
    if (!is_admin()) {
        wp_enqueue_script(
            'counter-script',
            plugin_dir_url(__FILE__) . 'counter.js',
            [],
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'counter_enqueue_scripts');

// Shortcode [counter start=0 end=100 speed=0.1]
function counter_shortcode($atts) {
    $atts = shortcode_atts([
        'start' => 0,
        'end' => 100,
        'speed' => 0.1,
    ], $atts);

    $id = uniqid('counter_');

    return '<span id="' . esc_attr($id) . '" class="counter" data-start="' . esc_attr($atts['start']) . '" data-end="' . esc_attr($atts['end']) . '" data-speed="' . esc_attr($atts['speed']) . '">0</span>';
}
add_shortcode('counter', 'counter_shortcode');