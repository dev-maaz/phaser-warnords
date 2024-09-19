import Phaser from "phaser";
import Lane from "./Lane";

export default class LaneHandler {

    public lanes : Lane[];
    public selectedIndex : number;
    public laneCount : number;
    public laneColor : number;
    public selectedLaneColor : number;
    public mirror : boolean;
    
    constructor(
        scene: Phaser.Scene,
        width: number,
        height: number,
        laneCount: number,
        laneColor: number,
        selectedLaneColor: number = 3,
        mirror: boolean = false
    ) {

        this.lanes = [];
        this.selectedIndex = 3;
        this.laneCount = laneCount;
        this.laneColor = laneColor;
        this.selectedLaneColor = selectedLaneColor;
        this.mirror = mirror;

        for ( let i = 1; i <= laneCount; i++) {
            let laneHeight = height / laneCount;
            let laneWidth = width / 2 ;
            let laneY = laneHeight / 2 + (i * laneHeight);
            let laneX = laneWidth / 2;
            let color: number;

            //Player 2 handling 
            if(mirror === true) {
                laneX = laneWidth/2 + laneWidth;
            }


            if( i === 3 ) color = selectedLaneColor;
            else color = laneColor;
            
            const lane = new Lane(scene, i, laneWidth, laneHeight, laneX, laneY, color);
            this.lanes.push(lane);
        }
    }

    public moveSelectorDown () {
        if ( this.selectedIndex < this.laneCount && this.lanes[this.selectedIndex + 1] ) {
            this.lanes[this.selectedIndex].setFillStyle(this.laneColor)
            this.selectedIndex++;
            this.lanes[this.selectedIndex].setFillStyle(this.selectedLaneColor)
        }
    }

    public moveSelectorUp () {
        if ( this.selectedIndex > 0 ) {
            this.lanes[this.selectedIndex].setFillStyle(this.laneColor)
            this.selectedIndex--;
            this.lanes[this.selectedIndex].setFillStyle(this.selectedLaneColor)
        }
    }
}