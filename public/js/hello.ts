import { Component, View, bootstrap, coreDirectives } from 'angular2/angular2';
import { Inject } from 'angular2/di';
import { InformationsService } from 'js/InformationsService.ts';

@Component({
  selector: 'hello',
  appInjector: [InformationsService]
})
@View({
    template: `
    <h1 *ng-if="title">{{title}}</h1>
    <h2>{{subtitle}} <a href="http://golo-lang.org/">Golo</a></h2>
    <h3>{{applicationName}}</h3>
    <h4>{{version}}</h4>
    `,
    directives: [coreDirectives]
})
export class Hello {
  title: string = 'Kiss Framework';
  subtitle: string = 'please wait for a few seconds ...';
  applicationName: string = null;
  version: string = null;
  constructor(@Inject(InformationsService) informationsService) {
    /* use service */

    this.applicationName = informationsService.getApplicationName();
    this.version = informationsService.getVersion():

    setTimeout(() => {
      this.subtitle = `Fast, unopinionated, minimalist web framework for `;
    }, 2000);
  }
}

bootstrap(Hello, [InformationsService]);