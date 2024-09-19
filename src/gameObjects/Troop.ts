import Phaser from "phaser";

export default class Troop extends Phaser.GameObjects.Sprite {

    public health: number = 0;
    public speed: number = 0;
    public damage: number = 0;
    public attackSpeed: number = 0;
    public isRanged : boolean = false;
    public projectile : Phaser.GameObjects.Image | null = null;


}