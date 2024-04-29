import { type VariantProps, tv } from 'tailwind-variants';
import Root from './progress-bar.svelte';

  
export const progressBarVariants = tv({
	base : 'flex w-full bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700',
	variants : {
		variant : {
			default : 'h-1.5'
		},
		size: {
            sm: 'h-1.5',
            md:'h-4',
            lg: 'h-6'
	},
}
}) ;      

export type Variant = VariantProps<typeof progressBarVariants>['variant'];
export type Size = VariantProps<typeof progressBarVariants>['size'];

export {
	Root,
	//
	Root as LegendIndicator
};