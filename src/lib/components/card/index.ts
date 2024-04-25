import { type VariantProps, tv } from 'tailwind-variants';
import Root from './card.svelte';


export const cardVariants = tv({
    base : 'flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700',
    variants : {
        size : {
            default : 'p-4 md:p-7',
            sm : 'p-4 md:p-5',
            lg : 'p-4 md:p-10'
        },
        type : {
            body : ' border-gray-200 dark:text-neutral-400',
            simple : 'dark:shadow-neutral-700/70',
        },         
        header : {
            true : 'bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5'
        },
        footer : {
            true : 'bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5'
        },
        navigation: {
            true: 'bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-neutral-800 dark:border-neutral-700'
        },
        imagePlaceholder: {
            true: 'w-full h-auto rounded-t-xl',
        }
    },
});

export type Size = VariantProps<typeof cardVariants>['size'];
export type Type = VariantProps<typeof cardVariants>['type'];
export type Header = VariantProps<typeof cardVariants>['header'];
export type Footer = VariantProps<typeof cardVariants>['footer'];
export type Navigation = VariantProps<typeof cardVariants>['navigation'];
export type imagePlaceholder = VariantProps<typeof cardVariants>['imagePlaceholder'];

export {
	Root,
	//
	Root as Card
};

