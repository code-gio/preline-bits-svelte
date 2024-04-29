<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, checkBoxVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		class?: string;
        check?: 'checkbox';
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export { className as class };
</script>


<div class={cn(checkBoxVariants({ variant }), className)}>
    <!-- Usa la variable type para establecer el tipo de input -->
    <input type='checkbox'{...$$restProps}>
    <slot />
</div>

