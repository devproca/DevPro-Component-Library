import { Component } from "@angular/core";
import { BaseSvgComponent } from "../base-svg.component";

const TAG = "terminal";

@Component({
  selector: `i-${TAG}`,
     template: `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="terminal" class="svg-inline--fa fa-terminal fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M41.678 38.101l209.414 209.414c4.686 4.686 4.686 12.284 0 16.971L41.678 473.899c-4.686 4.686-12.284 4.686-16.971 0L4.908 454.101c-4.686-4.686-4.686-12.284 0-16.971L185.607 256 4.908 74.87c-4.686-4.686-4.686-12.284 0-16.971L24.707 38.1c4.686-4.686 12.284-4.686 16.971.001zM640 468v-28c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z"></path></svg>`
})
export class TerminalIconComponent extends BaseSvgComponent {
     static tag = TAG;
}
