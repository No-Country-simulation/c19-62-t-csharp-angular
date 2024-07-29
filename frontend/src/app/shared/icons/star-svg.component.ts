import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  computed,
  input,
} from '@angular/core';
import { SvgProps } from '../interfaces/SvgProps.interface';

@Component({
  selector: 'app-star-svg',
  standalone: true,
  template: `<svg
    [class]="customClass()"
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 46 46"
    fill="none"
  >
    <path [attr.d]="fillStream()" fill="#EFBD3D" />
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarSvgComponent implements SvgProps {
  size: InputSignal<number> = input(46);
  customClass = input<string>('');
  isFill = input<boolean>(false);
  fillStream = computed(() => (this.isFill() ? this.fill : this.fillNome));
  private readonly fill =
    'M42.0994 20.6371L34.0134 27.6144L36.4769 38.0489C36.6129 38.6153 36.5779 39.2093 36.3764 39.7559C36.1749 40.3024 35.8159 40.777 35.3448 41.1196C34.8737 41.4623 34.3116 41.6576 33.7296 41.681C33.1475 41.7043 32.5716 41.5547 32.0746 41.2509L23.0004 35.6662L13.9208 41.2509C13.4238 41.5529 12.8486 41.7012 12.2675 41.6769C11.6865 41.6527 11.1256 41.4571 10.6555 41.1148C10.1854 40.7724 9.82708 40.2986 9.62571 39.7531C9.42433 39.2075 9.38888 38.6145 9.52381 38.0489L11.9963 27.6144L3.91038 20.6371C3.47068 20.2571 3.15268 19.756 2.99609 19.1963C2.83951 18.6366 2.85128 18.0432 3.02993 17.4902C3.20859 16.9372 3.54621 16.4491 4.00063 16.0868C4.45505 15.7245 5.00614 15.5041 5.58506 15.4532L16.1866 14.5978L20.2763 4.70065C20.4977 4.16126 20.8744 3.69988 21.3587 3.37517C21.843 3.05045 22.4128 2.87708 22.9959 2.87708C23.5789 2.87708 24.1488 3.05045 24.6331 3.37517C25.1173 3.69988 25.4941 4.16126 25.7155 4.70065L29.8033 14.5978L40.4049 15.4532C40.985 15.5022 41.5377 15.7214 41.9938 16.0831C42.4498 16.4449 42.789 16.9333 42.9688 17.487C43.1485 18.0406 43.1609 18.6351 43.0043 19.1958C42.8478 19.7565 42.5292 20.2585 42.0886 20.6389L42.0994 20.6371Z';

  private readonly fillNome =
    'M42.6365 17.5861C42.4825 17.099 42.1857 16.6695 41.7845 16.3532C41.3834 16.0369 40.8964 15.8486 40.3869 15.8125L29.5607 14.9375L25.3883 4.83902C25.1937 4.36568 24.8627 3.96087 24.4375 3.67599C24.0124 3.39111 23.5121 3.23901 23.0003 3.23901C22.4885 3.23901 21.9882 3.39111 21.563 3.67599C21.1378 3.96087 20.8069 4.36568 20.6122 4.83902L16.4399 14.9339L5.61373 15.8125C5.10373 15.8488 4.61645 16.0377 4.21523 16.3547C3.81402 16.6716 3.51744 17.1019 3.36404 17.5896C3.20414 18.0761 3.19185 18.599 3.32871 19.0924C3.46558 19.5858 3.74547 20.0277 4.1331 20.3622L12.3987 27.4796L9.8831 38.1261C9.76506 38.6244 9.7975 39.1464 9.9763 39.6262C10.1551 40.106 10.4722 40.522 10.8876 40.8214C11.2977 41.1253 11.7902 41.2982 12.3003 41.3175C12.8104 41.3367 13.3145 41.2014 13.7464 40.9293L23.0003 35.2403L32.2686 40.9382C32.7005 41.2104 33.2045 41.3457 33.7147 41.3265C34.2248 41.3072 34.7172 41.1343 35.1274 40.8304C35.5427 40.531 35.8599 40.115 36.0387 39.6352C36.2175 39.1554 36.2499 38.6334 36.1319 38.1351L33.6162 27.4886L41.8675 20.3622C42.2558 20.0274 42.5361 19.5849 42.673 19.0908C42.8099 18.5966 42.7972 18.073 42.6365 17.5861ZM40.4551 18.7307L31.7062 26.2775C31.5569 26.4063 31.4458 26.5736 31.3849 26.7612C31.3241 26.9487 31.3159 27.1494 31.3611 27.3413L34.0349 38.6239C34.0583 38.709 34.0544 38.7994 34.0238 38.8822C33.9932 38.9651 33.9374 39.0362 33.8642 39.0857C33.7979 39.1369 33.7172 39.1662 33.6335 39.1694C33.5497 39.1727 33.4671 39.1497 33.397 39.1036L23.5645 33.0625C23.3948 32.9583 23.1995 32.9031 23.0003 32.9031C22.8011 32.9031 22.6058 32.9583 22.4361 33.0625L12.6036 39.1018C12.5335 39.1479 12.4509 39.1709 12.3671 39.1676C12.2834 39.1644 12.2027 39.1351 12.1364 39.0839C12.0616 39.0356 12.004 38.965 11.9717 38.8821C11.9394 38.7992 11.9342 38.7082 11.9567 38.6221L14.6304 27.3395C14.6757 27.1476 14.6675 26.9469 14.6067 26.7594C14.5458 26.5718 14.4347 26.4046 14.2854 26.2757L5.53646 18.7289C5.46782 18.673 5.4183 18.5971 5.3948 18.5117C5.37129 18.4264 5.37496 18.3359 5.40529 18.2527C5.42873 18.1707 5.47716 18.0981 5.54383 18.0449C5.61051 17.9918 5.6921 17.9608 5.77725 17.9562L17.2629 17.029C17.4608 17.0129 17.6504 16.9425 17.8108 16.8255C17.9713 16.7085 18.0963 16.5495 18.1721 16.366L22.5978 5.6566C22.6286 5.57732 22.6827 5.50922 22.7529 5.46119C22.8232 5.41317 22.9062 5.38748 22.9913 5.38748C23.0764 5.38748 23.1595 5.41317 23.2297 5.46119C23.2999 5.50922 23.354 5.57732 23.3848 5.6566L27.8105 16.366C27.8863 16.5495 28.0113 16.7085 28.1718 16.8255C28.3322 16.9425 28.5218 17.0129 28.7197 17.029L40.2054 17.9562C40.2905 17.9608 40.3721 17.9918 40.4388 18.0449C40.5055 18.0981 40.5539 18.1707 40.5773 18.2527C40.6091 18.3352 40.6144 18.4255 40.5925 18.5112C40.5706 18.5968 40.5226 18.6735 40.4551 18.7307Z';
}
