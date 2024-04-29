<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, rangeSliderVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export { className as class };
</script>

<div
	class={cn(rangeSliderVariants({ variant }), className)}
	{...$$restProps}
>
	<slot />
</div>