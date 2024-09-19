import Phaser from 'phaser';
import Lane from '../gameObjects/Lane';
import LaneHandler from '../gameObjects/LaneHandler';

export default class HelloWorldScene extends Phaser.Scene {
    
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    public laneHandlerP1: LaneHandler | null = null;
    public laneHandlerP2: LaneHandler | null = null;
    private wKey: Phaser.Input.Keyboard.Key | undefined;
    private aKey: Phaser.Input.Keyboard.Key | undefined;
    private sKey: Phaser.Input.Keyboard.Key | undefined;
    private dKey: Phaser.Input.Keyboard.Key | undefined;
    private qKey: Phaser.Input.Keyboard.Key | undefined;

    constructor() {

        super('hello-world');
    }

    preload() {

        console.log('Preloading assets ...')
        this.load.image('red-arrow', 'red-arrow.png')
        this.load.image('smol', '../assets/smol-aro.png')
    }

    create() {

        var laneColor = 0x556b2f;
        var selectedLaneColor = 0x7fa046;
        var gameHeight = 500; //pixels
        var gameWidth = this.scale.width; //full width
        var laneCount = 5;

        this.laneHandlerP1 = new LaneHandler(this, gameWidth, gameHeight, laneCount, laneColor, selectedLaneColor);
        this.laneHandlerP2 = new LaneHandler(this, gameWidth, gameHeight, laneCount, laneColor, selectedLaneColor, true);

        //pixel scale reference
        for (let i= 0; i <= this.scale.height ; i += 50 ){
            this.add.rectangle(10, i, 20, 2, 0x89CFF0);
            this.add.text(30, i-7, `${i}`)
        }

        // this.add.rectangle(10, 500, this.scale.width, 100, 0x89cf00);
        this.add.image(10, 10, 'red-arrow')

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        // Keyboard controls
        this.cursors = this.input.keyboard?.createCursorKeys();
        this.wKey = this.input.keyboard?.addKey( Phaser.Input.Keyboard.KeyCodes.W );
        this.aKey = this.input.keyboard?.addKey( Phaser.Input.Keyboard.KeyCodes.A );
        this.sKey = this.input.keyboard?.addKey( Phaser.Input.Keyboard.KeyCodes.S );
        this.dKey = this.input.keyboard?.addKey( Phaser.Input.Keyboard.KeyCodes.D );
        this.qKey = this.input.keyboard?.addKey( Phaser.Input.Keyboard.KeyCodes.Q );

    }

    update(time: number, delta: number): void {


        if(this.cursors) {
            if(Phaser.Input.Keyboard.JustDown(this.cursors.down)){
                this.laneHandlerP1?.moveSelectorDown()
            }
            if(Phaser.Input.Keyboard.JustDown(this.cursors.up)){
                this.laneHandlerP1?.moveSelectorUp()
            }
        }
        if(this.wKey && Phaser.Input.Keyboard.JustDown(this.wKey)) {
            this.laneHandlerP2?.moveSelectorUp()
        }
        if( this.sKey && Phaser.Input.Keyboard.JustDown(this.sKey)) {
            this.laneHandlerP2?.moveSelectorDown()
        }
        // if(Phaser.Input.Keyboard.JustDown(this.cursors?.up)){

        // }
        
    }
}