const { createCanvas, loadImage } = require('@napi-rs/canvas');
const fs = require('fs');

const texts = [
  "1-1",
  "1-2",
  "1-3",
  "1-4",
  "1-5",
  "1-6",
  "1-7",
  "1-8",
  "1-9",
  "1-10",
  "2-1",
  "2-2",
  "2-3",
  "2-4",
  "2-5",
  "2-6",
  "2-7",
  "2-8",
  "2-9",
  "2-10",
  "3-1",
  "3-2",
  "3-3",
  "3-4",
  "3-5",
  "3-6",
  "3-7",
  "3-8",
  "3-9",
  "3-10",
  "4-1",
  "4-2",
  "4-3",
  "4-4",
  "4-5",
  "4-6",
  "4-7",
  "4-8",
  "4-9",
  "4-10",
  "5-1",
  "5-2",
  "5-3",
  "5-4",
  "5-5",
  "5-6",
  "5-7",
  "5-8",
  "5-9",
  "5-10",
]

// 合成する画像とテキストを指定
const imageFilePath = 'base.png'; // 画像ファイルへのパス

// 画像の読み込みとCanvasの生成
const saveFileWithText = async(text) => {

  const image = await loadImage(imageFilePath)
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');

  // 画像をCanvasに描画
  ctx.drawImage(image, 0, 0, image.width, image.height);

  // テキストをCanvasに描画
  ctx.font = 'bold 180px Arial'; // テキストのフォントとサイズを指定
  ctx.fillStyle = 'white'; // テキストの色を指定
  ctx.fillText(text, 100, 250); // テキストを描画する位置を指定

  // 出力画像を保存
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./output/${text}.png`, buffer);
};

const main = async() => {
  for(const text of texts) {
    await saveFileWithText(text);
    console.log(text);
  }
}

main();