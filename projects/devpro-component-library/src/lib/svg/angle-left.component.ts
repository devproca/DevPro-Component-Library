import { Component } from "@angular/core";
import { BaseSvgComponent } from "./base-svg.component";
import {DP_SVG} from "@dev-pro/devpro-component-library/src/lib/svg/svg.token";


@Component({
     selector: 'dp-angle-left',
     template: `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-left"
                     class="svg-inline--fa fa-angle-left fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
       <path fill="currentColor"
             d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"></path>
     </svg>`
})
export class AngleLeftComponent extends BaseSvgComponent {

}
