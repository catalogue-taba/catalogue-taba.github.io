self.addEventListener('install', function(event) {
	console.log('[Service Worker] Install');
	event.waitUntil(
	caches.open('test_manifest-v7').then(function(cache) {
		console.log('debut enregistrement');
		return cache.addAll([
		'styles_catalogue.css',
		'index.html',
		'manifest.webmanifest',
		'adultes.html',
		'adultes_romans.html',
		'croix.jpg'
		]);
		})
		);
		});
self.addEventListener('fetch', function(event) {
	console.log('fonction event');
	event.respondWith(caches.match(event.request).then(function(response) {
		// caches.match() always resolves
		// but in case of success response will have value
		if (response !== undefined) {
			return response;
			} else {
				return fetch(event.request).then(function (response) {
					// response may be used only once
					// we need to save clone to put one copy in cache
					// and serve second one
					let responseClone = response.clone();
					caches.open('test_manifest-v7').then(function (cache) {
						cache.put(event.request, responseClone);
						});
						return response;
						}).catch(function () {
							return caches.match('croix.jpg');
							});
							}
							}));
							});