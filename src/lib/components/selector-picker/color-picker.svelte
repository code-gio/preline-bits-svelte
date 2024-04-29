<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, colorPickerVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export { className as class };
</script>


<div class={cn(colorPickerVariants({ variant }), className)}>
    <!-- Usa la variable type para establecer el tipo de input -->
    <input type='color'{...$$restProps}>
    <slot />
</div>
