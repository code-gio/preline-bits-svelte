import { type VariantProps, tv } from 'tailwind-variants';
import Root from './select.svelte';

export const selectVariants= tv({
	base : ' pe-9 block w-full border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600',
    variants : {
		variant : {
            default : 'rounded-lg',
            gray : 'bg-gray-100 rounded-lg border-transparent dark:bg-neutral-700 dark:border-transparent',
         },
         size : {
            sm : 'py-2 px-3',
            md : 'py-3 px-4',
            xl : 'sm:p-5 p-4'
         },
         floating_label: {
            true : 'peer p-4 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
         },
         pilled : {
            true : 'rounded-full'
         }
    }
})

export type Variant = VariantProps<typeof selectVariants>['variant'];
export type Size = VariantProps<typeof selectVariants>['size'];
export type Floating_label = VariantProps<typeof selectVariants>['floating_label'];
export type Pilled = VariantProps<typeof selectVariants>['pilled'];


export {
	Root,
	//
	Root as Select
};