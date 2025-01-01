import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    /* const numberPerSeconds = interval(1000);
    numberPerSeconds.subscribe(x => console.log(x)); */

    /* const nums = of(5, 6, 7);
    const valquadrato = map((val: number) => val * val);
    const numsquadrato = valquadrato(nums);
    numsquadrato.subscribe(x => console.log(x)); */

    /* const numeri = of(1, 2, 3, 4, 5);
    const numerfiltermap = pipe(
      filter((x: number) => x % 2 === 1),
      map((y: number) => y * y)
    );
    const numeripipe = numerfiltermap(numeri);
    numeripipe.subscribe(data => console.log(data)); */
  }
}
