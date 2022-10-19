<style>


</style>

<script>
    import {navigate, Router, Route} from 'svelte-routing'
    import {onMount} from 'svelte'
    import {lang, langs} from './store.js'
    export let params

    import Header from './component/Header.svelte'
    import PhoneRouter from './PhoneRouter.svelte'

    import Home from './routes/Home.svelte'
    import NotFound from './routes/NotFound.svelte'

    $: {
        console.log(params)
        let slugs = params["*"] || "" 
        if (!langs.includes(params.lang)) {
            navigate('/' + $lang + "/" + params.lang + "/" + slugs, {replace: true})
        } else {
            if (params.lang != $lang) {
                $lang = params.lang
            }
        }
    }
    
   
</script>


<Header />
<Router>
    <Route path="/">
        <Home />
    </Route>

    <Route path="/phones/*">
        <PhoneRouter />
    </Route>
    <Route path="*"><NotFound/></Route>
</Router>
