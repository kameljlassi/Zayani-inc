<script>
    import {navigate} from 'svelte-routing'
    import {onMount} from 'svelte'
    export let path
    onMount(() => {
        console.log({path})
        navigate(path, {replace: true})
    })
</script>