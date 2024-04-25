<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn('flex flex-col py-3 px-4 border-b dark:border-neutral-700', className)}
	{...$$restProps}
>
	<slot />
</div>
