<script>
	export let data;
</script>

{#each data.collection as mix}
	<div class="collapse bg-base-200">
		<input type="radio" name="my-accordion-1" checked="checked" />

		<div class="collapse-title text-xl font-medium">
			<figure class="flex items-center">
				<img src={mix?.track?.artwork_url} class="rounded-t-lg" alt={mix?.track?.title} />
				<figcaption class="p-4">
					<div class="text-xl font-medium">{mix?.track?.title}</div>
					<div class="text-gray-500">{mix?.track?.user?.username}</div>
					<audio src={mix?.track?.stream_url} controls />
				</figcaption>
			</figure>
		</div>
		<div class="collapse-content flex items-center">
			<p class="p1-4">{mix?.track?.description}</p>
		</div>
	</div>
	<div class="divider" />
{/each}
