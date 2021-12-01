self.addEventListener('install', function(event) {
	console.log('[Service Worker] Install');
	event.waitUntil(
	caches.open('test_manifest-v7').then(function(cache) {
		console.log('debut enregistrement');
		return cache.addAll([
		'https://catalogue-taba.github.io/styles_catalogue.css',
		'https://catalogue-taba.github.io/index.html',
		'https://catalogue-taba.github.io/manifest.webmanifest',
		'https://catalogue-taba.github.io/adultes_romans.html',
		'https://catalogue-taba.github.io/adultes_policiers.html',
		'https://catalogue-taba.github.io/adultes_dvd.html',
		'https://catalogue-taba.github.io/adultes_sciencefiction.html',
		'https://catalogue-taba.github.io/ados.html',
		'https://catalogue-taba.github.io/ados_policiers.html',
		'https://catalogue-taba.github.io/ados_romans.html',
		'https://catalogue-taba.github.io/ados_sciencefiction.html',
		'https://catalogue-taba.github.io/enfants.html',
		'https://catalogue-taba.github.io/enfants_albums.html',
		'https://catalogue-taba.github.io/enfants_documentaires.html',
		'https://catalogue-taba.github.io/enfants_dvd.html',
		'https://catalogue-taba.github.io/enfants_tout-petits.html',
		'https://catalogue-taba.github.io/jeunes.html',
		'https://catalogue-taba.github.io/jeunes_BD.html',
		'https://catalogue-taba.github.io/jeunes_documentaires.html',
		'https://catalogue-taba.github.io/jeunes_premierelecture.html',
		'https://catalogue-taba.github.io/jeunes_romans.html',
		'https://catalogue-taba.github.io/croix.jpg'
		]);
		})
		);
		});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Récupération de la ressource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open('test_manifest-v7').then((cache) => {
          console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
