<template>
	<div class="nav">
		<div class="logo">
			<img :src="require('@/assets/Logo.svg')" alt="">
		</div>
		<div class="group_menu">
			<ul>
				<li>
					<router-link to="/">
						Home
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>

</style>