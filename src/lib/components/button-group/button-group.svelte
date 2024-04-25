<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Size, type bg_break, type Vertical, buttonGruopVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		size?: Size;
		bg_break? : bg_break;
        vertical? : Vertical;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let bg_break : $$Props['bg_break'] = undefined;
    export let vertical : $$Props['vertical'] = undefined;
	export { className as class };
</script>

<div
	class={cn(buttonGruopVariants({ size, bg_break, vertical}), className )}
	{...$$restProps}
>
	<slot />
</div>
