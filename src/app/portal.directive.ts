import { DOCUMENT } from '@angular/common';
import { Directive, Inject, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPortal]'
})
export class PortalDirective implements OnInit, OnDestroy{
  @Input() appPortal!:string;

  private host: Element | undefined;
  private portalIds =[];

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    @Inject(DOCUMENT) private document:Document
  ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    const viewRef = this.vcr.createEmbeddedView(this.tpl);
  }

}
