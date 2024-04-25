<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
