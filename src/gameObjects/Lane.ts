import Phaser from 'phaser';

export default class Lane extends Phaser.GameObjects.Rectangle {
    public laneIndex: number;
    public laneStart: number;
    public laneEnd: number;
    public isSelected: boolean;
    private color: number;
    private selectColor: number;

    constructor(
        scene: Phaser.Scene, 
        laneIndex: number, 
        width: number, 
        height: number, 
        x: number, 
        y: number,
        color: number = 0xffffff,
        selectColor: number = 0xffff00,
        isSelected: boolean = false,
    ) {
        super(scene, x, y, width, height, color);
        
        this.laneIndex = laneIndex;
        this.isSelected = isSelected;
        this.color = color;
        this.selectColor = selectColor;
        this.laneStart = 10;
        this.laneEnd = scene.scale.width - 10;
        if ( isSelected === true ) this.setFillStyle(selectColor);

        scene.add.existing(this);

        // this.scene.add.text(x, y, 'this is lane'+laneIndex);
        
        console.log(`Lane ${laneIndex} created at (${x}, ${y})`);
    }

    getLaneIndex(): number {
        return this.laneIndex;
    }

    setSelectedOn() {
        this.isSelected = true;
        this.setFillStyle(this.selectColor);
    }

    setSelectedOff() {
        this.isSelected = false;
        this.setFillStyle(this.color);
    }
}