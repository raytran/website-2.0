<svelte:head>
    <title>raytran.net - Projects</title>
</svelte:head>
<link
        rel="stylesheet"
        href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
/>

<script>
    import PreviewCard from "../../components/PreviewCard.svelte";
    import Heap from "heap";
    const allPosts = import.meta.globEager(`./*.md`);

    let activeTags = []
    let posts = [];
    let tagFrequency = {}

    for (let post in allPosts) {
        const p = allPosts[post];
        const metadata = p.metadata
        // init tag frequency and tag format
        if (metadata.tags) {

            if (typeof metadata.tags === 'string' || metadata.tags instanceof String) {
                let tags = metadata.tags.split(',').map(str => str.trim());
                metadata.tags = tags
            }

            for (let t of metadata.tags){
                if (tagFrequency[t] == null){
                    tagFrequency[t] = 0;
                }
                tagFrequency[t] += 1;
            }
        }
    }

    function filterPosts(tags) {
        posts = []
        for (let post in allPosts) {
            const p = allPosts[post];
            const metadata = p.metadata
            let intersection = metadata.tags.filter(v => tags.includes(v))
            if (intersection.length === tags.length) {
                posts.push({meta: metadata, path: '/projects/' + post.slice(2, -3)})
            }
        }
        posts = posts.sort((a, b) => b.meta.published.localeCompare(a.meta.published));
    }

    filterPosts(activeTags)

    let topTags = [];
    let heap = new Heap(function(a, b){
        return a.freq - b.freq;
    });
    for (let o in tagFrequency){
        heap.push({tag: o, freq: -tagFrequency[o]});
    }

    for (let i=0; i<5;i++){
        let item = heap.pop();
        if (item === undefined) break;
        topTags = [...topTags, item.tag];
    }

    function toggleTag(tag){
        if (!activeTags.includes(tag))
            activeTags = [...activeTags, tag].sort();
        else
            activeTags = activeTags.filter(x => x !== tag).sort();
        filterPosts(activeTags);
    }

    function disableTag(tag){
        activeTags = activeTags.filter(x => x !== tag).sort()
        filterPosts(activeTags);
    }

</script>
<style>
    #preview-holder {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        /* This is better for small screens, once min() is better supported */
        /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
        grid-gap: 1.2rem;
        /* This is the standardized property now, but has slightly less support */
        /* gap: 1rem */
    }
</style>
<div class="card">
    <h1>Projects</h1>
    <p>
        Here are some of the projects that I've done, both for fun and for school.
        <br>
        <a class="hyperlink" href="https://github.com/raytran">You can also see some of my github repos here.</a>
    </p>

    <img alt="github stats" class="img-fluid" style="width: 100%" src="https://grass-graph.moshimo.works/images/raytran.png">
</div>
<!--
<div bind:this={calendar}>A github calendar should be loading..</div>
-->
<div class="card my-0">

    Popular Tags:
    {#each topTags as tag}
        <span on:click={e => toggleTag(e.target.textContent)} style="cursor:pointer; margin:2px" class="badge">{tag}</span>
    {/each}

    <hr>
    Active tags:
    {#each activeTags as tag}
        <span on:click={e => toggleTag(e.target.textContent)} style="cursor:pointer; margin:2px" class="badge badge-primary">{tag}</span>
    {/each}
</div>
<div class="p-card" id="preview-holder">
    {#each posts as {meta, path}}
        <PreviewCard on:tagclick={e=>toggleTag(e.detail)} {meta} {path} {activeTags}/>
    {/each}
</div>
