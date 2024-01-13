namespace Greeter {
    export interface Greeting<T> {
        introduction(): string
        sayGoodbye(name: T): string
    }

    export class Example {
        field1: string;
        field2: string;

        constructor(field1: string, field2: string){
            this.field1 = field1;
            this.field2 = field2;
        }
    }
}