<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { type Props, avatarVariants } from './index';
	import { cn } from '$lib/utils.js';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'default';
	export let shape: $$Props['shape'] = 'circle';
	export let solid: $$Props['solid'] = undefined;
	export let soft: $$Props['soft'] = undefined;
	export let outline: $$Props['outline'] = undefined;

	export { className as class };
</script>

<AvatarPrimitive.Root
	class={cn(avatarVariants({ size, shape, solid, outline, soft, className }))}
	{...$$restProps}
>
	<AvatarPrimitive.Image />
	<AvatarPrimitive.Fallback />
</AvatarPrimitive.Root>
