<script>
	import Alert from '$lib/components/alert/alert.svelte';
	import Avatar from '$lib/components/avatar/avatar.svelte';
	import Badge from '$lib/components/badge/badge.svelte';
	import ButtonGroup from '$lib/components/button-group/button-group.svelte';
	import Button from '$lib/components/button/button.svelte';
	import Card from '$lib/components/card/card.svelte';
	import Collapse from '$lib/components/collapse/collapse.svelte';
	import FileInput from '$lib/components/file-input/file-input.svelte';
	import InputGruop from '$lib/components/input-group/input-gruop.svelte';
	import Input from '$lib/components/input/input.svelte';
	import List from '$lib/components/list/list.svelte';
	import TextArea from '$lib/components/text-area/text-area.svelte';


	const imageUrl = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";
</script>

<Alert  variant='solid' color='blue'>
	<h1>Page</h1>
</Alert>

<Button variant='ghost' color='blue' size='lg'>
	my button
</Button>


<Badge variant='solid' color='blue' rounded max_width> etiqueta de pruebas</Badge>

<ButtonGroup size='sm'>
	<button> boton1  </button>
	<button> boton2  </button>
	<button> boton3  </button>
</ButtonGroup>
<p>---------------------------------------------------------------</p>

<Card size='default' type='simple'> this is a simple card</Card>

<p>------------------------------------</p>

<Avatar variant='square' size='sm' imageUrl={imageUrl}>

</Avatar>

<p>---------------------------------------------------------------</p>

<List variant='marker'>
	<li>item1</li>
	<li>item2</li>
	<li>item3</li>
</List>

<p>---------------------------------------------------------------</p>

<Collapse variant='collapse' color='yellow' > collapse button </Collapse>

<p>---------------------------------------------------------------</p>

<Input variant='underline' size='lg'> input</Input>
<p>---------------------------------------------------------------</p>
<InputGruop variant='multiple' size='md'> input group</InputGruop>
<InputGruop variant='multiple' size='md'> input group</InputGruop>
<p>---------------------------------------------------------------</p>

<TextArea variant='underline' size="lg"> text area</TextArea>

<p>---------------------------------------------------------------</p>

<FileInput variant='basic' size='md'> file</FileInput>

<p>---------------------------------------------------------------</p>