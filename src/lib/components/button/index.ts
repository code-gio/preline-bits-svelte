import { type VariantProps, tv } from 'tailwind-variants';
import Root from './button.svelte';

  
export const buttonVariants = tv({
	base : 'inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border disabled:opacity-50 disabled:pointer-events-none',
	variants : {
		variant : {
			solid : 'border-transparent text-white',
			outline : 'dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600',
			ghost : 'dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400',
			soft : 'dark:hover:bg-blue-900 dark:text-blue-400',
			white : 'font-medium shadow-sm dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800',
			link : 'dark:text-blue-500 dark:hover:text-blue-400',
		},
		color: {
			gray: '',
			blue: '',
			teal: '',
			red: '',
			yellow: '',
			white: '',
		},
		size: {
			default : 'py-3 px-4',
			sm: 'py-2 px-3',
			md: 'py-3 px-4', 
			lg: 'p-4 sm:p-5'
		  }
	},
	compoundVariants:[
		{
			variant: ['solid'],
			color: ['gray', 'blue', 'teal', 'red', 'yellow'],
			size : ['sm', 'md', 'lg'],
			class: 'text-white'
		},
		{
			variant: 'solid',
			color: 'white',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-white text-gray-800 hover:bg-gray-200'
		},
		{
			variant: 'solid',
			color: 'gray',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-gray-500 text-white hover:bg-gray-600'
		},
		{
			variant: 'solid',
			color: 'blue',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-blue-600 text-white hover:bg-blue-700'
		},
		{
			variant: 'solid',
			color: 'teal',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-teal-500 text-white hover:bg-teal-600'
		},
		{
			variant: 'solid',
			color: 'red',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-red-500 text-white hover:bg-red-600'
		},
		{
			variant: 'solid',
			color: 'yellow',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-yellow-500 text-white hover:bg-yellow-600'
		},
		{
			variant: 'soft',
			color: 'gray',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-neutral-400 dark:hover:text-neutral-300'
		},
		{
			variant: 'soft',
			color: 'blue',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900 dark:text-blue-400'
		},
		{
			variant: 'soft',
			color: 'teal',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400'
		},
		{
			variant: 'soft',
			color: 'red',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-red-100 text-red-800 hover:bg-red-200 dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400'
		},
		{
			variant: 'soft',
			color: 'yellow',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400'
		},
		{
			variant: 'soft',
			color: 'white',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent bg-white/10 text-white hover:bg-white/20'
		},
		{
			variant: 'outline',
			color: 'gray',
			size : ['sm', 'md', 'lg'],
			class: 'border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300'
		},
		{
			variant: 'outline',
			color: 'blue',
			size : ['sm', 'md', 'lg'],
			class: 'border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400'
		},
		{
			variant: 'outline',
			color: 'teal',
			size : ['sm', 'md', 'lg'],
			class: 'border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400'
		},
		{
			variant: 'outline',
			color: 'red',
			size : ['sm', 'md', 'lg'],
			class: 'border-red-500 text-red-500 hover:border-red-400 hover:text-red-400'
		},
		{
			variant: 'outline',
			color: 'yellow',
			size : ['sm', 'md', 'lg'],
			class: 'border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400'
		},
		{
			variant: 'ghost',
			color: 'gray',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent text-gray-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
		},
		{
			variant: 'ghost',
			color: 'blue',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400'
		},
		{
			variant: 'ghost',
			color: 'teal',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent text-teal-500 hover:bg-teal-100 hover:text-teal-800 dark:hover:bg-teal-800/30 dark:hover:text-teal-400'
		},
		{
			variant: 'ghost',
			color: 'red',
			size : ['sm', 'md', 'lg'],
			class: 'border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 dark:hover:bg-red-800/30 dark:hover:text-red-400'
		},
		{
			variant: 'ghost',
			color: 'yellow',
			size : ['sm', 'md', 'lg'],
			class: ' border-transparent text-yellow-500 hover:bg-yellow-100 hover:text-yellow-800 dark:hover:bg-yellow-800/30 dark:hover:text-yellow-400'
		},
		{
			variant: 'white',
			color: 'gray',
			size : ['sm', 'md', 'lg'],
			class: 'font-medium border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800'
		},
		{
			variant: 'white',
			color: 'blue',
			size : ['sm', 'md', 'lg'],
			class: 'font-medium border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800'
		},
		{
			variant: 'white',
			color: 'teal',
			size : ['sm', 'md', 'lg'],
			class: 'font-medium border-gray-200 bg-white text-teal-500 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800'
		},
		{
			variant: 'white',
			color: 'red',
			size : ['sm', 'md', 'lg'],
			class: 'font-medium border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800'
		},
		{
			variant: 'white',
			color: 'yellow',
			size : ['sm', 'md', 'lg'],
			class: 'font-medium border-gray-200 bg-white text-yellow-500 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800'
		},
		{
			variant: 'link',
			color: 'gray',
			size : ['sm', 'md', 'lg'],
			class: 'text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white'
		},
		{
			variant: 'link',
			color: 'blue',
			size : ['sm', 'md', 'lg'],
			class: 'text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400">'
		},
	]
}) ;      

export type Variant = VariantProps<typeof buttonVariants>['variant'];
export type Color = VariantProps<typeof buttonVariants>['color'];
export type Size = VariantProps<typeof buttonVariants>['size'];

export {
	Root,
	//
	Root as Button
};


