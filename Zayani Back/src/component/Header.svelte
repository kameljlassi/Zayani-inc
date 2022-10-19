<script>
    import {link} from 'svelte-routing'
    import {lang, langs} from '../store.js'
    const navs = [
        {
            name : {
                "en" : "Add Phone",
                "fr" : "Ajouter telephone"
            },
            path : '/'
        },
        {    name : {
                "en" : "Add brand",
                "fr" : "Ajouter modele",
            },
            path : '/PhoneAdd'
        },
    ]
</script>

<header> 
    <div class="logo">
        <a use:link href={"/"+ $lang}>
            this is logo
        </a>
        <a use:link href={"/" + "brandadd"}> 22
        </a>
    </div>
    <nav>
        {#each navs as nav}
            <a user:link href={"/" + $lang +nav.path} >
                {nav.name[$lang]}
            </a>
        {/each}
    </nav>
</header>