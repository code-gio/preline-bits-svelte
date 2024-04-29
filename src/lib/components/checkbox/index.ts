import { type VariantProps, tv } from 'tailwind-variants';
import Root from './checkbox.svelte';

export const checkBoxVariants = tv({
	base :'',
	variants : {
		variant : {
            default : 'shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800',
        }
    }
})

export type Variant = VariantProps<typeof checkBoxVariants>['variant'];


export {
	Root,
	//
	Root as Button
};
