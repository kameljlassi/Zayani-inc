<style>


</style>


<script>
    import {navigate, Router, Route} from 'svelte-routing'
    import PhoneAdd from './routes/phones/PhoneAdd.svelte'
    import BrandAdd from './routes/phones/BrandAdd.svelte'
</script>



<Router>
    <Route path="PhoneAdd">
        <PhoneAdd />
    </Route>

    <Route  path="BrandAdd">
        <BrandAdd />
    </Route>

</Router>