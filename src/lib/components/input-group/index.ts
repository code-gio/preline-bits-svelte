import { type VariantProps, tv } from 'tailwind-variants';
import Root from './input-gruop.svelte';

export const inputGroupVariants = tv({
	base : 'pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600',
	variants : {
		variant : {
            default : 'rounded-lg',
            multiple : '-mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg relative focus:z-10',
        },
        size : {
            sm : 'py-2 px-3',
            md : 'py-3 px-4',
            lg : 'py-3 px-4 sm:p-5',
        },
    },
})

export type Variant = VariantProps<typeof inputGroupVariants>['variant'];
export type Size = VariantProps<typeof inputGroupVariants>['size'];

export {
	Root,
	//
	Root as InpuntGroup
};