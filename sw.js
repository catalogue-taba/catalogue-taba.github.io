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
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Récupération de la ressource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(test_manifest-v7).then((cache) => {
          console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
