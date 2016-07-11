module objects {
    /**
    / *This is to create individual scenes 
    / * 
    / * @export
    / * @abstract
    / * @class Scene
    / * @extends {createjs.Container}
    */
    export abstract class Scene extends createjs.Container{
        constructor(){
            super();
            this.start();


        }
        /*
        *Add game objectst o my scene in this method
        *
        *@method Start
        *@returns {void}
        */

        public start():void{
            core.stage.addChild(this);

        }
        /**
         * 
         * 
         * @method Update
         * @returns {void} 
         */

        public Update():void{

        }

    }
}