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
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
            . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
            . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
            . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
            . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
            . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
            . 2 4 5 7 9 8 a 1 a 8 9 7 5 4 2 
            . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
            . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
            . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
            . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
            . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
            . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        portal2.setImage(img`
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
            . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
            . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
            . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
            . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
            . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
            . 2 4 5 7 9 8 a 1 a 8 9 7 5 4 2 
            . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
            . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
            . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
            . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
            . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
            . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
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
    } else if (level == 8) {
        // new level
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `)
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
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
    level += 1
    setlevel()
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
        game.splash("Use the down arrow to set the angle and the A button to shoot", "(try jumping into the light blue)")
    }
}
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
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
let vel_y = 0
let vel_x = 0
let angle = 0
let angleRadians = 0
let portal2_leftright = 0
let portal1_leftright = 0
let portal2_updown = 0
let portal1_updown = 0
let enable_portaling = false
let level = 0
let portal_velocity = 0
let portaling = false
let portal1_next = false
let portal2: Sprite = null
let portal1: Sprite = null
let dog: Corgio = null
let enable_firing_portals = false
let PI = 0
let instructions_on = false
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
    PI = 3.1415926535
    level = 8
    enable_portaling = true
    enable_firing_portals = true
    portal1.setImage(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
        . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
        . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
        . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
        . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
        . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
        . 2 4 5 7 9 8 a 1 a 8 9 7 5 4 2 
        . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
        . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
        . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
        . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
        . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
        . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    portal2.setImage(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
        . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
        . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
        . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
        . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
        . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
        . 2 4 5 7 9 8 a 1 a 8 9 7 5 4 2 
        . 2 4 5 7 9 8 a a a 8 9 7 5 4 2 
        . 2 4 5 7 9 8 8 8 8 8 9 7 5 4 2 
        . 2 4 5 7 7 9 9 9 9 9 7 7 5 4 2 
        . . 2 4 5 7 7 7 7 7 7 7 5 4 2 . 
        . . 2 2 4 5 5 5 5 5 5 5 4 2 2 . 
        . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    portal1_next = true
    dog.verticalMovement()
    portaling = false
    scene.cameraFollowSprite(dog.sprite)
    setlevel()
}
game.onUpdate(function () {
    if (portaling) {
        if (!(dog.sprite.overlapsWith(portal1)) && !(dog.sprite.overlapsWith(portal2))) {
            portaling = false
        }
    }
})
