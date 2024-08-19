import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { SeoService } from './shared/services/seo.service';
import { IMetadata, IOpenGraph } from './shared/interfaces/Metadata.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicLayoutComponent],
  template: '<router-outlet /> ',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly logo =
    'https://www.dropbox.com/scl/fi/jxjvt8fdt89jofkkm8omg/learn-teach.webp?rlkey=6ui15ckdz5g1xmclltmv6k0ev&st=benv4cd2&raw=1';
  private readonly pageTitle = 'Learn and teach';
  private readonly pageDescription =
    'Aprende y enseña sobre temas interesantes en Learn and Teach.';
  private readonly author =
    'Collaborative project comprised of: Alberto Gómez Juan, Alan Almeida, Delfina Machado, Wanderlee Max Gutierrez, Carlos Córdoba, Ignacio Conde, Jairo Ayllon Cardenas, Matias Bidart';
  private readonly keywords =
    'aprender, enseñar, educación, tecnología, desarrollo personal, ciencia, arte, cultura';
  private readonly openGraphConfig: Partial<IOpenGraph> = {
    'og:title': this.pageTitle,
    'og:description': this.pageDescription,
    'og:type': 'website',
    'og:image': this.logo,
    'og:image:alt': `logo ${this.pageTitle}`,
    'og:site_name': this.pageTitle,
    'og:url': '',
    'twitter:description': this.pageDescription,
    'twitter:title': this.pageTitle,
    'twitter:card': 'summary',
    'twitter:image:src': this.logo,
  };
  private readonly metaTagConfig: IMetadata = {
    description: this.pageDescription,
    author: this.author,
    keywords: this.keywords,
  };

  constructor(private readonly _seoService: SeoService) {
    this._seoService.applyIndexFollow();
    this._seoService.updateMetaTags({
      metaTags: this.metaTagConfig,
      ogTags: this.openGraphConfig,
    });
    this._seoService.setCanonicalURL('https://learn-and-teach.vercel.app/');
  }
}
