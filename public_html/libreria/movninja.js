/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Comportamiento para uso del cursor
 * 
 * @param {type} game
 * @param {type} posx
 * @param {type} posy
 * @param {type} key
 * @param {type} frame
 * @param {type} target
 * @param {type} cursors
 * @returns {Behavior_Cursor}
 */
function movninja(game, posx, posy, key, cursors) {
//    Behavior.call(this,game, posx, posy, key, frame,target);


    this.sprite = game.add.sprite(posx, posy, key)
    this.game = game;

    /*
     * agrega sprite al juego
     */
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);


    /**
     *  Variables utiles para el comportamiento 
     */
    this.esp_speed = 0;
    this.max_speed = 1.5;
    this.min_speed = 0;
    this.min_distance = 0;
    this.max_distance = 0;



//    return this;




    //this.sprite.body.bounce.y = 0.2;
    //  this.sprite.body.gravity.y = 300;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.scale.setTo(0.1, 0.1);

    this.game.physics.arcade.enable(this.sprite);

    this.sprite.body.collideWorldBounds = true;

    this.sprite.animations.add('right', [3, 4, 5], 7, true);
    this.sprite.animations.add('left', [0, 1, 2], 7, true);



    this.cursors = cursors;
    return this;
}
//Behavior_Cursor.prototype= Object.create(Behavior.prototype);//Degfino que es sub clase de Sprite.
movninja.prototype.constructor = movninja;

movninja.prototype.update = function () {

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.right.isDown)
    {
        this.sprite.body.velocity.x = +150;
        this.sprite.animations.play('right');
    }

    else if (this.cursors.left.isDown)
    {
        this.sprite.body.velocity.x = -150;
        this.sprite.animations.play('left');
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite.body.velocity.y = 100;
    }
    else if (this.cursors.up.isDown)
    {
        this.sprite.body.velocity.y = -100;
    }

    else
    {
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
        this.sprite.animations.stop();
        this.sprite.frame = 0;
    }

    //  Allow the this to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.sprite.body.touching.down)
    {
        this.sprite.body.velocity.y = -350;
    }


}
;