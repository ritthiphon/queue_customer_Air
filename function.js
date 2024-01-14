// สร้างฟังก์ชั่น ต้อนรับลูกค้า 
function sayWelcome(nickname) {
    console.log("Welcom ครับ"+nickname);
}
sayWelcome ("เจ๋ง")
sayWelcome ('แก้ว')
sayWelcome ('เอ็ม') 

// สร้างฟังก์ชั่น เรียกชื่อลูกค้า ให้มารับออเดอร์
function orderRedyMessage(nickname,menu) {
    //menu 
    console.log(menu + "ของคุณ"+nickname+"ได้แล้วครับ");

}
// ออกแบบตัวแปร และค่าที่เป็นไปได้

orderRedyMessage ("เจ๋ง","ลาเต้")
orderRedyMessage ("แก้ว","โกโก้")
orderRedyMessage ("เอ็ม","ชาไทย")
