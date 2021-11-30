self.addEventListener('install', function(event) {
	console.log('[Service Worker] Install');
	event.waitUntil(
	caches.open('test_manifest-v7').then(function(cache) {
		console.log('debut enregistrement');
		return cache.addAll([
		'https://catalogue-taba.github.io/styles_catalogue.css',
		'https://catalogue-taba.github.ioindex.html',
		'https://catalogue-taba.github.iomanifest.webmanifest',
		'https://catalogue-taba.github.ioadultes.html',
		'https://catalogue-taba.github.ioadultes_romans.html',
		'https://catalogue-taba.github.ioadultes_policiers.html',
		'https://catalogue-taba.github.ioadultes_dvd.html',
		'https://catalogue-taba.github.ioadultes_sciencefiction.html',
		'https://catalogue-taba.github.ioados.html',
		'https://catalogue-taba.github.ioados_policiers.html',
		'https://catalogue-taba.github.ioados_romans.html',
		'https://catalogue-taba.github.ioados_sciencefiction.html',
		'https://catalogue-taba.github.ioenfants.html',
		'https://catalogue-taba.github.ioenfants_albums.html',
		'https://catalogue-taba.github.ioenfants_documentaires.html',
		'https://catalogue-taba.github.ioenfants_dvd.html',
		'https://catalogue-taba.github.ioenfants_tout-petits.html',
		'https://catalogue-taba.github.iojeunes.html',
		'https://catalogue-taba.github.iojeunes_BD.html',
		'https://catalogue-taba.github.iojeunes_documentaires.html',
		'https://catalogue-taba.github.iojeunes_premierelecture.html',
		'https://catalogue-taba.github.iojeunes_romans.html',
		'https://catalogue-taba.github.iocroix.jpg'
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
