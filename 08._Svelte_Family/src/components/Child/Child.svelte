<script>
    const { name, familySheep, isGirl, onShowLove, onEatCookie } = $props();

</script>

<div
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep" }
>
    <h2>{name}</h2>
</div>

<button onclick={() => onShowLove(name)}>Show Love</button>
<button onclick={onEatCookie}>Eat a cookie</button>

<style>
    .is-girl {
        background-color: chartreuse;
    }

    .is-boy {
        background-color: salmon;
    }

    .not-a-sheep {
        border: 0.5em solid goldenrod;
    }

    .grey-sheep {
        border: 0.5em solid pink;
    }

    .black-sheep {
        border: 0.5em solid purple;
    }
</style>