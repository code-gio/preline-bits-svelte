<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, type Size, type Pilled, inputVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		size? : Size;
        pilled?: Pilled;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let pilled: $$Props['pilled'] = undefined;
	export { className as class };
</script>

<div
	class={cn(inputVariants({ variant, size, pilled }), className)}
	{...$$restProps}
>
	<slot />
</div>
