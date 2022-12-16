import { Component, NgZone } from '@angular/core';
import { DemoSharedBluginA } from '@demo/shared';
import { registerElement } from '@nativescript/angular';
import { BluginA } from '@salient-sys/blugin-a';

registerElement('BluginA', () => BluginA);

@Component({
  selector: 'demo-blugin-a',
  templateUrl: 'blugin-a.component.html',
})
export class BluginAComponent {
  demoShared: DemoSharedBluginA;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBluginA();
  }
}
