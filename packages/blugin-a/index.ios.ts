import { BluginACommon } from './common';

export class BluginA extends BluginACommon {
  createNativeView() {
    return MarqueeLabel.alloc().init();
  }

  initNativeView(): void {
    const nativeView = <MarqueeLabel>this.nativeView;
    nativeView.fadeLength = 10;
    nativeView.scrollDuration = 8;
  }
}
