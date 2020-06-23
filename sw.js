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
		'adultes_policiers.html',
		'adultes_dvd.html',
		'adultes_sciencefiction.html',
		'ados.html',
		'ados_policiers.html',
		'ados_romans.html',
		'ados_sciencefiction.html',
		'enfants.html',
		'enfants_albums.html',
		'enfants_documentaires.html',
		'enfants_dvd.html',
		'enfants_tout-petits.html',
		'jeunes.html',
		'jeunes_BD.html',
		'jeunes_documentaires.html',
		'jeunes_premierelecture.html',
		'jeunes_romans.html',
		'croix.jpg'
		]);
		})
		);
		});
self.addEventListener('fetch', function(event) {
	console.log('fonction event');
	event.respondWith(caches.match(event.request).then(function(response) {
		console.log('reponse reseau')
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
