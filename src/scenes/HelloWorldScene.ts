import Phaser from 'phaser';
import Lane from '~/gameObjects/Lane';
import LaneHandler from '~/gameObjects/LaneHandler';


export default class HelloWorldScene extends Phaser.Scene {

    public cursors = this.input.keyboard?.createCursorKeys();

    constructor() {
        super('hello-world');
    }

    preload() {
        this.load.setBaseURL('../assets/')
        this.load.image('red-arrow', 'red-arrow.png');
    }

    create() {
        console.log( `scale-height: ${this.scale.height} scale-width: ${this.scale.width}`)
        const laneCount = 5;
        const laneWidth = this.scale.width;
        const laneHeight = 100;
        var laneColor = 0x556b2f;

        const laneHandlerP1 = new LaneHandler(this, this.scale.width, 500, 5, 0x556b2f, 0x7fa046);
        // for (let i = 1; i <= laneCount; i++) {
        //     if (i == 3) laneColor = 0x7fa046;
        //     else laneColor = 0x556b2f;
        //     const x = this.scale.width / 2;
        //     const y = 50 + this.scale.height - (i * laneHeight);
        //     const lane = new Lane(this, i, laneWidth, laneHeight, x, y , laneColor);
        //     this.lanes.push(lane);
        // }


        //pixel scale reference
        for (let i= 0; i <= this.scale.height ; i += 50 ){
            this.add.rectangle(10, i, 30, 10, 0x89CFF0);
            this.add.text(30, i-7, `${i}`)
        }

        // this.add.rectangle(10, 500, this.scale.width, 100, 0x89cf00);
        this.add.image(10, 10, 'red-arrow')



        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        // Keyboard controls
        
        


    }

    update(time: number, delta: number): void {


        // if(Phaser.Input.Keyboard.JustDown(this.cursors?.up)){

        // }
        
    }
}