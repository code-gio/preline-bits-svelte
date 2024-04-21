import { type VariantProps, tv } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border disabled:opacity-50 disabled:pointer-events-none',
	variants: {
		size: {
			default: 'px-4 py-3 text-sm',
			sm: 'px-3 py-2 text-sm',
			lg: 'px-5 py-3 text-base',
			xl: 'px-6 py-3.5 text-base'
		},
		solid: {
			default: 'bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 dark:bg-white dark:text-neutral-800',
			gray: 'bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50',
			teal: 'bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50',
			blue: 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50',
			red: 'bg-red-500 text-white hover:bg-red-600 disabled:opacity-50',
			yellow: 'bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50',
			white: 'bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50'
		},
		outline: {
			default: 'border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300',
			gray: 'border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300',
			teal: 'border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400',
			blue: 'border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400',
			red: 'border-red-500 text-red-500 hover:border-red-400 hover:text-red-400',
			yellow: 'border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400',
			slate:
				'border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500  dark:hover:border-blue-600'
		},
		ghost : {
			default : 'border-transparent text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700',
			gray : 'border-transparent text-gray-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800',
			teal : 'border-transparent text-teal-500 hover:bg-teal-100 hover:text-teal-800 dark:hover:bg-teal-800/30 dark:hover:text-teal-400',
			blue : 'border-transparent text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400',
			red : 'border-transparent text-red-500 hover:bg-red-100 dark:hover:bg-red-800/30 dark:hover:text-red-400',
			yellow : 'border-transparent text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-800/30 dark:hover:text-yellow-400',
			white : 'border-transparent text-white hover:bg-gray-100 dark:hover:bg-white/10 dark:hover:text-white',

		},
		soft : {
			default: 'border-transparent bg-gray-100 text-gray-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white',
			gray : 'border-transparent bg-gray-100 text-gray-500 dark:bg-white/10 dark:hover:bg-white/20 dark:text-neutral-400 dark:hover:text-neutral-300',
			teal : 'border-transparent bg-teal-100 text-teal-800 dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400',
			blue : 'border-transparent bg-blue-100 dark:text-blue-400',
			red : 'border-transparent bg-red-100 text-red-800 dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400',
			yellow : 'border-transparent bg-yellow-100 dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400',
			white : 'border-transparent bg-white/10 '
		},
		white : {
			default : 'border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800',
			gray : 'border-gray-200 bg-white text-gray-500 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800',
			teal : ''
		}
		square: {
			default: 'flex flex-shrink-0 justify-center items-center size-[46px]',
			sm: 'flex flex-shrink-0 justify-center items-center size-[36px]',
			lg: 'flex flex-shrink-0 justify-center items-center size-[56px]'
		},
		link: {
			default: 'text-gray-800 hover:text-blue-600',
			gray: 'text-gray-500 hover:text-blue-600',
			blue: 'text-blue-600 hover:text-blue-800'
		},
		pill: {
			true: 'rounded-full'
		},
		block: {
			true: 'w-full'
		}
	}
});

type Size = VariantProps<typeof buttonVariants>['size'];
type Solid = VariantProps<typeof buttonVariants>['solid'];
type Outline = VariantProps<typeof buttonVariants>['outline'];
type Square = VariantProps<typeof buttonVariants>['square'];
type Pill = VariantProps<typeof buttonVariants>['pill'];
type Block = VariantProps<typeof buttonVariants>['block'];

type Props = ButtonPrimitive.Props & {
	size?: Size;
	solid?: Solid;
	outline?: Outline;
	square?: Square;
	pill?: Pill;
	block?: Block;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
