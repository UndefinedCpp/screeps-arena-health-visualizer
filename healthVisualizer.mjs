/*
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.

 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <https://unlicense.org>
 */

import { Visual } from "game/visual";

const VISUAL_LAYER = 6;

/**
 * 在creep头上显示一个血条，长度为一格，支持不同根据血量切换颜色
 * @param {import("game/prototypes").Creep} obj 
 * @author UndefinedCpp
 * @version 1.0
 */
export function showHealthBar(obj) {
    const visbase = new Visual(VISUAL_LAYER, false);
    // 打底色
    visbase.line({ x: obj.x - 0.5, y: obj.y - 0.5 }, { x: obj.x + 0.5, y: obj.y - 0.5 }, { color: '#727272', opacity: 0.4 });
    // 算比例
    const ratio = obj.hits / obj.hitsMax;
    // 撸颜色
    const colorScheme = {
        low: '#ff0000',
        mid: '#ffff00',
        high: '#00ff00'
    };
    const colorCode = ratio >= 0.8 ? colorScheme.high : ratio >= 0.3 ? colorScheme.mid : colorScheme.low;
    // 打颜色
    const vis = new Visual(VISUAL_LAYER + 1, false);
    vis.line({ x: obj.x - 0.5, y: obj.y - 0.5 }, { x: obj.x - 0.5 + ratio, y: obj.y - 0.5 }, { color: colorCode, opacity: 0.8 });
}