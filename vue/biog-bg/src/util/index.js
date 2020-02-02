/**
 * 根据给的事件戳对比现在的时间，获得要显示的样式（是多少秒，分，小时以前，还是某一个准确的日期）
 * @param {*} timestamp 一个时间戳
 */
export function myGetTime(timestamp){
    const oldDate = new Date(timestamp);
    const newDateTimestamp = new Date().getTime();
    const dif = newDateTimestamp - timestamp;
    if ( dif < 60000 ){
        return `${ Math.floor(dif / 1000) }秒前`;
    } else if( dif < 3600000 ){
        return `${ Math.floor(dif / 60000) }分钟前`;
    } else if ( dif < 86400000 ){
        return `${ Math.floor(dif / 3600000) }小时${ Math.floor(dif % 3600000 / 60000) }分钟前`;
    } else{
        const m = (oldDate.getUTCMonth() + 1) < 10 ? '0' + (oldDate.getUTCMonth() + 1) : (oldDate.getUTCMonth() + 1);
        const d = oldDate.getUTCDate() < 10 ? '0' + oldDate.getUTCDate() : oldDate.getUTCDate();
        return `${oldDate.getUTCFullYear()}-${m}-${d}`;
    }
}

/**
 * 返回一个随机的颜色值
 */
export function getRandomColor(){
    const colorArr = [
        "#FFB6C1",
        "#FFC0CB",
        "#DC143C",
        "#FFF0F5",
        "#DB7093",
        "#FF69B4",
        "#FF1493",
        "#C71585",
        "#DA70D6",
        "#D8BFD8",
        "#DDA0DD",
        "#EE82EE",
        "#FF00FF",
        "#FF00FF",
        "#8B008B",
        "#800080",
        "#BA55D3",
        "#9400D3",
        "#9932CC",
        "#4B0082",
        "#8A2BE2",
        "#9370DB",
        "#7B68EE",
        "#6A5ACD",
        "#483D8B",
        "#E6E6FA",
        "#F8F8FF",
        "#0000FF",
        "#0000CD",
        "#191970",
        "#00008B",
        "#000080",
        "#4169E1",
        "#6495ED",
        "#B0C4DE",
        "#778899",
        "#708090",
        "#1E90FF",
        "#F0F8FF",
        "#4682B4",
        "#87CEFA",
        "#87CEEB",
        "#00BFFF",
        "#ADD8E6",
        "#B0E0E6",
        "#5F9EA0",
        "#F0FFFF",
        "#E1FFFF",
        "#AFEEEE",
        "#00FFFF",
        "#D4F2E7",
        "#00CED1",
        "#2F4F4F",
        "#008B8B",
        "#008080",
        "#48D1CC",
        "#20B2AA",
        "#40E0D0",
        "#7FFFAA",
        "#00FA9A",
        "#00FF7F",
        "#F5FFFA",
        "#3CB371",
        "#2E8B57",
        "#F0FFF0",
        "#90EE90",
        "#98FB98",
        "#8FBC8F",
        "#32CD32",
        "#00FF00",
        "#228B22",
        "#008000",
        "#006400",
        "#7FFF00",
        "#7CFC00",
        "#ADFF2F",
        "#556B2F",
        "#F5F5DC",
        "#FAFAD2",
        "#FFFFF0",
        "#FFFFE0",
        "#FFFF00",
        "#808000",
        "#BDB76B",
        "#FFFACD",
        "#EEE8AA",
        "#F0E68C",
        "#FFD700",
        "#FFF8DC",
        "#DAA520",
        "#FFFAF0",
        "#FDF5E6",
        "#F5DEB3",
        "#FFE4B5",
        "#FFA500",
        "#FFEFD5",
        "#FFEBCD",
        "#FFDEAD",
        "#FAEBD7",
        "#D2B48C",
        "#DEB887",
        "#FFE4C4",
        "#FF8C00",
        "#FAF0E6",
        "#CD853F",
        "#FFDAB9",
        "#F4A460",
        "#D2691E",
        "#8B4513",
        "#FFF5EE",
        "#A0522D",
        "#FFA07A",
        "#FF7F50",
        "#FF4500",
        "#E9967A",
        "#FF6347",
        "#FFE4E1",
        "#FA8072",
        "#FFFAFA",
        "#F08080",
        "#BC8F8F",
        "#CD5C5C",
        "#FF0000",
        "#A52A2A",
        "#B22222",
        "#8B0000",
        "#800000",
        "#FFFFFF",
        "#F5F5F5",
        "#DCDCDC",
        "#D3D3D3",
        "#C0C0C0",
        "#A9A9A9",
        "#808080",
        "#696969",
        "#000000"
    ];
    const index = myRandom(0, colorArr.length);
    return colorArr[index];
}


export function myRandom(min, max){
    return Math.floor( Math.random() * ( max - min ) + min );
}
