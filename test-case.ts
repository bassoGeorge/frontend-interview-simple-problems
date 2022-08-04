@Component({
    selector: 'app-child',
    template: `
        <div> <span>{{ name }}</span> <button (click)="onClick()">Click Me</button> </div>
    `
})
export class MyComponent {
    @Input() name: string;
    @Input() id: string;
    @Output() selected = new EventEmitter();

    onClick() {
        this.selected.emit(this.id);
    }
}


@Component({
    selector: 'app-parent',
    template: `
        <div> <app-child *ngFor="let item of items"  [name]="item.name" [id]="item.id" (selected)="onSelect(item.id)"></app-child> </div>
    `
})
export class ParentComponent {
    items = [{id: 1, name: "Apple"}, {id: 2, name: "Orange"}]

    onSelect(event) {
        console.log(event);
    }
}
