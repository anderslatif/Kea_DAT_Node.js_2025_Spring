<script>
  import Home from "./components/Home/Home.svelte";
  import Parent from "./components/Parent/Parent.svelte";

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
  <Parent name={parentNames[0]} children={children} />
  <Parent name={parentNames[1]} children={children} />
</Home>
