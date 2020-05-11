export class User {
  name: string;
  points: number;

  constructor(props: any = {}) {
    Object.assign(this, props);
    this.name = props.name ? props.name : '';
    this.points = props.points ? props.points : 0;
  }
}
