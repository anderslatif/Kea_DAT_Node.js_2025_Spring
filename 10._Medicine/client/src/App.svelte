<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home/Home.svelte";
  import Pharmacy from "./pages/Pharmacy/Pharmacy.svelte";
  import About from "./pages/About/About.svelte";

  export let url = "";
</script>


<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/pharmacy">Pharmacy</Link>
    <Link to="/about">About</Link>
  </nav>

  <div>
    <Route path="/" >
        <Home />
      </Route>
      <!-- does not work! -->
      <!-- <Route path="/about" component={About} /> -->
       <Route path="/about"><About /></Route>
      <Route path="/pharmacy"><Pharmacy></Pharmacy></Route>
  </div>
</Router>
