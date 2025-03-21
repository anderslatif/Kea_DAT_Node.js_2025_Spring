<script>
    let counter = 0;
</script>

<h3 id="counter">{counter}</h3>

<button onclick={() => counter--}>Decrement</button>
<button onclick={() => counter++}>Increment</button>

<style>
    #counter {
        color: yellow;
    }
</style>