<script>
    import { Router, Route } from "svelte-routing";
    import Lang from './LangRouter.svelte'
    import Redirector from './component/Redirector.svelte'
    import {lang} from './store'
    
    console.log($lang)
</script>

<Router>
    <Route path="/"> 
        <Redirector path={"/" + $lang} />

    </Route>
    <Route let:params path="/:lang/*">
        <Lang {params} />
    </Route>
</Router>
