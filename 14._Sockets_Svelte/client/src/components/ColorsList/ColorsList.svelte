<script>
    import { colorsList } from "../../stores/colorsListStore.js";


</script>

{#each $colorsList as {nickname, color}}
    <div style={`background-color: ${color}`}>{nickname}: {color}</div>
{/each}