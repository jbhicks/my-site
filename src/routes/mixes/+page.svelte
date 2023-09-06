<script>
	export let data;
</script>

{#each data.collection as mix}
	<div class="collapse bg-base-200">
		<input type="radio" name="my-accordion-1" checked="checked" />
		<div class="collapse-title text-xl font-medium">
			<h2 class="card-title">{mix?.track?.title}</h2>
		</div>
		<div class="collapse-content flex items-center">
			<figure>
				<img src={mix?.track?.artwork_url} class="rounded-t-lg" />
			</figure>
			<p class="p1-4">{mix?.track?.description}</p>
		</div>
	</div>
	<div class="divider" />
{/each}
