<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, type Color, listVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		color?: Color;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let color: $$Props['color'] = undefined;
	export { className as class };
</script>

<div
	class={cn(listVariants({ variant, color }), className)}
	{...$$restProps}
>
	<slot />
</div>