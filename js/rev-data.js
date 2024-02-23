
let revData = {
    player: 0, // 現在の手番プレイヤー
    isEnd: false, // 終了フラグ
    scores: [2, 2], // 獲得石数
    types: ['MAN', 'COM'],// プレイヤー種類
    board: [// 盤面
        [8, 8, 8, 8, 8, 8, 8, 8],
        [8, 8, 8, 8, 8, 8, 8, 8],
        [8, 8, 8, 8, 8, 8, 8, 8],
        [8, 8, 8, 1, 0, 8, 8, 8],
        [8, 8, 8, 0, 1, 8, 8, 8],
        [8, 8, 8, 8, 8, 8, 8, 8],
        [8, 8, 8, 8, 8, 8, 8, 8],
        [8, 8, 8, 8, 8, 8, 8, 8],
    ],
    putToken: { x: 0, y: 0 }, //ログ：石置き位置
    activeSquares: [], // 配置可能マス配列
    revToken: [],
}


