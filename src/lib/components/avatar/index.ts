import { type VariantProps, tv } from 'tailwind-variants';
import type { Avatar as AvatarPrimitive } from 'bits-ui';
import Root from './avatar.svelte';
const avatarVariants = tv({
	base: 'inline-flex items-center justify-center',
	variants: {
		size: {
			default: 'size-[46px]',
			xs: 'size-8',
			sm: 'size-[38px]',
			lg: 'size-[62px]'
		},
		shape: {
			circle: 'rounded-full',
			square: 'rounded-lg'
		},
		solid: {
			default: 'bg-gray-800 font-semibold text-white dark:bg-white dark:text-neutral-800',
			gray: 'bg-gray-500 font-semibold text-white',
			green: 'bg-green-500 font-semibold text-white',
			blue: 'bg-blue-600 font-semibold text-white dark:bg-blue-500',
			red: 'bg-red-500 font-semibold text-white',
			yellow: 'bg-yellow-500 font-semibold text-white',
			white: 'bg-white font-semibold text-gray-800'
		},
		soft: {
			default: 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white',
			gray: 'bg-gray-50 text-gray-500 dark:bg-white/10 dark:text-white',
			teal: 'bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500',
			blue: 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500',
			red: 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500',
			yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500',
			white: 'bg-white/10 text-white'
		},
		outline: {
			default: ' border border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white',
			gray: ' border border-gray-500 text-gray-500 dark:text-neutral-400',
			teal: ' border border-teal-500 text-teal-500',
			blue: ' border border-blue-600 text-blue-600 dark:text-blue-500',
			red: ' border border-red-500 text-red-500',
			yellow: ' border border-yellow-500 text-yellow-500',
			white: ' border border-white text-white'
		}
	}
});

type Size = VariantProps<typeof avatarVariants>['size'];
type Shape = VariantProps<typeof avatarVariants>['shape'];
type Solid = VariantProps<typeof avatarVariants>['solid'];
type Soft = VariantProps<typeof avatarVariants>['soft'];
type Outline = VariantProps<typeof avatarVariants>['outline'];

type Props = AvatarPrimitive.Props & {
	size?: Size;
	shape?: Shape;
	solid?: Solid;
	soft?: Soft;
	outline?: Outline;
};

export { Root, type Props, Root as Button, type Props as AvatarProps, avatarVariants };
