<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Variant, type Color, type Size, type placeHolder_inicials, avatarVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		color?: Color;
		size? : Size;
		placeHolder_inicials? : placeHolder_inicials;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let placeHolder_inicials: $$Props['placeHolder_inicials'] = undefined;
	export let color: $$Props['color'] = undefined;	
	export { className as class };


	export const imageUrl: string = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
	//console.log(variant)
</script>

<div
	class={cn(avatarVariants({ size, placeHolder_inicials, color, variant }), className)}
	{...$$restProps}>
	<img src={imageUrl} alt="Avatar de usuario" />
	<slot />
</div>

