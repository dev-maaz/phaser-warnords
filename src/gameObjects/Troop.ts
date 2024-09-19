import Phaser from "phaser";

export default class Troop extends Phaser.GameObjects.Sprite {

    public health: number = 0;
    public speed: number = 0;
    public damage: number = 0;
    public attackSpeed: number = 0;
    public isRanged : boolean = false;
    public projectile : Phaser.GameObjects.Image | null = null;
    public x : number;
    public y : number;
    public texture : Phaser.Textures.Texture;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: Phaser.Textures.Texture
    ) {
        super(scene, x, y, texture);
        this.x = x;
        this.y = y;
        this.texture = texture;
    }

    
}