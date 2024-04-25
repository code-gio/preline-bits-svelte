<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, type Color, type Rounded, type Max_Width, badgeVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		color?: Color;
		rounded? : Rounded;
        max_width? : Max_Width;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let color: $$Props['color'] = undefined;
	export let rounded : $$Props['rounded'] = undefined;
    export let max_width : $$Props['max_width'] = undefined;
	export { className as class };
</script>

<div
	class={cn(badgeVariants({ variant, color, rounded, max_width}), className )}
	{...$$restProps}
>
	<slot />
</div>
