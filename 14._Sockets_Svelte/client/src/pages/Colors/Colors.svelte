<script>
    import { onMount } from 'svelte';
    
    import io from 'socket.io-client';

    let socket;
    let color = "#ff0000";

    onMount(() => {
        socket = io("http://localhost:8080");

        socket.on("server-sends-color", (data) => {


            // don't do this normally, do it the svelte way
            document.body.style.backgroundColor = data.color;
        });
    });

    function submitColor() {
        socket.emit("client-sends-color", { color });
    }
</script>

<input type="color" bind:value={color}>
<button onclick={submitColor}>Submit Color</button>
