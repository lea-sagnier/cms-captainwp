<?php
/**
 * Plugin Name:       Capitainewp Gut Bases
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       capitainewp-gut-bases
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function capitainewp_gut_bases_block_init()
{
	register_block_type( __DIR__ . '/build/1-block' );
	register_block_type( __DIR__ . '/build/2-second-block' );
	register_block_type( __DIR__ . '/build/3-editable-block' );
	register_block_type(__DIR__ . '/build/4-richtext' );
	register_block_type(__DIR__ . '/build/5-fifth-block' ); 
	register_block_type(__DIR__ . '/build/6-six-block' ); 
	register_block_type(__DIR__ . '/build/7-seven-block' ); 
	register_block_type(__DIR__ . '/build/8-eight-block' ); 
	register_block_type(__DIR__ . '/build/9-nine-block' ); 
	register_block_type(__DIR__ . '/build/10-url' ); 
	register_block_type(__DIR__ . '/build/11-media' ); 
	register_block_type(__DIR__ . '/build/12-mediaText' ); 

	// … register_block_type( __DIR__ . '/build/3-troisieme-block' );
}
add_action( 'init', 'capitainewp_gut_bases_block_init' );

