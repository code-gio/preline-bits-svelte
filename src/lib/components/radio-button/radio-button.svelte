<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, radioVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export { className as class };
</script>


<div class={cn(radioVariants({ variant }), className)}>
    <!-- Usa la variable type para establecer el tipo de input -->
    <input type='radio'{...$$restProps}>
    <slot />
</div>
