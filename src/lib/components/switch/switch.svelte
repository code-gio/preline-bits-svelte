<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, type Size, switchVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
        size?: Size
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
    export let size: $$Props['size'] = undefined;
	export { className as class };
</script>


<div class={cn(switchVariants({ variant, size}), className)}>
    <!-- Usa la variable type para establecer el tipo de input -->
    <input type='checkbox'{...$$restProps}>
   
    <slot />
</div>
