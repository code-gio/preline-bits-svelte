<script lang="ts">
	import { Icon, Plus, Minus, ChevronUp, ChevronDown } from 'svelte-hero-icons';
	import { type TriggerProps, accordionVariants } from './index.js';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	type $$Props = TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;
	let className: $$Props['class'] = undefined;
	let triggerVariant: $$Props['triggerVariant'] = 'default';
	export let level: AccordionPrimitive.HeaderProps['level'] = 3;
	export { triggerVariant as variant };
	export { className as class };
</script>

<AccordionPrimitive.Header {level}>
	<AccordionPrimitive.Trigger
		class={cn(accordionVariants({ triggerVariant, className }))}
		{...$$restProps}
		on:click
	>
		{#if triggerVariant === 'default'}
			<Icon src={Plus} class="block size-3.5 plus" />
			<Icon src={Minus} class="hidden size-3.5 minus" />
			<slot />
		{:else if triggerVariant === 'arrowStretched'}
			<slot />
			<Icon src={ChevronDown} class="block size-3.5 down" />
			<Icon src={ChevronUp} class="hidden size-3.5 up" />
		{:else if triggerVariant === 'arrow'}
			<Icon src={ChevronDown} class="block size-3.5 down" />
			<Icon src={ChevronUp} class="hidden size-3.5 up" />
			<slot />
		{:else}
			<slot />
		{/if}
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
