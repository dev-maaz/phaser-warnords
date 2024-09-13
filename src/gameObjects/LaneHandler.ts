import Phaser from "phaser";
import Lane from "./Lane";

export default class LaneHandler {

    public lanes : Lane[];
    public selectedIndex : number;
    public laneCount : number;
    
    constructor(
        scene: Phaser.Scene,
        width: number,
        height: number,
        laneCount: number,
        laneColor: number,
        selectedLaneColor: number = 3
    ) {

        this.lanes = [];
        this.selectedIndex = 3;
        this.laneCount = laneCount;

        for ( let i = 1; i <= laneCount; i++) {
            let laneHeight = height / laneCount;
            let laneWidth = width / 2 ;
            let laneY = laneHeight / 2 + (i * laneHeight);
            let laneX = laneWidth / 2;
            let color: number;

            if( i === 3 ) color = selectedLaneColor;
            else color = laneColor;
            
            const lane = new Lane(scene, i, laneWidth, laneHeight, laneX, laneY, color);
            this.lanes.push(lane);
        }
    }

    public moveSelectorUp () {
        if ( this.selectedIndex < this.laneCount ) {
            this.lanes[this.selectedIndex].setSelectedOff();
            this.selectedIndex++;
            this.lanes[this.selectedIndex].setSelectedOn();
        }
    }

    public moveSelectorDown () {
        if ( this.selectedIndex > 1 ) {
            this.lanes[this.selectedIndex].setSelectedOff();
            this.selectedIndex--;
            this.lanes[this.selectedIndex].setSelectedOn();
        }
    }
}