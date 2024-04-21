import { type VariantProps, tv } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border disabled:opacity-50 disabled:pointer-events-none',
	variants: {
		/*	type: {
			default: 'border-transparent bg-blue-600 text-white hover:bg-blue-700',
			outline:
				'border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600',
			ghost:
				'border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400',
			soft: 'border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900 dark:text-blue-400',
			white:
				'border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800',
			link: 'border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400'
		},
        */
		size: {
			default: 'px-4 py-3 text-sm',
			sm: 'px-3 py-2 text-sm',
			lg: 'px-5 py-3 text-base',
			xl: 'px-6 py-3.5 text-base'
		},
		solid: {
			default: 'bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50',
			gray: 'bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50',
			teal: 'bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50',
			blue: 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50',
			red: 'bg-red-500 text-white hover:bg-red-600 disabled:opacity-50',
			yellow: 'bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50',
			white: 'bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50'
		},
		outline: {
			default: 'border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500',
			gray: 'border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800',
			teal: 'border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400',
			blue: 'border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500',
			red: 'border-red-500 text-red-500 hover:border-red-400 hover:text-red-400',
			yellow: 'border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400',
			slate:
				'border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500  dark:hover:border-blue-600'
		},
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
