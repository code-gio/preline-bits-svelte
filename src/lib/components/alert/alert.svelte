<script lang="ts">
	import { type Props, alertVariants } from './index';
	import { cn } from '$lib/utils.js';
	type $$Props = Props;
	export let className: $$Props['class'] = '';
	export let solid: $$Props['solid'] = undefined;
	export let soft: $$Props['soft'] = undefined;
	export let outline: $$Props['outline'] = undefined;
	export let bordered: $$Props['bordered'] = undefined;
	export { className as class };
</script>

<div
	class={cn(alertVariants({ solid, outline, soft, bordered, className }))}
	{...$$restProps}
	role="alert"
>
	<slot />
</div>
