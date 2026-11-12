import { Component, OnInit, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { setCanonicalUrl } from '../../data/site-metadata';

interface InfoSection {
  heading: string;
  paragraphs: string[];
  links?: Array<{ label: string; url: string }>;
}

interface InfoContent {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: InfoSection[];
}

const CONTENT: Record<string, InfoContent> = {
  about: {
    eyebrow: 'Nuestra cocina',
    title: 'Una cocina sencilla, hecha para compartir.',
    introduction: 'Macarrones con Tomatico reúne ideas claras para cocinar pasta en casa, con ingredientes corrientes y explicaciones pensadas para el día a día.',
    sections: [
      {
        heading: 'Por qué nació este recetario',
        paragraphs: [
          'El recetario reúne platos conocidos, combinaciones de diario y recetas inspiradas en la cocina italiana, explicadas con ingredientes y pasos a la vista.',
          'La pasta admite muchas formas de cocinar y compartir. Aquí hay salsas de tomate, platos cremosos, opciones con verduras y recetas con pescado o carne: propuestas distintas para elegir según el tiempo y lo que tengas en la cocina.',
        ],
      },
      {
        heading: 'Cómo leer y adaptar las recetas',
        paragraphs: [
          'Las cantidades indicadas corresponden a las raciones de cada ficha. Los minutos son orientativos: el tipo de pasta, el tamaño de los ingredientes, el fuego y cada horno pueden cambiar el resultado. Prueba la comida mientras cocinas y sigue también las instrucciones del envase cuando sean relevantes.',
          'En cada receta encontrarás ideas para ajustar ingredientes y textura. Si cambias una cantidad o haces una sustitución, puede que tengas que corregir la sal, el líquido o el tiempo. Las sugerencias son una guía culinaria, no una recomendación para necesidades médicas, alergias o dietas terapéuticas.',
        ],
      },
      {
        heading: 'Contenido e imágenes',
        paragraphs: [
          'Las fichas y los consejos se redactan para este recetario y se van revisando para que resulten más claros y útiles. Las recetas se presentan como guías orientativas, no como una garantía de que el resultado sea idéntico en todas las cocinas; los tiempos y resultados pueden variar.',
          'Las fotografías de las fichas proceden de Pexels y se usan conforme a la licencia de esa plataforma. Son imágenes de terceros, no fotografías propias ni de dominio público. La licencia permite su uso en sitios web y blogs, sujeto a sus condiciones.',
        ],
        links: [{ label: 'Consultar la licencia de Pexels', url: 'https://www.pexels.com/license/' }],
      },
      {
        heading: 'Privacidad y contacto',
        paragraphs: [
          'Puedes consultar la Política de privacidad y el Aviso legal, o escribir al responsable desde la página de contacto.',
        ],
        links: [
          { label: 'Política de privacidad', url: '/privacidad' },
          { label: 'Aviso legal', url: '/aviso-legal' },
          { label: 'Contacto', url: '/contacto' },
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Contacta con Macarrones con Tomatico',
    introduction: 'Para consultas sobre el contenido, privacidad o el funcionamiento del sitio, puedes escribir al responsable editorial.',
    sections: [
      {
        heading: 'Correo electrónico',
        paragraphs: [
          'El responsable editorial es Mario Galindo, con ubicación declarada en Murcia, España. Pulsa el enlace para abrir Gmail y redactar tu mensaje.',
        ],
        links: [{ label: 'Enviar un correo', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mariogalindoperez6%40gmail.com' }],
      },
    ],
  },
  privacy: {
    eyebrow: 'Tu privacidad',
    title: 'Política de privacidad',
    introduction: 'Esta política explica qué datos se utilizan al visitar Macarrones con Tomatico y cómo se gestionan las consultas enviadas por correo electrónico.',
    sections: [
      {
        heading: 'Responsable y contacto',
        paragraphs: [
          'El responsable editorial de este sitio es Mario Galindo, con ubicación declarada en Murcia, España. Para consultas relacionadas con privacidad puedes escribir a mariogalindoperez6@gmail.com.',
        ],
      },
      {
        heading: 'Qué datos se utilizan',
        paragraphs: [
          'La web no tiene cuentas de usuario, formularios, comentarios, boletín, herramientas de analítica ni publicidad activa. La búsqueda y los filtros de recetas funcionan en el navegador; no se envían a una cuenta ni a una API de este sitio.',
          'Si escribes al correo de contacto, tu mensaje y la dirección que utilices se tratarán en tu servicio de correo y en el mío para poder responder. Evita incluir información sensible que no sea necesaria.',
          'Para mostrar las fotografías, el navegador solicita archivos al CDN de Pexels. Esa conexión puede comunicar a Pexels datos técnicos como la dirección IP y la información habitual de una solicitud web. Las tipografías se sirven desde el propio dominio. Consulta la política de Pexels para conocer su tratamiento.',
          'El proveedor de alojamiento puede tratar datos técnicos de conexión necesarios para servir la web y protegerla. Los registros y plazos dependen del servicio de alojamiento utilizado.',
        ],
        links: [
          { label: 'Privacidad de Pexels', url: 'https://www.pexels.com/privacy-policy/' },
        ],
      },
    ],
  },
  cookies: {
    eyebrow: 'Información útil',
    title: 'Política de cookies',
    introduction: 'Información sobre las cookies y los recursos que se cargan al visitar Macarrones con Tomatico.',
    sections: [
      {
        heading: 'Uso actual',
        paragraphs: [
          'La aplicación no instala cookies propias ni utiliza almacenamiento local para sus filtros o búsquedas. Tampoco carga anuncios ni etiquetas de analítica. El proveedor de alojamiento podría utilizar registros técnicos para prestar y proteger el servicio.',
          'Las fotografías se sirven desde el CDN de Pexels y las fuentes tipográficas desde el propio dominio. Al cargar las imágenes, el navegador se conecta con Pexels; su tratamiento técnico se rige por su propia política. No se usan aquí para activar una medición de visitas.',
        ],
      },
      {
        heading: 'Preferencias del navegador',
        paragraphs: [
          'Puedes gestionar o borrar las cookies y los datos de navegación desde los ajustes de tu navegador.',
        ],
      },
    ],
  },
  legal: {
    eyebrow: 'Información legal',
    title: 'Aviso legal',
    introduction: 'Información sobre la persona responsable de Macarrones con Tomatico y las condiciones generales de uso del recetario.',
    sections: [
      {
        heading: 'Titular y contacto',
        paragraphs: [
          'Titular editorial: Mario Galindo. Ubicación declarada: Murcia, España. Correo de contacto: mariogalindoperez6@gmail.com.',
          'Macarrones con Tomatico es un recetario de pasta con finalidad informativa y culinaria.',
        ],
      },
      {
        heading: 'Finalidad y uso del contenido',
        paragraphs: [
          'Las recetas y los consejos tienen finalidad culinaria e informativa. Los tiempos son orientativos y pueden variar según los ingredientes y el equipo. Comprueba la información de alérgenos de los productos que utilizas y sigue las recomendaciones de manipulación, cocción y conservación de alimentos.',
          'El resultado depende de los ingredientes, el tamaño de las piezas y el equipo de cada cocina. El contenido no sustituye el consejo de un profesional sanitario para alergias, intolerancias o necesidades dietéticas.',
        ],
      },
      {
        heading: 'Derechos sobre textos e imágenes',
        paragraphs: [
          'Los textos editoriales de este sitio se ofrecen para su lectura personal. No copies ni redistribuyas el contenido completo sin permiso. Las fotografías proceden de Pexels y se utilizan bajo la licencia de esa plataforma; sus derechos siguen perteneciendo a sus respectivos autores y titulares.',
        ],
        links: [{ label: 'Condiciones de la licencia de Pexels', url: 'https://www.pexels.com/license/' }],
      },
      {
        heading: 'Enlaces externos',
        paragraphs: [
          'Los enlaces externos llevan a servicios de terceros, que tienen sus propias condiciones y políticas. El titular de este recetario no controla sus contenidos ni sus prácticas.',
        ],
      },
    ],
  },
};

@Component({
  selector: 'app-info-page',
  imports: [RouterLink],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class InfoPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  protected readonly content = signal<InfoContent>(CONTENT['about']);

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const page = typeof data['page'] === 'string' ? data['page'] : 'about';
      const content = CONTENT[page] ?? CONTENT['about'];
      this.content.set(content);
      this.meta.removeTag('name="robots"');
      this.titleService.setTitle(`${content.title} | Macarrones con Tomatico`);
      this.meta.updateTag({ name: 'description', content: content.introduction });
      const canonicalPath = typeof data['canonicalPath'] === 'string'
        ? data['canonicalPath']
        : '/contacto';
      const canonicalUrl = setCanonicalUrl(this.document, canonicalPath);
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
      this.meta.updateTag({ property: 'og:title', content: content.title });
      this.meta.updateTag({ property: 'og:description', content: content.introduction });
      this.meta.updateTag({ name: 'twitter:title', content: content.title });
      this.meta.updateTag({ name: 'twitter:description', content: content.introduction });
    });
  }
}
