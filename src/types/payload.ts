export class Payload {
  board: string;
  level: string;

  constructor(props: any = {}) {
    Object.assign(this, props);
    this.board = props.board ? props.board : '';
    this.level = props.level ? props.level : 'medium';
  }
}
