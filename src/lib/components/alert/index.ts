import { type VariantProps, tv } from 'tailwind-variants';

const alertVariants = tv({
	base: 'mt-2 text-sm rounded-lg p-4',
	variants: {
		solid: {
			default: 'bg-gray-800 text-white dark:bg-white dark:text-neutral-800',
			gray: ' bg-gray-500 text-white',
			blue: 'bg-blue-600 text-white dark:bg-blue-500',
			teal: 'bg-teal-500 text-white',
			red: 'bg-red-500 text-white',
			yellow: 'bg-yellow-500 text-white',
			white: 'bg-white text-gray-600'
		},
		soft: {
			default:
				'bg-gray-100 border border-gray-200 text-gray-800 dark:bg-white/10 dark:border-white/20 dark:text-white',
			gray: 'bg-gray-50 border border-gray-200 text-gray-600 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400',
			blue: 'bg-blue-100 border border-blue-200 text-blue-800 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500',
			teal: 'bg-teal-100 border border-teal-200 text-teal-800 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500',
			red: 'bg-red-100 border border-red-200 text-red-800 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500',
			yellow:
				'bg-yellow-100 border border-yellow-200 text-yellow-800 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500',
			white: ' bg-white/10 border border-white/10 text-white'
		},
		outline: {
			default:
				'bg-blue-100 border border-blue-200 text-gray-800 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white',
			gray: 'bg-gray-50 border border-gray-200  text-gray-600 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400',
			teal: 'bg-teal-50 border border-teal-200  text-teal-800 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500',
			red: 'bg-red-50 border border-red-200  text-red-800 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500',
			yellow:
				'bg-yellow-50 border border-yellow-200  text-yellow-800 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500',
			white:
				'bg-white border border-gray-200  shadow-lg dark:bg-neutral-800 dark:border-neutral-700'
		},
		bordered: {
			top: 'border-t-2',
			left: 'border-s-4'
		}
	}
});

type Solid = VariantProps<typeof alertVariants>['solid'];
type Soft = VariantProps<typeof alertVariants>['soft'];
type Outline = VariantProps<typeof alertVariants>['outline'];
type Bordered = VariantProps<typeof alertVariants>['bordered'];

type Props = {
	solid?: Solid;
	soft?: Soft;
	outline?: Outline;
	bordered?: Bordered;
};
export { type Props, alertVariants };
