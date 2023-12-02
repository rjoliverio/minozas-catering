import { Category } from '.'

/* eslint-disable no-unused-vars */
export class Menu {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public category: Category,
    public type: string,
    public rate: number,
    public image: string
  ) {}
}
