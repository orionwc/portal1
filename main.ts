namespace SpriteKind {
    export const Portal = SpriteKind.create()
}
function setlevel () {
    if (level == 1) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . 5 
            . . . . . . 2 2 2 2 
            3 . . . . 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 
            `)
        dog.verticalMovement()
    } else if (level == 2) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . 5 
            . . . . . . 2 2 2 2 
            . . . . 2 . . . 3 2 
            2 2 2 2 2 2 2 2 2 2 
            `)
    } else if (level == 3) {
        enable_portaling = true
        portal1.setImage(img`
            . 2 2 2 2 2 2 2 . 
            2 2 5 5 5 5 5 2 2 
            2 5 7 7 7 7 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 8 a 8 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 7 7 7 7 5 2 
            2 2 5 5 5 5 5 2 2 
            . 2 2 2 2 2 2 2 . 
            `)
        portal2.setImage(img`
            . 2 2 2 2 2 2 2 . 
            2 2 5 5 5 5 5 2 2 
            2 5 7 7 7 7 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 8 a 8 7 5 2 
            2 5 7 8 8 8 7 5 2 
            2 5 7 7 7 7 7 5 2 
            2 2 5 5 5 5 5 2 2 
            . 2 2 2 2 2 2 2 . 
            `)
        scene.setTileMap(img`
            5 . . . 8 . . . . . 
            2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . 9 . . . . . . . . 
            . 2 2 . . . 2 2 2 2 
            . . . . 2 . . . . 3 
            2 2 2 2 2 2 2 2 2 2 
            `)
        for (let index = 0; index < 1; index++) {
            portal1_updown = 0
            portal2_updown = -1
            portal1_leftright = 0
            portal2_leftright = 0
        }
    } else if (level == 4) {
        scene.setTileMap(img`
            . . . . 8 . . . . 5 . . 
            . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . 9 . . . . 
            . . . . . . . 2 2 . . . 
            . . . . . . . . . . 2 . 
            . 2 2 . . . 2 2 2 2 2 2 
            . . . . 2 . . . . 3 2 . 
            2 2 2 2 2 2 2 2 2 2 2 . 
            `)
        for (let index = 0; index < 1; index++) {
            portal1_updown = 0
            portal2_updown = -1
            portal1_leftright = 0
            portal2_leftright = 0
        }
    } else if (level == 5) {
        scene.setTileMap(img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . 2 . . . . . . . . . . 
            . . 2 . . . . . . . . 5 
            . . . 2 . . . . . 2 2 2 
            . . . . 2 . . . . . . . 
            . . . . . 2 . . . . . . 
            . . . . . . 2 . . . . . 
            9 . . . . . . 2 8 . . 3 
            2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        for (let index = 0; index < 1; index++) {
            portal1_updown = -1
            portal2_updown = -1
            portal1_leftright = 1
            portal2_leftright = 1
        }
    } else if (level == 6) {
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . 2 2 2 2 2 . . 2 
            2 . . . . . 2 . . 2 
            2 . . . . . 2 . . 2 
            2 8 3 . . 9 2 . 5 2 
            `)
        enable_firing_portals = true
        for (let index = 0; index < 1; index++) {
            portal1_updown = -1
            portal2_updown = -1
            portal1_leftright = 1
            portal2_leftright = 1
        }
    } else if (level == 7) {
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . 2 . . . . 2 
            . . . . . . . . 2 . . . 5 2 
            . . . . . 2 . . . . . . 2 2 
            . . . . . 2 . . . . . . . 2 
            . . . 2 2 2 . . . . . 2 2 2 
            . 9 . . . 2 2 2 2 2 2 2 8 2 
            . . 3 1 . a . . . . 7 . . 2 
            `)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(1, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
    } else if (level == 8) {
        for (let index = 0; index < 1; index++) {
            portal1_updown = 0
            portal2_updown = 0
            portal1_leftright = -1
            portal2_leftright = 0
        }
        scene.setTileMap(img`
            2222222222222222222222222222222222222222
            2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2
            222a22222222222222222222222222aaaaa22222
            2aaaaaaaaaaaaaaaaaaaaa7...1a2a22aaaaaaa2
            2aaaaaaaaaa2222aaaaaaa....1a2aaaa2aaaaa2
            2aaaaaaa2222..2222222222222a2aa222aaaaa2
            2aaaaaa222..................22aaaaaaaaa2
            2aaaaa2222...22222222222222.2222aaaaaaa2
            2aaaa2222...2........2......2aaa2aaaaaa2
            2aaa2222...2................2aaaa2aaaaa2
            2a2aaaa2..2.................2aaaaa2aaaa2
            2a222aa22...................2aaaaaa2aaa2
            2aaaa2aa22.................82aaaaaa22aa2
            2222aa2aa22..........2......2aaaaaaaaa22
            2aaa2aa2aa2222.......2......2aaaaaaa2222
            2a2aa2aa2aa2..2......2..29222aaaaaa2aaa2
            2aa2aaaaa2aa..73222....2....2aaaaa2aaaa2
            22a22222222222222222222.....2aaaa2aaaaa2
            22aaaaaaaaaa.1a5............2aaa2aaaaaa2
            2222aa222222.2222222222222222aa2aaaaaaa2
            22222a7......aaaaaaaaaaaaaaaaa2aaaaaaaa2
            2222222222222222222222222222222222222222
            `)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(1, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . f f f c d b 1 b d f f f f . 
            f c 1 1 1 c b f b f c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f f f f f f b f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `, false)
        scene.setTile(10, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, true)
        enable_firing_portals = false
    } else if (level == 9) {
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(1, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . f f f c d b 1 b d f f f f . 
            f c 1 1 1 c b f b f c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f f f f f f b f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `, false)
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 2 2 
            2 2 2 2 2 2 1 5 2 2 
            2 1 1 1 1 1 1 2 2 2 
            2 2 2 9 2 . . 2 . 2 
            2 3 1 1 1 . a 7 8 2 
            2 2 2 2 2 2 2 2 2 2 
            `)
        max = 8
        row = 2
        enable_firing_portals = true
        _3 = true
    } else if (level == 10) {
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
        scene.setTile(6, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, true)
        scene.setTile(1, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . f f f c d b 1 b d f f f f . 
            f c 1 1 1 c b f b f c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f f f f f f b f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `, false)
        scene.setTile(4, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        scene.setTile(5, img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, true)
        scene.setTile(11, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, true)
        scene.setTile(12, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(15, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        max = 8
        max2 = 20
        sc = 0
        sc2 = 5
        row = 2
        row2 = 17
        scene.setTileMap(img`
            2222222222..............7......2.......72..........f.2222222..........
            3.......................2......2........2..111.....2........2.........
            2.......22...222.....2...2.....2.....2.22..1c1....22.222222..2........
            2.......22..2...2...2.2...2....2....22.22222822222.2.2.....2..2.......
            244444442222.....2222..2....2..2...222.22...12aaa2.2.2.....22..22.....
            2.......................22a22222..2222922.2222aaa2.2.2.....2.2...2....
            2.......................7241.....aaaaaaa2.7aaaa212.2.2........2..2....
            2222222222222aa22222222222222222222aaab222222222.2.2.2..2.......22....
            26666666666666aaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaa72.....22..2222222....
            2622222222222222222222222222222222662222222222222222a22222.......2....
            26222222222222222222222222222222222.........2....2.2.2....2222...2....
            26f6666666666666666666666222222222225.......2....2.2.2.....2...2.2....
            22222222222222222222222262222222222.2.......2....2.2.2.....2..2..2....
            2.......222222222222222262222222222..2.222222....2.2.2.......2...2....
            2......................2.2........2..2.2....2....2..........2....2....
            2......................2.2........2..2.2....2....222a22..2222222.2....
            2......................2.2........2..2.2....2....2......2..2.....2....
            2......................2.2........2..2.2....2....2.....2...2....2.....
            2......................2.2........2..2.2....2....2...2.....2...2......
            2......................2.2........2..2.2....2....2.2..2....2..2.......
            2......................2.2........2..2.2....2....222a222..2..2........
            2......................2.2........2..2.2....2....2.......2..2.........
            2......................2.2........2..2.2....2....2......2..2..........
            2......................2.2........2..2.2....2....2.....2...2..........
            2......................2.2........2..2.2....2....2...2.....2..........
            2......................2.2........2..2.2....2....222a222..22..........
            2......................2.2........2..2.2....2....2.1.1...222..........
            2......................2.2........2.........2....271.1..2..2..........
            2........................2........2.........2....2..e..2...2..........
            22222222222222222222222222222222222...d.....2....22222222222..........
            `)
        portal1_leftright = 0
        portal2_leftright = 0
        portal1_updown = 0
        portal2_updown = -1
    } else {
        game.over(true)
    }
    scene.placeOnRandomTile(dog.sprite, 3)
    scene.placeOnRandomTile(portal1, 8)
    scene.placeOnRandomTile(portal2, 9)
    dog.maxJump = 1
    if (instructions_on) {
        instrunctions()
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hitting_wall) {
        scene.placeOnRandomTile(dog.sprite, 12)
    }
})
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    if (star == 0) {
        hitting_wall = true
        pause(5000)
        hitting_wall = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (enable_firing_portals) {
        portaling = true
        angleRadians = angle * (PI / 180)
        vel_x = portal_velocity * Math.cos(angleRadians)
        vel_y = 0 - portal_velocity * Math.sin(angleRadians)
        if (portal1_next) {
            portal1.setPosition(dog.sprite.x, dog.sprite.y)
            portal1.setVelocity(vel_x, vel_y)
        } else {
            portal2.setPosition(dog.sprite.x, dog.sprite.y)
            portal2.setVelocity(vel_x, vel_y)
        }
        portal1_next = !(portal1_next)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    if (enable_portaling) {
        if (portaling) {
        	
        } else {
            portaling = true
            vel_x = sprite.vx
            vel_y = sprite.vy
            if (otherSprite == portal2) {
                if (portal1_leftright != 0) {
                    vel_x = portal1_leftright * Math.abs(vel_x)
                }
                if (portal1_updown != 0) {
                    vel_y = portal1_updown * Math.abs(vel_y)
                }
                sprite.setPosition(portal1.x, portal1.y)
            } else {
                if (portal2_leftright != 0) {
                    vel_x = portal2_leftright * Math.abs(vel_x)
                }
                if (portal2_updown != 0) {
                    vel_y = portal2_updown * Math.abs(vel_y)
                }
                sprite.setPosition(portal2.x, portal2.y)
            }
            sprite.setVelocity(vel_x, vel_y)
        }
    }
})
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    scene.setTile(1, img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, true)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
})
scene.onHitTile(SpriteKind.Portal, 15, function (sprite) {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (enable_firing_portals) {
        angle += 45
        if (angle >= 360) {
            angle += -360
        }
        info.setScore(angle)
    }
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    if (level == 10) {
        if (star == 1) {
            level += 1
            setlevel()
        } else {
            tiles.placeOnTile(portal1, tiles.getTileLocation(33, 28))
            tiles.placeOnTile(portal2, tiles.getTileLocation(33, 28))
            scene.setTile(5, sprites.dungeon.chestOpen, false)
            scene.setTile(6, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, false)
            enable_firing_portals = true
            game.splash("you can fire portals")
            star += 1
        }
    } else {
        level += 1
        setlevel()
    }
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    not = false
    scene.setTile(4, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(10, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, true)
})
scene.onHitTile(SpriteKind.Portal, 5, function (sprite) {
    sprite.setVelocity(0, 0)
})
function instrunctions () {
    if (level == 1) {
        game.splash("Use the up arrow to jump")
    } else if (level == 3) {
        game.splash("Go into the portal")
    } else if (level == 5) {
        game.splash("Portals carry your speed")
    } else if (level == 6) {
        game.splash("Use the down arrow to set the angle and the A button to shoot")
    }
}
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    scene.setTile(15, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    if (star == 0) {
        scene.placeOnRandomTile(portal2, 13)
        scene.placeOnRandomTile(portal1, 14)
        dog.sprite.x += 32
        scene.setTile(15, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
    } else {
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 5 5 5 5 5 . . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 . . 5 5 5 . . . . . 
            . . 5 5 . . . . . 5 5 5 . . . . 
            . 5 5 . . . . . . . 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
    }
})
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    scene.setTile(1, img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, false)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(10, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, true)
    if (level != 10) {
        scene.setTile(10, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, true)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
    } else {
        if (not) {
            scene.setTile(10, img`
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
                1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
                1 6 6 1 6 6 1 6 6 1 6 6 1 6 6 1 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                `, true)
        }
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 . . 5 . . . . . . . 5 . 5 . 
            5 . . . . 5 . . . . . . 5 . 5 . 
            5 . . . . . 5 5 5 5 5 5 5 5 5 . 
            5 . . . . 5 . . . . . . . . . . 
            . 5 . . 5 . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
    }
})
scene.onHitTile(SpriteKind.Portal, 2, function (sprite) {
    if (sprite == portal1) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            portal1_leftright = 1
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            portal1_leftright = -1
        } else {
            portal1_leftright = 0
        }
        if (sprite.isHittingTile(CollisionDirection.Top)) {
            portal1_updown = 1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            portal1_updown = -1
        } else {
            portal1_updown = 0
        }
    } else {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            portal2_leftright = 1
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            portal2_leftright = -1
        } else {
            portal2_leftright = 0
        }
        if (sprite.isHittingTile(CollisionDirection.Top)) {
            portal2_updown = 1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            portal2_updown = -1
        } else {
            portal2_updown = 0
        }
    }
    sprite.setVelocity(0, 0)
})
let col2 = 0
let col = 0
let not = false
let vel_y = 0
let vel_x = 0
let angle = 0
let angleRadians = 0
let star = 0
let hitting_wall = false
let row2 = 0
let sc2 = 0
let sc = 0
let max2 = 0
let row = 0
let max = 0
let portal2_leftright = 0
let portal1_leftright = 0
let portal2_updown = 0
let portal1_updown = 0
let level = 0
let enable_portaling = false
let portal_velocity = 0
let portaling = false
let portal1_next = false
let portal2: Sprite = null
let portal1: Sprite = null
let dog: Corgio = null
let enable_firing_portals = false
let PI = 0
let instructions_on = false
let _3 = false
if (game.ask("Intruduction?")) {
    instructions_on = game.ask("Do you want instructions?")
    PI = 3.1415926535
    enable_firing_portals = false
    scene.setTile(2, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, true)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 . . 5 5 5 . . . . . 
        . . 5 5 . . . . . 5 5 5 . . . . 
        . 5 5 . . . . . . . 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    dog = corgio.create(SpriteKind.Player)
    dog.horizontalMovement()
    dog.maxJump = 1
    scene.setTileMap(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . 5 
        2 2 2 2 2 2 2 2 2 2 
        `)
    if (instructions_on) {
        game.splash("Use the left and right buttons to move to the star")
    }
    portal1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Portal)
    portal2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Portal)
    portal1_next = true
    portaling = false
    portal_velocity = 100
    scene.cameraFollowSprite(dog.sprite)
} else {
    PI = 3.1415926535
    scene.setTile(2, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, true)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 . . 5 5 5 . . . . . 
        . . 5 5 . . . . . 5 5 5 . . . . 
        . 5 5 . . . . . . . 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    enable_firing_portals = false
    dog = corgio.create(SpriteKind.Player)
    dog.horizontalMovement()
    dog.maxJump = 1
    portal1 = sprites.create(img`
        . 2 2 2 2 2 2 2 . 
        2 2 5 5 5 5 5 2 2 
        2 5 7 7 7 7 7 5 2 
        2 5 7 8 8 8 7 5 2 
        2 5 7 8 a 8 7 5 2 
        2 5 7 8 8 8 7 5 2 
        2 5 7 7 7 7 7 5 2 
        2 2 5 5 5 5 5 2 2 
        . 2 2 2 2 2 2 2 . 
        `, SpriteKind.Portal)
    portal2 = sprites.create(img`
        . 2 2 2 2 2 2 2 . 
        2 2 5 5 5 5 5 2 2 
        2 5 7 7 7 7 7 5 2 
        2 5 7 8 8 8 7 5 2 
        2 5 7 8 a 8 7 5 2 
        2 5 7 8 8 8 7 5 2 
        2 5 7 7 7 7 7 5 2 
        2 2 5 5 5 5 5 2 2 
        . 2 2 2 2 2 2 2 . 
        `, SpriteKind.Portal)
    portal1_next = true
    portaling = false
    portal_velocity = 100
    scene.cameraFollowSprite(dog.sprite)
    dog.verticalMovement()
    enable_portaling = true
    _3 = true
    level = 10
    setlevel()
}
game.onUpdate(function () {
    if (portaling) {
        if (!(dog.sprite.overlapsWith(portal1)) && !(dog.sprite.overlapsWith(portal2))) {
            portaling = false
        }
    }
})
game.onUpdate(function () {
    if (_3) {
        scene.setTileAt(scene.getTile(col, row), 2)
        scene.setTileAt(scene.getTile(col - 1, row), 0)
        scene.setTileAt(scene.getTile(col + 1, row), 0)
    }
})
game.onUpdate(function () {
    if (_3) {
        scene.setTileAt(scene.getTile(col2, row2), 2)
        scene.setTileAt(scene.getTile(col2 - 1, row2), 0)
        scene.setTileAt(scene.getTile(col2 + 1, row2), 0)
    }
})
game.onUpdateInterval(500 * max, function () {
    col = sc
})
game.onUpdateInterval(500 * max2, function () {
    col2 = sc2
})
game.onUpdateInterval(500, function () {
    col += 1
})
game.onUpdateInterval(500, function () {
    col2 += 1
})
