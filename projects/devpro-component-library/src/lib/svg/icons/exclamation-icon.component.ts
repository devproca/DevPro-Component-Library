import { Component } from "@angular/core";
import { BaseSvgComponent } from "../base-svg.component";

const TAG = "exclamation";

@Component({
  selector: `i-${TAG}`,
     template: `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="exclamation"
     class="svg-inline--fa fa-calendar fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 301.691 301.691">
<g fill="currentColor">
	<polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0"/>
  <rect x="130.563" y="261.168" width="40.525" height="40.523"/>
</g>
</svg>
`})
export class ExclamationIconComponent extends BaseSvgComponent { 
     static tag = TAG;
}
