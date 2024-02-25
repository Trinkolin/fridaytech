import { Component } from '@angular/core';
import { SlideshowTitleComponent } from '../../../../../slideshow/components/slideshow-title/slideshow-title.component';
import { PrismComponent } from '../../../../../shared/components/prism/prism.component';

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [SlideshowTitleComponent, PrismComponent],
  templateUrl: './fixtures.component.html',
})
export class FixturesComponent {
  basic_fixture = `
    // cypress/fixtures/my-fixture.json
{
  "message": "Hello, world!"
}
   `;

  use_basic_fixture = `
    it("should greet the user", () => {
      const message = cy.fixture("my-fixture.json").as("message");

      cy.get(".greeting").should("have.text", message);
    });
     `;
}
