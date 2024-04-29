import { type VariantProps, tv } from 'tailwind-variants';
import Root from './legend-indicator.svelte';

  
export const legendIndicatorVariants = tv({
	base : '',
	variants : {
		variant : {
			default : 'size-2 inline-block rounded-full me-2'
		},
		color: {
            dark : 'bg-gray-800 dark:bg-white',
            gray : 'bg-gray-500 dark:bg-neutral-500',
			red: 'bg-red-500',
			yellow: 'bg-yellow-50',
            green : 'bg-green-500',
            blue : 'bg-blue-600 dark:bg-blue-500',
            indigo : 'bg-indigo-500',
            purple : 'bg-purple-500',
            pink : 'bg-pink-500',
			white: 'bg-white',
		}
	},
}) ;      

export type Variant = VariantProps<typeof legendIndicatorVariants>['variant'];
export type Color = VariantProps<typeof legendIndicatorVariants>['color'];

export {
	Root,
	//
	Root as LegendIndicator
};