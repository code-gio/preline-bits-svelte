import { type VariantProps, tv } from 'tailwind-variants';
import Root from './list.svelte';

  
export const listVariants = tv({
    base: 'list-disc ps-5 space-y-2 dark:text-neutral-400',
    variants :{
        variant : {
            marker : 'marker:text-blue-600',
            separator : 'inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600',
            check : 'flex-shrink-0 size-4 mt-0.5',
            check_2: 'size-5 flex justify-center items-center rounded-full'
            },
        color: {
            default : '',
            dark : '',
            gray: '',
			teal: '',
			red: '',
			yellow: '',
			white: '',
        },
        compoundVariants:[
            {
                variant: ['marker', 'separator'],
                class: 'marker:text-blue-800'
            },

            {
                variant: 'check',
                color : 'default',
                class: 'text-blue-600 dark:text-blue-500'
            },
            {
                variant: 'check',
                color : 'dark',
                class: 'text-gray-800 dark:text-white'
            },
            {
                variant: 'check',
                color : 'gray',
                class:  'text-gray-500 dark:text-neutral-500'
            },
            {
                variant: 'check',
                color : 'teal',
                class: 'text-teal-500'
            },
            {
                variant: 'check',
                color : 'red',
                class: 'text-red-500'
            },
            {
                variant: 'check',
                color : 'yellow',
                class: 'text-yellow-500' 
            },
            {
                variant: 'check',
                color : 'white',
                class: 'text-white'
            },
            {
                variant: 'check_2',
                color : 'default',
                class: 'bg-blue-60 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'
            },
            {
                variant: 'check_2',
                color : 'dark',
                class: 'bg-gray-50 text-gray-600 dark:bg-neutral-700 dark:text-neutral-200'
            },
            {
                variant: 'check_2',
                color : 'gray',
                class:  'bg-gray-50 text-gray-500 dark:bg-neutral-700 dark:text-neutral-400' 
            },
            {
                variant: 'check_2',
                color : 'teal',
                class: 'bg-teal-50 text-teal-500 dark:bg-teal-800/30 dark:text-teal-500'
            },
            {
                variant: 'check_2',
                color : 'red',
                class: 'bg-red-50 text-red-500 dark:bg-red-800/30 dark:text-red-500'
            },
            {
                variant: 'check_2',
                color : 'yellow',
                class: 'size-5 flex justify-center items-center rounded-full bg-yellow-50 text-yellow-500 dark:bg-yellow-800/30 dark:text-yellow-500' 
            },
            {
                variant: 'check_2',
                color : 'white',
                class: 'bg-white/10 text-white'
            },
            
        ]}
});

export type Variant = VariantProps<typeof listVariants>['variant'];
export type Color = VariantProps<typeof listVariants>['color'];

export {
	Root,
	//
	Root as List
};