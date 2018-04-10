import { InPageNavigationDirective } from './in-page-navigation.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
	template: `<ul appInPageNavigation><li><a href="#">Test1</a></li></ul>`
})
class TestInPageNavigationComponent {
}

describe('InPageNavigationDirective', () => {

	it('should create an instance', () => {
		const directive = new InPageNavigationDirective(null, null);
		expect(directive).toBeTruthy();
	});

});
