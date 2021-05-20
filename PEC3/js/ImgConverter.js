const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['../img/ensaimada_grande.jpg','../img/ensaimada_de_nata.jpg'], {
		destination: '../img',
		plugins: [
			imageminWebp({quality: 50})
		]
	});

	console.log('Webp Images optimized');
})();

const imageminAvif = require('imagemin-avif');

(async () => {
  await imagemin(['../img/ensaimada_grande.jpg','../img/ensaimada_de_nata.jpg'], {
    destination: '../img',
    plugins: [
      imageminAvif({quality: 50})
    ]
  });
	console.log('Avif Images optimized');

})();