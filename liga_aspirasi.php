<?php include('_header.php') ?>
<!--**************************************************-->

<div class="articles-page liga-aspirasi-page">
	
	<div class="articles-menu articles-tags-select">
		<div class="row">
			<div class="columns large-12 text-center articles-tag">
				<a href="#" class="category-a" data-filter="kategori-a">KATEGORI A</a>
				<a href="#" class="category-b" data-filter="kategori-b">KATEGORI B</a>
				<a href="#" class="category-c" data-filter="kategori-c">KATEGORI C</a>
				<a href="#" class="category-d" data-filter="kategori-d">KATEGORI D</a>
			</div>
		</div>
	</div>

	<div class="row">
		
		<!-- left content start -->
		<div class="columns large-8">

			<div class="article-wrapper row isotope">

				<div class="article columns large-6 isotope-item">
					<a href="#" class="article-permalink"></a>
					<div class="article-header">
						<h5 class="article-detail">20.00 WIB | JANUARY 30, 2014</h5>
						<div class="article-tags">
							<span class="kategori-a">kategori-a</span>
						</div>
						<img src="assets/images/article-sample-image.jpg" alt="" class="article-image">
						<div class="article-share text-right">
							<span class="article-view">
								230
							</span>
							<span class="article-like">
								212
							</span>
							<span class="article-share-button">
								180
							</span>
						</div>
					</div>
					<div class="article-body">
						<h2 class="article-title">Sed vestibulum lectus vel mauris aliquam egestasarticle</h2>
						<div class="article-content">
							<p>Vivamus vulputate leo ut mi auctor ullamcorper rutrum eget ante. Class aptent taciti sociosqu ad litora torquent per con</p>
						</div>
					</div>
				</div>

			</div>

			<div class="articles-control row">
				<div class="columns large-12">
					<h3><a href="#" class="load-more">LOAD MORE</a> / <a href="#" class="back-to-top">BACK TO TOP</a></h3>
				</div>
			</div>

		</div>
		<!-- left content end -->

		<!-- right content start -->
		<div class="widget columns large-4">
			<!-- <h2>TWITTER FEED</h2> -->
			<a class="twitter-timeline" href="https://twitter.com/ridwankamil" data-widget-id="433277211471130624">Tweets by @ridwankamil</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>


		</div>
		<!-- right content end -->

	</div>

</div>

<?php include('_article_display.php') ?>
<!--**************************************************-->
<?php include('_footer.php') ?>