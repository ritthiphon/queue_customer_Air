// // ฟังก์ชั่น เรียกลูกค้า คิวที่230 เชิญช่องบริการหมายเลข 3 ครับ
// function callMessage(customer,number) {
//     console.log("ลูกค้าคิวที่"+ customer +"เชิญที่ช่องบริการหมายเลข"+ number+" ครับ");

// }
// callMessage (230,3)
// callMessage (235,6)

// ฟังก์ชั่น ลูกค้าคิวจำนวน 1-4 คน จะได้คิว A ลูกค้า 5 คนขึ้นไปจะได้คิว B
function callMessage(customer,q) {
    console.log("ลูกค้าจำนวน"+ customer +"จะได้คิว"+q);
}
callMessage ("1-4","A")
callMessage ("5","B")