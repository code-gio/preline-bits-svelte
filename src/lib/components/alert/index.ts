import { type VariantProps, tv } from 'tailwind-variants';
import Root from './alert.svelte';
export const alertVariants = tv({
	base: 'mt-2 text-sm rounded-lg p-4',
	variants: {
		variant: {
			solid: 'bg-gray-800 text-white dark:bg-white ',
			soft: 'bg-gray-100 border border-gray-200 text-gray-800 dark:bg-white/10 dark:border-white/20 dark:text-white',
			outline: 'bg-white border border-gray-200 shadow-lg'
		},
		color: {
			gray: '',
			blue: '',
			teal: '',
			red: '',
			yellow: '',
			white: ''
		},
	},
	compoundVariants: [
		{
			variant: ['solid'],
			color: ['gray', 'blue', 'teal', 'red', 'yellow'],
			class: 'text-white'
		},
		{
			variant: 'solid',
			color: 'gray',
			class: 'bg-gray-500'
		},
		{
			variant: 'solid',
			color: 'blue',
			class: 'bg-blue-600 '
		},
		{
			variant: 'solid',
			color: 'teal',
			class: 'bg-teal-500'
		},
		{
			variant: 'solid',
			color: 'red',
			class: 'bg-red-500'
		},
		{
			variant: 'solid',
			color: 'yellow',
			class: 'bg-yellow-500'
		},
		{
			variant: 'solid',
			color: 'white',
			class: 'bg-white text-gray-600'
		},
		{
			variant: 'solid',
			dark: true,
			class: 'dark:bg-blue-500'
		},
		{
			variant: 'solid',
			dark: true,
			color: 'blue',
			class: 'dark:bg-blue-500'
		},
		{
			variant: 'soft',
			color: 'gray',
			class: 'bg-gray-50 border border-gray-200 text-gray-600'
		},
		{
			variant: 'soft',
			color: 'blue',
			class: 'bg-blue-100 border border-blue-200 text-blue-800'
		},
		{
			variant: 'soft',
			color: 'teal',
			class: 'bg-teal-100 border border-teal-200 text-teal-800'
		},
		{
			variant: 'soft',
			color: 'red',
			class: 'bg-red-100 border border-red-200 text-red-800'
		},
		{
			variant: 'soft',
			color: 'yellow',
			class: 'bg-yellow-100 border border-yellow-200 text-yellow-800'
		},
		{
			variant: 'soft',
			color: 'white',
			class: 'bg-white border border-white text-white'
		},
		{
			variant: 'soft',
			dark: true,
			class: 'dark:bg-white/10 dark:border-white/20 dark:text-white'
		},
		{
			variant: 'soft',
			dark: true,
			color: 'gray',
			class: 'dark:bg-white/10 dark:border-white/20 dark:text-white'
		},
		{
			variant: 'soft',
			dark: true,
			color: 'blue',
			class: 'dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500'
		},
		{
			variant: ['soft', 'outline'],
			dark: true,
			color: 'teal',
			class: 'dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500'
		},
		{
			variant: ['soft', 'outline'],
			dark: true,
			color: 'red',
			class: 'dark:bg-red-800/10 dark:border-red-900 dark:text-red-500'
		},
		{
			variant: ['soft', 'outline'],
			dark: true,
			color: 'yellow',
			class: 'dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500'
		},
		{
			variant: 'outline',
			color: 'gray',
			class: 'bg-gray-50 border border-gray-200 text-gray-600'
		},
		{
			variant: 'outline',
			color: 'blue',
			class: 'bg-blue-100 border border-blue-200 text-gray-800'
		},
		{
			variant: 'outline',
			color: 'teal',
			class: 'bg-teal-50 border border-teal-200 text-teal-800'
		},
		{
			variant: 'outline',
			color: 'red',
			class: 'bg-red-50 border border-red-200 text-red-800'
		},
		{
			variant: 'outline',
			color: 'yellow',
			class: 'bg-yellow-50 border border-yellow-200 text-yellow-800'
		},
		{
			variant: 'outline',
			dark: true,
			class: 'dark:bg-neutral-800 dark:border-neutral-700'
		},
		{
			variant: 'outline',
			dark: true,
			color: 'blue',
			class: 'dark:bg-blue-800/10 dark:border-blue-900 dark:text-white'
		},
		{
			variant: 'outline',
			dark: true,
			color: 'gray',
			class: 'dark:bg-white/10 dark:border-white/10 dark:text-neutral-400'
		}
	]
});

export type Variant = VariantProps<typeof alertVariants>['variant'];
export type Color = VariantProps<typeof alertVariants>['color'];

export {
	Root,
	//
	Root as Alert
};
