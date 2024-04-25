<script lang="ts">
	import { type ItemProps, accordionVariants } from './index.js';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	type $$Props = ItemProps;
	let itemVariant: $$Props['itemVariant'] = undefined;
	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export { itemVariant as variant };
	export { className as class };
</script>

<AccordionPrimitive.Item
	{value}
	{...$$restProps}
	class={cn(accordionVariants({ itemVariant, className }))}
>
	<slot />
</AccordionPrimitive.Item>
