import { type VariantProps, tv } from 'tailwind-variants';
import Root from './collapse.svelte';

export const collapseVariants = tv({
    base : 'py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none',
    variants: {
		variant: {
			collapse: 'hs-collapse-toggle',
			show_hide: 'hs-collapse-toggle gap-x-1'			
		},
		color: {
			gray: '',
			blue: '',
			teal: '',
			red: '',
			yellow: '',
		},
	},
    compoundVariants: [
		{
			variant: 'show_hide',
            color : 'blue',
			class: 'text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400'
		},
        {
			variant: 'collapse',
            color : 'gray',
			class: 'bg-gray-500 hover:bg-gray-600'
		},
        {
			variant: 'collapse',
            color : 'blue',
			class: 'bg-blue-600 hover:bg-blue-700'
		},
        {
			variant: 'collapse',
            color : 'teal',
			class: 'bg-teal-500 hover:bg-teal-600'
		},
        {
			variant: 'collapse',
            color : 'red',
			class: 'bg-red-500 hover:bg-red-600'
		},
        {
			variant: 'collapse',
            color : 'yellow',
			class: 'bg-yellow-500 text-white hover:bg-yellow-600'
		},    
    ]
})

export type Variant = VariantProps<typeof collapseVariants>['variant'];
export type Color = VariantProps<typeof collapseVariants>['color'];

export {
	Root,
	//
	Root as Button
};

	
