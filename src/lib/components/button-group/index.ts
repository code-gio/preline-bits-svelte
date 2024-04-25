import { type VariantProps, tv } from 'tailwind-variants';
import Root from './button-group.svelte';

export const buttonGruopVariants = tv({
    
    base : 'inline-flex rounded-lg font-medium focus:z-10 shadow-sm justify-center items-center -ms-px first:ms-0 border text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800',
    variants : {
        size :{
            sm : "py-2 px-3 justify-center gap-2",
            md : "py-3 px-4",
            lg : "py-3 px-4 sm:p-5"
        },
        bg_break : {
            true : "gap-x-2 -mt-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200"
        },
        vertical :{
            true : 'gap-x-2 rounded-t-md text-sm font-medium focus:z-10 border-gray-200'
        },
        toolbar :{
            true : 'ql-bold size-8 gap-x-2 font-semibold rounded-full border-transparent hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700'
        }
    },
    compoundVariants:[
		{
            size: 'sm',
            class: 'gap-2 first:rounded-s-lg last:rounded-e-lg text-sm border border-gray-200 bg-white text-gray-800 hover:bg-gray-50'
        },
        {
            size: 'md',
            class: 'gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm border border-gray-200 bg-white text-gray-800 hover:bg-gray-50'
        },
        {
            size: 'lg',
            class: 'gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm border border-gray-200 bg-white text-gray-800 hover:bg-gray-50'
        },

    ]
});

export type Size = VariantProps<typeof buttonGruopVariants>['size'];
export type bg_break = VariantProps<typeof buttonGruopVariants>['bg_break'];
export type Vertical = VariantProps<typeof buttonGruopVariants>['vertical'];
export type Toolbar = VariantProps<typeof buttonGruopVariants>['toolbar'];

export {
	Root,
	//
	Root as ButtonGroup
};
