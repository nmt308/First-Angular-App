import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public router: Router, public route: ActivatedRoute) {}
  navigate() {
    this.router.navigate(['/item'], {
      queryParams: {
        name: '23',
      },
      relativeTo: this.route,
      fragment: 'countinue',
      queryParamsHandling: '',
      preserveFragment: true,
    });
  }
}
