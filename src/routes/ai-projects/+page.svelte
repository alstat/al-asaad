<script lang="ts">
    import { onMount } from 'svelte';
	import { generate } from '$lib/replicate';

    onMount(() => {
        const button: HTMLButtonElement = document.getElementById('generate-ai') as HTMLButtonElement;
        button.addEventListener('click', () => {
            generate().then((res) => {
                console.log(res);
            });
        });
    });
</script>

<div class="text-column">
	AI Something
	<!-- <video width="500px" height="500px">
		<source src={mp4} type="video/mp4" />
        <track kind="captions"/>
	</video> -->
    <button id="generate-ai">Generate</button>
</div>