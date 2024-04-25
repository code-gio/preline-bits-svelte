import { type VariantProps, tv } from 'tailwind-variants';
import type { Avatar as AvatarPrimitive } from 'bits-ui';
import Root from './avatar.svelte';

export const avatarVariants = tv({
	base: 'inline-block',
	variants: {
		variant: {
			circle : 'rounded-full',
			square : 'rounded-lg',
		},
		size : {
			sm : 'size-8',
			md : 'size-[38]px',
			lg : 'size-[46]px',
			xl : 'size-[62]px'
		},
		placeHolder_inicials : {
			true : 'inline-flex items-center justify-center rounded-full bg-gray-500 text-xs font-semibold text-white leading-none',
		},
		color:{
			gray :'bg-gray-500',
			green :'bg-green-500', 
			blue:'bg-blue-600',
			red:'bg-red-500',
			yellow:'bg-yellow-500',
			white : 'bg-white'
		}

	},
	
});
export type Variant = VariantProps<typeof avatarVariants>['variant'];
export type Size = VariantProps<typeof avatarVariants>['size'];
export type placeHolder_inicials= VariantProps<typeof avatarVariants>['placeHolder_inicials'];
export type Color= VariantProps<typeof avatarVariants>['color'];



export type Props = AvatarPrimitive.Props & {
	variant?: Variant;
	size?: Size;
	placeHolder_inicials?:placeHolder_inicials;
	color?:Color
	class? : string
	
};

export {
	Root, Root as Avatar
}

