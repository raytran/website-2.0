<script context="module" lang="ts">
	export const prerender = true;
	import Fa from 'svelte-fa';
	import {faInstagram} from '@fortawesome/free-brands-svg-icons';
	import {faFacebook} from '@fortawesome/free-brands-svg-icons';
	import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
	import {faGithub} from '@fortawesome/free-brands-svg-icons';
</script>

<svelte:head>
	<title>raytran.net - Home</title>
</svelte:head>

<style>
	#outer{
		max-width: 900px;
	}
</style>

<div class="d-flex align-content-center justify-content-center">
	<div id="outer" class="card d-flex flex-column flex-md-row">
		<img style="width:100%" id="logo" alt="raytran-logo" src="/images/raytran_logo.png">
		<div class="content d-flex flex-column">
			<div>
				<span class="card-title"> Hi, my name is <b>Raymond Tran</b>.</span><br>
				I'm a junior at MIT majoring in Electrical Engineering & Computer Science.
				Here is my <a class="hyperlink" href="https://drive.google.com/file/d/1EmFuNo48F_G1Ww3PZGoFo4l1qjZNYKR5/view?usp=sharing">resume</a>.
			</div>
			<hr>
			<div class="d-flex" id="icon-links">
				<div class="mr-auto icon">
					<a href="https://github.com/raytran">
						<Fa size="2x" icon={faGithub}/>
					</a>
				</div>
				<div class="mr-auto icon">
					<a href="https://www.linkedin.com/in/raymondtran120/">
						<Fa size="2x" icon={faLinkedin}/>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
