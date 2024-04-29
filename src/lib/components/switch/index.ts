import { type VariantProps, tv } from 'tailwind-variants';
import Root from './switch.svelte';

export const switchVariants = tv({
	base :'',
	variants : {
		variant : {
            default : 
            'relative bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200',
        },
            size : {
            xs: 'w-[35px] h-[21px]',
            sm: 'w-11 h-6 p-px before:size-5',
            md: 'w-[3.25rem] h-7 p-px',
            lg: 'relative w-[4.25rem] h-9 p-px before:w-8 before:h-8'
        }

    }
})

export type Variant = VariantProps<typeof switchVariants>['variant'];
export type Size = VariantProps<typeof switchVariants>['size'];


export {
	Root,
	//
	Root as Switch
};