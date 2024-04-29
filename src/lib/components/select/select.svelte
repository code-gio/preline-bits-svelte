<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, type Size, type Floating_label, type Pilled, selectVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		size? : Size;
        floating_label? : Floating_label;
        pilled?: Pilled;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let size: $$Props['size'] = undefined;
    export let floating_label: $$Props['floating_label'] = undefined;
    export let pilled: $$Props['pilled'] = undefined;
	export { className as class };
</script>

<div
	class={cn(selectVariants({ variant, size, floating_label, pilled }), className)}
	{...$$restProps}
>
	<slot />
</div>