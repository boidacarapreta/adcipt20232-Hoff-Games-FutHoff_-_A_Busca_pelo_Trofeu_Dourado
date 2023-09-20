export default class cena2 extends Phaser.Scene {
  constructor () {
    super('cena2')
  }

  preload() {

    /*mapas*/
    this.load.tilemapTiledJSON('fases', '../assets/fases/fases.json')

    /*tilesets*/
    this.load.image('c1', '../assets/fases/c1.png')
    this.load.image('c2', '../assets/fases/c2.png')
    this.load.image('c3', '../assets/fases/c3.png')
    this.load.image('tilearv', '../assets/fases/tilearv.png')
    this.load.image('tilebloc', '../assets/fases/tilebloc.png')
    this.load.image('dec1', '../assets/fases/dec1.png')
    this.load.image('dec2', '../assets/fases/dec2.png')
    this.load.image('tiletrave', '../assets/fases/tiletrave.png')

    /*moeda*/
    this.load.spritesheet('moeda', '../assets/fases/moeda.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.audio('sommoeda', '../assets/audio/sommoeda.mp3')

    /*estrela*/
    this.load.spritesheet('estrela', '../assets/fases/estrela.png', {
      frameWidth: 48,
      frameHeight: 48
    })
    this.load.audio('somestrela', '../assets/audio/somestrela.mp3')

    /*personagens*/
    this.load.spritesheet('skiler', '../assets/personagens/skiler.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilerstopdireita', '../assets/personagens/skilerstopdireita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilerstopesquerda', '../assets/personagens/skilerstopesquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilercarro', '../assets/personagens/skilercarro.png', {
      frameWidth: 73,
      frameHeight: 64
    })

    /*Inimigos*/
    this.load.spritesheet('ini1walk', '../assets/personagens/ini1walk.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /*botoes*/
    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 84,
      frameHeight: 84
    })
    this.load.spritesheet('esquerda', '../assets/botoes/esquerda.png', {
      frameWidth: 84,
      frameHeight: 84
    })
    this.load.spritesheet('cima', '../assets/botoes/cima.png', {
      frameWidth: 84,
      frameHeight: 84
    })
    this.load.spritesheet('baixo', '../assets/botoes/baixo.png', {
      frameWidth: 84,
      frameHeight: 84
    })

    /*tela cheia*/
    this.load.spritesheet('tela-cheia', './assets/botoes/tela-cheia.png', {
      frameWidth: 84,
      frameHeight: 84
    })
  }

  create() {

    /*mapas*/
    this.tilemapFases = this.make.tilemap({ key: 'fases' })

    /*tilesets*/
    this.tilesetDec1 = this.tilemapFases.addTilesetImage('dec1')
    this.tilesetDec2 = this.tilemapFases.addTilesetImage('dec2')
    this.tilesetC1 = this.tilemapFases.addTilesetImage('c1')
    this.tilesetC2 = this.tilemapFases.addTilesetImage('c2')
    this.tilesetC3 = this.tilemapFases.addTilesetImage('c3')
    this.tilesetTilearv = this.tilemapFases.addTilesetImage('tilearv')
    this.tilesetTilebloc = this.tilemapFases.addTilesetImage('tilebloc')
    this.tilesetTiletrave = this.tilemapFases.addTilesetImage('tiletrave')

    /*camadas*/
    this.layerFundo = this.tilemapFases.createLayer('fundo', [this.tilesetC1, this.tilesetC2, this.tilesetC3])
    this.layerArvores = this.tilemapFases.createLayer('arvores', [this.tilesetTilearv])
    this.layerArvores2 = this.tilemapFases.createLayer('arvores2', [this.tilesetTilearv])
    this.layerBlocos = this.tilemapFases.createLayer('blocos', [this.tilesetTilebloc])
    this.layerDecbloc = this.tilemapFases.createLayer('decbloc', [this.tilesetDec1, this.tilesetDec2])
    this.layerDecarv = this.tilemapFases.createLayer('decarv', [this.tilesetDec1, this.tilesetDec2])
    this.layerOutros = this.tilemapFases.createLayer('outros', [this.tilesetTilebloc, this.tilesetDec1])
    this.layerEscada = this.tilemapFases.createLayer('escada', [this.tilesetTilebloc])
    this.layerTrave1 = this.tilemapFases.createLayer('trave1', [this.tilesetTiletrave])
    this.layerTrave2 = this.tilemapFases.createLayer('trave2', [this.tilesetTiletrave])
    this.layerTrave3 = this.tilemapFases.createLayer('trave3', [this.tilesetTiletrave])

    /*colisoes*/
    this.layerBlocos.setCollisionByProperty({ colisao: true })
    this.layerEscada.setCollisionByProperty({ colisao: true })
    this.layerTrave1.setCollisionByProperty({ colisao: true })
    this.layerTrave2.setCollisionByProperty({ colisao: true })
    this.layerTrave3.setCollisionByProperty({ colisao: true })



    /*personagens*/
    this.personagem = this.physics.add.sprite(-450, -400, 'skilerstopdireita')

    this.physics.add.collider(this.personagem, this.layerBlocos)
    this.physics.add.collider(this.personagem, this.layerEscada)
    this.physics.add.collider(this.personagem, this.layerTrave1)
    this.physics.add.collider(this.personagem, this.layerTrave2)
    this.physics.add.collider(this.personagem, this.layerTrave3)

    /*Inimigos*/
    this.ini1walk = this.physics.add.sprite(-1, -290, 'ini1walk')

    this.physics.add.collider(this.ini1walk, this.layerBlocos)
    this.physics.add.collider(this.ini1walk, this.layerEscada)
    this.physics.add.collider(this.ini1walk, this.layerTrave1)
    this.physics.add.collider(this.ini1walk, this.layerTrave2)
    this.physics.add.collider(this.ini1walk, this.layerTrave3)

    /*animação moeda*/
    this.anims.create({
      key: 'moeda-girando',
      frames: this.anims.generateFrameNumbers('moeda', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })


    /*moeda*/
    this.moedas = [
      {
        x: 930,
        y: -600
      },
      {
        x: 1540,
        y: -600
      },
      {
        x: 320,
        y: -600
      },
      {
        x: -330,
        y: -600
      },
      {
        x: 1920,
        y: -600
      },
      {
        x: -195,
        y: 100
      },
      {
        x: 1535,
        y: 100
      },
      {
        x: 575,
        y: 100
      },
      

    ]

    this.moedas.forEach((moeda) => {
      moeda.objeto = this.physics.add.sprite(moeda.x, moeda.y, 'moeda')
        .setImmovable()
      moeda.objeto.anims.play('moeda-girando', true)
      this.physics.add.collider(moeda.objeto, this.layerBlocos)
      this.physics.add.collider(moeda.objeto, this.layerEscada)
      this.physics.add.collider(moeda.objeto, this.layerTrave1)
      this.physics.add.collider(moeda.objeto, this.layerTrave2)
      this.physics.add.collider(moeda.objeto, this.layerTrave3)
      this.physics.add.overlap(this.personagem, moeda.objeto, this.coletarmoeda, null, this)
    })
    this.sommoeda = this.sound.add('sommoeda')

    /*animação estrela*/
    this.anims.create({
      key: 'estrela-piscando',
      frames: this.anims.generateFrameNumbers('estrela', {
        start: 0,
        end: 4
      }),
      frameRate: 8,
      repeat: -1
    })
    /*estrelas*/
    this.estrelas = [
      {
        x: -400,
        y: -600
      },
      {
        x: 2450,
        y: 1550
      }

    ]

    this.estrelas.forEach((estrela) => {
      estrela.objeto = this.physics.add.sprite(estrela.x, estrela.y, 'estrela')
        .setImmovable()
      estrela.objeto.anims.play('estrela-piscando', true)
      this.physics.add.collider(estrela.objeto, this.layerBlocos)
      this.physics.add.collider(estrela.objeto, this.layerEscada)
      this.physics.add.collider(estrela.objeto, this.layerTrave1)
      this.physics.add.collider(estrela.objeto, this.layerTrave2)
      this.physics.add.collider(estrela.objeto, this.layerTrave3)
      this.physics.add.overlap(this.personagem, estrela.objeto, this.coletarestrela, null, this)
    })
    this.somestrela = this.sound.add('somestrela')

    /*animacoes*/

    /*animacoes dos personagens*/
    this.anims.create({
      key: 'skiler-direita',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 4,
        end: 7
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skiler-esquerda',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerstopdireita',
      frames: this.anims.generateFrameNumbers('skilerstopdireita', {
        start: 0,
        end: 5
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerstopesquerda',
      frames: this.anims.generateFrameNumbers('skilerstopesquerda', {
        start: 0,
        end: 5
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skilercarroesquerda',
      frames: this.anims.generateFrameNumbers('skilercarro', {
        start: 0,
        end: 0
      }),
      frameRate: 1,
      repeat: -1
    })
    this.anims.create({
      key: 'skilercarrodireita',
      frames: this.anims.generateFrameNumbers('skilercarro', {
        start: 1,
        end: 1
      }),
      frameRate: 1,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerpularesquerda',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 2,
        end: 2
      }),
      frameRate: 1,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerpulardireita',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 5,
        end: 5
      }),
      frameRate: 1,
      repeat: -1
    })

    /*animações dos inimigos*/
    this.anims.create({
      key: 'ini1walk',
      frames: this.anims.generateFrameNumbers('ini1walk', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
    this.ini1walk.setVelocity(-100, 0);

    // Animações automáticas //
    this.ini1walk.anims.play('ini1walk', true)


    /*animacoes para botoes*/
    this.anims.create({
      key: 'skiler-direita',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 0,
        end: 0
      }),
      frameRate: 1
    })
    this.anims.create({
      key: 'skiler-esquerda',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 0,
        end: 0
      }),
      frameRate: 1
    })
    this.anims.create({
      key: 'skiler-esquerda'
    })


    /*botoes*/
    this.direita = this.add.sprite(125, 430, 'direita', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('skiler-direita', true)
        this.personagem.setVelocityX(220)
      })
      .on('pointerup', () => {
        this.direita.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skilerstopdireita', true)
      })
      .setScrollFactor(0, 0)

    this.esquerda = this.add.sprite(-10, 430, 'esquerda', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('skiler-esquerda', true)
        this.personagem.setVelocityX(-220)
      })
      .on('pointerup', () => {
        this.esquerda.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skilerstopesquerda', true)
      })
      .setScrollFactor(0, 0)
    this.baixo = this.add.sprite(800, 450, 'baixo', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.baixo.setFrame(1)

        /* Verificar o lado do carrinho */
        let anim = this.personagem.anims.getName()
        const esquerda = new RegExp('.*esquerda.*') // qualquer expressão com a palavra 'esquerda'
        const direita = new RegExp('.*direita.*') // qualquer expressão com a palavra 'direita'
        if (esquerda.test(anim)) {
          this.personagem.setVelocityX(-300)
          this.personagem.anims.play('skilercarroesquerda', true)
        } else if (direita.test(anim)) {
          this.personagem.setVelocityX(300)
          this.personagem.anims.play('skilercarrodireita', true)
        }
      })
      .on('pointerup', () => {
        this.baixo.setFrame(0)
        let anim = this.personagem.anims.getName()
        const esquerda = new RegExp('.*esquerda.*') // qualquer expressão com a palavra 'esquerda'
        const direita = new RegExp('.*direita.*') // qualquer expressão com a palavra 'direita'
        if (esquerda.test(anim)) {
          this.personagem.setVelocityX(0)
          this.personagem.anims.play('skilerstopesquerda', true)
        } else if (direita.test(anim)) {
          this.personagem.setVelocityX(0)
          this.personagem.anims.play('skilerstopdireita', true)
        }
      })
      .setScrollFactor(0, 0)

    /*PULARRRRRRRRRRRRRRRRR -------- UIIIIIIIIIIIII*/
    this.cima = this.add.sprite(800, 300, 'cima', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.cima.setFrame(1);
        if (this.personagem.body.blocked.down) {
          let anim = this.personagem.anims.getName()
          const esquerda = new RegExp('.*esquerda.*') // qualquer expressão com a palavra 'esquerda'
          const direita = new RegExp('.*direita.*') // qualquer expressão com a palavra 'direita'
          if (esquerda.test(anim)) {
            this.personagem.setVelocityY(-450)
            this.personagem.anims.play('skilerpularesquerda', true)
          } else if (direita.test(anim)) {
            this.personagem.setVelocityY(-450)
            this.personagem.anims.play('skilerpulardireita', true)
          }
        }
      })
      .on('pointerup', () => {
        this.cima.setFrame(0)
        let anim = this.personagem.anims.getName()
        const esquerda = new RegExp('.*esquerda.*') // qualquer expressão com a palavra 'esquerda'
        const direita = new RegExp('.*direita.*') // qualquer expressão com a palavra 'direita'
        if (esquerda.test(anim)) {
          this.personagem.anims.play('skilerstopesquerda', true)
        } else if (direita.test(anim)) {
          this.personagem.anims.play('skilerstopdireita', true)
        }
      })

      .setScrollFactor(0, 0)


    /*camera*/
    this.personagem.setCollideWorldBounds(true)
    this.physics.world.setBounds(-700, -834, 3133, 2390, true, true, true, false)
    this.cameras.main.setBounds(-700, -832, 3133, 2390)
    this.cameras.main.startFollow(this.personagem).setZoom(0.8)

    /*tela cheia*/
    this.tela_cheia = this.add
      .sprite(850, 0, 'tela-cheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.tela_cheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.tela_cheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)

  
  }




  update() {
  }
  coletarmoeda(personagem, moeda) {
    moeda.disableBody(true, true)
    this.sommoeda.play()
  }

  coletarestrela(personagem, estrela) {
    estrela.disableBody(true, true)
    this.somestrela.play()
  }

}