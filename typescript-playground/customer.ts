export class Customer {
    constructor(public id: number) {}

    foobar(): string {
        setTimeout(() => {
            console.log('ID:', this.id);
        }, 2000);
        
        return '';
    }
}