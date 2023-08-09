<script lang="ts">
    // import { onMount } from "svelte";
    interface ReplicateOutput {
        message: string;
    }
    let animation: ReplicateOutput;

    // async function animate() {
    //     console.log("Sending Request")
    //     const response = await fetch("/ai-projects/animate");
    //     animation = await response.json();
    //     console.log("Receiving response")
    //     console.log(animation)
    //     // animation: JSON = await response.json();
        
    //     // console.log("Receiving response")
    //     // console.log(animation)
    // }
    async function animate(event: Event) {
        const formEl = event.target as HTMLFormElement
        const data = new FormData(formEl)
        
        // console.log(data)
        console.log(formEl)
        console.log(formEl.action)
        console.log("Sending Request")

        const response = await fetch(formEl.action, {
            method: "POST", body: data
        });
        animation = await response.json();
        console.log("Receiving response")
        console.log(animation)
        // animation: JSON = await response.json();
        
        // console.log("Receiving response")
        // console.log(animation)
    }

    // onMount(() => {
    //     const button: HTMLButtonElement = document.getElementById('generate-ai') as HTMLButtonElement;
    //     button.addEventListener('click', () => {
    //         fetch("/ai-projects/animate").then(
    //             (res) => {
    //                 console.log("Receiving response")
    //                 console.log(res)
    //             }
    //         )
    //     });
    // });

    // function getAnimation() {
    //     console.log("Sending Request")
    //     animate().then((res) => {
    //         console.log("Receiving response")
    //         console.log(res);
    //     });
    // }
    // export let data;
    // import { onMount } from 'svelte';
	// import { generate } from '$lib/replicate';

    // onMount(() => {
    //     const button: HTMLButtonElement = document.getElementById('generate-ai') as HTMLButtonElement;
    //     button.addEventListener('click', () => {
    //         generate().then((res) => {
    //             console.log(res);
    //         });
    //     });
    // });
</script>

<div class="text-column">
	AI Something
    <form on:submit|preventDefault={animate} method="POST" action="ai-projects/animate">
        <input type="text" name="prompt" />
        <button type="submit">Generate Animation</button>
        <!-- <button on:click={animate}>Generate Animation</button> -->
    </form>
    <!-- <div>{data}</div> -->
	<!-- <video width="500px" height="500px">
		<source src={mp4} type="video/mp4" />
        <track kind="captions"/>
	</video> -->
    <!-- <button id="generate-ai">Generate</button> -->
    <!-- <textarea name="prompt" id="prompt" cols="30" rows="10"></textarea> -->
    <!-- <button on:click={animate}>Generate Animation</button> -->
    <!-- <button id="generate-ai">
        Generate
    </button> -->
    {#if animation !== undefined}
        <video width="320" height="240" src="{animation["message"]}" controls autoplay loop>
            <track kind="captions"/>
        </video>
        <p>Here is the <a href="{animation["message"]}">link</a> of the result</p>
    {/if}

</div>
<style>
    button {
        cursor: pointer;
    }
</style>