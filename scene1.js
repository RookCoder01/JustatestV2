class scene1 extends Phaser.Scene {
  constructor() {
    super({key: "scene1.js"});
  }

  preload() {
    this.load.image('naturre-lush-background.jpg', 'assets/naturre-lush-background.jpg');
    this.load.image('platform.png', 'assets/platform.png');
    this.load.spritesheet('little-guy-jumping-improved.png', 'assets/sprite-frame-1.png', {
      frameWidth: 16,
      frameHeight: 16
    });

  }

  create() {

    this.add.sprite(400, 300, 'naturre-lush-background.jpg');
    this.add.sprite(400, 568, 'platform.png');
    this.add.spritesheet(80,  340, 'little-guy-jumping-improved.png');



      platforms = this.physics.add.staticGroup();

      platforms.create(400, 568, 'platform.png').setScale(2).refreshBody();

      platforms.create(600,400, 'platform.png');

      platforms.create(50, 250, 'platform.png');

      platforms.create(750, 220, 'platform.png');

      player = this.physics.add.sprite(100, 450, 'little-guy-jumping-improved.png');

      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

        this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('little-guy-jumping-improved.png', {
            start: 0, end: 3
          }),
          frameRate: 10,
          repeat: -1
        });
    this.anims.create({
      key: 'turn',
      frames: [{key: 'little-guy-jumping-improved.png', frame: 4}],
      frameRate: 20
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('little-guy-jumping-improved.png', {
        start: 5, end: 8
      }),
      frameRate: 10,
      repeat: -1
    });}}

