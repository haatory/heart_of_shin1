import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const PORT = 3000;

// Helper to convert category key to Japanese label
function getCategoryLabel(category: string): string {
  switch (category) {
    case 'home':
      return 'ほうらぁさ家について（住宅型有料老人ホーム）';
    case 'dayservice':
      return 'きゅっきゅについて（デイサービス）';
    case 'caremanager':
      return 'まごころ相談支援センターについて（居宅介護支援）';
    case 'general':
      return 'その他（法人全般・取材など）';
    default:
      return category;
  }
}

// Helper to convert job key to Japanese label
function getJobLabel(job: string): string {
  switch (job) {
    case 'caregiver':
      return '介護職員（正社員・パート）';
    case 'nurse':
      return '看護職員（正社員・パート）';
    case 'caremanager':
      return 'ケアマネジャー（正社員）';
    case 'kitchen':
      return '調理員・厨房スタッフ（パート）';
    case 'parttime':
      return 'デイサービス生活相談員・介護職員';
    default:
      return job;
  }
}

async function sendEmailNotification(subject: string, textContent: string) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user || "no-reply@haatory.com";
  const to = process.env.NOTIFICATION_EMAIL || "dayservice.haatory@gmail.com";

  if (!host || !user || !pass) {
    console.warn("⚠️ SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) are not fully configured.");
    console.warn("Email notification skipped. Content was:");
    console.log(`[Subject] ${subject}`);
    console.log(`[To] ${to}`);
    console.log(textContent);
    return {
      success: false,
      reason: "SMTP credentials not configured in the workspace secrets or .env file."
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"まごころHP通知" <${from}>`,
      to,
      subject,
      text: textContent,
    });

    console.log("✅ Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error("❌ Failed to send email via SMTP:", error);
    return { success: false, error: error.message || String(error) };
  }
}

async function startServer() {
  const app = express();

  app.use(express.json());

  // API healthcheck
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // POST endpoint for contact inquiries
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, category, message } = req.body;

      if (!name || !email || !phone || !message) {
        res.status(400).json({ error: "Required fields are missing." });
        return;
      }

      const categoryLabel = getCategoryLabel(category);
      const subject = `【まごころHP】新規お問い合わせ：${name}様`;
      const textContent = `まごころホームページより、新しいお問い合わせが届きました。

■ お名前
${name} 様

■ お問い合わせカテゴリ
${categoryLabel}

■ メールアドレス
${email}

■ 電話番号
${phone}

■ お問い合わせ内容
${message}

--------------------------------------------------
※このメールは「まごころ」ホームページのお問い合わせフォームから自動送信されています。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })} (日本標準時)
`;

      const emailResult = await sendEmailNotification(subject, textContent);
      res.json({
        success: true,
        emailResult
      });
    } catch (err: any) {
      console.error("Error handling contact route:", err);
      res.status(500).json({ error: "Internal server error", details: err.message });
    }
  });

  // POST endpoint for recruitment applications
  app.post("/api/recruitment", async (req, res) => {
    try {
      const { name, furigana, email, phone, desiredJob, qualifications, message } = req.body;

      if (!name || !email || !phone) {
        res.status(400).json({ error: "Required fields are missing." });
        return;
      }

      const jobLabel = getJobLabel(desiredJob);
      const subject = `【まごころHP】採用応募：${name}様 (${jobLabel})`;
      const textContent = `まごころホームページより、新しい採用応募が届きました。

■ お名前
${name}（${furigana || 'フリガナなし'}）様

■ 希望職種
${jobLabel}

■ メールアドレス
${email}

■ 電話番号
${phone}

■ 保有資格
${qualifications || 'なし'}

■ メッセージ・自己PR
${message || 'なし'}

--------------------------------------------------
※このメールは「まごころ」ホームページの採用応募フォームから自動送信されています。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })} (日本標準時)
`;

      const emailResult = await sendEmailNotification(subject, textContent);
      res.json({
        success: true,
        emailResult
      });
    } catch (err: any) {
      console.error("Error handling recruitment route:", err);
      res.status(500).json({ error: "Internal server error", details: err.message });
    }
  });

  // Vite middleware in dev or static serve in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
