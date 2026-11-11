import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFoundPage {
  constructor() {
    this.title.setTitle('Página no encontrada | Macarrones con Tomatico');
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
}
