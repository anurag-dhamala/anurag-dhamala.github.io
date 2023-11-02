<script>
    export let title;
    export let shortDesc;
    export let date;
</script>

<a
        class="hover:translate-y-1"
        href="/demo/astro-boilerplate/posts/fifth-post"
>
    <div class="overflow-hidden rounded-md individualTitle">
    <div class="aspect-w-3 aspect-h-2">
        <img
                class="h-full w-full object-cover object-center"
                src="/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                alt="Image post 2"
                loading="lazy"
        />
    </div>
    <div class="px-3 pt-4 pb-6 text-center">
        <h2 class="text-xl font-semibold">5th Lorem ipsum dolor sit</h2>
        <div class="mt-1 text-xs text-gray-400">Feb 5, 2020</div>
        <div class="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            vero esse non molestias eos excepturi.
        </div>
    </div>
</div>
</a>

<style>
    .individualTitle{
        background: rgba( 255, 255, 255, 0.1 );
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
</style>