import { copyFileSync, existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const browserOutput = resolve('dist/macarrones-con-tomatico/browser');
const prerenderedNotFound = join(browserOutput, '404/index.html');
const destination = join(browserOutput, '404.html');

if (!existsSync(prerenderedNotFound)) {
  throw new Error(`Angular no ha prerenderizado la página 404 esperada: ${prerenderedNotFound}`);
}

const html = readFileSync(prerenderedNotFound, 'utf8');
const normalizedHtml = html.normalize('NFD').replace(/\p{Diacritic}/gu, '');
if (
  !/<title>Pagina no encontrada \| Macarrones con Tomatico<\/title>/.test(normalizedHtml)
  || !/<meta name="robots" content="noindex">/.test(html)
  || !/<h1[^>]*>Pagina no encontrada<\/h1>/.test(normalizedHtml)
) {
  throw new Error('La ruta prerenderizada 404 no contiene el título, noindex y contenido esperados.');
}

copyFileSync(prerenderedNotFound, destination);
console.log(`Página 404 estática creada: ${destination}`);
