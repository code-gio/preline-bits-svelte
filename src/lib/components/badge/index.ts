import { type VariantProps, tv } from 'tailwind-variants';
import Root from './badge.svelte';

export const badgeVariants = tv({
	base : 'inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium',
	variants : {
		variant : {
			solid : 'dark:bg-white dark:text-neutral-800',
			soft : 'bg-gray-500 text-white',
            outline : 'text-gray-800 dark:border-neutral-200 dark:text-white',
			White : 'rounded-md border border-gray-200 text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white',
		},
        
		color: {
            default : "",
			gray: "",
            teal: "",
            blue: "",
            red: "",
            yellow: "",
            white: "",
		},
        rounded: {
            true: 'rounded-full',
          },
        max_width : {
            true : 'max-w-40 truncate whitespace-nowrap inline-block'
        },
        indicator : {
            true : "size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"
        }
    },
    compoundVariants:[
         {
            variant: 'solid',
            color: 'default',
            class: 'bg-gray-800 text-white'
        },
        {
            variant: 'solid',
            color: 'red',
            class: 'bg-red-500 text-white'
        },
        {
            variant: 'solid',
            color: 'yellow',
            class: 'bg-yellow-500 text-white'
        },
        {
            variant: 'solid',
            color: 'gray',
            class: 'bg-gray-500 text-white'
        },
        {
            variant: 'solid',
            color: 'blue',
            class: 'bg-blue-600 text-white'
        },
        {
            variant: 'solid',
            color: 'teal',
            class: 'bg-teal-500 text-white'
        },
        {
            variant: 'solid',
            color: 'white',
            class: 'border border-gray-200 bg-white text-gray-600'
        },
        {
            variant: 'outline',
            color: 'default',
            class: 'border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white dark:bg-white dark:text-neutral-800 max-w-40 truncate whitespace-nowrap inline-block'
        },
        {
            variant: 'outline',
            color: 'teal',
           class: 'border border-teal-500 text-teal-500 dark:border-neutral-200 dark:text-white dark:bg-white dark:text-neutral-800 max-w-40 truncate whitespace-nowrap inline-block'
        },
        {
            variant: 'outline',
            color: 'red',
            class: 'border border-red-500 text-red-500 dark:border-neutral-200 dark:text-white rounded-full dark:bg-white dark:text-neutral-800 max-w-40 truncate whitespace-nowrap inline-block'
        },
        {
            variant: 'outline',
            color: 'blue',
            class: 'border border-blue-500 text-blue-500 dark:border-neutral-200 dark:text-white rounded-full dark:bg-white dark:text-neutral-800 max-w-40 truncate whitespace-nowrap inline-block'
        },
        {
            variant: 'outline',
            color: 'gray',
            class: 'border border-gray-500 text-gray-500 dark:text-neutral-400"'
        },
        {
            variant: 'outline',
            color: 'yellow',
            class: 'border border-yellow-500 text-yellow-500'
        },
        {
            variant: 'soft',
            color: 'gray',
            class: 'bg-gray-500 text-white max-w-40 truncate whitespace-nowrap inline-block'
        },
        {
            variant: 'soft',
            color: 'default',
            class: 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white'
        },
        {
            variant: 'soft',
            color: 'white',
            class: 'bg-white/10 text-white'
        },
        {
            variant: 'soft',
            color: 'blue',
            class: 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500'
        },
        {
            variant: 'soft',
            color: 'teal',
            class: 'bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500'
        },
        {
            variant: 'soft',
            color: 'red',
            class: 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500'
        },
        {
            variant: 'soft',
            color: 'yellow',
            class: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500'
        },
        {
            variant: 'soft',
            color: 'white',
            class: 'bg-white/10 text-white'
        },
    ]
});

export type Variant = VariantProps<typeof badgeVariants>['variant'];
export type Color = VariantProps<typeof badgeVariants>['color'];
export type Rounded = VariantProps<typeof badgeVariants>['rounded'];
export type Max_Width = VariantProps<typeof badgeVariants>['max_width'];

export {
	Root,
	//
	Root as Badge
};
