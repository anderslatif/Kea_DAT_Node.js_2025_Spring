<script>
  import Home from "./components/Home/Home.svelte";

  const parentNames = ["Adam", "Eva"];
  const children = [
    {
      name: "Kain",
      familySheep: "black-sheep"
    },
    {
      name: "Abel",
      familySheep: "grey-sheep"
    }, 
    {
      name: "Leona",
      isGirl: true
    }
  ];

</script>

<Home>
  <h1>Hello? Anyone in there?</h1>
</Home>