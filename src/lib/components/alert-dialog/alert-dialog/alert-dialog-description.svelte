<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = AlertDialogPrimitive.DescriptionProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<AlertDialogPrimitive.Description
	class={cn('class="mt-1 text-gray-800 dark:text-neutral-400', className)}
	{...$$restProps}
>
	<slot />
</AlertDialogPrimitive.Description>
