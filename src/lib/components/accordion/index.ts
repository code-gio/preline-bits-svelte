import { Accordion as AccordionPrimitive } from 'bits-ui';
import { type VariantProps, tv } from 'tailwind-variants';
import Content from './accordion-content.svelte';
import Item from './accordion-item.svelte';
import Trigger from './accordion-trigger.svelte';
const Root = AccordionPrimitive.Root;

export const accordionVariants = tv({
	base: '',

	variants: {
		itemVariant: {
			bordered:
				'bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700',
			activeBordered:
				'bg-white [&[data-state=open]]:border [&[data-state=open]]:rounded-lg   dark:bg-neutral-800 dark:border-neutral-700'
		},
		triggerVariant: {
			default:
				' disabled:pointer-events-none [&[data-state=open]>.plus]:hidden [&[data-state=open]>.minus]:block [&[data-state=open]]:text-blue-600',
			arrow:
				' disabled:pointer-events-none [&[data-state=open]]:text-blue-600  [&[data-state=open]>.down]:hidden [&[data-state=open]>.up]:block',
			noArrow: 
				' disabled:pointer-events-none [&[data-state=open]]:text-blue-600 ',
			arrowStretched:
				' justify-between disabled:pointer-events-none  [&[data-state=open]]:text-blue-600  [&[data-state=open]>.down]:hidden [&[data-state=open]>.up]:block'
		},
		dark: {
			true: ''
		}
	},
	compoundVariants: [
		{
			triggerVariant: ['default', 'arrow', 'noArrow', 'arrowStretched'],
			dark: true,
			class:
				'dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400 [&[data-state=open]]:dark:text-blue-500'
		},
		{
			triggerVariant: ['default', 'arrow', 'noArrow', 'arrowStretched'],
			class:
				'group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50'
		}
	]
});

type ItemVariant = VariantProps<typeof accordionVariants>['itemVariant'];
type TriggerVariant = VariantProps<typeof accordionVariants>['triggerVariant'];

type ItemProps = AccordionPrimitive.ItemProps & {
	itemVariant?: ItemVariant;
};

type TriggerProps = AccordionPrimitive.TriggerProps & {
	triggerVariant?: TriggerVariant;
};

export {
	Root,
	Content,
	Item,
	Trigger,
	type ItemProps,
	type TriggerProps,
	Root as Accordion,
	Content as AccordionContent,
	Item as AccordionItem,
	Trigger as AccordionTrigger
};
