import { type VariantProps, tv } from 'tailwind-variants';
import Root from './input.svelte';

export const inputVariants = tv({
	base : 'block w-full border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600',
	variants : {
		variant : {
            default : 'rounded-lg ',
            gray : 'peer ps-11 bg-gray-100 border-transparent dark:bg-neutral-700 dark:border-transparent',
            underline : 'peer py-3 pe-0 ps-8 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 dark:border-b-neutral-700 dark:focus:border-b-neutral-600',
            floating_label : 'peer p-4 placeholder:text-transparent',
        },
        size : {
            sm : 'py-2 px-3',
            md : 'py-3 px-4',
            lg : 'p-4 sm:p-5',
        },
        pilled : {
            true : 'rounded-full'
        }
    },
})

export type Variant = VariantProps<typeof inputVariants>['variant'];
export type Size = VariantProps<typeof inputVariants>['size'];
export type Pilled= VariantProps<typeof inputVariants>['pilled'];

export {
	Root,
	//
	Root as Inpunt
};