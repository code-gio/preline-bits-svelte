import { type VariantProps, tv } from 'tailwind-variants';
import Root from './text-area.svelte';

export const textAreaVariants = tv({
	base : 'block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600',
    variants : {
		variant : {
            gray: 'bg-gray-100 border-transparent dark:bg-neutral-700 dark:border-transparent',
            underline : 'px-0 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 dark:border-b-neutral-700 dark:focus:border-b-neutral-600',
            floating_textArea : 'peer p-4 placeholder:text-transparent dark:bg-neutral-900 dark:border-neutral-700 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2',
            gray_floating_textArea : 'peer p-4 bg-gray-100 border-transparent placeholder:text-transparent focus:ring-blue-500 dark:bg-neutral-700 dark:border-transparent dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2',
            underline_floating_textArea : 'peer py-4 px-0 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 dark:border-b-neutral-700 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2',  
        },
        size : {
            sm : 'py-2 px-3',
            md : 'py-3 px-4',
            lg : 'sm:p-5 py-3 px-4',
        },
    },
})

export type Variant = VariantProps<typeof textAreaVariants>['variant'];
export type Size = VariantProps<typeof textAreaVariants>['size'];

export {
	Root,
	//
	Root as TextArea
};