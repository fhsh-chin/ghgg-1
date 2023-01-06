// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級":
            case "層級2":return tiles.createTilemap(hex`1000100009090909090909090909090909090909010000000009000000000000000008090909090900090009090909090900090909020000000000090000000009000909090909090909090900090900090009090900000000000000000909000000090909000909090909090909090909000909090000000000000000040908000009090900090900090909090909090900090909000009000900000000000009030909090900090809000908090809090909090909000909090000090009000000080909090500000000000000000000090909090000090909000909090909000000090900000809090000000008090609000009090909090909090909090909090907`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 2 . 2 2 
2 . . . . . . 2 . . . . 2 . 2 2 
2 2 2 2 2 2 2 2 . 2 2 . 2 . 2 2 
2 . . . . . . . . 2 2 . . . 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 . . . . . . . . . 2 . . . 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 . 2 2 
2 . . 2 . 2 . . . . . . 2 . 2 2 
2 2 . 2 . 2 . 2 . 2 . 2 2 2 2 2 
2 2 . 2 2 2 . . 2 . 2 . . . . 2 
2 2 . . . . . . . . . . . 2 2 2 
2 . . 2 2 2 . 2 2 2 2 2 . . . 2 
2 . . . 2 2 . . . . . 2 . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,sprites.dungeon.floorDark1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "我的貼圖0":
            case "tile2":return tile2;
            case "我的貼圖1":
            case "tile3":return tile3;
            case "我的貼圖2":
            case "tile4":return tile4;
            case "我的貼圖3":
            case "tile5":return tile5;
            case "我的貼圖4":
            case "tile6":return tile6;
            case "我的貼圖5":
            case "tile7":return tile7;
            case "我的貼圖6":
            case "tile8":return tile8;
            case "我的貼圖":
            case "tile1":return tile1;
            case "我的貼圖7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
