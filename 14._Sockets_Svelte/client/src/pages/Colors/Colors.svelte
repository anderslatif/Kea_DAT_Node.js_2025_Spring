<script>
    import { onMount } from 'svelte';
    
    import io from 'socket.io-client';

    import { colorsList } from '../../stores/colorsListStore.js';
    
    import ColorsList from '../../components/ColorsList/ColorsList.svelte';

    let socket;
    let color = "#ff0000";

    onMount(() => {
        socket = io("http://localhost:8080");

        socket.on("server-sends-color", (data) => {
            // don't do this normally, do it the svelte way
            document.body.style.backgroundColor = data.color;

            // todo needs to be changed, this is hardcoded
            const nickname = "Anders";

            colorsList.update((colorsListArray) => {
                colorsListArray.push({ color: data.color, nickname })
                return colorsListArray;
            });
        });
    });
    
    function submitColor() {
        socket.emit("client-sends-color", { color });
    }
</script>

<input type="color" bind:value={color}>
<button onclick={submitColor}>Submit Color</button>

<ColorsList />