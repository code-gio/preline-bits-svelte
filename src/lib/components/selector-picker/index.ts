import { type VariantProps, tv } from 'tailwind-variants';
import Root from './color-picker.svelte';

export const colorPickerVariants = tv({
	base :'',
	variants : {
		variant : {
            default : 'p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700',
        }

    }
})

export type Variant = VariantProps<typeof colorPickerVariants>['variant'];


export {
	Root,
	//
	Root as ColorPicker
};