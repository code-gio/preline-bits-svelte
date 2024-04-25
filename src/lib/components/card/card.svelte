<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { type Size, type Type, type Header, type Footer, type Navigation, type imagePlaceholder, cardVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		size?: Size;
		type?: Type;
        header?: Header;
        footer?: Footer;
        navigation?:Navigation;
        imagePlaceholder?:imagePlaceholder;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let type : $$Props['type'] = undefined;
    export let header : $$Props['header'] = undefined;
    export let footer : $$Props['footer'] = undefined;
    export let navigation : $$Props['navigation'] = undefined;
    export let imagePlaceholder : $$Props['imagePlaceholder'] = undefined; 
	export { className as class };
</script>

<div
	class={cn(cardVariants({ size, type, header, footer, navigation, imagePlaceholder}), className )}
	{...$$restProps}
>
	<slot />
</div>