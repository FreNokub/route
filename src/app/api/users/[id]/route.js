// นำเข้า NextResponse จาก next/server เพื่อใช้จัดการและส่งค่า HTTP Response กลับไปยังไคลเอนต์
import { NextResponse } from "next/server";

//================================================================================
// GET Function (ดึงข้อมูลผู้ใช้รายบุคคลตาม ID)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่รองรับ Request แบบ GET เพื่อดึงข้อมูลของผู้ใช้ตาม ID
 */
export async function GET(request, { params }) {
  try {
    const { id } = await params; // ดึงค่า id จาก params ของ URL

    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ (Server Console) เพื่อใช้ในการ Monitor หรือ Debug
    console.log({ success: true, message: `ดึงข้อมูลผู้ใช้ ID: ${id} สำเร็จ`, status: 200 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
        data: { id } // ส่งข้อมูลผู้ใช้ที่ดึงมา
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

//================================================================================
// PUT Function (อัปเดตข้อมูลผู้ใช้)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: PUT
 * ทำหน้าที่รองรับ Request แบบ PUT เพื่อแก้ไขข้อมูลของผู้ใช้ตาม ID
 */
export async function PUT(request, { params }) {
  try {
    const { id } = await params; // ดึงค่า id จาก params ของ URL
    
    // 🔍 ป้องกันเซิร์ฟเวอร์ล่ม: ดึง Text ดิบออกมาก่อนเพื่อเช็คว่ามีข้อมูลส่งมาใน Body ไหม
    const text = await request.text();
    if (!text || text.trim() === "") {
      return NextResponse.json(
        { 
          success: false, 
          message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูล", 
          error: "กรุณากรอกข้อมูลจำลองลงในแท็บ Body (รูปแบบ JSON) ก่อนกด Send" 
        },
        { status: 400 } // ส่งเป็น 400 Bad Request แทน 500 เพื่อบอกว่า Client ลืมส่งข้อมูล
      );
    }

    const body = JSON.parse(text); // แปลงข้อความเป็น JSON Object อย่างปลอดภัย

    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์
    console.log({ success: true, message: `อัปเดตข้อมูลผู้ใช้ ID: ${id} สำเร็จ`, data: body, status: 200 });

    return NextResponse.json(
      {
        success: true,
        message: "อัปเดตข้อมูลผู้ใช้สำเร็จ",
        data: { id, ...body } // ส่งข้อมูลที่อัปเดตแล้วกลับไป
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูล",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

//================================================================================
// DELETE Function (ลบข้อมูลผู้ใช้)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: DELETE
 * ทำหน้าที่รองรับ Request แบบ DELETE เพื่อลบข้อมูลของผู้ใช้ตาม ID
 */
export async function DELETE(request, { params }) {
  try {
    const { id } = await params; // ดึงค่า id จาก params ของ URL

    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์
    console.log({ success: true, message: `ลบข้อมูลผู้ใช้ ID: ${id} สำเร็จ`, status: 200 });

    return NextResponse.json(
      {
        success: true,
        message: "ลบข้อมูลผู้ใช้สำเร็จเเล้ว",
        data: { id } // ส่ง ID ของผู้ใช้ที่ถูกลบกลับไปยืนยัน
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดในการลบข้อมูลlol",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}