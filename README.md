# S-ONE NextJS Test Project

# โปรเจคทดสอบ S-ONE ด้วย NextJS

โปรเจคนี้เกี่ยวกับการพัฒนาส่วนหน้า (Frontend) ของเว็บไซต์ร้านรถยนต์แบบ Responsive ตามดีไซน์ที่กำหนดไว้

## ความต้องการของโปรเจค

- แปลงโครงสร้างเดิมที่ใช้ HTML Table ให้เป็นดีไซน์ที่รองรับการแสดงผลทุกขนาดหน้าจอ (Responsive)
- พัฒนาด้วยเทคโนโลยีเว็บสมัยใหม่

## เทคโนโลยีที่ใช้

- **Frontend**: Next.js 14
- **การจัดการสไตล์**: Tailwind CSS
- **การจัดการสถานะ**: React State
- **ฟอนต์**: Next/font with Geist
- **สภาพแวดล้อมการพัฒนา**: Node.js, Bun

## การติดตั้ง

1. โคลนโปรเจค:
    ```bash
    git clone [repository-url]
    cd s-one-nextjs
    ```

2. ติดตั้งแพ็คเกจที่จำเป็น:
    ```bash
    npm install
    # หรือ
    yarn install
    # หรือ
    pnpm install
    # หรือ
    bun install
    ```

3. เริ่มต้นเซิร์ฟเวอร์สำหรับพัฒนา:
    ```bash
    npm run dev
    # หรือ
    yarn dev
    # หรือ
    pnpm dev
    # หรือ
    bun dev
    ```

4. เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์เพื่อดูผลลัพธ์

## เริ่มต้นการพัฒนา

คุณสามารถเริ่มแก้ไขหน้าเว็บโดยการแก้ไขไฟล์ `app/page.tsx` โดยหน้าเว็บจะอัปเดตอัตโนมัติเมื่อคุณแก้ไขไฟล์

โปรเจคนี้ใช้ [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) เพื่อโหลดและปรับแต่งฟอนต์ [Geist](https://vercel.com/font) ซึ่งเป็นฟอนต์ตระกูลใหม่จาก Vercel

## เรียนรู้เพิ่มเติม

เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับ Next.js ลองดูแหล่งข้อมูลต่อไปนี้:

- [เอกสาร Next.js](https://nextjs.org/docs) - เรียนรู้เกี่ยวกับฟีเจอร์และ API ของ Next.js
- [เรียนรู้ Next.js](https://nextjs.org/learn) - บทเรียน Next.js แบบโต้ตอบ

คุณสามารถตรวจสอบ [GitHub repository ของ Next.js](https://github.com/vercel/next.js) - ข้อเสนอแนะและการมีส่วนร่วมของคุณเป็นที่ยินดี!
