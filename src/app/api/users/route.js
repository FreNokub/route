// นำเข้า NextResponse จาก next/server เพื่อใช้จัดการและส่งค่า HTTP Response กลับไปยังไคลเอนต์
import { NextResponse } from "next/server";

//================================================================================
// GET Function (ดึงข้อมูลผู้ใช้)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่รองรับ Request แบบ GET ที่เข้ามายัง Endpoint นี้
 */
export async function GET() {
  try {
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ (Server Console) เพื่อใช้ในการ Monitor หรือ Debug
    console.log({ success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    // ดักจับ Error ที่อาจเกิดขึ้นระหว่างการทำงานใน try block
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
// POST Function (สร้างข้อมูลผู้ใช้ใหม่)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: POST
 * ทำหน้าที่รองรับ Request แบบ POST ที่เข้ามายัง Endpoint นี้
 */
export async function POST(request) {
  try {
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ (Server Console) เพื่อใช้ในการ Monitor หรือ Debug
    console.log({ success: true, message: "บันทึกข้อมูลผู้ใช้สำเร็จ", status: 201 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "บันทึกข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 201 } // Status 201 Created สำหรับการสร้างข้อมูลใหม่สำเร็จ
    );
  } catch (error) {
    // ดักจับ Error ที่อาจเกิดขึ้นระหว่างการทำงานใน try block
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

