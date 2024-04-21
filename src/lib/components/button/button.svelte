<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Events, type Props, buttonVariants } from './index';
	import { cn } from '$lib/utils.js';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'default';
	export let solid: $$Props['solid'] = undefined;
	export let outline: $$Props['outline'] = undefined;
	export let square: $$Props['square'] = undefined;
	export let pill: $$Props['pill'] = undefined;
	export let block: $$Props['block'] = undefined;
	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ size, solid, outline, square, pill, block, className }))}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
