<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, type Color, type Size, buttonVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		color?: Color;
		size? : Size;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let color: $$Props['color'] = undefined;
	export let size: $$Props['size'] = undefined;
	export { className as class };
</script>

<div
	class={cn(buttonVariants({ variant, color, size }), className)}
	{...$$restProps}
>
	<slot />
</div>
