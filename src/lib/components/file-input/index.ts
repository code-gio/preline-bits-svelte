import { type VariantProps, tv } from 'tailwind-variants';
import Root from './file-input.svelte';

export const fileInputVariants = tv({
    base: '',
    variants :{
        variant : {
            basic : 'block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 dark:file:bg-neutral-700 dark:file:text-neutral-400',
            filebutton :'text-gray-500 file:me-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:text-neutral-500 dark:file:bg-blue-500 dark:hover:file:bg-blue-400'
        },
        size : {
            sm : 'file:py-2 file:px-4',
            md : 'file:py-3 file:px-4',
            lg : 'file:py-3 file:px-4 file:sm:py-5',
        }
    }
})

export type Variant = VariantProps<typeof fileInputVariants>['variant'];
export type Size = VariantProps<typeof fileInputVariants>['size'];

export {
	Root,
	//
	Root as FileInput
};