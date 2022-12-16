import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBluginA } from '@demo/shared';
import {} from '@salient-sys/blugin-a';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBluginA {}
